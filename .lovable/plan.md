
# Plan: Site Refresh + Contact Form Email

## Part 1 — Warm & Local Visual Refresh

**Design system (index.css + tailwind.config.ts)**
- New palette: warm cream background, deep terracotta primary, sage accent, charcoal text, soft sand neutrals (all HSL tokens).
- Typography pair: **Fraunces** (display serif, distinctive) + **Inter** (body) — loaded via Google Fonts.
- Soft shadows, slightly larger border radius (8–12px) for a friendlier feel.
- Subtle background textures (noise/grain) on hero and section dividers.

**Hero**
- Replace generic Unsplash with an Austin-flavored image (skyline or neighborhood).
- Larger, more confident headline; add Bonnie's name + "REALTOR® · Austin, TX".
- Two CTAs side-by-side: "Call 512.923.0552" and "Browse Listings".
- Phone number visible as text under the buttons (currently buried).
- Trust strip below hero: "10+ years · Bilingual · All City Real Estate".

**New / improved sections (homepage order)**
1. Hero (refreshed)
2. Trust stats band (years, families served, neighborhoods, languages)
3. About Bonnie (refined layout, real headshot placeholder, warmer copy)
4. Services — Buying / Selling / Renting cards with icons
5. Featured Austin neighborhoods (Pecan Park, Round Rock, Cedar Park, etc.) — visual cards
6. Featured listings (existing)
7. Live listings iframe (lazy-loaded so it stops slowing the page)
8. Testimonials carousel (homepage preview pulling from the growing testimonials list, with "See all" → /testimonials)
9. "What to expect" 4-step process
10. Contact (refreshed form + info)
11. Footer (keep TREC compliance modals — IABS PDF and Consumer Protection Notice)

**Mobile & UX polish**
- Sticky bottom CTA bar on mobile: Call · Text · Email.
- Hamburger nav with smooth slide-in drawer.
- framer-motion scroll reveals (replace blanket fade-in-up).
- Lazy-load listings iframe + heavy images.
- Click-to-text link (sms:) next to call link.

**SEO & trust**
- Meta title/description tuned for "Austin Realtor", canonical, Open Graph image.
- JSON-LD `RealEstateAgent` schema (name, phone, address, area served, image).
- Single H1 per page, semantic landmarks, alt text on all images.
- Footer: license #, brokerage logo, Equal Housing + MLS logos.

**Compliance preserved**
- IABS PDF modal and Consumer Protection Notice modal stay in footer (per existing TREC requirements).

---

## Part 2 — Contact Form → bfrancisagent60@gmail.com

**Setup**
1. Enable **Lovable Cloud** (built-in backend).
2. Set up **Lovable Emails** with a sender subdomain (e.g., `notify.bonnietherealtoratx.com`). I'll walk you through the one-click DNS step; emails actually send after DNS verifies (usually minutes).
3. Build the email queue/send infrastructure (handled by Lovable tooling).

**Email template**
- Branded React Email template: "New Inquiry from your website" with name, email, phone, message, and timestamp.
- `Reply-To` header set to the visitor's email so you can reply directly from Gmail.

**Form wiring (ContactSection.tsx)**
- Add **zod** validation (name 1–100, valid email, optional phone, message 1–2000).
- On submit → call edge function `send-transactional-email` with template `contact-inquiry`, recipient `bfrancisagent60@gmail.com`, and the form data.
- Also send an **auto-reply** to the visitor: "Thanks — Bonnie will be in touch shortly."
- Replace `alert()` with a proper toast (success / error states) and a loading spinner.
- Idempotency key per submission so retries don't duplicate.

**Optional (recommend, ask before adding)**
- Simple honeypot field + basic rate limit to reduce spam.
- Store submissions in a `contact_submissions` table so nothing is lost if email ever fails.

---

## Technical Notes

- All colors stay as HSL semantic tokens in `index.css`; components use `bg-primary`, `text-foreground`, etc. — no hard-coded hex in components.
- Animation via `framer-motion` (new dependency).
- Email infrastructure uses Lovable Cloud's built-in `send-transactional-email` edge function; no third-party API keys needed.
- Lazy-loading via `loading="lazy"` on images and `IntersectionObserver` for the listings iframe.

## What I'll need from you during build

- Confirm the sender subdomain you want (suggest `notify.bonnietherealtoratx.com`).
- A real headshot of Bonnie (optional — I'll use a tasteful placeholder otherwise).
- Bonnie's TREC license # for the footer (optional but recommended).

After you approve, I'll switch to build mode and ship it in stages: design system → homepage sections → contact form backend → polish/SEO.
