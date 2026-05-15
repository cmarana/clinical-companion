-- Asaas integration: add provider columns and webhook idempotency table
alter table public.pix_purchases
  add column if not exists provider text default 'asaas',
  add column if not exists asaas_customer_id text,
  add column if not exists asaas_subscription_id text,
  add column if not exists asaas_payment_id text,
  add column if not exists asaas_checkout_id text;

create index if not exists idx_pix_purchases_provider on public.pix_purchases(provider);
create index if not exists idx_pix_purchases_asaas_payment_id on public.pix_purchases(asaas_payment_id);
create index if not exists idx_pix_purchases_asaas_subscription_id on public.pix_purchases(asaas_subscription_id);

create table if not exists public.payment_webhook_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  event_id text not null,
  event_type text not null,
  resource_id text,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  unique(provider, event_id)
);

alter table public.payment_webhook_events enable row level security;

drop policy if exists "No public access to payment_webhook_events" on public.payment_webhook_events;
create policy "No public access to payment_webhook_events"
on public.payment_webhook_events
for all
using (false)
with check (false);