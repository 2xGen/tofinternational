create table if not exists public.interest_registrations (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  country text not null,
  role text not null,
  consent boolean not null default false,
  constraint interest_registrations_consent_check check (consent)
);

create index if not exists interest_registrations_created_at_idx
  on public.interest_registrations (created_at desc);

alter table public.interest_registrations enable row level security;

revoke all on table public.interest_registrations from anon, authenticated;
