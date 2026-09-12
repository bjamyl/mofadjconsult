# Mofad‑J Consult — Redesign & Re‑engineering Spec

**Target:** https://www.mofadjconsult.com/ (Next.js App Router)
**Design reference:** "Firmora" consulting concept (Dribbble) — used for *look & feel and section grammar*, not a pixel copy.
**Subject grounding:** Project management + construction consultancy in Accra, Ghana. Every distinctive choice below is drawn from that world (schedules, Gantt/WBS, site imagery, PMBOK phases, Primavera P6 / MS Project), not generic corporate stock.

---

## 0. Goals & non‑goals

**Goals**
1. Lift the visual quality to a confident, corporate‑professional level that matches the Firmora reference's calm, monochrome‑navy language.
2. Keep the *content direction intact* (PM consulting, procurement/logistics, QS, MS Project training, plan/schedule/monitor/control) — enhance the copy, don't pivot the message.
3. Fix real engineering issues already present on the live site (duplicate DOM, weak metadata, oversized images, client/server boundary hygiene).
4. Make SEO and favicons production‑grade, with an emphasis on **local SEO** (Accra / Ghana).
5. Add a few high‑value sections that are authentic to a PM firm, without bloating the site.

**Non‑goals**
- No fabricated social proof. The reference shows a "Trusted by Bain/McKinsey/Deloitte" logo wall and $299/mo–$1999 subscription tiers. Mofad‑J is a B2B project consultancy; inventing Fortune‑500 logos or subscription pricing would be inaccurate and *reduce* trust. Both are re‑interpreted below (§6).
- No blog/CMS build in phase 1 (flagged as optional phase 2 — it's a content commitment, not a UI change).

---

## 1. Design direction

**Principle: spend the boldness in one place.** The memorable element is the pairing of (a) real project/site photography and (b) a genuine *schedule/Gantt* visual — the thing that actually represents planning, scheduling, monitoring and control. That replaces Firmora's decorative donut chart with something true to the craft. Everything else stays quiet and disciplined.

What we borrow from Firmora:
- Cool, restrained monochrome base + a single steel‑navy accent.
- Dark, full‑bleed architectural hero with left‑aligned white text and two CTAs (one solid, one ghost).
- Alternating off‑white / white section bands with generous vertical rhythm.
- Oversized stat blocks in alternating neutral / navy fills.
- Desaturated team portraits in a clean grid.
- A large wordmark in the footer.

What we deliberately change (and why):
- **Eyebrow labels:** the reference stacks an ALL‑CAPS label over every heading. That's a common templated tell. Use eyebrows sparingly and in **sentence case**, and only where they add navigation value.
- **Numbered markers (01/02/03):** only used in the *Process* section, because that content genuinely is a sequence. Not sprinkled on cards.
- **Cards:** don't give everything one radius + one soft grey shadow. Vary weight by hierarchy — service cards get a hairline border and flat fill; the "most important" callouts get elevation. This avoids the identical‑SaaS‑card look.
- **Hero visual:** real Accra/site imagery (or their own delivered projects) over generic glass towers.

---

## 2. Design tokens

Define these once as CSS variables (in `globals.css`) *and* mirror them in the Tailwind theme so utilities and raw CSS agree.

### Color

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#10141A` | Primary text, near‑black (not pure #000) |
| `--slate` | `#2B313B` | Secondary text, dark UI surfaces |
| `--navy` | `#1C3D5A` | Primary brand accent (buttons, links, active) |
| `--navy-deep` | `#122A3F` | Dark section fills, pricing/CTA blocks |
| `--steel` | `#3E7CB1` | Highlight accent (chart arc, focus glow, small emphasis) |
| `--paper` | `#F5F4F1` | Warm off‑white section band |
| `--white` | `#FFFFFF` | Alternate band / cards |
| `--line` | `#E3E1DB` | Hairline borders, dividers |
| `--muted` | `#5B616B` | Muted body / captions |
| `--positive`| `#2F6F4E` | Optional: "on time & on budget" ticks |

Contrast check: `--muted` on `--paper` ≈ 5.1:1 (passes AA for body). `--navy` on white ≈ 9:1. Keep muted text at ≥16px.

### Typography — two families, clearly distinct

- **Display / wordmark:** a serif with character but corporate restraint — **Fraunces** (variable, optical‑size axis) *or* **Source Serif 4**. Reserved for: the "Mofad‑J" wordmark, the footer megawordmark, and optionally the big stat numbers. Not for body.
- **UI / body / headings:** a neutral grotesque — **Hanken Grotesk** *or* **Geist Sans** *or* **Inter**. Everything else.

Type scale (major‑third‑ish, clamp for fluid):

```css
--step--1: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem);   /* captions */
--step-0:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);   /* body */
--step-1:  clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);    /* card titles */
--step-2:  clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem);    /* section h2 */
--step-3:  clamp(2.4rem, 1.8rem + 2.6vw, 3.75rem);    /* hero h1 */
--step-stat: clamp(3rem, 2rem + 5vw, 5.5rem);         /* stat numbers */
```

Body line length: cap at ~68ch (`max-width: 68ch`). Serif body (if any) gets extra line‑height (1.6) vs sans (1.5).

### Spacing, radius, motion

- Spacing scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Section vertical padding: `clamp(64px, 8vw, 128px)`.
- Radius: `--r-sm: 6px` (chips/inputs), `--r-md: 12px` (cards), `--r-lg: 20px` (feature blocks). Not one radius everywhere.
- Shadow: one elevation token only where it earns it: `--elev: 0 8px 28px -12px rgba(16,20,26,.18)`.
- Motion: **one** orchestrated hero reveal on load; interaction motion on accordion/toggle/menu (answering a click). No per‑section fade‑in‑up, no hover lift on every card. Respect `prefers-reduced-motion`.

---

## 3. Global components

Build these as small primitives so sections stay declarative.

- `Container` — max‑width 1200px, responsive gutters.
- `Section` — vertical rhythm + optional `tone="paper|white|navy"` band.
- `Button` — `variant: solid | ghost | link`; solid = navy fill, ghost = navy outline on dark, link = underlined. Label says the action ("Book a consultation", not "Submit").
- `Card` — `emphasis: flat | elevated`.
- `Accordion` — accessible disclosure (see §7.6), used by Why‑Choose‑Us and FAQ.
- `Eyebrow` — sentence‑case small label, used sparingly.
- `SocialIcon` — circular icon button for footer/team.

### Navigation (Client Component)
Sticky, transparent over the hero → solidifies to `--white` with hairline bottom border on scroll. Left: wordmark. Center/right: **Services · Approach · Projects · Team · Contact**. Right: phone as a subtle link + a solid "Book a consultation" button. Mobile: hamburger → full‑height sheet, focus‑trapped, `Esc` to close, `aria-expanded` on the trigger. Include a visually‑hidden **skip‑to‑content** link as the first focusable element.

### Footer
Large `Mofad‑J.` serif megawordmark (like Firmora's). Columns: **Services · Company · Resources · Contact/Offices**. Both office addresses, tel, email, WhatsApp. Social icons (Facebook — real link only; drop dead `#` links). Copyright + a real "Privacy" line if you add the page.

---

## 4. Page & section map (Home)

Order top → bottom, with the reference section it maps to:

```
┌─────────────────────────────────────────────┐
│ Nav (transparent → solid)                     │
├─────────────────────────────────────────────┤
│ HERO  — dark site photo, left copy, 2 CTAs    │  ← Firmora hero
│   h1: Maximize project success...             │
│   sub + [Book a consultation] [See our work]  │
├─────────────────────────────────────────────┤
│ CREDIBILITY STRIP (replaces logo wall) §6.1   │  ← Firmora "Trusted by"
│   PMP · Primavera P6 · MS Project · 9+ yrs    │
├─────────────────────────────────────────────┤
│ SERVICES — 5 cards, icon + title + blurb      │  ← Services Overview
├─────────────────────────────────────────────┤
│ APPROACH — accordion (left) + Gantt visual    │  ← Expert Solutions + donut
│   (Why Choose Us content lives here)          │
├─────────────────────────────────────────────┤
│ STATS — oversized numbers, alt fills          │  ← Proven Impact
│   9+ yrs · 20+ projects · 100% satisfaction   │
├─────────────────────────────────────────────┤
│ PROCESS (NEW) — 5 numbered PMBOK phases        │  ← (authentic addition)
├─────────────────────────────────────────────┤
│ PROJECTS / CASE STUDIES (NEW) — 3–4 cards      │  ← Firmora "Case Studies"
├─────────────────────────────────────────────┤
│ TEAM — desaturated portrait grid (5)          │  ← Meet the Experts
├─────────────────────────────────────────────┤
│ TESTIMONIALS — 2 real quotes                   │  ← (keep, restyle)
├─────────────────────────────────────────────┤
│ ENGAGEMENT MODELS (replaces pricing) §6.2      │  ← Firmora pricing
├─────────────────────────────────────────────┤
│ FAQ (NEW) — accordion, feeds FAQPage schema    │  ← Firmora FAQ
├─────────────────────────────────────────────┤
│ CLOSING CTA — dark site photo, book now        │  ← Firmora final CTA
├─────────────────────────────────────────────┤
│ FOOTER — megawordmark + columns                │  ← Firmora footer
└─────────────────────────────────────────────┘
```

### Section notes

**Hero.** Full‑bleed, ~85vh, dark gradient scrim over a real construction/site or Accra skyline photo (ideally one of their own projects). Left‑aligned white copy. `h1` (single, only one per page): keep the existing promise but tighten — e.g. *"Maximize project success with expert consulting."* Sub: one line on planning→execution. CTAs: solid **Book a consultation**, ghost **See our work** (jumps to Projects). Hero image is the only `priority` image on the page.

**Credibility strip.** See §6.1 — credential/stat chips, not fake logos.

**Services (5).** Cards for the five real services. Icon (line‑style, consistent set — e.g. Lucide), title, one‑sentence outcome‑focused blurb, subtle "Book" link. Grid: 3‑up then 2‑up on desktop, 1‑up mobile. Data‑driven from `content/services.ts` — this is where the current site's duplicate render bug gets designed out (§7.3).

**Approach (accordion + visual).** Move the four "Why Choose Us" points (Experienced Professionals, Proven Success, Tailored Approach, Innovative Solutions) into an accordion on the left; the right shows a genuine schedule/Gantt or S‑curve snapshot that changes per selected item. This is the reference's "Expert Solutions + chart," made authentic.

**Stats.** Real, defensible numbers only, in alternating `--paper` / `--navy` / elevated‑card fills like Firmora: **9+ years experience · 20+ projects delivered · 100% client satisfaction · on time & on budget**. Serif stat numerals optional. Do **not** invent a "0% hidden fees" style figure unless it's literally a policy you want to state.

**Process (NEW).** Five numbered phases aligned to how they actually run work / PMBOK: **Discovery → Planning & scheduling → Execution → Monitoring & control → Handover**. Numbering (01–05) is justified here because it's a real sequence. Keep each step to a title + one line.

**Projects / Case studies (NEW).** 3–4 selected projects: title, sector, one‑line challenge, one‑line outcome (value/timeline). Even short, this is the single highest‑credibility addition for a PM firm and it fills the reference's "Case Studies" nav slot. If detailed write‑ups aren't ready, ship a compact "Selected work" strip now and expand later.

**Team (5).** Desaturated portraits (consistent crop, subtle grayscale that de‑saturates on hover only if you want the one interaction), name, role, and real social links (LinkedIn preferred for a B2B firm). Keep Jamil/IT Expert etc. as is.

**Testimonials.** The two real quotes, restyled: large quotation, attributed name + role, small avatar. Trim the typos in the source copy ("consistenttly", "supervison") when you migrate them.

**Engagement models.** See §6.2 — replaces subscription pricing.

**FAQ (NEW).** 5–6 questions mirrored to the Firmora FAQ shape ("What industries do you serve?", "How do you charge?", "Do you handle international/procurement?", "How long does an engagement take?", "Do you offer MS Project / P6 training?", "Do you provide ongoing support?"). This block is the source of truth for the `FAQPage` JSON‑LD (§8.3) — write the answers once, render + emit schema from the same data.

**Closing CTA.** Dark site photo, single strong line + **Book a consultation** and phone. Mirrors Firmora's final band.

---

## 5. Other routes

- **/contact** — Redesign the existing form into a two‑column layout: left = office info, email, tel, WhatsApp deep link, embedded map (lazy, §7.5); right = the form. Wire it to a **Server Action** with validation, honeypot, and real delivery (§7.7). Give it clear success/error states. Add `LocalBusiness`/`ContactPage` context to metadata.
- **/documents** — exists in the footer; bring it into the same design system (header/footer, tokens). If it's a downloads page, present files as a typed list with file type + size and proper `download`/`rel` attributes.
- **/not-found**, **error.tsx**, **loading.tsx** — add all three, on‑brand. Empty/error states give direction, not mood ("That page moved — here's how to reach us," with links), per copy guidance.

---

## 6. Deliberate content divergences from the reference

### 6.1 Trust bar → Credibility strip
Instead of a fabricated Fortune‑500 logo wall, run a quiet strip of **credential + proof chips**: `PMP‑certified` · `Primavera P6` · `Microsoft Project` · `9+ years` · `20+ projects delivered` · sector tags (construction, infrastructure). If you *do* have real, permission‑granted client logos, use those in grayscale — but only real ones.

### 6.2 Subscription pricing → Engagement models
A B2B PM consultancy doesn't sell $299/mo plans. Replace the pricing cards with **three ways to engage**, each a card with a "Request a proposal" / "Book a consultation" CTA and **no invented figures**:
1. **Advisory retainer** — ongoing PM oversight, scheduling, monitoring & control.
2. **Project‑based** — scoped delivery (consulting, procurement/logistics, QS).
3. **Training** — MS Project / Primavera P6 workshops (per‑seat or in‑house).
Keep Firmora's visual treatment (one "most requested" card highlighted in navy) but drive to a quote, not a checkout.

---

## 7. Engineering plan

### 7.1 Recommended structure (App Router)

```
app/
  layout.tsx            # fonts, <html lang>, base metadata, JSON-LD org, skip link
  page.tsx              # home: composes server section components
  contact/page.tsx
  documents/page.tsx
  not-found.tsx
  error.tsx             # 'use client'
  loading.tsx
  sitemap.ts
  robots.ts
  manifest.ts
  icon.png              # favicon set via file conventions (§9)
  apple-icon.png
  opengraph-image.tsx   # dynamic OG image
components/
  layout/ (Nav.tsx 'use client', Footer.tsx, Container.tsx, Section.tsx)
  ui/ (Button.tsx, Card.tsx, Eyebrow.tsx, Accordion.tsx 'use client')
  sections/ (Hero.tsx, Services.tsx, Approach.tsx 'use client',
             Stats.tsx, Process.tsx, Projects.tsx, Team.tsx,
             Testimonials.tsx, Engagement.tsx, Faq.tsx 'use client', ClosingCta.tsx)
content/
  services.ts  team.ts  faqs.ts  testimonials.ts  projects.ts  process.ts
  site.ts       # NAP: name, address, geo, tel, email, socials — single source
lib/
  jsonld.ts     # schema builders
  seo.ts        # metadata helpers
```

### 7.2 Server vs Client + code splitting
- **Default to Server Components.** Sections that are pure markup (Hero, Services, Stats, Process, Projects, Team, Testimonials, Engagement, ClosingCta, Footer) ship **zero JS**.
- **Client Components only for interactivity**, kept as small leaves: `Nav` (mobile menu), `Accordion` (Approach, FAQ), `Engagement` toggle if you keep the monthly/annual style switch, contact form. Put `"use client"` on the *leaf*, not the whole page — don't let a client boundary bubble up and pull static content into the bundle.
- **`next/dynamic`** for genuinely heavy, below‑the‑fold, client‑only widgets:

```tsx
import dynamic from "next/dynamic";
const OfficeMap = dynamic(() => import("@/components/contact/OfficeMap"), {
  ssr: false,
  loading: () => <div className="map-skeleton" aria-hidden />,
});
```

Use this for the map and any Gantt/chart lib in Approach so the library isn't in the initial payload.

### 7.3 Kill the duplicate DOM (live bug)
On the current site the **Services list renders twice** and **"Building Lasting Change in Industry" prints twice** in the HTML. That's duplicate content (SEO) and double reads for screen readers. Cause is almost always a marquee/carousel that hard‑duplicates children, or a reveal effect that renders a shadow copy.

Fix: render the list **once** from `content/services.ts` and map over it. If you need a seamless marquee loop, duplicate visually via CSS transform on a single source and mark the clone `aria-hidden="true"`, or better, use a real accessible carousel that virtualizes rather than duplicating semantic nodes.

```ts
// content/services.ts
export const services = [
  { slug: "pm-consulting", title: "Project management consulting", blurb: "…", icon: "clipboard-list" },
  { slug: "procurement",   title: "Procurement & logistics",       blurb: "…", icon: "truck" },
  { slug: "quantity-survey",title: "Quantity survey works",         blurb: "…", icon: "ruler" },
  { slug: "ms-project",    title: "Microsoft Project training",     blurb: "…", icon: "graduation-cap" },
  { slug: "control",       title: "Plan, schedule, monitor & control", blurb: "…", icon: "activity" },
] as const;
```

### 7.4 Fonts — `next/font` (self‑hosted, no CLS)
```tsx
// app/layout.tsx
import { Hanken_Grotesk, Fraunces } from "next/font/google";
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GH" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```
No render‑blocking `<link>`s, no layout shift, automatic preload of the used subset.

### 7.5 Images
- `next/image` everywhere; only the **hero** gets `priority`. Everything else lazy‑loads.
- Always set `sizes` so Next doesn't over‑serve. The current hero requests `w=3840 q=75` — that's a multi‑MB LCP hit on mobile.
```tsx
<Image src="/hero.jpg" alt="Mofad-J team on a project site in Accra"
  fill priority sizes="100vw" placeholder="blur" blurDataURL={heroBlur}
  className="object-cover" />
```
- Enable AVIF/WebP in `next.config`:
```js
images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 2592000 }
```
- Fix the **company image loading twice**; compress/resize source photos before upload (don't rely on the optimizer to fix a 6000px original). Give every image a descriptive `alt`.

### 7.6 Accessibility floor (non‑negotiable)
- Exactly one `h1` (hero); logical `h2` per section, `h3` for cards/names. The current site uses `h3` for both section titles and person names — flatten the hierarchy.
- Skip link; visible keyboard focus (`:focus-visible` ring in `--steel`).
- Accordions: `<button aria-expanded aria-controls>` + region `id`; arrow/space/enter support if you build custom, or use Radix/Headless UI primitives.
- Mobile menu: focus trap, `Esc`, restore focus to trigger on close.
- `prefers-reduced-motion: reduce` disables the hero reveal and any transforms.
- Color contrast per §2. Icons that convey meaning get labels.

### 7.7 Contact form → Server Action + validation
```tsx
// app/contact/actions.ts
"use server";
import { z } from "zod";
const Schema = z.object({
  name: z.string().min(2), email: z.string().email(),
  phone: z.string().min(7), message: z.string().min(10),
  company: z.string().max(0).optional(), // honeypot: must stay empty
});
export async function submitContact(_prev: unknown, formData: FormData) {
  const parsed = Schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { ok: false, errors: parsed.error.flatten().fieldErrors };
  if (parsed.data.company) return { ok: true }; // silently drop bots
  // send via Resend / Nodemailer / form provider — server-side only, no keys in client
  return { ok: true };
}
```
Client form uses `useActionState` + `useFormStatus` for pending/disabled state and inline errors. No secrets shipped to the browser. Add a light rate limit if you self‑host the send.

### 7.8 Performance targets
- LCP < 2.5s on 4G mobile (hero image `priority` + `preconnect` to any third‑party origin).
- CLS < 0.1 (font‑display swap via `next/font`, explicit image dimensions, reserved space for the map skeleton).
- Ship < ~90KB JS on the home route (mostly Nav + one accordion). Verify with `@next/bundle-analyzer`.
- Add `Cache-Control`/`revalidate` as appropriate; static‑render the marketing pages (they have no per‑request data).

---

## 8. SEO plan

### 8.1 Metadata API (per route)
Base in `app/layout.tsx`; override per page.
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mofadjconsult.com"),
  title: { default: "Mofad-J Consult — Project Management Consulting in Ghana",
           template: "%s | Mofad-J Consult" },
  description: "Project management consulting, procurement & logistics, quantity surveying, and Microsoft Project / Primavera P6 training in Accra, Ghana.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GH", siteName: "Mofad-J Consult",
    url: "https://www.mofadjconsult.com", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
```
```tsx
// app/contact/page.tsx
export const metadata: Metadata = {
  title: "Contact us",
  description: "Talk to Mofad-J Consult about your project — call, email, or WhatsApp our Accra office.",
  alternates: { canonical: "/contact" },
};
```
Generate a dynamic OG image with `app/opengraph-image.tsx` (`next/og` `ImageResponse`) so shared links look intentional — wordmark on a dark navy field.

### 8.2 Sitemap & robots
```tsx
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mofadjconsult.com";
  return ["", "/contact", "/documents"].map((p) => ({
    url: `${base}${p}`, lastModified: new Date(),
    changeFrequency: "monthly", priority: p === "" ? 1 : 0.7,
  }));
}
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.mofadjconsult.com/sitemap.xml" };
}
```

### 8.3 Structured data (JSON‑LD) — big for local SEO
Emit two blocks. Build them from `content/site.ts` and `content/faqs.ts` so they never drift from the visible page.

**ProfessionalService / LocalBusiness** (in `layout.tsx`):
```tsx
const orgLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService",
  name: "Mofad-J Consult",
  url: "https://www.mofadjconsult.com",
  telephone: "+233552515269",
  email: "mofad@mofadjconsult.com",
  image: "https://www.mofadjconsult.com/og.jpg",
  address: { "@type": "PostalAddress",
    streetAddress: "Salem Estate, Estate High St, Adjiringanor",
    addressLocality: "Accra", addressCountry: "GH" },
  areaServed: "GH",
  sameAs: ["https://www.facebook.com/…"], // real profiles only
  makesOffer: ["Project management consulting","Procurement and logistics",
    "Quantity survey works","Microsoft Project training",
    "Plan, schedule, monitor and control projects"],
};
// render: <script type="application/ld+json"
//   dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
```
Add `geo` (`GeoCoordinates` from the MV9H+M79 plus code) and `openingHours` if you have them — both strengthen the Google Business panel.

**FAQPage** (on home, from `content/faqs.ts`): map each Q/A into `mainEntity` `Question`/`acceptedAnswer`. Eligible for FAQ rich results. Optionally add `BreadcrumbList` on interior pages.

### 8.4 Local SEO housekeeping (outside the codebase)
- Set `<html lang="en-GH">`.
- Ensure **NAP consistency** (name/address/phone) between the site, `site.ts`, and the Google Business Profile — same formatting everywhere.
- Claim/optimize Google Business Profile for "Adjiringanor / Accra"; the JSON‑LD + consistent NAP reinforce it.

---

## 9. Favicon & icon asset checklist

Use App Router **file conventions** — Next generates the correct `<link>` tags automatically:

- `app/favicon.ico` — 32×32 (classic tab icon).
- `app/icon.png` — 512×512 source (Next emits sized variants).
- `app/apple-icon.png` — 180×180 (iOS home screen; give it a solid navy bg, no transparency).
- `app/manifest.ts`:
```tsx
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mofad-J Consult", short_name: "Mofad-J",
    description: "Project management consulting in Accra, Ghana.",
    start_url: "/", display: "standalone",
    background_color: "#122A3F", theme_color: "#1C3D5A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
```
- Add `themeColor` via the `viewport` export (Next 14+ moved it out of `metadata`):
```tsx
export const viewport: Viewport = { themeColor: "#1C3D5A" };
```
- Design the mark itself: a compact monogram (e.g. an **M‑J** or a schedule/bar glyph) that stays legible at 16px. The wordmark serif is for headers/footer; the favicon needs a simpler mark.

---

## 10. Rollout phases

1. **Foundation** — tokens, fonts, `Container`/`Section`/`Button`/`Card`, Nav + Footer, metadata base, favicons/manifest, sitemap/robots, JSON‑LD org. Fix the duplicate‑render bug and image sizing.
2. **Home sections** — Hero → Services → Approach → Stats → Team → Testimonials → Closing CTA (migrate existing content), plus the credibility strip and engagement models.
3. **New sections** — Process, Projects/Case studies, FAQ (+ FAQPage schema).
4. **Contact** — server action, validation, lazy map; `/documents` reskin; 404/error/loading.
5. **Polish** — OG image, Lighthouse pass to targets, a11y sweep, reduced‑motion, analytics (Vercel Analytics or Plausible — lightweight, consent‑friendly).

---

## 11. What I'd need from you to make it concrete

- Real assets: hero/site photography (their own projects ideal), consistent team headshots, any true client logos with permission.
- Confirm the stat numbers you're comfortable publishing (9+ yrs, 20+ projects, 100% satisfaction — anything else?).
- 3–4 projects for case studies (sector, challenge, outcome — even one line each).
- Real social URLs (LinkedIn/Facebook) to replace the dead `#` links.
- Whether training has published packages/pricing or should stay "request a quote."
- Office hours + exact geo (for the LocalBusiness schema).
```

Anything not answered here defaults to the safe choice (no fabricated data, "request a quote" over invented prices).
