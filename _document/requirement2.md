# OWN KARMA — Landing Hero v2 (Requirement Addendum)

**Project Codename:** `own_karma`
**Document Type:** Requirement Addendum — supersedes §7 of `requirement.md` for the Home hero.
**Date:** 2026-07-07
**Branch:** `feat/landing-hero-v2`
**Companion Docs:** [own_karma.md](own_karma.md) · [requirement.md](requirement.md)

> *"Graphics and videos/music change thai jase. Atyre just example mate mukya che."*
> — Devraj Bhai, 2026-07-07 (WhatsApp review)
>
> Translation: The theme is accepted. Graphics, video, and music will be swapped for real cinematic assets later. What lives in the repo today is a placeholder.

---

## Contents

| # | Section |
| :---: | :--- |
| 1 | [Why v2](#1-why-v2) |
| 2 | [Reference Anchors](#2-reference-anchors) |
| 3 | [Hero Direction — Scroll-Scrubbed Cinematic Film](#3-hero-direction--scroll-scrubbed-cinematic-film) |
| 4 | [Asset Contract](#4-asset-contract) |
| 5 | [Chapter Beat Map (10 beats)](#5-chapter-beat-map-10-beats) |
| 6 | [Overlay System](#6-overlay-system) |
| 7 | [Component Contract](#7-component-contract) |
| 8 | [Fallback Ladder](#8-fallback-ladder) |
| 9 | [Performance Budget](#9-performance-budget) |
| 10 | [Catalog Reset (v2 — 4 SKUs)](#10-catalog-reset-v2--4-skus) |
| 11 | [Acceptance Criteria](#11-acceptance-criteria) |
| 12 | [Out of Scope for This Branch](#12-out-of-scope-for-this-branch) |
| 13 | [Migration Notes (v1 → v2)](#13-migration-notes-v1--v2) |

---

## 1. Why v2

The v1 hero (10 real-time React-Three-Fiber "realm" scenes tied to scroll — see [requirement.md §7](requirement.md#7-hero-cinematic-spec--concept-01-axis-through-all-realms)) achieves the *narrative* of the axis-through-all-realms concept, but locks the project into hard WebGL constraints:

- Every realm is procedural GLSL — expensive to iterate visually with the client.
- Motion decisions live inside shader code, not in a director's cut.
- Mobile/low-power devices already need a video fallback anyway.

Client feedback on 2026-07-07 explicitly asked for **video-driven** hero storytelling in the vein of Indian film-teaser cinema, with the two references below. Rather than keep two parallel systems (R3F + video fallback), v2 **collapses the hero to a single video-first pipeline** with the same overlay/story surface on top.

**v2 goal:** the Home hero looks and feels like a Rajamouli/Nolan-scale film teaser, scrubs frame-perfect on scroll, and swaps to real assets by dropping two files into `/public/videos/` — no code change.

---

## 2. Reference Anchors

| Ref | Title | Provider | Client note | Take for OWN KARMA |
| :--- | :--- | :--- | :--- | :--- |
| `youtu.be/gzUu-FJ7s-Y` | **Namit Malhotra's Ramayana — The Introduction** | Sony Music India (Hans Zimmer + AR Rahman) | *"For showcase human / Reveal text / Relate with script"* | Divine-scale silhouette + poetic title cards timed to the score. This is the **body** of our hero: the axis + human + reveal beats. |
| `youtu.be/DMD2uthghWE` | **VARANASI to the WORLD** | T-Series (SS Rajamouli / MM Keeravaani) | *"Intro for own karma"* | Grand spiritual-India → world reveal energy. This is the **opening 3–5 s** before the axis appears. |

Neither reference is the final cut. They fix the *emotional bar* and the *typography-over-cinema* pattern.

**Non-negotiables carried from v1:**
- No product on-screen until Awareness → Breaking → Collapse resolves.
- Palette stays `--ok-void` / `--ok-bone` / `--ok-axis (#D4A855)`. No red flashes, no screen-shake.
- Hidden `OWN KARMA` texture in at least one beat.
- Audio ceiling **−18 LUFS** integrated. Muted by default.

---

## 3. Hero Direction — Scroll-Scrubbed Cinematic Film

### 3.1 One-line spec

> A single pre-rendered cinematic (MP4/WebM, 20–30 s, 24 fps) whose `currentTime` is driven by scroll position across a `1000vh` sticky track. Story beats trigger DOM/text overlays. Video is muted; ambient audio bed lives in the existing `AmbientMixer`.

### 3.2 Why scroll-scrubbed video instead of autoplay loop

| Autoplay loop | Scroll-scrub (chosen) |
| :--- | :--- |
| One passive shot, viewer cannot pace it. | Viewer *is* the projectionist. Same UX as [Apple AirPods Pro](https://www.apple.com/airpods-pro/), Rotoris, Bruno Simon. |
| No natural way to layer 10 story beats. | Beats fall out of scroll ranges (0.00–0.10, 0.10–0.19 …). Same map as v1. |
| Kills the "alignment as you descend" metaphor. | Reinforces it — the user physically pulls the story down. |

### 3.3 Story arc (from the Ramayana ref)

```
0%    ─── Void. Sub-bass. Faint golden vertical line appears.        Beat 1
10%   ─── Ground cracks. Obsidian growth.                            Beat 2
19%   ─── Sand storm around the axis.                                Beat 3
29%   ─── Water rotates 360° around a still figure.                  Beat 4
38%   ─── Forest grows, never touches the human.                     Beat 5
48%   ─── Lava arcs away as if repelled.                             Beat 6
57%   ─── Flash-freeze. Silence.                                     Beat 7
67%   ─── Ice shatters into stars. Camera pulls back.                Beat 8 ← REVEAL
79%   ─── Sudarshan-like sun ignites above.                          Beat 9
90%   ─── Lock. Absolute silence. First hoodie exists.               Beat 10
100%  ─── Scroll unpins → product sections mount.
```

Overlay text (each beat) is rendered **outside** the video, in the DOM (see §6). This lets us localize to Hindi + edit copy without re-rendering the film.

---

## 4. Asset Contract

The hero renderer expects the following files. If any are missing, the fallback ladder in §8 activates automatically.

```
/public/videos/
    hero-main.mp4           REQUIRED  H.264 High @ ~5 Mbps, 1920×1080, 24 fps, ≤ 8 MB
    hero-main.webm          OPTIONAL  VP9 @ ~3 Mbps, 1920×1080, 24 fps, ≤ 5 MB  (served first if browser supports)
    hero-poster.jpg         REQUIRED  first-frame or beat-1 still, 1920×1080, ≤ 250 KB
    README.md               spec + naming rules for the video pipeline
```

**Encoding rules for the final asset:**
- Duration: **20–30 s** (map to a 1000vh scroll → ~30 vh per second of film).
- Frame rate: **24 fps** — deliberately cinematic, matches film reference.
- Keyframe interval: **≤ 12 frames** (every 0.5 s). This is what makes `currentTime` seek smooth. **Do not** encode with the default 250-frame GOP — scrubbing will stutter.
    - `ffmpeg -i src.mov -c:v libx264 -profile:v high -crf 20 -g 12 -keyint_min 12 -pix_fmt yuv420p -movflags +faststart hero-main.mp4`
- Audio: **strip completely** (`-an`). All audio comes from `AmbientMixer`.
- Color: film-grade dark. **No pure whites** (max luma ≈ 220/255) — reads as more cinematic on OLED phones.
- `moov` atom **at the front** (`-movflags +faststart`) so the browser can start decoding before the whole file lands.

**Delivery:** client uploads the two files (`hero-main.mp4`, `hero-poster.jpg`) into `/public/videos/`. That is the entire handoff. No config changes, no code changes.

---

## 5. Chapter Beat Map (10 beats)

Beats are locked to scroll ranges so overlay copy, AmbientMixer cues, and analytics events all key off the same numbers used in v1. This preserves every downstream integration.

| # | Beat | Scroll range | Overlay title (EN) | Overlay title (HI) | Ambient cue id |
| :---: | :--- | :--- | :--- | :--- | :--- |
| 1 | Void Birth      | 0.00 – 0.10 | Void Birth      | शून्य जन्म       | `void`      |
| 2 | Netherworld     | 0.10 – 0.19 | Netherworld     | पाताल           | `nether`    |
| 3 | Desert          | 0.19 – 0.29 | Desert          | मरुस्थल         | `desert`    |
| 4 | Water           | 0.29 – 0.38 | Water           | जल              | `water`     |
| 5 | Forest          | 0.38 – 0.48 | Forest          | वन              | `forest`    |
| 6 | Lava            | 0.48 – 0.57 | Lava            | लावा            | `lava`      |
| 7 | Ice Shatter     | 0.57 – 0.67 | Ice Shatter     | बर्फ़ बिखराव     | `ice`       |
| 8 | Galaxy Reveal   | 0.67 – 0.79 | Galaxy Reveal   | आकाशगंगा        | `galaxy`    |
| 9 | Sun Ignition    | 0.79 – 0.90 | Sun Ignition    | सूर्य प्रज्वलन   | `sun`       |
| 10 | Lock           | 0.90 – 1.00 | Lock            | बंधन            | `lock`      |

The exact ranges are already encoded in `src/routes/Home.jsx` as `RANGES[]` — do not change them in this branch, so the AmbientMixer keeps working unchanged.

---

## 6. Overlay System

All overlays are **DOM elements over the video**, not baked into the film. This keeps localization, A/B tests, and quick copy edits cheap.

| Overlay | z-index | Behaviour |
| :--- | :---: | :--- |
| **Poster (base layer)** | 0 | Cross-fades out once `<video>` is `readyState ≥ 3` (`HAVE_FUTURE_DATA`). Prevents any black flash. |
| **Video** | 1 | Full-bleed `object-cover`. `object-position: center 40%` (subject sits slightly above center). |
| **Vignette gradient** | 2 | `radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)`. Un-tinted, unchanging. |
| **Cursor axis strip** | 10 | Invisible `data-cursor-axis` snap target for CustomCursor. |
| **Silhouette placeholder** | 10 | Existing `<div>` pulse — kept until the real film includes the human. Fades to `opacity-0` at scroll ≥ 0.67 (Galaxy Reveal — the camera pulls back). |
| **Beat title cards** | 20 | One per beat. Fade in/out on scroll enter/exit. Subtitle + title + one-line description. |
| **% Aligned marker** | 20 | Bottom-right `NN% ALIGNED` in mono. Same as v1. |
| **Loading indicator** | 20 | Only visible while `videoState === 'loading'`. Bottom-left, small, mono, `--ok-axis/50`. |

**Copy tone rule for the beat titles:** ≤ 12 words per description. Cinematic present-tense, not narrator-past-tense. The film does the emotion; the text does the label.

---

## 7. Component Contract

```
src/hero/
├── HeroFilm.jsx           NEW — scroll-scrubbed video primitive
├── HeroCanvas.jsx         KEPT — R3F cinematic (unused on Home, retained for /story pages + rollback)
└── fallback/
    ├── HeroVideoFallback.jsx    UNUSED on Home (video IS the hero now). Kept for /story.
    └── HeroStaticFallback.jsx   USED as reduced-motion / decode-error fallback inside HeroFilm.
```

### `HeroFilm.jsx` API

```jsx
<HeroFilm progress={0..1} />
```

**Props:**
- `progress` *(number, 0..1, required)* — scroll progress into the 1000vh track. Home.jsx already computes this.

**Behaviour:**
1. Mount `<img src="/videos/hero-poster.jpg">` immediately as z-0 base — nothing ever flashes black.
2. Mount `<video muted playsInline preload="auto" crossorigin="anonymous">` with `hero-main.webm` first source then `hero-main.mp4` fallback.
3. On every `progress` change, in a single rAF, set `video.currentTime = clamp(progress * video.duration, 0, duration - 0.01)`. Skip if the delta is < 0.02 s (no-op scrub, saves decoder work).
4. On `error` event or if `<video>` element is not supported → switch to `HeroStaticFallback` mode (still show poster, no video mounted).
5. On `prefers-reduced-motion: reduce` → same as (4).
6. On unmount → cancel any pending rAF, pause video, drop reference.

**Explicitly not the component's job:**
- Tracking scroll (Home.jsx owns Lenis binding).
- Rendering beat text (Home.jsx owns the copy map).
- Dispatching `ok-segment-change` events (Home.jsx already does this).

Keep the primitive dumb. Story lives in Home.

---

## 8. Fallback Ladder

The v1 ladder was: `mobile → HeroVideoFallback`, `reduced-motion || !WebGL → HeroStaticFallback`. v2 collapses this because the video IS the hero on every device:

| Condition | Renderer | User sees |
| :--- | :--- | :--- |
| Modern browser, any device | `HeroFilm` | Scroll-scrubbed film + overlays. |
| `prefers-reduced-motion: reduce` | `HeroFilm` in poster-only mode | Static poster + axis line + overlays (no scrub). |
| Video decode error (network fail, unsupported codec) | `HeroFilm` in poster-only mode | Same as above. |
| `<video>` element not supported (deeply obsolete browser) | Native `<img>` poster only | Poster + overlays. |

There is no separate "mobile fallback path" anymore — scroll-scrubbed video works on iOS Safari and Chrome Android as long as the encode rules in §4 are respected (keyframe every ≤ 12 frames).

**Known limitation:** iOS Safari `<video>.currentTime` assignments below `duration * 0.02` per frame can occasionally jitter on very old devices. Acceptable for v2. If it becomes an issue post-launch, upgrade path is to draw the video into a `<canvas>` via `requestVideoFrameCallback` — the outer API of `HeroFilm` stays the same.

---

## 9. Performance Budget

| Metric | Target | Notes |
| :--- | :--- | :--- |
| LCP (poster paint) | < 1.5 s on 4G | Poster is inlined via `<img fetchpriority="high">`. |
| Video ready-to-scrub (`readyState ≥ 3`) | < 3 s on 4G | Enforced by `-movflags +faststart` and ≤ 8 MB total. |
| Scroll-scrub frame budget | 60 fps desktop, 45 fps mid mobile | rAF-throttled, delta-gated `currentTime` writes. |
| Bundle size delta from v2 | **negative** | Removing 10 R3F scene modules from Home ships less JS. |
| Memory | < 60 MB video decoder | Enforced by codec + resolution ceilings in §4. |

---

## 10. Catalog Reset (v2 — 4 SKUs)

Client (Devraj Bhai, WhatsApp 2026-07-07):
> *"Main 4 design che — 2 hoodie: Devin — the blueprint, Karma's eye. 2 tees: Destiny, Broken hourglass. Idea mate visuals na, ava name che. And tame theme na hisabe set pan kari sako."*
>
> Translation: There are 4 main designs — 2 hoodies (Devin — the Blueprint, Karma's Eye) and 2 tees (Destiny, Broken Hourglass). Names are illustrative; you can set them per the theme.

The v1 catalog of 14 SKUs is trimmed to these 4. Everything else in `src/data/products.js` is removed on this branch.

| # | id | slug | Name | Category | Concept | Client label |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| 1 | `ok-blueprint-02` | `blueprint-02-hoodie` | `BLUEPRINT-02`   | hoodies | 02 | Devin — The Blueprint |
| 2 | `ok-eye-03`       | `eye-03-hoodie`       | `EYE-03`         | hoodies | 03 | Karma's Eye |
| 3 | `ok-destiny-04`   | `destiny-04-tee`      | `DESTINY-04`     | tees    | 04 | Destiny |
| 4 | `ok-hourglass-05` | `hourglass-05-tee`    | `HOURGLASS-05`   | tees    | 05 | Broken Hourglass |

**Downstream effects (all handled in this branch):**
- `src/data/drops.js` → `productIds` arrays reduced to the 4 IDs above.
- `src/data/testimonials.js` → any `productRef` pointing to a removed SKU is either re-pointed to a surviving SKU or removed. Only 4 curated quotes survive.
- Existing route components (`/shop`, `/product/[slug]`, `ProductCard`, `ProductGallery`) are data-driven and require **no code changes** — they will render only the 4 SKUs automatically.
- Orphaned image folders under `/public/images/products/*` are left in place (unused, no runtime cost, easier to restore if v3 expands the catalog).

The mock adapter API (`getAll`, `getBySlug`, `getRelated`) is unchanged.

---

## 11. Acceptance Criteria

A merge to `main` requires all of the following to be true:

1. `/` renders `HeroFilm` (not `HeroCanvas`) inside the existing 1000vh sticky track.
2. Poster image is visible in < 1.5 s on Fast 3G throttling (Chrome DevTools).
3. Scrolling the hero produces smooth, monotonically-changing playback of the placeholder film — no black flashes, no white flashes, no jump to end.
4. All 10 beat title cards fade in/out at the correct scroll ranges. `NN% ALIGNED` counter reaches 100 at the bottom of the track.
5. `ok-segment-change` custom event still fires with the correct `segmentIndex` (verified in DevTools console — AmbientMixer listener still works).
6. Toggling `prefers-reduced-motion: reduce` in DevTools reloads to the poster-only variant. No `<video>` element in DOM. No console errors.
7. Deleting `/public/videos/hero-main.mp4` (simulating a fetch fail) collapses to the poster-only variant with no crashes.
8. `/shop` shows exactly 4 products. `/product/blueprint-02-hoodie`, `/product/eye-03-hoodie`, `/product/destiny-04-tee`, `/product/hourglass-05-tee` all resolve. No 404s from internal links.
9. `npm run lint` passes.
10. No new WebGL context is created on `/` (verify via `about:gpu` or the DevTools Performance panel — WebGL context count for the page stays at 0).

---

## 12. Out of Scope for This Branch

- The real cinematic film. Client delivers post-merge.
- Real product photography (still uses placeholder paths).
- Any change to `/story`, `/about`, `/contact`, `/checkout`, `/cart`.
- HeroCanvas removal. It stays in the repo for the /story concept pages and as a rollback safety net.
- Audio track inside the video (all audio is `AmbientMixer`).
- New i18n keys beyond the 10 beat titles already present.
- Analytics event schema changes.

---

## 13. Migration Notes (v1 → v2)

**Home.jsx changes:**
```diff
- import HeroCanvas from '../hero/HeroCanvas.jsx'
+ import HeroFilm from '../hero/HeroFilm.jsx'
...
-           <HeroCanvas progress={progress} />
+           <HeroFilm progress={progress} />
```
No other logic in Home.jsx moves. The 1000vh track, Lenis binding, RANGES, REALMS, and the `ok-segment-change` dispatch all remain the source of truth.

**products.js changes:**
- File is fully rewritten to contain only the 4 SKUs listed in §10.
- Zod `ProductSchema` unchanged.

**Rollback plan:**
```bash
git revert <merge-sha>
```
Because `HeroCanvas.jsx` is untouched, reverting only the two-line Home.jsx swap restores v1 behaviour. Product catalog rollback requires restoring `products.js` from `main` — trivial.

---

*End of document. This addendum takes precedence over `requirement.md §7` for the Home hero only. All other sections of `requirement.md` remain authoritative.*
