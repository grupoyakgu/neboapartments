# NEBO Apartments

Multilingual (es, en, fr, it, de, ko) booking website — Next.js 15 (App Router), deployed on Vercel.

- `messages/<lang>.json` — translations (Spanish is the fallback). Register new languages in `lib/i18n.ts`.
- `lib/apartments.ts` — apartments, photos and brand settings (**placeholder data**).
- `public/logo.png` — NEBO logo (transparent PNG).
- `public/video/hero.mp4` — hero video.
- `app/api/booking/route.ts` — booking request endpoint (validates only; persistence/email/payment are TODO).

```
npm install && npm run dev
```
