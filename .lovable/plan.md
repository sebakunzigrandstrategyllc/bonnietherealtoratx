## Goals

1. Add the business-card credential logos to the footer.
2. Make the footer appear on every page (Home, Testimonials, 404).
3. Ensure all contact/get-in-touch buttons work, sending correspondence to **[bfrancisagent60@gmail.com](mailto:bfrancisagent60@gmail.com)**.
4. Tighten the site (polish, performance, accessibility) — no copy or color changes.

---

## 1. Footer credential logos

Extract these logos from the uploaded business-card image and add them as a "Credentials & Affiliations" row above the existing TREC compliance block:

- Graduate, REALTOR® Institute (GRI)
- AHWD (At Home With Diversity)
- ABR (Accredited Buyer's Representative)
- Equal Housing Opportunity
- REALTOR® R logo
- MLS (Multiple Listing Service)

Approach: I will crop each badge from the uploaded card with the image tool, upload each to Lovable Assets (CDN), and render them as a responsive grayscale row (`grid grid-cols-3 sm:grid-cols-6 gap-4 items-center`) under the All City logo. The All City logo stays largest, per the existing brand rule.

## 2. Footer on every page

`Footer` is currently rendered only on `Index` and `TestimonialsPage`. I will:

- Add `<Footer />` to `NotFound.tsx`.
- Wrap routes in `App.tsx` with a `Layout` component (`Navbar + Outlet + Footer`) so the footer is guaranteed on every current and future page. Remove the now-duplicated `<Footer />`/`<Navbar />` from `Index`, `TestimonialsPage`, and `NotFound`.

## 3. Make every CTA work → email goes to [bfrancisagent60@gmail.com](mailto:bfrancisagent60@gmail.com)

Audit + fix:

- **Hero "Schedule a Call"** — already `tel:` link, keep.
- **Navbar "Get In Touch"** (desktop + mobile) — currently `/#contact`. If user is on `/testimonials` or `/404`, the hash won't scroll. Change to navigate to `/#contact` via react-router with a small scroll-to-hash effect on `Index`.
- **ContactSection form** — currently shows a fake `alert()` and does not send anywhere. Replace with a `mailto:bfrancisagent60@gmail.com` submission: pre-fill subject/body from the form fields using `window.location.href = mailto:...` (no backend, no credits, works immediately). Adds proper validation + success toast.
- **Contact info block** — phone `tel:` and email `mailto:` links: verify both work (they do; keep).
- **Footer social icons** — currently `href="#"` (dead). Either remove or accept real URLs from the user. Plan: remove until the user provides real LinkedIn/Facebook/Instagram URLs (asked below).
- **TestimonialsPage** — no broken buttons; fine.

All email submissions land in `bfrancisagent60@gmail.com`.

## 4. Tightening suggestions (no copy/color changes)

- **Performance**: add `loading="lazy"` and `decoding="async"` to non-hero images; preconnect Unsplash; convert the hero `<div style backgroundImage>` to a real `<img>` with `fetchpriority="high"`.
- **Accessibility**: add `aria-label`s to icon-only buttons, ensure all `<a>` tags have descriptive text, add `:focus-visible` ring (already in tokens), check color-contrast on muted text.
- **SEO**: single `<h1>` per page, proper `<title>` + meta description per route via a tiny `SEO` component (react-helmet not needed — just `document.title` in a `useEffect`), JSON-LD `RealEstateAgent` schema in `index.html`, canonical tag, OG image.
- **Consistency**: unify section vertical rhythm (`py-16 md:py-24`), unify container (`container mx-auto px-4 sm:px-6 lg:px-8`), unify heading sizes via tokens.
- **Mobile polish**: ensure tap targets ≥ 44px, the iframe section gets a min-height and `loading="lazy"`.
- **Code hygiene**: remove the dead `TestimonialsCarousel` import paths, remove commented-out blocks in TestimonialsPage.
- **404 page**: replace the hard-coded `bg-gray-100` / `text-blue-500` with semantic tokens so it inherits the site theme.

## Files touched

```
src/App.tsx                       (+ Layout wrapper)
src/components/Layout.tsx         (new — Navbar + Outlet + Footer)
src/components/Footer.tsx         (+ credentials row, badge logos)
src/components/ContactSection.tsx (mailto submission, toast)
src/components/Navbar.tsx         (Get In Touch cross-route nav)
src/components/HeroSection.tsx    (perf tweaks)
src/pages/Index.tsx               (remove duplicate Navbar/Footer, scroll-to-hash)
src/pages/TestimonialsPage.tsx    (remove duplicate Navbar/Footer)
src/pages/NotFound.tsx            (tokens + remove duplicate layout)
index.html                        (JSON-LD, meta, preconnect)
src/assets/credentials/*.png.asset.json (6 new CDN-hosted logo pointers)
```

## Question for you before I build

The footer currently has LinkedIn / Facebook / Instagram icons linking to `#` (dead). Do you want me to (a) **remove them** until you provide real URLs, or (b) **keep them and point them at URLs you'll paste now**?

(a) remove them