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

## Brand

- **Palette**: bright yellow (`#FFD60A`) on pure black, per the venue's own price-list artwork
- **Logo**: yellow VR-headset mark with "REV VR XPERIENCE" wordmark — currently a CSS/SVG approximation in `components/LogoMark.js`. Drop the official SVG into `public/` and swap the import when supplied.

## What's still placeholder

Search the codebase for `[Placeholder` to find every spot that needs real content:

- **Ride descriptions** — names and prices in `components/Experiences.js` are real (from venue price list); blurbs are sensible defaults — confirm wording with the venue
- **Logo** — CSS/SVG approximation in `components/LogoMark.js`; replace with official asset
- **Reels grid** — `components/Social.js` shows 6 boxes; swap for embedded Instagram/TikTok feeds at launch
- **Map** — `components/Visit.js` has a placeholder block; embed a Google Maps iframe for Manda Hill
- **Brochure PDF** — `components/Corporate.js` has a download button with no file
- **Backend for booking** — `BookingForm.js` is mailto/WhatsApp only; wire to Resend / Formspree / Supabase before launch
- **Email backend** — booking form uses `mailto:revvrxperience@gmail.com`. Wire to a real backend (Resend / Formspree / Supabase) before launch.
- **Party package pricing** — `components/Pricing.js` says "TBC"; gather real birthday/squad pricing

## Real ride catalog (per person)

| Ride | Price | | Ride | Price |
|---|---|---|---|---|
| Space Ride | K120 | | Super 360 | K100 |
| VR Paraglider | K120 | | VR 720 | K100 |
| VR Racecar | K50 | | The Egg | K50 |
| Three Seater | K50 | | VR Express | K50 |
| VR Bike | K50 | | Arcade | K50 |
| Self Service | K50 | | | |

## Deploy

`vercel` from the project root.
