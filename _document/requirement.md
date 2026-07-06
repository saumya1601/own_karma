# OWN KARMA — Product Requirements Document

**Project Codename:** `own_karma`
**Document Type:** PRD (v1 — Frontend-Only)
**Date:** 2026-07-06
**Companion Docs:** [own_karma.md](own_karma.md) (VFX Creative Blueprint)

> "Not worn to be seen.
> Worn to stand correctly."

---

## Contents

| # | Section |
| :---: | :--- |
| 1 | [Overview](#1-overview) |
| 2 | [Reference Analysis](#2-reference-analysis) |
| 3 | [Brand Anchor](#3-brand-anchor) |
| 4 | [Scope — v1 vs v2](#4-scope--v1-vs-v2) |
| 5 | [Information Architecture](#5-information-architecture) |
| 6 | [Page-by-Page Specifications](#6-page-by-page-specifications) |
| 7 | [Hero Cinematic Spec — Concept 01](#7-hero-cinematic-spec--concept-01-axis-through-all-realms) |
| 8 | [Product Data Model](#8-product-data-model) |
| 9 | [Tech Stack](#9-tech-stack) |
| 10 | [Design System](#10-design-system) |
| 11 | [Motion & Interaction Rules](#11-motion--interaction-rules) |
| 12 | [Internationalization (EN / HI)](#12-internationalization-en--hi) |
| 13 | [Accessibility](#13-accessibility) |
| 14 | [Performance Budget](#14-performance-budget) |
| 15 | [SEO & Metadata](#15-seo--metadata) |
| 16 | [Analytics Event Spec](#16-analytics-event-spec) |
| 17 | [Sound Design](#17-sound-design) |
| 18 | [Custom Cursor](#18-custom-cursor) |
| 19 | [Frontend-Only Contract (Mock Adapters)](#19-frontend-only-contract-mock-adapters) |
| 20 | [Folder Structure](#20-folder-structure) |
| 21 | [Roadmap / Phases](#21-roadmap--phases) |
| 22 | [Success Metrics](#22-success-metrics) |
| 23 | [Risks & Mitigations](#23-risks--mitigations) |
| 24 | [Open Questions](#24-open-questions) |

---

## 1. Overview

### 1.1 Purpose
Build a **cinematic 3D brand-commerce experience** for OWN KARMA — a streetwear label whose creative pillar is *"alignment as clothing."* The site must feel like a short film that ends in a store, not a store that plays a video.

### 1.2 Vision
When a visitor lands, they should not see products. They should see the **Axis** — a golden vertical line — and, as they scroll, watch a single human silhouette pass through 8 collapsing realms (void → netherworld → desert → water → forest → lava → ice → galaxy). Only *after* the realm collapse does the first hoodie exist. The store is the resolution of the cinematic, not its interruption.

### 1.3 Non-Goals for v1
- No real payment processing (Razorpay is stubbed).
- No real user accounts, order history, or database.
- No CMS. All copy, prices, and product data live in typed source files.
- No admin panel.
- No live inventory sync. Stock states are hardcoded flags per SKU.

### 1.4 Primary Success State
> A first-time visitor scrolls the hero cinematic to completion, adds a hoodie to cart, opens the cart drawer, and reaches the checkout UI — with the entire experience running at ≥ 50 FPS on a 2022 mid-range laptop, and gracefully falling back to scroll-scrubbed video on mobile.

---

## 2. Reference Analysis

Two references were provided. Neither is a clothing brand — but each contributes a distinct half of the target experience.

### 2.1 Rotoris ([world.rotoris.com](https://world.rotoris.com/))
| Take | Why It Matters for OWN KARMA |
| :--- | :--- |
| **Scroll = camera timeline** with named scenes (`Opening Scene`, `Arvion`, `Monarch`, … `End Scene`) and a visible progress marker (`73%`). | Directly maps to Concept 01's 10 timed segments. Users need a *diegetic* progress cue, not a bar. |
| **"FOR THOSE WHO BECOME MORE"** as a hero statement, no product visible above the fold. | Enforces the **Universal Production Rule**: product is inevitable, not introduced. |
| Individually named SKUs treated as characters. | Every OWN KARMA drop gets a story name (e.g., `AXIS-01`, `BLUEPRINT-02`). |
| Full-bleed dark canvas, minimal chrome. | Establishes the void aesthetic before the first realm forms. |

### 2.2 Urban Monkey — Loop 2 Collectible Watch ([urbanmonkey.com/…loop-2…](https://www.urbanmonkey.com/collections/loop-2-collectible-watch))
| Take | Why It Matters for OWN KARMA |
| :--- | :--- |
| **"LAST 1000 UNITS ONLY"** scarcity banner + **"unique serial number etched on the caseback."** | OWN KARMA hoodies ship with a **unique serial** (e.g., `OK-AXIS-0428/1000`) laser-printed inside the neck tape — must be shown on PDP. |
| Product states: `LAST FEW LEFT`, `SOLD OUT`. | Required inventory badge system. |
| **Waitlist page** for out-of-stock variants. | Notify-me email capture is a v1 must-have. |
| Rewards / cult-loyalty framing. | Deferred to v2, but reserve the nav slot. |
| Indian storefront conventions: `RS.` price prefix, WhatsApp support link, COD-friendly. | India-first localization. |

### 2.3 What OWN KARMA Adds That Neither Reference Has
- A **philosophical narrative arc** across the whole page (Rotoris tells one product's story; OWN KARMA tells a *world's* story that ends in product).
- **Hidden shader text**: the word `OWN KARMA` etched into every realm's texture (sand ripples, ice fractures, star constellations). Discoverable, not obvious. See [own_karma.md § Hidden Detail](own_karma.md).
- **Bilingual voice** (English + Hindi) — cult-brand credibility in the Indian market.

---

## 3. Brand Anchor

Full creative spine lives in [own_karma.md](own_karma.md). This PRD assumes it as canon. Key rules that constrain **every** engineering decision:

| Rule | Engineering Consequence |
| :--- | :--- |
| Product must not appear until Awareness → Breaking → Collapse. | Hero cinematic occupies **100vh × 10 sections** minimum before any product tile can render. |
| Alignment > motion. Stillness is a design element. | Prefer 24 fps easing curves with long holds; avoid perpetual idle animations. |
| Hidden `OWN KARMA` text in textures. | Custom GLSL fragment shaders on realm surfaces + particle systems. |
| Never Angry / Violent / Explosive. Always Controlled / Inevitable / Adult. | No screen-shake, no red flashes, no aggressive audio. Sound design capped at **-18 LUFS**. |
| Formula: **Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability**. | Every reusable component maps to one of these six primitives (see §20). |

---

## 4. Scope — v1 vs v2

### 4.1 In Scope (v1 — Frontend Only)
- Full site UI: Home cinematic, Shop, Product Detail, Cart drawer, Checkout shell, Waitlist, Story, About, Contact, Legal.
- **Concept 01** rendered as real WebGL (R3F). Concepts 02–05 appear as **static story cards** on the `/story` page (with optional pre-rendered clip loops).
- Product catalog for **hoodies, tees, pants, caps, accessories** — hardcoded in `src/data/products.js`.
- Hidden-text shader on at least 3 realms.
- Waitlist / notify-me email capture — writes to `localStorage` in v1, ready to swap for a real endpoint.
- Unique serial number badge per SKU.
- Sold-out / low-stock / last-few-left states.
- Custom cursor + ambient sound (mute toggle default = ON).
- EN + HI language toggle (i18n framework wired, all copy externalized).
- Instagram feed section (static grid pulling from a JSON stub of last 6 posts).
- Mobile fallback: scroll-scrubbed `.webm` of the hero cinematic.
- India-first: `₹` prefix, INR formatting, Razorpay + COD copy on checkout UI (no actual charge).

### 4.2 Deferred to v2 (Backend / Ops)
- Real Shopify Storefront API integration (or Medusa) for products, inventory, orders.
- Razorpay live payments + COD workflow.
- Real waitlist backend (Klaviyo / Mailchimp / custom).
- Order tracking + returns portal.
- Rewards program.
- CMS (Sanity) for editorial and drop copy.
- Real Instagram Graph API pull.
- Serial-number registry (proof-of-authenticity page).

### 4.3 Explicitly Out of Scope
- Native mobile apps.
- AR try-on.
- User-generated content / reviews (v1 shows curated testimonials only, hardcoded).
- Blog / editorial CMS.

---

## 5. Information Architecture

```
/                        The Axis (hero cinematic + drop teaser + IG grid)
/shop                    Grid of all products, filter by category
/shop/[category]         hoodies | tees | pants | caps | accessories
/product/[slug]          Product Detail Page (PDP)
/cart                    Cart drawer (also accessible as full page fallback)
/checkout                Checkout shell (address → shipping → payment stubs)
/checkout/success        Order confirmation (mocked)
/story                   The 5 concepts, longform
/story/[concept]         01 axis | 02 divine | 03 karmas-eye | 04 destiny | 05 broken-hourglass
/waitlist                Drop signup + upcoming releases
/about                   Brand statement, philosophy, founders
/contact                 Form (mailto: in v1) + WhatsApp deep link
/legal/terms
/legal/privacy
/legal/shipping
/legal/returns
```

### 5.1 Global Chrome
| Element | Behavior |
| :--- | :--- |
| **Top Nav** | Fixed, translucent, hides on scroll-down, reveals on scroll-up. Left: logo (only text `OWN KARMA` in the brand mono). Right: `Shop`, `Story`, `Waitlist`, `EN/HI`, cursor-only `sound` toggle, cart icon with count. |
| **Bottom "Axis" bar** (desktop only) | Thin 1px golden line across viewport bottom — the visible manifestation of the Axis rule. Never disappears. |
| **Footer** | Two-column: `COOL STUFF` (shop links) + `BORING STUFF` (legal, contact, WhatsApp) — direct nod to Urban Monkey's IA, translated into OWN KARMA voice. |

---

## 6. Page-by-Page Specifications

### 6.1 Home — The Axis
| Section | Purpose | Notes |
| :--- | :--- | :--- |
| **6.1.1 Hero Cinematic** | Full Concept 01 timeline as scroll-driven WebGL scene. | See §7 for the full spec. Occupies ~800vh of scroll. |
| **6.1.2 The Drop** | First real appearance of a product. One hoodie, centered, on black. Reveals via unfold animation as the Galaxy segment resolves. | Includes serial-count line: `1 of 1000. Etched.` |
| **6.1.3 Manifesto Slab** | Full-screen typography slab. Slow reveal. Text: *"Not worn to be seen. Worn to stand correctly."* | No product, no CTA. Silence. |
| **6.1.4 Concept Trail** | 5 horizontal cards linking to `/story/[concept]`. Each card = still frame + concept title. | Scrolls horizontally with vertical scroll (pinned). |
| **6.1.5 Instagram Grid** | 6-tile Instagram feed (static stub). | Uses `@own_karma` handle. |
| **6.1.6 Waitlist CTA** | Simple email field, minimal chrome. Copy: *"Enter the next collapse."* | Persists to `localStorage`. |

### 6.2 Shop
- Full-bleed grid, 3-col desktop / 2-col tablet / 1-col mobile.
- Sticky category rail: `ALL · HOODIES · TEES · PANTS · CAPS · ACCESSORIES`.
- Each card: still image, product name, price, badge (`NEW`, `LAST FEW LEFT`, `SOLD OUT`).
- **No filters** in v1 beyond category (keeps the reverent tone).
- Hover: subtle brightness lift + serial-tick animation.

### 6.3 Product Detail Page (PDP)
| Zone | Content |
| :--- | :--- |
| **Left / Above the fold (desktop / mobile)** | Vertical image gallery (5 shots): front, back, detail, hidden-text macro, lifestyle. |
| **Right** | Name, subtitle (`AXIS-01`), price, size selector (`XS S M L XL XXL`), color (if applicable), quantity, `ADD TO CART`, `NOTIFY ME` (when sold out), serial line (`Yours will be etched with a unique number: OK-AXIS-####/1000`). |
| **Below fold** | Concept panel — 4–6 lines pulled from the linked concept in own_karma.md, with a link to the full story. |
| **Materials & Care** | Accordion: composition, wash, sourcing. |
| **Serial + Authenticity** | Explainer block: what the serial means, how to verify (v2 links to registry page). |
| **Related** | 3 items from the same drop. |

### 6.4 Cart (Drawer)
- Slide from right, ~420px wide desktop, full-width mobile.
- Line items with thumbnail, name, size, unit price, qty stepper, remove.
- Order summary: subtotal, shipping (`Calculated at checkout`), total.
- CTA: `CHECKOUT` → `/checkout`.
- Empty state: *"The axis holds nothing yet."*

### 6.5 Checkout (UI Shell Only)
Three steps, single page, progress dots.
1. **Address** — name, phone (+91), pincode, city, state, address lines.
2. **Shipping** — Standard (₹0, 4–7 days) / Express (₹149, 2–3 days) — copy only.
3. **Payment** — Razorpay tab + COD tab. Buttons are non-functional; clicking either navigates to `/checkout/success` with a mock order ID.
- On success: show serial-number allocations (e.g., `OK-AXIS-0428/1000`), share buttons, `Continue shopping`.

### 6.6 Waitlist Page
- Upcoming drops timeline.
- Email capture per drop.
- Countdown timer (dead until v2 real dates).

### 6.7 Story Pages
- One long-form page per concept. Content = the corresponding section of own_karma.md rendered as full-page scroll blocks.
- Optional: for Concept 01 the /story/axis page reuses the hero R3F scene at reduced scale.

### 6.8 About / Contact / Legal
- Standard content pages, brand-voice typography, no motion beyond fades.
- Contact: `mailto:hello@ownkarma.in` + WhatsApp deep link (India convention).

---

## 7. Hero Cinematic Spec — Concept 01 (Axis Through All Realms)

This is the **single most important artifact** of v1. It is the direct engineering translation of [own_karma.md § Concept 01](own_karma.md#concept-01-what-is-own-karma).

### 7.1 Scene Graph
```
<Canvas>
  <ScrollControls pages={10} damping={0.25}>
    <AxisLine />              // constant golden vertical, z=0
    <HumanSilhouette />       // constant, centered, still
    <ScrollScene>
      <VoidBirth        range={[0.00, 0.10]} />
      <Netherworld      range={[0.10, 0.19]} />
      <Desert           range={[0.19, 0.29]} />
      <Water            range={[0.29, 0.38]} />
      <Forest           range={[0.38, 0.48]} />
      <Lava             range={[0.48, 0.57]} />
      <IceShatter       range={[0.57, 0.67]} />
      <GalaxyReveal     range={[0.67, 0.79]} />
      <SunIgnition      range={[0.79, 0.90]} />
      <Lock             range={[0.90, 1.00]} />
    </ScrollScene>
    <HiddenTextShader visibleOn={['Desert','IceShatter','GalaxyReveal']} />
  </ScrollControls>
  <PostFX>
    <Bloom mixBlendMode="screen" luminanceThreshold={0.85} />
    <Vignette darkness={0.7} />
    <ChromaticAberration offset={[0.0005, 0.0005]} />
  </PostFX>
</Canvas>
```

### 7.2 Segment → Scroll → Asset Map
| Segment | Scroll % | Primary Asset | Interaction |
| :--- | :---: | :--- | :--- |
| Void Birth | 0–10 | Empty scene, axis fades in | None |
| Netherworld | 10–19 | Obsidian terrain shader (displacement noise) | None |
| Desert | 19–29 | Instanced sand particles + `HiddenTextShader` on dune texture | Cursor tilts dunes ±2° |
| Water | 29–38 | Cubemap + refraction sphere | None |
| Forest | 38–48 | Instanced tree meshes, low-poly, frozen leaves as points | None |
| Lava | 48–57 | Displacement + emissive shader | None |
| Ice Shatter | 57–67 | Fractured crystal geometry, `HiddenTextShader` in cracks | None |
| Galaxy Reveal | 67–79 | 60k-particle field, `HiddenTextShader` in constellations | Cursor rotates camera slightly |
| Sun Ignition | 79–90 | Sudarshan-geometry sprite + volumetric bloom | None |
| Lock | 90–100 | Everything stills. `OWN KARMA` mark fades in centered. | Scroll-lock 400ms, then release |

### 7.3 Performance Contract
- **Desktop target:** 60 fps on 2022 MacBook Air (M2) / RTX 3060 laptop @ 1440p.
- **Draw-call budget:** ≤ 120 per frame.
- **Texture memory:** ≤ 180 MB.
- **Initial JS:** ≤ 350 KB gzipped (hero code-split, R3F loaded lazily under `<Suspense>`).
- **Mobile:** WebGL disabled below 768px; scroll-scrubbed `.webm` (H.265 fallback) plays as background of a plain scroll section.

### 7.4 Fallback Ladder
1. `matchMedia('(max-width: 767px)')` → scroll-scrubbed video.
2. `matchMedia('(prefers-reduced-motion: reduce)')` → static hero image + text-only concept walkthrough.
3. WebGL context loss → same static fallback + toast: *"Alignment lost. Reload to re-enter."*

---

## 8. Product Data Model

**Language: plain JavaScript (ES modules).** Shape definitions live as **JSDoc typedefs** so editors still get IntelliSense without a TypeScript compile step.

- Data lives in `src/data/products.js` (a plain array of product objects).
- Shape docs live in `src/schemas/product.js` and are imported into other files via `@typedef {import('../schemas/product.js').Product} Product`.
- Runtime shape validation is done by `zod` (see §9) when the app boots in dev.

```js
// src/schemas/product.js

/** @typedef {'hoodies' | 'tees' | 'pants' | 'caps' | 'accessories'} Category */
/** @typedef {'in-stock' | 'last-few-left' | 'sold-out' | 'coming-soon'} StockState */
/** @typedef {'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'ONE-SIZE'} Size */

/**
 * @typedef {Object} ProductImages
 * @property {string} front
 * @property {string} back
 * @property {string} detail
 * @property {string} hiddenText   - macro of shader-etched serial texture
 * @property {string} lifestyle
 */

/**
 * @typedef {Object} ProductColor
 * @property {string} name
 * @property {string} hex
 */

/**
 * @typedef {Object} ProductSerial
 * @property {string} prefix       - e.g. 'OK-AXIS'
 * @property {number} total        - e.g. 1000
 * @property {number} remaining    - hardcoded, drives 'last-few-left' badge if < 50
 */

/**
 * @typedef {Object} ProductDescription
 * @property {string} en
 * @property {string} hi
 */

/**
 * @typedef {Object} Product
 * @property {string} id                        - e.g. 'ok-axis-01'
 * @property {string} slug                      - e.g. 'axis-01-hoodie'
 * @property {string} name                      - e.g. 'AXIS-01'
 * @property {Category} category
 * @property {1|2|3|4|5|null} concept           - link to own_karma.md concept
 * @property {string} subtitle                  - e.g. 'The Axis Through All Realms'
 * @property {number} priceINR                  - integer rupees, no decimals
 * @property {ProductImages} images
 * @property {Size[]} sizes
 * @property {ProductColor[]} [colors]
 * @property {Object<string, StockState>} stock - keyed by Size
 * @property {ProductSerial} serial
 * @property {string[]} materials               - e.g. ['500 GSM organic cotton', 'YKK metal hardware']
 * @property {string[]} care
 * @property {ProductDescription} description
 * @property {string} releasedAt                - ISO date
 * @property {boolean} featured
 */

export {}; // typedef-only module
```

Example entry in `src/data/products.js`:

```js
// src/data/products.js
/** @typedef {import('../schemas/product.js').Product} Product */

/** @type {Product[]} */
export const products = [
  {
    id: 'ok-axis-01',
    slug: 'axis-01-hoodie',
    name: 'AXIS-01',
    category: 'hoodies',
    concept: 1,
    subtitle: 'The Axis Through All Realms',
    priceINR: 4999,
    images: {
      front: '/images/products/axis-01/front.avif',
      back: '/images/products/axis-01/back.avif',
      detail: '/images/products/axis-01/detail.avif',
      hiddenText: '/images/products/axis-01/hidden.avif',
      lifestyle: '/images/products/axis-01/lifestyle.avif',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 'in-stock', M: 'last-few-left', L: 'in-stock', XL: 'sold-out' },
    serial: { prefix: 'OK-AXIS', total: 1000, remaining: 428 },
    materials: ['500 GSM organic cotton', 'YKK metal hardware'],
    care: ['Cold wash inside out', 'No tumble dry', 'Do not iron print'],
    description: {
      en: 'The first hoodie. A vertical golden axis etched into the spine seam.',
      hi: 'पहली हुडी। रीढ़ की सीम में उकेरी गई एक ऊर्ध्वाधर स्वर्णिम धुरी।',
    },
    releasedAt: '2026-08-01',
    featured: true,
  },
  // ...13 more entries
];
```

### 8.1 Minimum v1 Catalog
| Category | Count | Notes |
| :--- | :---: | :--- |
| Hoodies | 3 | `AXIS-01`, `BLUEPRINT-02`, `EYE-03` — one per hero concept |
| Tees | 4 | Includes one hidden-text tee |
| Pants | 2 | Cargo + jogger |
| Caps | 2 | Structured + unstructured |
| Accessories | 3 | Tote, socks, sticker pack |
| **Total** | **14** | |

---

## 9. Tech Stack

> **Language: JavaScript only (ES modules).** No TypeScript compile step. Editor type hints come from JSDoc typedefs (§8). Runtime shape safety comes from `zod` schemas at module boundaries.

### 9.1 Already in `package.json` (keep)
| Package | Version | Role |
| :--- | :--- | :--- |
| `react` / `react-dom` | ^19 | UI |
| `vite` | ^8 | Bundler |
| `@vitejs/plugin-react` | ^6 | React fast-refresh |
| `tailwindcss` + `@tailwindcss/vite` | ^4 | Styling |
| `lucide-react` | ^1 | Iconography |
| `eslint` + plugins | — | Linting |

### 9.2 To Add
| Package | Role | Notes |
| :--- | :--- | :--- |
| `three` | WebGL runtime | Peer of R3F |
| `@react-three/fiber` | React renderer for Three | Hero scene |
| `@react-three/drei` | Helpers (ScrollControls, useGLTF, Environment) | Hero scene |
| `@react-three/postprocessing` | Bloom, Vignette, Chromatic Aberration | Hero scene |
| `gsap` | Timeline + ScrollTrigger | Non-3D scroll animations |
| `lenis` | Smooth scroll | Shared time base for GSAP + R3F |
| `zustand` | Global state (cart, cursor, sound, i18n) | Tiny, no boilerplate |
| `react-router-dom` | ^7 client routing | Multi-page SPA |
| `i18next` + `react-i18next` | EN/HI toggle | Namespaced JSON |
| `zod` | Runtime shape guards for product / cart / checkout data | Pairs with JSDoc typedefs; validates on boot in dev |
| `@formkit/auto-animate` | List micro-animations (cart, filters) | Optional |
| `clsx` + `tailwind-merge` | Class composition | Standard |
| `vite-plugin-glsl` | Import `.glsl` as strings | For HiddenTextShader |

### 9.3 Deferred
- `@shopify/hydrogen-react` — v2 commerce swap-in.
- `razorpay` SDK — v2.
- `sanity` / `@sanity/client` — v2 CMS.

---

## 10. Design System

### 10.1 Palette
| Token | Value | Use |
| :--- | :--- | :--- |
| `--ok-void` | `#000000` | Background |
| `--ok-obsidian` | `#0A0A0C` | Card surface |
| `--ok-stone` | `#1A1A1D` | Border, hairline |
| `--ok-bone` | `#F3EFE7` | Primary text |
| `--ok-dust` | `#A9A399` | Secondary text |
| `--ok-axis` | `#D4A855` | The golden axis; single accent |
| `--ok-signal` | `#D4A855` | Buttons, links (same as axis — no other accent) |
| `--ok-alert` | `#B25141` | `SOLD OUT` only |

> **One accent rule.** The site uses exactly one non-neutral color (`--ok-axis`). No secondary hues. Enforced via ESLint custom rule in v2.

### 10.2 Typography
| Role | Font | Fallback |
| :--- | :--- | :--- |
| Display / Marks | A geometric serif with tight tracking (e.g., **PP Editorial New**) | `Georgia, serif` |
| Body | A neutral grotesk (e.g., **Neue Haas Grotesk** or **Inter**) | `-apple-system, system-ui` |
| Mono / Serial numbers | A precision mono (e.g., **JetBrains Mono**) | `ui-monospace, monospace` |
| Hindi | **Noto Sans Devanagari** | `system-ui` |

Type scale: `12 · 14 · 16 · 20 · 28 · 40 · 64 · 112 · 180`.

### 10.3 Spacing & Grid
- Base unit: **8px**.
- Desktop: 12-col grid, 96px side gutter, 24px column gap.
- Mobile: 4-col grid, 16px side gutter.

### 10.4 Iconography
- `lucide-react` only. Stroke 1.25. Never filled.

---

## 11. Motion & Interaction Rules

| Rule | Value |
| :--- | :--- |
| Default easing | `cubic-bezier(0.65, 0, 0.35, 1)` (calm asymmetric) |
| Default duration | 600ms (short), 1200ms (medium), 2400ms (scene) |
| Max simultaneous animations on non-hero pages | 3 |
| Forbidden | Screen shake, elastic overshoot, bouncing, red flashes, rapid strobes |
| Required | `prefers-reduced-motion` compliance — collapses to opacity fades only |
| Scroll driver | Lenis, exposed via a single `useLenis()` hook |
| GSAP + R3F sync | Both consume Lenis' `raf` output; no drift permitted |

---

## 12. Internationalization (EN / HI)

- Library: `i18next` + `react-i18next`.
- Namespaces: `common`, `nav`, `home`, `shop`, `pdp`, `cart`, `checkout`, `story`, `about`, `legal`.
- Files: `src/locales/en/*.json`, `src/locales/hi/*.json`.
- Language toggle in top nav; persists in `localStorage` under `ok:lang`.
- Numbers/currency via `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })` → renders as `₹4,999`.
- Concept titles keep their **English form** in both languages (brand-canonical), only descriptions translate.

---

## 13. Accessibility

- WCAG 2.2 AA target.
- All interactive elements keyboard-reachable; visible focus ring in `--ok-axis`.
- Hero cinematic must expose:
  - A **skip-to-shop** link at the very top of the DOM.
  - A **text transcript** (visually hidden, screen-reader-available) describing all 10 segments.
- Ambient sound defaults to **muted**; unmute requires explicit user click.
- No content behind `hover` only — every hover state has a tap/focus equivalent.
- Alt text on every product image; hidden-text macros get descriptive alt (*"Close-up of the OWN KARMA serial etched into the neck tape."*).

---

## 14. Performance Budget

| Metric | Budget |
| :--- | :--- |
| LCP (mobile, throttled 4G) | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.05 |
| Total blocking time | ≤ 200ms |
| Initial JS (gzip, home route) | ≤ 350 KB |
| Hero WebGL chunk (lazy, gzip) | ≤ 400 KB |
| Total page weight (home, first view) | ≤ 2.5 MB |
| Product images | `.avif` primary, `.webp` fallback, `<picture>` with `srcset` |
| Fonts | `font-display: swap`, subset to Latin + Devanagari |

---

## 15. SEO & Metadata

- Every route defines `<title>`, `<meta name="description">`, `og:*`, `twitter:*`.
- Product pages emit `application/ld+json` — `Product` + `Offer` schema (INR).
- Sitemap generated at build (`vite-plugin-sitemap`).
- `robots.txt` allows all in v1. Waitlist and checkout `noindex`.
- `hreflang` alternates: `en-in` and `hi-in`.

---

## 16. Analytics Event Spec

> Events are defined and dispatched via a single `track(event, props)` helper. In v1 the helper logs to console. In v2 it plugs into GA4 / Plausible / Mixpanel.

| Event | Trigger | Props |
| :--- | :--- | :--- |
| `hero_scene_reached` | Any of 10 segments enters viewport | `{ segment, scrollPct }` |
| `hero_completed` | Scroll reaches `Lock` segment | `{ elapsedMs }` |
| `product_viewed` | PDP mounted | `{ productId, category, priceINR }` |
| `product_added_to_cart` | Add-to-cart click | `{ productId, size, qty }` |
| `cart_opened` | Drawer opens | `{ itemCount, subtotalINR }` |
| `checkout_started` | `/checkout` mount | `{ itemCount, subtotalINR }` |
| `checkout_step_completed` | Address/Shipping/Payment | `{ step }` — `1`, `2`, or `3` |
| `mock_order_placed` | `/checkout/success` mount | `{ mockOrderId, totalINR }` |
| `waitlist_joined` | Email submit | `{ dropSlug, source }` |
| `language_switched` | Toggle | `{ from, to }` |
| `sound_toggled` | Toggle | `{ enabled }` — boolean |
| `hidden_text_discovered` | Cursor lingers ≥ 3s on shader zone | `{ realm }` |

---

## 17. Sound Design

| Layer | File | Behavior |
| :--- | :--- | :--- |
| **Sub-drone** | `hero-drone.webm` (Opus, ≤ 400 KB) | Loops through the entire hero. Ducked -6dB during Sun Ignition, silent during Lock. |
| **Segment stingers** | 10 short (~1s) impulses per segment transition | Not looped. |
| **Interaction ticks** | Cart add, cursor snap | ≤ 40ms, -24dB. |

Master mix capped at **-18 LUFS**. Global mute toggle in nav; state persisted in `localStorage` under `ok:sound`. Default = **muted** (browser autoplay policies + a11y).

---

## 18. Custom Cursor

- Desktop only (pointer: fine + hover: hover).
- Small ring (12px) + inner dot (4px), color `--ok-bone`.
- On interactive elements: ring scales to 36px, dot vanishes.
- Over the Axis strip: cursor snaps horizontally with 8px magnetism.
- Over hidden-text zones: cursor turns to a small `+` crosshair — first discovery fires `hidden_text_discovered`.
- Disabled if `prefers-reduced-motion` or `pointer: coarse`.

---

## 19. Frontend-Only Contract (Mock Adapters)

Every future backend call is proxied through a **single adapter module** with a real signature but a mock body. Swapping to a real API in v2 = change one file per adapter.

```
src/services/
  productsAdapter.js      // getAll, getBySlug, getRelated
  cartAdapter.js          // (state lives in zustand + localStorage)
  waitlistAdapter.js      // subscribe(email, dropSlug) -> fake promise
  checkoutAdapter.js      // createOrder(payload) -> fake order id
  instagramAdapter.js     // getRecent(6) -> reads stub JSON
```

Rules:
- No component imports mock data directly. Only adapters do.
- Every adapter returns a `Promise` even if the data is sync — so v2 swap is drop-in.
- Latency is simulated with a random 200–800ms delay so loading states are real.

---

## 20. Folder Structure

> All source files are **JavaScript** (`.js` for logic, `.jsx` for JSX). No `.ts` / `.tsx` anywhere.

```
src/
  main.jsx                   // entry
  App.jsx                    // router shell
  routes/
    Home.jsx
    Shop.jsx
    Category.jsx
    Product.jsx
    Cart.jsx
    Checkout.jsx
    CheckoutSuccess.jsx
    Waitlist.jsx
    Story.jsx
    StoryConcept.jsx
    About.jsx
    Contact.jsx
    legal/
      Terms.jsx
      Privacy.jsx
      Shipping.jsx
      Returns.jsx
  primitives/               // Six brand primitives (see §3)
    Axis.jsx
    Blueprint.jsx
    Realm.jsx
    HiddenText.jsx
    Stillness.jsx
    Inevitable.jsx
  components/
    nav/TopNav.jsx
    nav/Footer.jsx
    nav/AxisBar.jsx
    cursor/CustomCursor.jsx
    sound/AmbientMixer.jsx
    ui/Button.jsx
    ui/Badge.jsx
    ui/Accordion.jsx
    ui/PriceINR.jsx
    ui/SerialTag.jsx
    product/ProductCard.jsx
    product/ProductGallery.jsx
    product/SizeSelector.jsx
    cart/CartDrawer.jsx
    cart/CartLine.jsx
    checkout/StepAddress.jsx
    checkout/StepShipping.jsx
    checkout/StepPayment.jsx
    waitlist/WaitlistForm.jsx
    social/InstagramGrid.jsx
  hero/                      // The R3F cinematic
    HeroCanvas.jsx
    scenes/
      VoidBirth.jsx
      Netherworld.jsx
      Desert.jsx
      Water.jsx
      Forest.jsx
      Lava.jsx
      IceShatter.jsx
      GalaxyReveal.jsx
      SunIgnition.jsx
      Lock.jsx
    shaders/
      hiddenText.frag.glsl
      hiddenText.vert.glsl
      obsidian.frag.glsl
      sand.frag.glsl
      ice.frag.glsl
    fallback/
      HeroVideoFallback.jsx
      HeroStaticFallback.jsx
  hooks/
    useLenis.js
    useScrollProgress.js
    useMediaCapability.js
    useReducedMotion.js
  stores/
    cartStore.js
    cursorStore.js
    soundStore.js
    langStore.js
  services/                  // Mock adapters (§19), all .js
  data/
    products.js
    drops.js
    instagramStub.json
    testimonials.js
  schemas/                   // JSDoc typedef modules + optional zod schemas
    product.js
    cart.js
    checkout.js
  locales/
    en/*.json
    hi/*.json
  lib/
    format.js
    cn.js
    track.js
  index.css
public/
  video/hero-fallback.webm
  video/hero-fallback.mp4
  images/products/**
  fonts/**
  audio/**
```

---

## 21. Roadmap / Phases

### Phase 0 — Foundations
- Install R3F, drei, postprocessing, GSAP, Lenis, zustand, react-router, i18next, glsl plugin.
- Set up Tailwind theme tokens (§10.1).
- Router shell + empty routes.
- Global chrome (TopNav, Footer, AxisBar, CustomCursor, AmbientMixer).
- i18n scaffolding with 10 sample keys.

### Phase 1 — Commerce Skeleton (no visual polish)
- Product data + types.
- Shop / Category / PDP routes wired to `productsAdapter`.
- Cart drawer with zustand + localStorage persistence.
- Checkout 3-step shell + success page.
- Waitlist form with `waitlistAdapter`.

### Phase 2 — Hero Cinematic
- `HeroCanvas` with Lenis + ScrollControls.
- All 10 scene components as stubs (basic geometry + color).
- Segment-based visibility driven by scroll progress.
- Hidden-text fragment shader on 3 realms.
- Video + static fallbacks.
- Sound layer with mute persistence.

### Phase 3 — Brand Pages
- Story routes (5 concepts) built from own_karma.md content.
- About / Contact / Legal.
- Instagram grid (stub JSON).
- Manifesto slab + Concept Trail on home.

### Phase 4 — Polish
- Motion audit (all durations, easings).
- Perf audit against §14 budgets.
- A11y audit (keyboard, screen reader, reduced-motion).
- SEO metadata + JSON-LD.
- Analytics event wiring to console `track()`.

### Phase 5 — v2 Handoff Prep (still frontend)
- Adapter documentation.
- Environment-variable placeholders (`VITE_SHOPIFY_DOMAIN`, `VITE_RAZORPAY_KEY_ID`, etc.).
- README for backend team.

---

## 22. Success Metrics

| Metric | Target |
| :--- | :--- |
| Hero completion rate (visitors who reach `Lock` segment) | ≥ 40% desktop, ≥ 25% mobile |
| Hidden-text discovery rate | ≥ 8% of desktop visitors |
| Add-to-cart rate | ≥ 6% of sessions |
| Mock checkout completion | ≥ 40% of adds-to-cart |
| Waitlist conversion (home visitors → email) | ≥ 3% |
| Lighthouse Performance (mobile, home) | ≥ 85 |
| Lighthouse Accessibility | ≥ 95 |
| Time-to-Interactive (desktop, cable) | ≤ 3s |

---

## 23. Risks & Mitigations

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| WebGL scene tanks on low-end laptops | High | Strict draw-call budget (§7.3), `useMediaCapability` device-tier detection, video fallback ladder (§7.4). |
| Ambient sound triggers autoplay block | Medium | Default muted, unmute is an explicit click. |
| Hindi typography breaks layouts | Medium | Subset Noto Sans Devanagari; test all screens with `?lang=hi` in Playwright. |
| Hidden-text shader too subtle → nobody finds it | Low but on-brand | Track `hidden_text_discovered`; if < 2% after 2 weeks, boost contrast in shader uniforms. |
| Scope creep back into "make it a real store" | High | This PRD is the contract: v1 = frontend-only. Backend work is a separate PRD. |
| Fonts unlicensed for commercial use | Legal | Confirm license before Phase 3 — fallback pairs already defined (§10.2). |

---

## 24. Open Questions

1. **Brand fonts** — do we license PP Editorial New + Neue Haas, or use free equivalents (Playfair Display + Inter)?
2. **Voiceover** — Concept 01 has a whispered final line. Include audio narration in v1, or text-only?
3. **Serial numbers** — will v2 back these with a public verification page (proof-of-authenticity)? Impacts URL structure now (`/verify/[serial]` would need reserving).
4. **WhatsApp channel** — real number for contact page, or placeholder in v1?
5. **Drop cadence** — how many drops per year? Influences the `/waitlist` timeline UI.
6. **Hindi copy source** — do you write the Hindi translations, or should the frontend ship with English fallback + `TODO(hi)` markers?
7. **Domain** — `ownkarma.in` or `ownkarma.com`? Impacts `hreflang` and OG tags.
8. **Legal pages** — do you have existing terms/privacy/shipping/returns copy from an earlier project we can reuse, or start from a template?

---

> **OWN KARMA**
> *Black. Silence. End.*

