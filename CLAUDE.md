# SidelineSwap Partner Portal

## Overview
React + Vite app for managing SidelineSwap partner trade-in events. Partners register their stores, pick event dates, and receive confirmation emails. An admin dashboard manages registrations and calendar events.

## Tech Stack
- **Frontend:** React 19, Vite 7, Tailwind CSS v4
- **Backend:** Supabase (PostgreSQL, Storage, Auth, Edge Functions)
- **Email:** Resend API via Supabase Edge Function
- **Hosting:** Vercel (auto-deploy not yet connected; deploy with `npx vercel --prod --yes`)
- **Repo:** https://github.com/doug-sudo/event-booker

## Project Structure
```
src/
  components/
    admin/          # Admin dashboard (sidebar, calendar manager, registrations table)
    home/           # Landing page (hero, metrics, partners, testimonials)
    how-it-works/   # CustomerJourney, PartnerJourney, ResponsibilityTable, HostingFeeCallout
    layout/         # Navbar, Footer, PublicLayout, AdminLayout, ProtectedRoute
    register/       # Multi-step registration wizard (4 steps)
    schedule/       # Event calendar, month grid, slot cells, legend
    ui/             # Shared UI components (Button, Card, Modal, Badge, etc.)
  context/          # AuthContext for admin auth
  data/             # Static data (partners, metrics, testimonials, holidays, gear categories)
  hooks/            # Custom hooks (useEvents, useRegions, useRegistrations)
  pages/            # Route pages (Home, HowItWorks, Schedule, Register, AdminLogin, AdminDashboard)
  services/         # Supabase client, API services, email service
  utils/            # Calendar helpers, constants, validators, date formatters
supabase/
  functions/        # Edge Functions (send-registration-emails)
  schema.sql        # Database schema
  seed.sql          # Seed data
  rls-policies.sql  # Row-level security
```

## Key Architecture Decisions
- **Calendar slots:** Generated client-side via `calendarHelpers.js`. Three types: `weekday` (Tue/Wed/Thu), `friday` (linked to weekends), `weekend` (Sat-Sun pair). ~260 slots/year.
- **Calendar default view:** Shows only Fri + Sat-Sun columns by default. Toggle "Show weekday slots" reveals Tue/Wed/Thu. This keeps availability looking tight.
- **Email service:** Uses direct `fetch` to Supabase Edge Function (not `supabase.functions.invoke` — that didn't work in Vercel production builds). Fire-and-forget pattern.
- **Registration flow:** Schedule page (pick region → pick date → confirm) → Registration wizard (4 steps) → Supabase insert → email notifications
- **Registration Step 2 (Preferences):** Event hours per day (dynamic based on slot type + include_friday), foot traffic, event requirements checklist, grouped Shipping & Logistics section (liftgate Y/N, pallets Y/N, special notes), W9 upload (US only).
- **Registration DB fields:** `requires_liftgate`, `can_provide_pallets`, `event_hours` (JSONB keyed by date, e.g. `{"2026-03-14": {"open":"10:00","close":"18:00"}}`). Legacy `has_loading_dock` column kept for backward compat.
- **Booked events anonymized:** Calendar shows uniform gray "Booked" cells — no partner names or colors visible to public.
- **Responsibility sections:** Collapsible accordions using CSS `grid-rows` transitions, collapsed by default.

## Environment Variables
```
VITE_SUPABASE_URL=https://npjhmylktcnbdiliuted.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key>
```
These are set in Vercel project settings and in local `.env`.

## Supabase Edge Function
- **Function:** `send-registration-emails` — sends confirmation to registrant + admin notification to elise.finger@sidelineswap.com and doug@sidelineswap.com
- **Deploy:** `SUPABASE_ACCESS_TOKEN=<token> npx supabase functions deploy send-registration-emails --no-verify-jwt`
- **Resend API key** stored as Supabase secret: `RESEND_API_KEY`
- **From address:** `SidelineSwap Events <events@sidelineswap.com>` (domain verified in Resend)

## Commands
- `npm run dev` — local dev server on port 5173
- `npm run build` — production build
- `npx vercel --prod --yes` — deploy to Vercel
