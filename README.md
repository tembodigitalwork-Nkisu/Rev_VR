# REV VR Xperience — Marketing Site

Single-page Next.js 14 (App Router) site for REV VR Xperience, the VR arcade at Manda Hill, Lusaka.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js 14 (App Router, JS)
- Tailwind CSS
- Static, no backend yet — booking form opens WhatsApp / mailto

## What's still placeholder

Search the codebase for `[Placeholder` to find every spot that needs real content:

- **Pricing** — `K—` figures in `components/Pricing.js` (single, triple, group, party packages)
- **Game catalog** — `components/Experiences.js` is a sensible-default list; replace with the venue's actual rotating titles
- **Reels grid** — `components/Social.js` shows 6 boxes; swap for embedded Instagram/TikTok feeds at launch
- **Map** — `components/Visit.js` has a placeholder block; embed a Google Maps iframe for Manda Hill
- **Brochure PDF** — `components/Corporate.js` has a download button with no file
- **Logo** — currently a gradient square; drop the real logo into `public/logo.svg` and swap in `Navbar.js` + `Footer.js`
- **Backend for booking** — `BookingForm.js` is mailto/WhatsApp only; wire to Resend / Formspree / Supabase before launch
- **Email address** — `bookings@revvrxperience.zm` is a guess; confirm and update

## Color scheme

Per the brief: dark background with neon accents (electric purple, cyan, electric green, pink). Defined in `tailwind.config.js` under `colors.neon` and `colors.ink`. Update once the real logo is on hand and we can color-pick from it.

## Deploy

`vercel` from the project root (matches the existing Vercel + Next.js workflow).
