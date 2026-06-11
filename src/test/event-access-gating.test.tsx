import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PremiumGate from "@/components/PremiumGate";

vi.mock("@/contexts/AuthContext", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "@/contexts/AuthContext";

const baseSub = {
  subscribed: false,
  productId: null,
  subscriptionEnd: null,
  isTrial: false,
  trialDaysLeft: 0,
};

function renderGate() {
  return render(
    <MemoryRouter>
      <PremiumGate feature="Teste">
        <div data-testid="premium-content">Conteúdo Pro</div>
      </PremiumGate>
    </MemoryRouter>
  );
}

describe("PremiumGate respeitando event_access_until (cortesia Web Summit)", () => {
  it("libera conteúdo quando subscription.subscribed=true (event_access ativo)", () => {
    const future = new Date(Date.now() + 7 * 86400000).toISOString();
    (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      subscription: { ...baseSub, subscribed: true, productId: "event_websummit", subscriptionEnd: future },
    });
    const { container } = renderGate();
    expect(container.querySelector('[data-testid="premium-content"]')).not.toBeNull();
  });

  it("bloqueia conteúdo quando subscription.subscribed=false (sem cortesia / expirou)", () => {
    (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      subscription: baseSub,
    });
    const { container } = renderGate();
    expect(container.querySelector('[data-testid="premium-content"]')).toBeNull();
    expect(container.textContent ?? "").toMatch(/Premium/i);
  });

  it("simula edge function: event_access_until > now → subscribed=true; passado → false", () => {
    // Reproduz a lógica de check-subscription/index.ts para event_access.
    const decide = (eventAccessUntil: string | null) => {
      if (eventAccessUntil && new Date(eventAccessUntil) > new Date()) {
        return { subscribed: true, provider: "event_access" };
      }
      return { subscribed: false };
    };
    expect(decide(new Date(Date.now() + 86400000).toISOString()).subscribed).toBe(true);
    expect(decide(new Date(Date.now() - 86400000).toISOString()).subscribed).toBe(false);
    expect(decide(null).subscribed).toBe(false);
  });
});
