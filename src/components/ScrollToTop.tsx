import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-20 right-4 z-50 w-10 h-10 rounded-full",
        "bg-primary text-primary-foreground shadow-lg",
        "flex items-center justify-center",
        "hover:bg-primary/90 active:scale-95 transition-all",
        "animate-in fade-in slide-in-from-bottom-4 duration-300"
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={18} />
    </button>
  );
}
