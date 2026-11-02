# Webshop Orders in Supabase

## 1) Create the table
Run the SQL from `supabase/webshop_orders.sql` in Supabase SQL Editor.

## 2) Set environment variables
Add these to `.env.local` (and to Vercel Environment Variables for production):

```env
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-secret-key>
SUPABASE_ORDERS_TABLE=webshop_orders
```

Use a server-side secret key only (never expose it in browser/client code).

## Interest registrations

Run `supabase/interest_registrations.sql` in the Supabase SQL Editor.
`POST /api/register-interest` inserts each form submission into `interest_registrations` with the server secret key. Row Level Security is on and the public key has no access, so submissions are only visible in the Supabase dashboard.

## 3) How it works
- Checkout submits order data to `POST /api/save-order`.
- The API route inserts the row into Supabase.
- If save fails, checkout shows an error and does not complete the order flow.
