# OWN KARMA — Cinematic Video Prompt Library

**Purpose:** AI video generation prompts for all 5 canonical OWN KARMA concepts.
**Canon:** [`_document/own_karma.md`](own_karma.md) — every duration, beat name, and description below matches the canon exactly.
**Target output:**
- `/public/videos/hero-main.mp4` — Concept 01 landscape (1920×1080, 24 fps, 42 s per canon).
- `/public/videos/hero-main-mobile.mp4` — Concept 01 portrait (1080×1920, 24 fps, 42 s per canon).
- `/public/videos/story-{slug}.mp4` — Concepts 02–05 landscape only (1920×1080, 24 fps).

**Reference bar:** *Ramayana — The Introduction* (Sony Music India / Hans Zimmer + AR Rahman) + *Varanasi to the World* (T-Series / SS Rajamouli / MM Keeravaani).

> **Note on the current shipped hero:** the deployed `hero-main.mp4` is currently **30 s** (3 clips × 10 s from Veo 3) — a *compressed* variant covering only the first 7 beats. To hit canonical 42 s, generate **2 more Veo 3 clips** covering Sun Ignition + Lock, and I'll re-merge. All prompts below are written to the canonical 42 s spec.

---

## Contents

| # | Section | For |
| :---: | :--- | :--- |
| 1 | [Master prompt — Concept 01 (canonical 42 s)](#1-master-prompt--concept-01-canonical-42-s) | Long-shot generators (Sora, Veo 3 Pro tier) |
| 1.5 | [Style Lock cheat-sheet](#15-style-lock-cheat-sheet) | Prepend to every per-beat call |
| 2 | [Per-beat prompts — Concept 01 (10 canonical beats)](#2-per-beat-prompts--concept-01-10-canonical-beats) | Short-form tools (Runway, Kling, Pika, Luma) |
| 2b | [Web 5-clip variant for 8–10 s Veo 3 (canonical 42 s)](#2b-web-5-clip-variant-for-810-s-veo-3-canonical-42-s) | Landscape 16:9, Gemini Veo 3 / Flow |
| 2c | [Mobile 5-clip variant for 8–10 s Veo 3 (canonical 42 s)](#2c-mobile-5-clip-variant-for-810-s-veo-3-canonical-42-s) | Portrait 9:16, Gemini Veo 3 / Flow |
| Story-02 | [Divine — The Blueprint (canonical 60 s)](#story-02-divine--the-blueprint-canonical-60-s) | `/story/divine` autoplay-loop film |
| Story-03 | [Karma's Eye (canonical 40 s)](#story-03-karmas-eye-canonical-40-s) | `/story/karmas-eye` autoplay-loop |
| Story-04 | [Destiny (canonical 45 s)](#story-04-destiny-canonical-45-s) | `/story/destiny` autoplay-loop |
| Story-05 | [Broken Hourglass (canonical 55 s)](#story-05-broken-hourglass-canonical-55-s) | `/story/broken-hourglass` autoplay-loop |
| 3 | [Universal negative prompt](#3-universal-negative-prompt) | Paste into every generation |
| 4 | [Style keyword pool](#4-style-keyword-pool) | For keyword-driven tools |
| 5 | [Post-generation ffmpeg recipe](#5-post-generation-ffmpeg-recipe) | Scrub-optimized re-encode |
| 6 | [Iteration QA checklist](#6-iteration-qa-checklist) | Before shipping each film |

---

## Canonical Anchors (from `own_karma.md` — apply to ALL 5 concepts)

These four anchors govern every prompt in this document. They are pasted verbatim from `own_karma.md` and must be honored by every generation.

### Visual reference context

```
2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision
```

Use this string in the AI generator's "style reference" field where available. It anchors the aesthetic across all 5 films: **Kubrick's controlled stillness** + **Nolan's cosmic scale** + **Indian mythological iconography** + **line-precise geometry**. No neon, no anime, no cartoon.

### The OWN KARMA Formula

```
Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability
```

Six pillars, EVERY film must satisfy:
- **Axis** — vertical golden line visible in every frame.
- **Blueprint** — geometric line-art overlays that eventually become garment structure.
- **Realms** — environmental collapse around the still human.
- **Hidden Text** — OWN KARMA etched faintly into at least one texture per concept.
- **Stillness** — the human silhouette does not move. Motion is external.
- **Inevitability** — the garment is never *introduced*; it emerges as the resolution.

### Universal Production Rule

> **NEVER show the product until: (1) Awareness has been established, (2) Breaking has been witnessed, (3) Time / realm collapse has occurred. The product must feel inevitable — not introduced.**

In all 5 films: no visible hoodie/tee/garment until AFTER the collapse/break/reveal moment specific to that concept. When the garment does appear, it emerges from the collapsed elements themselves — stars become threads, walls become blueprint lines, hourglass shards become fabric.

### On-screen text policy

Own Karma canon (own_karma.md) specifies short text callouts at specific beats (e.g., `'Infinite.'`, `'Or so you thought.'`, `'Break what contains you.'`, `'Time was never infinite. You are.'`). **These are canonical**, but two implementation notes:

1. **AI video generators (Veo 3, Runway, Sora, Kling) render specific readable text unreliably** — letters come out garbled. Baking canonical text into the AI-generated video is technically fragile.
2. **The site can render these text callouts as DOM overlays over the video** at the exact frame timing (this is how the Home hero's beat titles already work — see `src/routes/Home.jsx` REALMS array + Lenis scroll bindings).

**Policy for this doc:** every prompt block instructs the AI **NOT to render text on screen** (avoids garbled output). Canonical text callouts are preserved in each master prompt as `TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake into video)` blocks so the wire-up step knows exactly what to layer where.

### Signature ending pattern (Concept 01 only)

After the LOCK final frame, the canonical closing beat is:

```
OWN KARMA. Black. Silence. End.
```

This is a *cinematographic* pattern (fade to black, held silence, cut) — in our implementation the LOCK frame IS the poster.jpg export and the site's AmbientMixer handles the audio silence. No additional beat needed at video level.

---

## 1. Master prompt — Concept 01 (canonical 42 s)

For single-shot generators that can produce 40+ s continuous video (Sora, Veo 3 Pro tier). Copy the block below verbatim.

```
A 42-second cinematic hero film for OWN KARMA, an Indian streetwear brand.
Reference: Namit Malhotra's "Ramayana — The Introduction" (Hans Zimmer + AR Rahman)
and SS Rajamouli's "Varanasi to the World" (MM Keeravaani).
Visual reference context: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Story canon: OWN KARMA "The Axis Through All Realms" — a single human silhouette
stays aligned to a vertical golden axis while 8 realms collapse around them,
then a Sudarshan sun ignites and Locks the alignment. Alignment distorts chaos.
Formula: Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability.
Universal Rule: no product visible — the film ends BEFORE any garment is shown.

FORMAT: 1920×1080, 16:9, 24 fps native (no frame interpolation, no motion smoothing, no 60fps blend). No audio. No on-screen text. No logos. No products. No faces close-up. No letterbox bars.

THE CONSTANT (present in EVERY frame at pixel-identical position):
- The AXIS: a vertical light beam dead-center, 2 px solid core + 8 px anisotropic gaussian glow, color #D4A855. Brightest at Y=40% from top (heart-level of the silhouette), exponential falloff toward top and bottom edges. Volumetric, physically penetrates through obsidian, water, ice — never occluded, never intersected, never broken.
- The HUMAN: a single backlit silhouette. Face is pure black, no features. Rim light only — gradient from #D4A855 at shoulders (30% opacity) fading to #000000 at feet. 7-head-tall canonical proportions, gender-neutral, feet touching, arms at sides. NO movement of any kind. Reference point, not a character.
- SUBJECT PLACEMENT: center frame X, object-position Y=40% (slightly above middle). Lower third kept empty for DOM overlay text.

PALETTE (strict, monochromatic + one accent):
- Void black #000000 as base of every shot. Shadows lifted to 0.02, hard toe roll-off.
- Bone off-white #F3EFE7, capped at Y-luma 0.86 — never pure white, never blown highlights.
- Single accent gold #D4A855 for axis, embers, sun, hidden text, rim light.
- Fire is golden not red. Water is deep blue-black not cyan. Ice is pale gold not blue. No other colors exist anywhere in frame.

GRADE: ARRI Alexa Log C → Rec.709 film-emulation curve. Color temperature 3200K (warm tungsten cinema). Slight +5 magenta tint. Film grain 0.3% monochrome Gaussian. No digital sharpening. No chromatic aberration. No lens flare. No bloom on the axis.

MOTION PHYSICS:
- Every transition uses cubic-bezier(0.65, 0, 0.35, 1) or slower — no linear motion anywhere.
- Every beat holds on its settled state for the final 6 frames (0.25 s) before the morph to the next beat begins.
- Every morph begins with a 6-frame ease-in and ends with a 6-frame ease-out.
- Camera dolly speed is arcseconds-per-frame — imperceptible when watching normally, precise when scrubbing. ONE rapid camera move only: the pull-back during GALAXY REVEAL (beat 8).
- Macro-arc across 42 s: inhale (beats 1–3) → held tension (beats 4–7) → exhale (beats 8–10). Single breath.

CANONICAL BEAT MAP (10 beats, 42 s total, 1008 frames @ 24 fps) — per own_karma.md Concept 01:

0–4 s (frames 0–96) — VOID BIRTH
  Black. A faint golden vertical line appears. Camera pushes forward at arcseconds-per-frame. Tiny human silhouette aligns with axis. Low sub-bass vibration (visualized via the fade curve itself, not particulates).

4–8 s (frames 96–192) — NETHERWORLD
  Ground cracks beneath the axis in a slow 45° cone from the human's feet. Dark mist rises. Obsidian terrain grows outward from feet. Human is still. World builds itself around them.

8–12 s (frames 192–288) — DESERT TRANSITION
  Obsidian dissolves into fine golden sand mid-frame via 2-layer cross-dissolve (watercolor-bleed feel, no particle spawn). Heat waves distort air. Sand storms curve around the axis like magnetic field lines, never touching the human.

12–16 s (frames 288–384) — WATER IMPOSSIBILITY
  Desert liquefies into deep dark blue-black water without cutting. Gravity flips. Water rotates 360° around the axis at ~40°/second. Human does not swim — just stands, dry, motionless. 1 cm clear void gap around figure. Gold reflections ripple.

16–20 s (frames 384–480) — FOREST GROWTH
  Water evaporates upward as pale gold fog. Dark trees grow rapidly from below in stop-motion cadence. Roots never touch the human — visibly bend within 1 cm of the figure. Leaves freeze mid-air near the axis.

20–24 s (frames 480–576) — LAVA & PRESSURE
  Forest chars instantly in slow radial wave from axis outward. Molten GOLDEN lava (color #D4A855, NEVER red) erupts but arcs AWAY from axis like repelled — magnetically deflected, 20% frame-width gap around figure. Nothing touches the human. Ember particles rise on cubic ease-out.

24–28 s (frames 576–672) — ICE SHATTER
  Lava flash-freezes mid-air into pale-gold crystalline structures. Freeze wave propagates from axis outward in concentric shells. Crystals expand outward. Sound drops to silence (visualized: all particulates halt). World feels paused. Human remains upright. Frost creeps along ground.

28–33 s (frames 672–792) — GALAXY REVEAL (ONLY rapid camera move in the film)
  Ice shatters silently into stars — individual particles INHERIT their previous positions (do not respawn randomly). Camera pulls back RAPIDLY (30 frames, cubic ease-out) revealing all realms were inside a rotating cosmic mandala. Human is microscopic yet still aligned to the golden axis, which now extends across the entire cosmos.

33–38 s (frames 792–912) — SUN IGNITION
  Camera fully re-locked. A small golden sun (#D4A855, NO bloom halo, NO lens flare) ignites at Y=25% from top on the axis, directly above the microscopic human. Sudarshan-like circular geometry forms — 6 concentric rings of golden line-art revealed sequentially (3 frames per ring). Mathematical, precise, slow.

38–42 s (frames 912–1008) — LOCK
  Everything decelerates to absolute zero over 20 frames using cubic ease-out. Absolute silence. Axis, sun geometry, and human silhouette settle into ONE perfect vertical line at center-frame. Faint golden particles hang suspended. OWN KARMA appears — very small, centered — held for the last 60 frames. This final frame IS the poster.jpg export.

CAMERA: locked-off or ultra-slow dolly-in for beats 1–7 and 9–10. RAPID pull-back ONLY during beat 8.

HIDDEN DETAIL (subtle, discoverable): faintly etch OWN KARMA into at least one texture per beat — sand patterns, lava cracks, ice fractures, star constellations. Not readable at first glance. Legible when paused on the right frame.

FINAL WHISPERED LINE (visual only, no audio in file — for creative reference only, do NOT render as on-screen text):
"Not worn to be seen. Worn to stand correctly."

NEGATIVE / DO NOT INCLUDE: see §3 for full list.

DELIVERABLE: MP4 H.264 High profile, 1920×1080, 24 fps native, audio stripped, keyframe every ≤ 12 frames (-g 12 -keyint_min 12), moov atom at head (-movflags +faststart), duration 42 s ± 1 s. Post-process with the recipe in §5.
```

---

## 1.5. Style Lock cheat-sheet

Most short-form video tools forget prior context between calls. Prepend this **verbatim** to every per-beat or per-clip call in §2, §2b, §2c, and §Story-* sections:

```
STYLE LOCK (do not deviate):
- 24 fps native, no frame interpolation.
- Every motion uses cubic-bezier(0.65, 0, 0.35, 1) easing — no linear motion.
- Last 6 frames of this clip: hold the settled state, zero motion (dead-air pause).
- Axis: vertical golden beam at center frame X, 2 px core + 8 px anisotropic glow, color #D4A855, brightest at Y=40%.
- Human silhouette: backlit, rim-lit gold at shoulders fading to black at feet, 7-head-tall, arms at sides, feet touching, absolutely motionless.
- Palette: void black + bone off-white capped at Y=0.86 + gold #D4A855 accent. Nothing else.
- Grade: ARRI Log C → Rec.709 film curve, 3200K warm tint, +5 magenta, 0.3% monochrome film grain.
- No text on screen, no logos, no products, no faces, no lens flare, no bloom, no chromatic aberration.
```

---

## 2. Per-beat prompts — Concept 01 (10 canonical beats)

For short-form tools (Runway Gen-4, Kling 1.6, Pika, Luma Dream Machine) that can only generate one beat at a time. Prepend §1.5 Style Lock to each. Names and durations match own_karma.md canon exactly.

### Beat 1 — VOID BIRTH (0–4 s, 96 frames)
```
Pure black frame. Over the first 60 frames (2.5 s), the vertical golden axis fades in from top and bottom toward center using cubic-bezier ease-out. Volumetric golden beam, 2 px solid core + 8 px anisotropic glow, color #D4A855. Simultaneously (frames 24–72), a tiny backlit human silhouette resolves at center-frame aligned to the axis via a 48-frame opacity ramp. Rim light appears at shoulders (#D4A855 @ 30% opacity, gradient to #000 at feet). Camera pushes forward at arcseconds-per-frame. Frames 78–90: motion decelerates. Frames 90–96: dead-air hold. Sub-bass energy carried by the fade curve, not particulates. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 2 — NETHERWORLD (4–8 s, 96 frames)
```
Axis and silhouette are constant at center-frame. From the human's feet, over 18 frames, dark obsidian terrain fractures outward in a 45° cone using cubic-bezier ease-out. Frames 4–24 (offset by 4 frames): black volumetric mist rises simultaneously. Obsidian terrain grows outward from feet — human is still, world builds itself around them. Camera performs imperceptible dolly-in (~1% zoom). Frames 84–90: motion tapers. Frames 90–96: dead-air hold, obsidian fully formed. Palette: void black, gold axis only. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 3 — DESERT TRANSITION (8–12 s, 96 frames)
```
Obsidian ground morphs into fine golden sand via 2-layer cross-dissolve offset by 4 frames — no particle spawn, no fizz, watercolor-bleed feel. Heat shimmer distorts air in a subtle 2–3 px sine wave. Sand storms curl around the golden axis in magnetic-field-line arcs, never touching the silhouette. Motion cubic ease-in-out. Faintly etch "OWN KARMA" into sand ripples near the human's feet — barely legible when paused. Frames 84–90: swirl slows. Frames 90–96: dead-air hold, sand suspended at peak swirl. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 4 — WATER IMPOSSIBILITY (12–16 s, 96 frames)
```
Sand liquefies into deep dark blue-black water via a foreground-to-background liquefaction wave over 14 frames — no cut, no fizz. Gravity visibly flips (water rotates counter-clockwise around the axis at ~40°/second). 360° vortex encircles the axis but NEVER touches the human silhouette — 1 cm clear void gap around figure. Gold reflections ripple across the water surface. Human is dry, motionless — does not swim, just stands. Frames 84–90: rotation decelerates. Frames 90–96: dead-air hold, water frozen at peak rotation. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 5 — FOREST GROWTH (16–20 s, 96 frames)
```
Water evaporates upward as pale gold fog over 8 frames. Then, with a 6-frame gap, dark trees grow rapidly from below the frame in stop-motion cadence over 20 frames. Roots visibly bend around the human silhouette — no root within 1 cm of the figure. Leaves freeze mid-air within a 30 cm radius of the axis, unmoving. Camera imperceptibly dollies in. Etch "OWN KARMA" faintly into tree bark near frame edge. Frames 84–90: leaf-freeze completes. Frames 90–96: dead-air hold, forest suspended. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 6 — LAVA & PRESSURE (20–24 s, 96 frames)
```
Forest chars instantly in a slow radial wave from axis outward over 16 frames. Molten GOLDEN lava (color #D4A855, NEVER red) erupts from ground cracks but arcs AWAY from the axis in visible parabolic curves — magnetically repelled, 20% frame-width gap around the figure. Nothing touches the human. Ember particles rise on cubic ease-out. Camera locked. Etch "OWN KARMA" faintly into lava crack lines. Frames 84–90: eruption peak, arcs still curving. Frames 90–96: dead-air hold, embers suspended mid-air. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 7 — ICE SHATTER (24–28 s, 96 frames)
```
Over 12 frames, lava flash-freezes mid-air into pale-gold crystalline structures — freeze wave propagates from the axis outward in concentric shells. Crystals expand outward. All embers stop mid-air. Sound drops to silence (visualized: all particulates halt). World feels paused. Human remains upright. Frost creeps along the ground with a 20-frame delay after the primary freeze. Absolute stillness by frame 60. Frames 60–96: pure held silence. Etch "OWN KARMA" faintly into ice fracture patterns. Camera locked. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 8 — GALAXY REVEAL (28–33 s, 120 frames — the ONLY rapid camera move)
```
At frame 0, crystals silently shatter into stars — individual particles INHERIT their previous positions (do NOT respawn randomly). Simultaneously the camera pulls back RAPIDLY using cubic ease-out over 30 frames, revealing all realms were inside a rotating cosmic mandala. Human silhouette becomes microscopic at center-frame but the golden axis extends across the entire cosmos, still visible. Etch "OWN KARMA" faintly into star constellation patterns. Frames 108–114: camera decelerates to full stop. Frames 114–120: dead-air hold. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 9 — SUN IGNITION (33–38 s, 120 frames)
```
Camera fully re-locked. At Y=25% from top on the axis, a small golden sun (color #D4A855, NO bloom halo, NO lens flare) ignites over 6 frames using cubic ease-in-out. Sudarshan-like circular geometry forms around it — 6 concentric rings of golden line-art revealed sequentially over 18 frames (3 frames per ring). Mathematical, precise, slow. No other elements move. Frames 108–114: rotation decelerates. Frames 114–120: dead-air hold, chakra held. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

### Beat 10 — LOCK (38–42 s, 96 frames)
```
All motion decelerates to absolute zero over 20 frames using cubic ease-out. Absolute silence. Axis, Sudarshan sun geometry, and human silhouette settle into ONE perfect vertical line at center-frame. Faint golden particles hang suspended, unmoving. OWN KARMA appears — very small, centered, subtle. Frames 20–96 (76 frames ≈ 3.2 s): HELD FINAL FRAME, zero motion. This final frame IS the poster.jpg export. Nothing changes. FORMAT: 1920×1080, 24 fps, no audio, no text.
```

---

## 2b. Web 5-clip variant for 8–10 s Veo 3 (canonical 42 s)

**Use this when**: your generator caps at 8–10 s per generation (Gemini Veo 3, Runway free tiers, Kling free tier). Total film after merge = **42 seconds** — canonical per own_karma.md Concept 01. Requires 5 clips generated with image-to-video handoff between them.

### §2b.0 Workflow (do these in order)

1. Generate Clip 1 (§2b.1) in Text-to-Video mode.
2. Extract final frame as `handoff-1.png`:
   ```powershell
   ffmpeg -sseof -0.05 -i clip1.mp4 -vframes 1 -q:v 1 handoff-1.png
   ```
3. Switch Veo 3 to Image-to-Video / Frames-to-Video mode. Upload `handoff-1.png` as start frame. Generate Clip 2 (§2b.2).
4. Repeat: extract `handoff-2.png` → Clip 3 → `handoff-3.png` → Clip 4 → `handoff-4.png` → Clip 5.
5. Merge with the ffmpeg pipeline in §5 (concat + delogo + scrub-optimize).
6. Extract poster from the final held LOCK frame.

### Beat distribution across 5 clips (~8.4 s each)

| Clip | Time | Canonical beats covered | Handoff-out state |
| :---: | :---: | :--- | :--- |
| **1** | 0–8.4 s   | VOID BIRTH + NETHERWORLD + first half of DESERT TRANSITION | Obsidian dissolving to sand mid-frame, dead-air hold |
| **2** | 8.4–16.8 s | Rest of DESERT TRANSITION + WATER IMPOSSIBILITY | Water frozen at peak 360° rotation around axis |
| **3** | 16.8–25.2 s | FOREST GROWTH + LAVA & PRESSURE + start of ICE SHATTER | Lava mid-flash-freeze, first crystals forming |
| **4** | 25.2–33.6 s | Rest of ICE SHATTER + GALAXY REVEAL + start of SUN IGNITION | Camera settled after pull-back, sun beginning to ignite |
| **5** | 33.6–42.0 s | Rest of SUN IGNITION + LOCK | Final LOCK frame (poster) |

### §2b.1 Clip 1 — VOID BIRTH → NETHERWORLD → DESERT TRANSITION begin (0–8.4 s)

Text-to-Video mode. Prepend §1.5 Style Lock. Then submit:

```
CLIP 1 OF 5 — Concept 01 canonical opening. Duration: 8.4 s, 24 fps native, 202 frames.

OPENING FRAME (frame 0): Pure black frame. Empty void.

0.0–4.0 s (frames 0–96) — VOID BIRTH
  Golden axis fades in from top and bottom toward center. Volumetric beam, 2 px solid core + 8 px anisotropic glow #D4A855, brightest at Y=40%. Tiny human silhouette resolves at center-frame aligned to axis via 48-frame opacity ramp with gold rim-light at shoulders. Camera pushes forward at arcseconds-per-frame. Frames 90–96: dead-air hold.

4.0–8.0 s (frames 96–192) — NETHERWORLD
  Ground cracks beneath the axis in slow 45° cone from feet (18 frames, cubic-bezier). Black volumetric mist rises (offset 4 frames). Obsidian terrain grows outward from feet. Human still. Camera imperceptible dolly-in. Frames 186–192: dead-air hold.

8.0–8.4 s (frames 192–202) — DESERT TRANSITION begins
  Obsidian starts dissolving into golden sand at frame 192 via 2-layer cross-dissolve. First few grains of sand visible at bottom edge. Frames 196–202: HANDOFF HOLD — freeze the dissolve mid-morph. Sand grains suspended mid-transition, obsidian faintly visible beneath.

CLOSING FRAME (frame 202 — HANDOFF): Sand-obsidian cross-dissolve frozen mid-transition, ~30% sand, ~70% obsidian. Golden axis + silhouette centered. Palette void black + gold. Camera locked. Zero motion.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.2 Clip 2 — DESERT TRANSITION complete → WATER IMPOSSIBILITY (8.4–16.8 s)

Image-to-Video mode. Upload `handoff-1.png`. Prepend §1.5 Style Lock. Then submit:

```
CLIP 2 OF 5. Duration: 8.4 s, 24 fps native, 202 frames.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Sand-obsidian cross-dissolve frozen mid-transition, ~30% sand ~70% obsidian, golden axis + silhouette centered.

0.0–3.6 s (frames 0–86) — DESERT TRANSITION completes
  Cross-dissolve completes over first 24 frames — sand replaces obsidian fully. Heat shimmer 2–3 px sine wave distorts air. Sand storms curl around the axis in magnetic-field-line arcs, never touching silhouette. Frames 78–86: dead-air hold, sand suspended at peak swirl.

3.6–7.6 s (frames 86–182) — WATER IMPOSSIBILITY
  Sand liquefies into deep dark blue-black water via foreground-to-background liquefaction wave (14 frames). Gravity visibly flips. Water rotates counter-clockwise around axis at ~40°/second. 360° vortex encircles axis, 1 cm clear void gap around human. Gold reflections ripple. Human is dry, motionless. Frames 172–182: rotation decelerates.

7.6–8.4 s (frames 182–202) — WATER HOLD
  Water frozen at peak 360° rotation. Dead-air hold — zero motion. HANDOFF frame.

CLOSING FRAME (frame 202 — HANDOFF): Water in 360° vortex around golden axis, frozen at peak rotation. Human silhouette dry and still at center. Palette void black + gold + deep blue-black water only. Camera locked.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.3 Clip 3 — FOREST GROWTH → LAVA & PRESSURE → ICE begin (16.8–25.2 s)

Image-to-Video mode. Upload `handoff-2.png`. Prepend §1.5 Style Lock. Then submit:

```
CLIP 3 OF 5. Duration: 8.4 s, 24 fps native, 202 frames.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Water frozen in 360° vortex around golden axis, human silhouette dry and still at center, palette void black + gold + deep blue-black water.

0.0–3.2 s (frames 0–76) — FOREST GROWTH
  Water evaporates upward as pale gold fog (8 frames). 6-frame gap. Dark trees grow rapidly from below in stop-motion cadence (20 frames). Roots visibly bend around silhouette — no root within 1 cm of figure. Leaves freeze mid-air within 30 cm radius of axis. Frames 68–76: dead-air hold, forest suspended.

3.2–7.2 s (frames 76–172) — LAVA & PRESSURE
  Forest chars in slow radial wave from axis outward (16 frames). Molten GOLDEN lava (#D4A855, NEVER red) erupts from ground cracks but arcs AWAY from axis in visible parabolic curves — 20% frame-width gap around figure. Ember particles rise on cubic ease-out. Frames 162–172: eruption peak, arcs curving.

7.2–8.4 s (frames 172–202) — ICE SHATTER begins
  Lava starts flash-freezing at frame 172. Freeze wave propagates from axis outward in first concentric shell. Some embers already halted mid-air. Frames 194–202: HANDOFF HOLD — freeze wave mid-propagation, first crystals forming.

CLOSING FRAME (frame 202 — HANDOFF): Lava mid-flash-freeze, first pale-gold crystals forming around axis, embers halted mid-air, void black + gold palette.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.4 Clip 4 — ICE SHATTER completes → GALAXY REVEAL → SUN IGNITION begin (25.2–33.6 s)

Image-to-Video mode. Upload `handoff-3.png`. Prepend §1.5 Style Lock. Then submit:

```
CLIP 4 OF 5. Duration: 8.4 s, 24 fps native, 202 frames. Contains the ONLY rapid camera move in the entire film.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Lava mid-flash-freeze, first pale-gold crystals forming around axis, embers halted mid-air.

0.0–2.8 s (frames 0–68) — ICE SHATTER completes
  Freeze wave propagates outward in concentric shells over 12 frames. All lava now crystalline pale-gold structures. Frost creeps along ground with 20-frame delay after primary freeze. Sound drops to silence (visualized: all particulates halted). Absolute stillness by frame 44. Frames 44–68: pure held silence.

2.8–7.8 s (frames 68–188) — GALAXY REVEAL (ONLY rapid camera move)
  Frame 68: crystals silently shatter into stars — particles INHERIT previous positions, don't respawn randomly. Frames 68–98 (30 frames, cubic ease-out): camera pulls back RAPIDLY revealing all realms were inside a rotating cosmic mandala. Human microscopic at center. Golden axis now spans entire cosmos. Etch "OWN KARMA" faintly into star constellation patterns. Frames 98–188: mandala rotates slowly, camera fully stopped.

7.8–8.4 s (frames 188–202) — SUN IGNITION begins
  A small golden sun (#D4A855, NO bloom halo) ignites at Y=25% from top on axis over 6 frames using cubic ease-in-out. Frames 196–202: HANDOFF HOLD — sun ignited but chakra rings not yet drawn.

CLOSING FRAME (frame 202 — HANDOFF): Cosmic mandala backdrop, small golden sun freshly ignited at Y=25%, microscopic human silhouette below on axis. No Sudarshan rings yet.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.5 Clip 5 — SUN IGNITION completes → LOCK (33.6–42.0 s) — poster frame

Image-to-Video mode. Upload `handoff-4.png`. Prepend §1.5 Style Lock. Then submit:

```
CLIP 5 OF 5. Duration: 8.4 s, 24 fps native, 202 frames. Ends on the poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Cosmic mandala backdrop, small golden sun freshly ignited at Y=25%, microscopic human silhouette below on axis, no Sudarshan rings yet.

0.0–4.4 s (frames 0–106) — SUN IGNITION completes
  Sudarshan-like circular geometry forms around sun — 6 concentric rings of golden line-art revealed sequentially over 18 frames (3 frames per ring). Mathematical, precise, slow. Chakra rotates slowly. Frames 98–106: rotation decelerates.

4.4–8.4 s (frames 106–202) — LOCK
  All motion decelerates to absolute zero over 20 frames using cubic ease-out. Axis, Sudarshan sun geometry, human silhouette settle into ONE perfect vertical line at center-frame. Faint golden particles hang suspended. OWN KARMA appears — very small, centered, subtle. Frames 126–202 (76 frames ≈ 3.2 s): HELD FINAL FRAME, zero motion. This final frame IS hero-poster.jpg.

CLOSING FRAME (frame 202 — POSTER): LOCK configuration. From top to bottom on the vertical golden axis at center-frame: cosmic mandala rotating faintly in the deep background, small golden sun with 6-ring Sudarshan chakra at Y=25%, microscopic human silhouette below the sun, faint golden particles suspended, unmoving. All in perfect vertical alignment. Palette: void black + gold #D4A855 only. Camera locked-off. Absolute stillness.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.6 Merge command

Same as §5 recipe below, but 5 inputs instead of 3:

```powershell
ffmpeg -y `
  -i clip1.mp4 -i clip2.mp4 -i clip3.mp4 -i clip4.mp4 -i clip5.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a]concat=n=5:v=1:a=1[cat][aout];[cat]delogo=x=WM_X:y=WM_Y:w=WM_W:h=WM_H,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\hero-main.mp4

ffmpeg -y -sseof -0.1 -i public\videos\hero-main.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\hero-poster.jpg
```

Watermark coords (`WM_X`, `WM_Y`, `WM_W`, `WM_H`) detected by extracting a bottom-right corner crop from clip 1 — typically around `x=1110, y=570, w=100, h=100` for landscape Veo 3 output.

---

## 2c. Mobile 5-clip variant for 8–10 s Veo 3 (canonical 42 s)

Same beat distribution as §2b but portrait 9:16. Set Flow / Veo 3 aspect to **9:16 (Portrait)** before submitting. Target resolution 1080×1920 (portrait 1080p — do NOT generate at 720×1280).

### Portrait framing rules (apply to every clip)

- **Axis extends floor-to-ceiling** — literally top pixel to bottom pixel of the frame.
- Human silhouette centered horizontally, Y=40% from top.
- **Lower ~40% of frame stays visually quiet** (dark, minimal detail) for DOM overlay text.
- **Upper ~20% of frame stays visually quiet.**
- Content lives in the middle 40% band of the frame vertically. Realm elements (obsidian, sand, water, trees, lava, ice, mandala) fill only this band unless a beat explicitly extends further.

### §2c.1 Mobile Clip 1 — VOID BIRTH → NETHERWORLD → DESERT TRANSITION begin (0–8.4 s)

Prepend §1.5 Style Lock. Then submit:

```
CLIP 1 OF 5 (MOBILE 9:16) — Concept 01 canonical opening. Duration: 8.4 s, 24 fps, 202 frames, portrait orientation.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264.

OPENING FRAME (frame 0): Pure black frame, taller than wide. Empty void.

0.0–4.0 s (frames 0–96) — VOID BIRTH
  Golden axis fades in from top and bottom toward center, extending floor-to-ceiling of the portrait frame. Volumetric beam #D4A855, brightest at Y=40%. Backlit human silhouette resolves at center-X, Y=40% from top via 48-frame opacity ramp. Camera pushes forward at arcseconds-per-frame. Frames 90–96: dead-air hold.

4.0–8.0 s (frames 96–192) — NETHERWORLD
  Ground cracks beneath the axis in slow 45° cone from feet — fracture spreads horizontally but does NOT rise past knees. Keep lower 40% dark. Black volumetric mist rises ONLY in the middle third vertically. Obsidian terrain grows outward from feet (contained in middle third). Frames 186–192: dead-air hold.

8.0–8.4 s (frames 192–202) — DESERT TRANSITION begins
  Obsidian starts dissolving into golden sand at frame 192 via cross-dissolve. Sand fills middle third only. Frames 196–202: HANDOFF HOLD — freeze mid-morph, ~30% sand ~70% obsidian.

CLOSING FRAME (frame 202 — HANDOFF for handoff-mobile-1.png): Sand-obsidian cross-dissolve frozen mid-transition in middle third of portrait frame, golden axis floor-to-ceiling, silhouette centered. Upper 20% + lower 40% pure void black.
```

### §2c.2 Mobile Clip 2 — DESERT TRANSITION complete → WATER IMPOSSIBILITY (8.4–16.8 s)

Upload `handoff-mobile-1.png`. Prepend §1.5. Then submit:

```
CLIP 2 OF 5 (MOBILE 9:16). Duration: 8.4 s, 24 fps, 202 frames, portrait.

FORMAT: 1080×1920, 9:16, 24 fps, no audio, MP4 H.264.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Sand-obsidian cross-dissolve frozen mid-transition in middle third, golden axis floor-to-ceiling.

0.0–3.6 s (frames 0–86) — DESERT TRANSITION completes
  Cross-dissolve completes over 24 frames — full sand in middle third. Heat shimmer 2–3 px sine wave. Sand storms curl around axis in magnetic-field arcs, contained within middle third. Frames 78–86: dead-air hold.

3.6–7.6 s (frames 86–182) — WATER IMPOSSIBILITY
  Sand liquefies into deep dark blue-black water. Gravity flips. Water rotates counter-clockwise around axis at ~40°/second, contained in middle third of frame. 1 cm clear void gap around silhouette. Gold reflections ripple. Frames 172–182: rotation decelerates.

7.6–8.4 s (frames 182–202) — WATER HOLD
  Water frozen at peak 360° rotation. HANDOFF hold — zero motion.

CLOSING FRAME (frame 202 — HANDOFF for handoff-mobile-2.png): Water in 360° vortex around axis in middle third, silhouette dry and still. Upper 20% + lower 40% void black.
```

### §2c.3 Mobile Clip 3 — FOREST GROWTH → LAVA & PRESSURE → ICE SHATTER begin (16.8–25.2 s)

Upload `handoff-mobile-2.png`. Prepend §1.5. Then submit:

```
CLIP 3 OF 5 (MOBILE 9:16). Duration: 8.4 s, 24 fps, 202 frames, portrait.

FORMAT: 1080×1920, 9:16, 24 fps, no audio, MP4 H.264.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Water frozen in 360° vortex around axis in middle third of portrait frame.

0.0–3.2 s (frames 0–76) — FOREST GROWTH
  Water evaporates upward as pale gold fog contained in middle third (8 frames). 6-frame gap. Dark trees grow rapidly at sides of frame — trunk visible only in middle third, canopies fade before upper 20%, roots fade before lower 40%. Roots bend around silhouette. Leaves freeze mid-air within 30 cm of axis. Frames 68–76: dead-air hold.

3.2–7.2 s (frames 76–172) — LAVA & PRESSURE
  Forest chars in slow radial wave from axis outward — pattern respects safe areas (upper 20% + lower 40% remain void black). Molten GOLDEN lava (#D4A855) erupts from ground cracks in middle third but arcs AWAY from axis in parabolic curves. Ember particles rise on cubic ease-out but do NOT enter upper 20%. Frames 162–172: eruption peak.

7.2–8.4 s (frames 172–202) — ICE SHATTER begins
  Lava starts flash-freezing at frame 172. Freeze wave propagates from axis outward, contained in middle third. Frames 194–202: HANDOFF hold — first crystals forming.

CLOSING FRAME (frame 202 — HANDOFF for handoff-mobile-3.png): Lava mid-flash-freeze in middle third, first pale-gold crystals around axis, embers halted. Upper 20% + lower 40% void black.
```

### §2c.4 Mobile Clip 4 — ICE SHATTER completes → GALAXY REVEAL → SUN IGNITION begin (25.2–33.6 s)

Upload `handoff-mobile-3.png`. Prepend §1.5. Then submit:

```
CLIP 4 OF 5 (MOBILE 9:16). Duration: 8.4 s, 24 fps, 202 frames, portrait. Contains the ONLY rapid camera move in the film.

FORMAT: 1080×1920, 9:16, 24 fps, no audio, MP4 H.264.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Lava mid-flash-freeze in middle third, first crystals forming.

0.0–2.8 s (frames 0–68) — ICE SHATTER completes
  Freeze wave propagates outward in concentric shells over 12 frames, contained in middle third. All lava now crystalline pale-gold structures. Frost creeps along ground base of middle third with 20-frame delay, does NOT enter lower 40%. Absolute stillness by frame 44. Frames 44–68: pure held silence.

2.8–7.8 s (frames 68–188) — GALAXY REVEAL (ONLY rapid camera move)
  Frame 68: crystals silently shatter into stars — particles INHERIT previous positions. Frames 68–98 (30 frames, cubic ease-out): camera pulls back RAPIDLY (Z-axis zoom-out, no pan) revealing cosmic mandala. Human microscopic at center. Golden axis spans full vertical height of cosmos. Stars now visible across most of frame but density REDUCED in lower 40% (sparse dim stars only, max luma ≤ 0.2) so DOM overlay text stays readable. Etch "OWN KARMA" into star constellations in upper 60%. Frames 98–188: mandala rotates slowly.

7.8–8.4 s (frames 188–202) — SUN IGNITION begins
  Camera re-locked. Stars in lower 40% dim further to near-black. Small golden sun (#D4A855, NO bloom) ignites at Y=25% from top on axis over 6 frames. Frames 196–202: HANDOFF hold — sun ignited but no chakra yet.

CLOSING FRAME (frame 202 — HANDOFF for handoff-mobile-4.png): Cosmic mandala in upper 20% + middle, small golden sun at Y=25% on axis, microscopic human silhouette on axis. Lower 40% dim/black.
```

### §2c.5 Mobile Clip 5 — SUN IGNITION completes → LOCK (33.6–42.0 s) — poster frame

Upload `handoff-mobile-4.png`. Prepend §1.5. Then submit:

```
CLIP 5 OF 5 (MOBILE 9:16). Duration: 8.4 s, 24 fps, 202 frames, portrait. Ends on the poster frame.

FORMAT: 1080×1920, 9:16, 24 fps, no audio, MP4 H.264.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Cosmic mandala + small golden sun at Y=25% on axis, microscopic human silhouette. Lower 40% dark.

0.0–4.4 s (frames 0–106) — SUN IGNITION completes
  Sudarshan geometry forms around sun — 6 concentric rings of golden line-art revealed sequentially over 18 frames. Rings contained around sun in upper-middle region, do NOT extend into lower 40%. Chakra rotates slowly. Frames 98–106: rotation decelerates.

4.4–8.4 s (frames 106–202) — LOCK
  All motion decelerates to zero over 20 frames. Axis, Sudarshan sun geometry, human silhouette settle into ONE perfect vertical line at center-X. Faint golden particles suspended in middle third. OWN KARMA appears very small centered. Frames 126–202: HELD FINAL FRAME, zero motion. This IS hero-poster-mobile.jpg.

CLOSING FRAME (frame 202 — POSTER for hero-poster-mobile.jpg):
  • Upper 20%: dark cosmic mandala rotating faintly, sparse stars.
  • Middle 40%: golden sun with 6-ring Sudarshan chakra at Y=25%, microscopic human silhouette at Y=40%, faint golden particles.
  • Lower 40%: pure void black.
All in perfect vertical alignment on golden axis. Palette: void black + gold #D4A855.
```

### §2c.6 Merge command (mobile)

Same 5-clip concat as §2b.6 but with `scale=1080:1920` and delogo coords for portrait (typically `x=530, y=1100, w=130, h=140` for Veo 3 portrait watermark).

---

## Story-02: Divine — The Blueprint (canonical 60 s)

**Canon:** [own_karma.md §Concept 02](own_karma.md) · storyConcepts.js `'divine'`.
**Duration:** 60 seconds (mid of canonical 60–75 s range).
**Aspect:** landscape 16:9 only (story pages are desktop-consumed).
**Route:** `/story/divine`.

### Master prompt (Sora / Veo 3 Pro tier — single-shot 60 s generators only)

Prepend §1.5 Style Lock. Then submit:

```
CONCEPT 02: DIVINE — THE BLUEPRINT. Duration: 60 seconds, 24 fps native, 1920×1080 landscape.
Total 1440 frames. Every motion cubic-bezier(0.65, 0, 0.35, 1). Story canon: own_karma.md Concept 02.
Philosophy: "The universe exists because you observe it." Human existence is older than the galaxy.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Formula: Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible product until the final GARMENT emerges from cosmic threads in beat 5.

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake into video):
  Beat 1 (0–5 s): 'Infinite.'
  Beat 2 (5–10 s): 'Or so you thought.'
  Beat 3 (10–18 s): 'Before stars, there was structure.'
  Beat 4 (18–25 s): 'Existence precedes expansion.'
  Beat 7 (45–55 s): 'You are not inside the universe. The universe is inside your alignment.'
  Beat 8 (55–60 s): 'Worn to remember what came first.'

THE CONSTANT (established progressively — see beat map for when each element appears):
- The HUMAN: single backlit silhouette (7-head-tall canonical, gender-neutral, feet touching, arms at sides, absolutely motionless from beat 2 onward) at center-frame Y=40%.
- The AXIS: emerges in beat 3 as the human's spine — vertical golden light beam #D4A855 extending floor-to-ceiling once revealed.
- Lower third of every frame kept quiet for DOM overlay text.

PALETTE: void black #000000 base, gold #D4A855 for axis + blueprint lines + threads + hidden text, deep cosmic blue-black #0B1220 (≤ 5% saturation) for nebula backdrops only, bone off-white #F3EFE7 capped Y-luma 0.86 for individual stars. No reds, no cyans, no pure whites.

GRADE: ARRI Log C → Rec.709, 3200K warm tungsten, +5 magenta, 0.3% monochrome film grain, no lens flare, no bloom.

CANONICAL BEAT MAP (per own_karma.md Concept 02):

0–5 s (frames 0–120) — THE FALSE SCALE
  Black void. A massive hyper-realistic galaxy slowly rotates at center-frame, filling ~60% of visible area. Camera pulls back at arcseconds-per-frame. The galaxy appears to be the subject. No axis, no human yet.

5–10 s (frames 120–240) — HUMAN SCALE SHIFT
  A tiny human silhouette appears in the foreground via 60-frame opacity ramp with gold rim-light. The galaxy is revealed to be rotating INSIDE the outline of the human's chest — the silhouette contains it. Still no axis yet.

10–18 s (frames 240–432) — THE BLUEPRINT REVEALS
  The axis appears as the human's spine over frames 240–288 (glowing golden light beam #D4A855 emerging as a vertical line down the silhouette's center). Then arms extend into cosmic vectors that connect to distant stars (frames 288–336). Then a blueprint grid overlays the void (frames 336–432). Each line segment appears over 6–8 frames with cubic ease-in-out.

18–25 s (frames 432–600) — REVERSAL
  Stars collapse inward across 168 frames, becoming points of light that flow into the human's head. Inside the skull outline, synaptic neural-network patterns pulse softly. Galaxy dissolves into synaptic energy.

25–35 s (frames 600–840) — INFINITE GALAXY CLOTH
  Blueprint lines dissolve into fabric threads that shimmer like constellations. A hoodie shape grows ORGANICALLY from the axis outward around the human — not stitched on top, not placed — it emerges as if woven from the light itself. Fabric is deep black with fine gold thread visible only when the light hits. This is the FIRST frame the garment can appear (Universal Rule).

35–45 s (frames 840–1080) — SCALE DESTROYED
  This is the ONLY rapid camera move in the film. Camera pulls back rapidly using cubic ease-out over 30 frames (frames 840–870), revealing the human is now LARGER than the galaxy. Frames 870–1080: camera fully re-locked, galaxies orbit the human — not in ego, in inevitability. Spine glows faintly, axis extends across the cosmos.

45–55 s (frames 1080–1320) — ABSOLUTE SILENCE
  Everything decelerates to zero. Galaxy fades over 60 frames. Blueprint lines fade. Only the human silhouette (still wearing hoodie) and the golden axis remain. Sub-bass carrier only.

55–60 s (frames 1320–1440) — THE LAW
  Held final frame. Only the axis and hooded human. OWN KARMA appears very small, centered, fading in over 30 frames. This is the poster frame.

CAMERA: locked-off for beats 1–5 and 7–8. Imperceptible dolly-in during beat 3. RAPID pull-back only during beat 6 (contained in frames 840–870).

HIDDEN DETAIL: in the galaxy clusters (beats 1–2 and 6) and neural network (beat 4), star and synapse arrangements faintly spell OWN KARMA.

HOODIE INTEGRATION (beat 5 — the garment must emerge organically):
- Not stitched, not placed — woven from the light itself.
- Deep black fabric with fine gold thread visible only when light hits at the right angle.
- The spine of the human is the axis — the axis is the spine seam of the hoodie.

NEGATIVE: see §3.

FORMAT: MP4 H.264, 1920×1080, 24 fps native, ≤ 60 s. Audio optional (kept for AmbientMixer overlay compatibility).
```

---

### Veo 3 8-clip split (canonical, seam-safe — RECOMMENDED)

**Why 8 clips × 7.5 s instead of 6 × 10 s:**

1. **Veo 3 free / standard tier caps at 8 s per generation.** 10-s clips fail on most tiers — Flow silently truncates them. 7.5 s is the largest safe generation size.
2. **The rapid camera pull-back in SCALE DESTROYED (beat 6, frames 840–870) MUST be contained in one clip.** If the pull-back crosses a clip boundary, the two halves render at slightly different velocities and produce a visible seam. In this 8-clip split, the entire rapid motion is fully inside Clip 6.
3. **The hoodie emergence in INFINITE GALAXY CLOTH (beat 5) MUST be contained in one clip.** The fabric weaving pattern cannot restart mid-progress — the AI will re-interpret and the weave will visibly shift. In this split, the whole hoodie formation happens inside Clip 5.

### Clip map

| Clip | Time (s) | Frames | Canonical beats covered | Notable content | Rapid motion? |
| :---: | :---: | :---: | :--- | :--- | :---: |
| **1** | 0.00–7.50 | 0–180 | THE FALSE SCALE (whole) + first 60 frames (2.5 s) of HUMAN SCALE SHIFT | Galaxy fade-in + rotation + half-resolved silhouette | no |
| **2** | 7.50–15.00 | 180–360 | HUMAN SCALE SHIFT finish + BLUEPRINT REVEALS first 120 frames (5 s) | Silhouette resolves + spine glows as axis + arm vectors | no |
| **3** | 15.00–22.50 | 360–540 | BLUEPRINT REVEALS finish + REVERSAL first 108 frames (4.5 s) | Blueprint grid complete + first stars collapse into head | no |
| **4** | 22.50–30.00 | 540–720 | REVERSAL finish + INFINITE GALAXY CLOTH first 120 frames (5 s) | Neural network complete + hoodie fabric ~50% woven | no |
| **5** | 30.00–37.50 | 720–900 | INFINITE GALAXY CLOTH finish + 2.5 s dead-air hold on completed hoodie | Hoodie fully formed + held stillness | no |
| **6** | 37.50–45.00 | 900–1080 | **SCALE DESTROYED — entire beat, rapid pull-back fully contained** | Rapid pull-back at frames 900–930, then locked scale-destroyed hold | **yes (contained)** |
| **7** | 45.00–52.50 | 1080–1260 | ABSOLUTE SILENCE first 180 frames (7.5 s) | Galaxies + blueprint fade to void, only silhouette + axis remain | no |
| **8** | 52.50–60.00 | 1260–1440 | ABSOLUTE SILENCE finish + THE LAW (poster frame) | OWN KARMA wordmark fades in, held as poster | no |

### Universal per-clip workflow

1. Prepend §1.5 Style Lock to every clip's prompt below.
2. In Flow / Veo 3: aspect = **16:9**, duration = **8 s** (safe under the cap), model = **Veo 3** (not Fast — cinematic quality matters).
3. **Clip 1 only:** Text-to-Video mode (no reference image).
4. **Clips 2–8:** Image-to-Video / Frames-to-Video mode. Upload `handoff-divine-{N-1}.png` as start frame. The prompt tells the AI to MATCH THE UPLOADED REFERENCE IMAGE EXACTLY at frame 0.
5. After each generation, extract that clip's handoff frame:
   ```powershell
   ffmpeg -sseof -0.05 -i clip-divine-N.mp4 -vframes 1 -q:v 1 handoff-divine-N.png
   ```
6. **Visually verify** the extracted PNG matches the "CLOSING FRAME" description at the end of each clip's prompt block below. If it doesn't match, regenerate that clip before continuing — otherwise the seam will show in the final merged film.

---

### §Divine.Clip1 — THE FALSE SCALE + partial HUMAN SCALE SHIFT (0.00–7.50 s)

**Mode:** Text-to-Video (no reference image). Prepend §1.5 Style Lock. Then submit:

```
CLIP 1 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Text-to-Video generation.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.

OPENING FRAME (frame 0): PURE BLACK. Empty void. NO galaxy yet, NO axis, NO human silhouette. Just the void.

BEAT MAP:

0.0–5.0 s (frames 0–120) — THE FALSE SCALE (whole canonical beat)
  Frames 0–24 (1 s opacity ramp): a massive hyper-realistic galaxy fades in at center-frame. Galaxy fills ~60% of visible area horizontally, ~50% vertically. Spiral galactic arms, deep cosmic blue-black nebula #0B1220 as backdrop, bone off-white stars (max Y-luma 0.86) scattered throughout, subtle gold accents in the brightest galactic arm regions.
  Frames 24–120 (4 s slow rotation): galaxy rotates clockwise at ~10°/second (rotates ~40° total across this window). Camera pulls back at arcseconds-per-frame — imperceptible while watching, precise when scrubbing. NO human silhouette visible. NO golden axis visible.

5.0–7.5 s (frames 120–180) — HUMAN SCALE SHIFT (first 50% of canonical beat)
  Frames 120–180 (60 frames): a tiny backlit human silhouette resolves in the foreground via 60-frame opacity ramp. At frame 120 = 0% opacity, at frame 180 = 50% opacity. Silhouette position: center-frame X, Y=40% from top. Faint gold rim-light (10% opacity at frame 180) at silhouette's shoulders only. 7-head-tall proportions, feet touching, arms at sides, absolutely motionless. Galaxy continues rotating behind the silhouette.

Clip 1 ends MID-MOTION (not on a dead-air hold) — Clip 2 continues the resolution ramp seamlessly.

CLOSING FRAME (frame 180 — extract as handoff-divine-1.png, verify visually before Clip 2):
- Massive galaxy centered, rotated ~40° clockwise from film start, filling ~60% of frame width.
- Half-resolved backlit human silhouette (~50% opacity, semi-transparent) at center-frame Y=40%.
- Faint gold rim-light (10% opacity) only at silhouette's shoulder tops.
- Palette: void black #000000, cosmic blue-black #0B1220 for nebula, bone off-white stars (capped Y=0.86), faint gold at shoulders.
- NO golden vertical axis anywhere. NO blueprint lines. NO chest galaxy-contained reveal yet. Camera mid pull-back (not stopped).

TEXT CALLOUT for this clip (DOM overlay post-render, DO NOT bake): 'Infinite.' at ~2 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-1.mp4 -vframes 1 -q:v 1 handoff-divine-1.png
```
**Verify:** handoff-divine-1.png shows galaxy + half-resolved silhouette (no axis, no blueprint). If axis appears prematurely, regenerate.

---

### §Divine.Clip2 — HUMAN SCALE SHIFT finish + BLUEPRINT REVEALS begin (7.50–15.00 s)

**Mode:** Image-to-Video. Upload `handoff-divine-1.png` as start frame. Prepend §1.5 Style Lock. Then submit:

```
CLIP 2 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Massive galaxy rotated ~40° clockwise at center-frame filling ~60% of frame width, half-resolved backlit human silhouette (~50% opacity) at center-frame Y=40%, faint gold rim-light (10% opacity) at silhouette's shoulders. No golden axis yet.

BEAT MAP:

0.0–2.5 s (frames 0–60) — HUMAN SCALE SHIFT (second 50% of canonical beat)
  Frames 0–60: silhouette opacity ramps from 50% to 100% via cubic ease-in-out. Gold rim-light at shoulders ramps from 10% to 30% opacity. Simultaneously, over the same 60 frames, the galaxy scales down slightly (~5%) and its rotation SLOWS to ~2°/second — as the camera reveals the galaxy is actually rotating INSIDE the outline of the human's chest cavity. By frame 60: silhouette fully opaque, galaxy visibly contained within chest region, rotating slowly. Camera has decelerated to fully-locked position.

2.5–7.5 s (frames 60–180) — THE BLUEPRINT REVEALS (first 120 frames of canonical 192-frame beat)
  Frames 60–108 (48 frames = 2 s) — SPINE BECOMES THE AXIS: a vertical golden light beam (color #D4A855, 2 px solid core + 8 px anisotropic gaussian glow, brightest at Y=40%) draws downward along the silhouette's spine from head to feet using cubic ease-in-out. This is the FIRST appearance of the golden axis in this concept.
  Frames 108–156 (48 frames = 2 s) — ARM VECTORS EXTEND: golden lines draw from the silhouette's shoulders outward toward distant stars, forming cosmic vectors. Each vector line segment appears over 6–8 frames. By frame 156: both arms have vector lines extending to the frame edges.
  Frames 156–180 (24 frames = 1 s) — CHEST GRID BEGINS: the first blueprint grid lines start drawing across the chest area, still incomplete. Grid is golden line-art on the void black backdrop.

Clip 2 ends MID-DRAWING (chest grid partial) — Clip 3 continues the grid completion.

CLOSING FRAME (frame 180 — extract as handoff-divine-2.png, verify visually before Clip 3):
- Fully opaque backlit human silhouette at center-frame Y=40%, gold rim-light at shoulders (30% opacity).
- Galaxy visibly contained within the silhouette's chest cavity outline, rotating slowly (~2°/second).
- Vertical golden axis drawn top-to-bottom along the silhouette's spine (2 px core + 8 px anisotropic glow, #D4A855).
- Golden vector lines extending from both shoulders out to stars at frame edges.
- ~30% of chest blueprint grid lines drawn, remainder still forming (visibly incomplete).
- Camera fully locked. Palette: void black + cosmic blue-black + gold #D4A855 + bone off-white stars.

TEXT CALLOUTS for this clip (DOM overlays post-render): 'Or so you thought.' at ~0.5 s, 'Before stars, there was structure.' at ~5 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-2.mp4 -vframes 1 -q:v 1 handoff-divine-2.png
```
**Verify:** handoff-divine-2.png shows fully opaque silhouette + galaxy-in-chest + gold spine axis + arm vectors + partial chest grid. If the axis is missing or the chest grid is complete already, regenerate.

---

### §Divine.Clip3 — BLUEPRINT REVEALS finish + REVERSAL begin (15.00–22.50 s)

**Mode:** Image-to-Video. Upload `handoff-divine-2.png`. Prepend §1.5. Then submit:

```
CLIP 3 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Fully opaque silhouette at center-frame Y=40% with gold rim-light at shoulders (30% opacity), galaxy visible within chest cavity rotating slowly, gold vertical axis on spine, gold vector lines from shoulders to stars, ~30% of chest blueprint grid drawn.

BEAT MAP:

0.0–3.0 s (frames 0–72) — THE BLUEPRINT REVEALS (final 72 frames of canonical beat)
  Frames 0–48: remaining chest blueprint grid lines complete, drawing sequentially at 6 frames per line segment. By frame 48: full blueprint grid visible across the chest.
  Frames 48–72: blueprint grid extends OUTWARD from the silhouette into the void — golden line-art extending across the entire frame background, forming a cosmic-scale grid pattern. By frame 72: full blueprint grid overlaying the void behind the silhouette + axis + galaxy-in-chest.

3.0–7.5 s (frames 72–180) — REVERSAL (first 108 frames of canonical 168-frame beat)
  Frames 72–120: individual stars in the background begin to detach from their positions and drift slowly inward toward the silhouette's head. Motion is slow — each star travels ~50 px per frame. First ~30% of stars have begun moving by frame 120.
  Frames 120–180: more stars flow inward, accelerating slightly. By frame 180: ~65% of background stars have flowed into the silhouette's head region. Inside the skull outline (visible against the void), first tiny synaptic pulse patterns begin appearing as golden line fragments connecting the incoming star-points.

CLOSING FRAME (frame 180 — extract as handoff-divine-3.png):
- Fully opaque silhouette at center-frame Y=40%, gold rim-light at shoulders.
- Galaxy still visible within chest cavity (opacity slightly reduced ~80%).
- Complete gold vertical axis on spine.
- Full blueprint grid overlaying the void behind the silhouette (visible as golden line-art extending across entire frame).
- ~65% of background stars have collapsed into the silhouette's head area.
- First synaptic pulse fragments visible inside skull outline (thin golden line-fragments connecting star-points).
- ~35% of background stars still in original positions, drifting inward.
- Camera fully locked. Palette: void black + gold blueprint lines + gold axis + gold synaptic fragments + fewer stars.

TEXT CALLOUT for this clip (DOM overlay): 'Existence precedes expansion.' at ~4 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-3.mp4 -vframes 1 -q:v 1 handoff-divine-3.png
```
**Verify:** Full blueprint grid + ~65% stars into head + first synapses. If synaptic network already complete or fabric threads appearing, regenerate.

---

### §Divine.Clip4 — REVERSAL finish + INFINITE GALAXY CLOTH begin (22.50–30.00 s)

**Mode:** Image-to-Video. Upload `handoff-divine-3.png`. Prepend §1.5. Then submit:

```
CLIP 4 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Fully opaque silhouette with gold spine axis and shoulder rim-light, galaxy at ~80% opacity in chest cavity, full blueprint grid across void, ~65% of stars have collapsed into head region, first synaptic pulse fragments inside skull outline, ~35% of stars still drifting inward.

BEAT MAP:

0.0–2.5 s (frames 0–60) — REVERSAL (final 60 frames of canonical beat)
  Frames 0–36: remaining 35% of background stars flow into the head region. By frame 36: all stars collapsed inside skull outline.
  Frames 36–60: synaptic pulse fragments knit together into a complete neural network pattern inside the skull outline. Golden line-art fully connects all collapsed star-points into an intricate network that pulses softly (subtle brightness modulation, no motion of the lines themselves). By frame 60: neural network complete, galaxy in chest fully dissolves into the synaptic energy (chest cavity now empty of galaxy, filled with subtle golden pulse).

2.5–7.5 s (frames 60–180) — INFINITE GALAXY CLOTH (first 120 frames of canonical 240-frame beat)
  Frames 60–108 (48 frames): blueprint grid lines behind the silhouette begin transforming — golden line segments detach from the grid and drift toward the silhouette, becoming shimmering fabric threads. Individual threads visible.
  Frames 108–156 (48 frames): threads begin weaving into a hoodie shape that grows FROM THE AXIS OUTWARD around the silhouette. First the collar and shoulders (frames 108–130), then torso (frames 130–156). Weaving is organic — not stitched, not placed — threads flow from the spine axis outward like woven light. By frame 156: hoodie is ~50% formed (collar + shoulders + upper torso).
  Frames 156–180 (24 frames): weaving continues, hoodie now covers ~60% of the silhouette (collar + shoulders + full torso + upper arms).

CLOSING FRAME (frame 180 — extract as handoff-divine-4.png):
- Silhouette at center-frame Y=40%, still fully opaque with rim-light at shoulders (still visible above hoodie collar).
- Vertical gold axis on spine — now visible as the SPINE SEAM of the emerging hoodie.
- Complete synaptic neural network inside the skull outline (golden interconnected line pattern, subtly pulsing).
- Empty chest cavity (galaxy fully dissolved into neural energy).
- Hoodie fabric covering ~60% of the silhouette: collar, shoulders, full torso, upper arms visible.
- Fabric is deep black with fine gold thread visible where hypothetical light hits (subtle shimmer).
- Blueprint grid behind silhouette is ~40% dissolved — most lines have become fabric threads on the hoodie; remaining background grid is fading.
- Camera fully locked.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-4.mp4 -vframes 1 -q:v 1 handoff-divine-4.png
```
**Verify:** Neural network complete + hoodie ~60% woven (collar+shoulders+torso+upper arms). If hoodie is complete already or missing, regenerate.

---

### §Divine.Clip5 — INFINITE GALAXY CLOTH finish + dead-air hold (30.00–37.50 s)

**Mode:** Image-to-Video. Upload `handoff-divine-4.png`. Prepend §1.5. Then submit:

```
CLIP 5 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette with vertical gold axis as spine seam, complete synaptic neural network inside skull outline, hoodie fabric covering ~60% of silhouette (collar + shoulders + torso + upper arms), background blueprint grid ~40% dissolved.

BEAT MAP:

0.0–5.0 s (frames 0–120) — INFINITE GALAXY CLOTH (final 120 frames of canonical 240-frame beat)
  Frames 0–48 (2 s): weaving continues — hoodie extends down to cover full arms and reach hem at the silhouette's waist. Sleeves complete by frame 48.
  Frames 48–96 (2 s): fabric detail densifies — subtle gold thread patterns become more defined across the entire garment. Neural network in head slowly dims to ~30% opacity (galaxy energy fully absorbed into the fabric). Background blueprint grid finishes dissolving (all remaining grid lines become fabric threads on the hoodie).
  Frames 96–120 (1 s): hoodie hood optionally forms if silhouette should show hood — otherwise hoodie is a pullover style with the head fully visible. Final weaving passes complete. Hood or head silhouette is fully rendered.

5.0–7.5 s (frames 120–180) — DEAD-AIR HOLD (buffer for seamless join with Clip 6)
  Frames 120–180: absolutely no motion. Silhouette in completed hoodie holds pose. Camera locked. Neural network in head at low-opacity glow. Faint gold rim-light at shoulders continues. Void black background with the axis extending floor-to-ceiling. This 2.5-second held-stillness gives Clip 6 a clean starting point for the rapid camera pull-back.

CLOSING FRAME (frame 180 — extract as handoff-divine-5.png, verify VERY carefully — Clip 6's rapid camera move MUST start from this exact locked state):
- Silhouette at center-frame Y=40%, fully clothed in complete hoodie.
- Hoodie: deep black fabric with subtle gold thread pattern visible, spine seam is the golden axis, collar snug at neck, sleeves reaching wrists.
- Head above hoodie collar: neural network subtly glowing at ~30% opacity inside skull outline.
- Vertical gold axis (spine seam) extends floor-to-ceiling of the frame (from below silhouette's feet through the head to top of frame).
- Faint gold rim-light at shoulders (30% opacity), above the hoodie collar.
- Void black background, NO stars visible, NO blueprint grid, NO galaxy — completely empty void behind the silhouette.
- Camera absolutely locked, no motion whatsoever.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-5.mp4 -vframes 1 -q:v 1 handoff-divine-5.png
```
**Verify (critical):** Hoodie fully formed, void black background with axis + hooded silhouette only, absolutely no motion. Compare with a second frame extracted 0.5 s earlier — they must be pixel-identical (proving the dead-air hold). If they differ, regenerate.

---

### §Divine.Clip6 — SCALE DESTROYED (37.50–45.00 s) — rapid camera pull-back fully contained

**Mode:** Image-to-Video. Upload `handoff-divine-5.png`. Prepend §1.5. Then submit:

```
CLIP 6 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation. THIS CLIP CONTAINS THE ONLY RAPID CAMERA MOVE IN THE ENTIRE FILM — it must be fully contained here.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette in complete hoodie at center-frame Y=40%, vertical gold axis extending floor-to-ceiling as spine seam, faint neural network glow in head, void black background with no other elements. Camera locked at final position from Clip 5.

BEAT MAP:

0.0–1.25 s (frames 0–30) — RAPID CAMERA PULL-BACK (the ONE rapid move in the film)
  Camera pulls back rapidly along the Z-axis using cubic ease-out over exactly 30 frames. As the camera recedes:
    - The human silhouette becomes progressively smaller in the frame — by frame 30 the silhouette occupies only ~15% of the frame height (was ~50% at frame 0).
    - The golden vertical axis stretches to cover the FULL cosmic scale — by frame 30 the axis extends from top edge to bottom edge of the frame regardless of silhouette size.
    - Deep cosmic blue-black nebulae + faint galaxies appear in the background as the camera reveals the surrounding cosmos.
    - Galaxies visibly ORBIT the (now microscopic) silhouette at different distances — not in ego, in inevitability.

1.25–7.5 s (frames 30–180) — POST-PULL-BACK HOLD (camera locked, scale destroyed)
  Frames 30–180: camera absolutely locked at pulled-back position. Human silhouette is now DOMINANT in the frame in the sense that galaxies orbit them — not the other way around. Silhouette is small but centered on axis. Galaxies rotate slowly around at ~5°/second across the background. Spine glows faintly — the axis is now the cosmic-scale center of everything visible.

CLOSING FRAME (frame 180 — extract as handoff-divine-6.png):
- Small silhouette (~15% of frame height) in complete hoodie at center-frame Y=40%.
- Vertical golden axis extends floor-to-ceiling of the frame, passing through the silhouette's spine.
- Multiple galaxies visible at various distances in the background, orbiting slowly around the silhouette-axis center.
- Deep cosmic blue-black nebula backdrop.
- Camera locked (no motion at frame 180).
- Palette: void black + cosmic blue-black + gold axis + orbiting galaxies (blue-black + gold accents) + hooded silhouette.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-6.mp4 -vframes 1 -q:v 1 handoff-divine-6.png
```
**Verify (critical):** The rapid pull-back is COMPLETE within this clip (small silhouette + orbiting galaxies visible). Extract frame 30 too and check the pull-back finished by then — if the camera is still moving at frame 180, regenerate with more explicit "camera FULLY STOPPED by frame 30" instruction.

---

### §Divine.Clip7 — ABSOLUTE SILENCE (45.00–52.50 s) — galaxies fade to void

**Mode:** Image-to-Video. Upload `handoff-divine-6.png`. Prepend §1.5. Then submit:

```
CLIP 7 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Small hooded silhouette (~15% frame height) at center-frame with vertical gold axis floor-to-ceiling, galaxies orbiting in cosmic blue-black nebula backdrop.

BEAT MAP:

0.0–2.5 s (frames 0–60) — GALAXIES FADE
  Frames 0–60: orbiting galaxies in the background begin to fade toward pure black. Fade is uniform across all galaxies. Cosmic blue-black nebula also fades. By frame 60: galaxies at ~30% opacity, nebula at ~40% opacity.

2.5–5.0 s (frames 60–120) — FULL FADE TO VOID
  Frames 60–120: galaxies and nebula continue fading. By frame 120: all galaxies fully faded to void black. All nebula faded to void black. Only the silhouette, the gold axis, and faint gold particles suspended around the silhouette remain visible.

5.0–7.5 s (frames 120–180) — HELD STILLNESS
  Frames 120–180: absolutely no motion. Silhouette + axis + faint particles held in the void. Very subtle particulate drift (~1 px per 30 frames) at the axis line only — everything else absolutely still. This is the pure "ABSOLUTE SILENCE" beat.

CLOSING FRAME (frame 180 — extract as handoff-divine-7.png):
- Small hooded silhouette (~15% frame height) at center-frame Y=40%.
- Vertical golden axis (2 px core + 8 px anisotropic glow) extending floor-to-ceiling, passing through the silhouette's spine.
- Faint gold particles (~20 individual specks, each 1–2 px) suspended around the axis in the void, unmoving.
- Pure void black #000000 background — NO galaxies, NO nebula, NO stars.
- Palette: void black + gold #D4A855 only.
- Camera absolutely locked.

TEXT CALLOUT for this clip (DOM overlay): 'You are not inside the universe. The universe is inside your alignment.' at ~3 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-7.mp4 -vframes 1 -q:v 1 handoff-divine-7.png
```
**Verify:** Only silhouette + axis + faint particles in pure void. If any galaxy fragments remain visible, regenerate.

---

### §Divine.Clip8 — ABSOLUTE SILENCE finish + THE LAW (52.50–60.00 s) — poster frame

**Mode:** Image-to-Video. Upload `handoff-divine-7.png`. Prepend §1.5. Then submit:

```
CLIP 8 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation. Ends on THE LAW poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Small hooded silhouette at center-frame Y=40%, vertical gold axis floor-to-ceiling, ~20 faint gold particles suspended in pure void black background.

BEAT MAP:

0.0–2.5 s (frames 0–60) — ABSOLUTE SILENCE (final 60 frames of canonical beat)
  Frames 0–60: absolutely no motion. Silhouette + axis + faint particles held. Pure stillness continues from Clip 7 seamlessly.

2.5–7.5 s (frames 60–180) — THE LAW (canonical beat 8)
  Frames 60–90 (30 frames = 1.25 s): the wordmark "OWN KARMA" fades in very small, centered horizontally at frame X, positioned at Y=75% from top (below the silhouette, in the empty lower-third region). Font: minimal, monospaced, gold #D4A855, tiny (roughly 12–16 px tall in a 1920×1080 frame). Fade uses cubic ease-in over 30 frames. Note: the AI may render this as garbled text — that's expected; the SITE will overlay the correct DOM text on top of this position, so what matters is the SPACE and slight golden glow marker in this region, not readable letters.
  Frames 90–180 (90 frames = 3.75 s): HELD FINAL FRAME. Zero motion. Silhouette + axis + faint particles + wordmark position all held. This last frame IS the poster.jpg export.

CLOSING FRAME (frame 180 — this IS the poster frame, extract as story-divine-poster candidate):
- Small hooded silhouette (~15% frame height) at center-frame Y=40%.
- Vertical golden axis extending floor-to-ceiling, passing through the silhouette's spine.
- ~20 faint gold particles suspended around the axis in the void, unmoving.
- Small gold marker/wordmark region at Y=75% (may appear as garbled text — will be overlaid by DOM in-site).
- Pure void black #000000 background.
- Palette: void black + gold #D4A855 only.
- Camera absolutely locked. Zero motion.

TEXT CALLOUT for this clip (DOM overlay, replaces the AI-rendered wordmark region): 'Worn to remember what came first.' at ~4 s, and 'OWN KARMA' centered at Y=75% held for the final 4 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-8.mp4 -vframes 1 -q:v 1 handoff-divine-8.png
```
This final handoff-divine-8.png will become the basis for `story-divine-poster.jpg` after the merge.

---

### §Divine.Merge — combine all 8 clips into `story-divine.mp4`

Detect the Veo watermark position first (usually bottom-right corner of clip 1):

```powershell
# Extract corner crops from clip 1 to locate the Veo 3 watermark
New-Item -ItemType Directory -Force -Path "temp-frames" | Out-Null
ffmpeg -y -i clip-divine-1.mp4 -vf "select='eq(n,60)+eq(n,150)',crop=300:300:1620:780" -vsync vfr "temp-frames\corner-%02d.png"
# Inspect corner-01.png and corner-02.png visually — note the pixel position + size of the ✧ watermark
# For most Veo 3 landscape output: x=1110, y=570, w=100, h=100
```

Merge all 8 clips + delogo + enhance + scrub-optimize in one pass (uses the standard §5 recipe expanded to 8 inputs):

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

ffmpeg -y `
  -i clip-divine-1.mp4 -i clip-divine-2.mp4 -i clip-divine-3.mp4 -i clip-divine-4.mp4 `
  -i clip-divine-5.mp4 -i clip-divine-6.mp4 -i clip-divine-7.mp4 -i clip-divine-8.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a][5:v][5:a][6:v][6:a][7:v][7:a]concat=n=8:v=1:a=1[cat][aout];[cat]delogo=x=1110:y=570:w=100:h=100,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\story-divine.mp4

# Extract poster from the final held frame (frame 1440 of the merged 60 s film)
ffmpeg -y -sseof -0.1 -i public\videos\story-divine.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\story-divine-poster.jpg
```

Adjust `x=1110:y=570:w=100:h=100` to your actual watermark box (see corner crops above). If the source clips don't have audio, replace the concat filter with `[0:v][1:v]...[7:v]concat=n=8:v=1:a=0[vout]` and drop the `-map "[aout]" -c:a aac -b:a 96k -ac 2` args.

### §Divine.Install — wire the video into the site

Add to [`src/data/storyConcepts.js`](../src/data/storyConcepts.js), inside the `'divine'` block:

```js
video: {
  src: '/videos/story-divine.mp4',
  poster: '/videos/story-divine-poster.jpg',
  label: 'Concept 02 film — cosmic reversal, human contains the galaxy',
},
```

Refresh `/story/divine` — `StoryFilm.jsx` picks it up automatically and autoplays with the sound toggle available.

---

### §Divine.QA — Divine-specific continuity checklist

Beyond the universal §6 QA checklist, verify these Divine-specific items:

**Seam checks (critical for split-clip continuity):**
- [ ] Clip 1 → 2 join at 7.50 s: galaxy centered, rotation angle identical, silhouette opacity ~50%, NO axis yet.
- [ ] Clip 2 → 3 join at 15.00 s: silhouette fully opaque, axis on spine drawn, arm vectors extending, ~30% of chest grid drawn.
- [ ] Clip 3 → 4 join at 22.50 s: full blueprint grid across void, ~65% of stars collapsed into head, first synaptic fragments visible.
- [ ] Clip 4 → 5 join at 30.00 s: neural network complete, hoodie ~60% woven (collar+shoulders+torso+upper arms).
- [ ] Clip 5 → 6 join at 37.50 s: hoodie FULLY formed, camera LOCKED, silhouette at ~50% of frame height, void black background with no other elements.
- [ ] Clip 6 → 7 join at 45.00 s: silhouette shrunk to ~15% frame height, galaxies orbiting, cosmic nebula backdrop, camera locked.
- [ ] Clip 7 → 8 join at 52.50 s: only silhouette + axis + ~20 faint particles in pure void, no galaxies remaining.
- [ ] Post-merge: scrub the merged file across each 7.5-second mark in a browser tab — no flash, no color jump, no luminance step.

**Beat-containment checks:**
- [ ] Rapid camera pull-back is fully inside Clip 6 (frames 900–930 of the merged film). At frame 900 (start of Clip 6): silhouette at ~50% frame height. At frame 930: silhouette at ~15% frame height. Between 930 and 1080: no camera motion.
- [ ] Hoodie emergence (fabric weaving) fully inside Clips 4 & 5 — no fabric visible before Clip 4, hoodie complete by end of Clip 5.
- [ ] Neural network in head fully formed inside Clip 4 (visible from ~ frame 24 of that clip onward).

**Canonical rule checks:**
- [ ] Universal Rule: no hoodie/garment visible in Clips 1, 2, 3. First appearance is Clip 4 (partial weave).
- [ ] Axis rule: no golden axis visible in Clip 1. First appearance is Clip 2 as the spine glow.
- [ ] Camera locked-off in Clips 1–5, 7, 8. Rapid pull-back ONLY in Clip 6.
- [ ] Palette compliance: no pure white, no red, no cyan anywhere across all 8 clips.
- [ ] Hidden text: sample paused frames from Clips 1, 4, and 7 — look for OWN KARMA arrangements in galaxy patterns, synaptic connections, and particle suspensions respectively.

**Post-merge deliverable:**
- [ ] Total duration = 60.00 s ± 0.1 s.
- [ ] `story-divine.mp4` file size ≤ 20 MB (bump `-crf` to 27 if larger).
- [ ] `story-divine-poster.jpg` ≤ 250 KB.
- [ ] `ffprobe story-divine.mp4` reports 1920×1080, 24 fps, H.264 main profile, +faststart flag present.
- [ ] Watermark completely removed via delogo — verify corner crops from the final merged mp4 show no ✧ sparkle.

---

## Story-03: Karma's Eye (canonical 40 s)

**Canon:** [own_karma.md §Concept 03](own_karma.md) · storyConcepts.js `'karmas-eye'`.
**Duration:** 40 seconds (per canonical timeline: 5 s + 7 s + 8 s + 10 s + 10 s).
**Aspect:** landscape 16:9 only. Route: `/story/karmas-eye`.

### Master prompt

Prepend §1.5. Then submit:

```
CONCEPT 03: KARMA'S EYE — THE INWARD DESCENT. Duration: 40 seconds, 24 fps native, 1920×1080 landscape.
Total 960 frames. Story canon: own_karma.md Concept 03. Philosophy: "The staircase is not leading upward. It is folding inward."
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Specific style ref: M.C. Escher's impossible-staircase lithographs × ancient stone architecture.
Formula: Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible product until beat 5 TRANSFORMATION where the maze becomes the hoodie pattern.

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake into video):
  Beat 1 (0–5 s): 'Every journey begins in illusion.'

HOODIE DESIGN — three levels of visual depth (must be VISIBLE in beat 5):
  Distance view: garment reads as a maze.
  Close-up view: garment reads as a spiral staircase.
  In motion: subtle light shifts across the lines feel alive.
  Texture: architectural, not psychedelic. Desert-toned with subtle gold highlights. Slightly distressed like ancient stone.
  The Eye: minimal, geometric, NOT a literal eyeball. Calm and mathematical.

THE CONSTANT: Single backlit human silhouette (same rules as Concept 01/02) at center-frame throughout. Environment reshapes but the human does not move. Vertical golden axis present but subtle — it is the axis around which the maze/staircase rotates.

PALETTE: void black #000000 + desert warm brown #3E2F1A to #8A6B3E (low-sat) + gold #D4A855 for The Eye, axis, hidden text, staircase edge highlights. No greens, blues, reds, pure whites.

GRADE: ARRI Log C → Rec.709, 3200K + strong magenta shift (desert warmth), 0.3% monochrome grain. Slight distress (ancient stone) — soft edge crumble.

CANONICAL BEAT MAP (per own_karma.md Concept 03):

0–5 s (frames 0–120) — THE DESERT
  Wide cinematic shot. Endless desert stretches to horizon. Heat distortion (subtle 2–3 px sine wave in middle third). Fractured pyramids in distance (unfinished monuments, NOT Egyptian cliché — blocky geometric ruins missing tops). Single human silhouette at center. Wind only, no other motion.

5–12 s (frames 120–288) — THE MAZE REVEALS
  Sand shifts around human's feet. Geometric lines emerge from beneath the sand — impossible staircase maze forms as if ground was always structured beneath. Sand cascades down stair edges. Pyramids in background become connected by impossible staircase bridges. Motion: architectural, precise, ancient — not fantasy. Human takes NO steps (silhouette stays still even as ground morphs).

12–20 s (frames 288–480) — THE INFINITE ASCENT
  Camera rotates ~30° over 192 frames. Staircase forms a spiral. At spiral center: faint glowing minimalist Eye — geometric, not a literal eyeball, concentric golden lines suggesting an iris outline. The Eye does not move; the maze rotates around it. Optical illusion: staircase actually DESCENDS inward, not rises.

20–30 s (frames 480–720) — SCALE BREAK
  Camera pulls back rapidly (only rapid camera move — 30 frames, cubic ease-out). Human silhouette becomes microscopic. Maze grows enormous. Camera continues back until the ENTIRE desert maze is revealed to exist inside the outline of a huge geometric Eye (still just line-art, not literal).

30–40 s (frames 720–960) — TRANSFORMATION
  Maze dissolves into blueprint lines over 60 frames. Sand grains transform into golden fabric threads that shimmer. Staircase pattern forms on hoodie fabric wrapping the (now standard-size again) human. Eye locks into hoodie design at chest level. Human stands wearing it — still, no pose. Frames 900–960: dead-air hold, final tableau (poster frame).

CAMERA: static for beat 1. Slow 30° rotation over beats 3–4. Rapid pull-back only during beat 4. Locked for beat 5.

HIDDEN DETAIL: in the staircase maze architecture, when paused, the stair edges spell OWN KARMA in a spiral around the Eye.

OPENING TEXT (visual reference only, DO NOT render on screen):
"Every journey begins in illusion."

NEGATIVE: see §3.

FORMAT: MP4 H.264, 1920×1080, 24 fps, ≤ 40 s.
```

### Veo 3 clip split (4 clips × 10 s each = 40 s)

1. **Clip 1 (0–10 s):** THE DESERT + start of THE MAZE REVEALS
2. **Clip 2 (10–20 s):** MAZE REVEALS finish + THE INFINITE ASCENT
3. **Clip 3 (20–30 s):** SCALE BREAK
4. **Clip 4 (30–40 s):** TRANSFORMATION

### Install

Merge with §5 (4 inputs), output to `public/videos/story-karmas-eye.mp4` + poster. Add to `storyConcepts.js['karmas-eye']`:

```js
video: {
  src: '/videos/story-karmas-eye.mp4',
  poster: '/videos/story-karmas-eye-poster.jpg',
  label: 'Concept 03 film — desert maze folding inward around the Eye',
},
```

---

## Story-04: Destiny (canonical 45 s)

**Canon:** [own_karma.md §Concept 04](own_karma.md) · storyConcepts.js `'destiny'`.
**Duration:** 45 seconds. **Aspect:** landscape 16:9. **Route:** `/story/destiny`.

### Master prompt

Prepend §1.5. Then submit:

```
CONCEPT 04: DESTINY — THE WALLS YOU CALL REALITY. Duration: 45 seconds, 24 fps native, 1920×1080 landscape.
Total 1080 frames. Story canon: own_karma.md Concept 04.
Philosophy: "Destiny is not something you reach. It is something you remove." Not building your future — breaking your prison. The walls are psychological, not concrete.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Formula: Axis · Blueprint · Realms (as walls) · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible product until beat 6 DESTINY REVEALED where blueprint fragments dissolve into the hoodie pattern on the silhouette.

DEFINING LINE FOR THIS DROP (visual reference — render as DOM overlay in the LOCK/final beat):
"Break what contains you."

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake as readable text into video):
  Wall 1 (0–5 s): 'What will they think?' / 'Be realistic.' / 'That's not you.'
  Beat 2 (5–12 s): 'Every destiny begins with disagreement.'
  Wall 2 (12–18 s): 'Later.' / 'You deserve rest.' / 'It's fine.'
  Wall 3 (18–25 s): 'Not now.' / 'Someday.' / 'When I'm ready.' / 'Time is not your enemy. Delay is.'

TONE RULES ABSOLUTE (from canon):
- MUST NOT feel: Angry · Violent · Explosive.
- MUST feel: Controlled · Inevitable · Adult · Calm Destruction.

THE CONSTANT: Single backlit human silhouette at center-frame Y=40%. Vertical golden axis extends floor-to-ceiling behind silhouette. Walls appear IN FRONT of the human (between silhouette and camera).

PALETTE (austere): void black #000000 base, charcoal wall variants — #0F0F14 (Opinion), #1A1712 warm (Comfort), #14100A (Time), #0C0C10 (Self mirror). Gold #D4A855 for axis + blueprint lines emerging when walls break. Bone off-white capped Y-luma 0.86 for light through cracks. No reds, no reflective silvers, no pure whites.

GRADE: ARRI Log C → Rec.709, 3200K neutral (less warm than desert), 0.3% monochrome grain. Very controlled contrast — deep blacks lifted only 0.02.

CANONICAL BEAT MAP (per own_karma.md Concept 04):

0–5 s (frames 0–120) — WALL 1: OPINION
  Massive charcoal wall between camera and human. Surface textured with faint human faces (fresco reliefs). Text etched into surface but NOT readable to viewer (implies "What will they think?" / "Be realistic." / "That's not you." without spelling it out — since AI-generated text renders unreliably, use the visual FEELING of etched writing without actual legible letters). Wind and distant murmurs conveyed via subtle particulate drift. Human silhouette absolutely still.

5–12 s (frames 120–288) — THE PRESSURE
  Human touches wall with one hand (not aggressive — intentional). Frames 120–160: soft golden glow emanates from where palm touches. Frames 160–220: silent cracks form on the wall — geometric lines, precise, calm, NOT jagged. Cracks spread outward from palm-point over 60 frames. Frames 220–288: cracks reach wall edges. Faces-relief fades. Whisper particulates dissipate.

12–18 s (frames 288–432) — WALL 2: COMFORT
  Cracked wall dissolves into dust that falls calmly. Behind it: smoother, warmer wall glowing faintly ochre from within — inviting. Surface has soft rounded pattern (comfort object silhouetted in texture). Text implied not readable. Human silhouette stays still. After 60 frames of stillness (frames 372–432), human takes ONE step forward (silhouette shifts 20 px, no more) and wall shatters INTO DUST — no glass sound, no violence, particles float outward and evaporate.

18–25 s (frames 432–600) — WALL 3: TIME
  Cracked hourglass wall — glass with hourglass-shape carved into it, sand visibly flowing UPWARD (impossible physics = wall reality is a lie). Text implied. Human walks through (silhouette advances another 20 px). Glass fractures around human's body in geometric blueprint lines — precise, calm. Sand halts mid-air as human passes.

25–35 s (frames 600–840) — WALL 4: SELF
  Distorted mirror wall reflects a smaller, hunched, doubtful version of the human. Full silence — no particulates, no motion. Frames 600–780: 180 frames of stillness, camera locked, human staring at diminished self. Frames 780–830: human steps THROUGH the mirror. It shatters silently into light fragments that become geometric blueprint lines — floating.

35–45 s (frames 840–1080) — DESTINY REVEALED
  Frames 840–960: walls all gone. Space is open. Human is SAME SIZE — nothing has grown. Blueprint fragments from the mirror hover in air around the human, then dissolve into the hoodie pattern on the silhouette itself. Frames 960–1080: dead-air hold. Final pose held for 5 s (poster frame).

CAMERA: locked-off for entire 45 seconds. No pans, dollies, zooms. Human is fixed in frame. The world moves around them.

HIDDEN DETAIL: when walls shatter, geometric blueprint lines briefly spell OWN KARMA before dissolving into hoodie pattern.

DEFINING LINE (visual reference — rendered as DOM overlay in the LOCK/final beat):
"Break what contains you."

HOODIE INTEGRATION (beat 6 DESTINY REVEALED — canonical from own_karma.md):
When the walls shatter they dissolve into staircase lines, eye geometry, and blueprint threads that form the hoodie pattern. The cracks of the walls become the design lines. The garment is made from what was broken.
> You don't wear fashion — you wear what you broke through.

NEGATIVE: see §3, PLUS: no wall shattering with speed or violence, no glass shards flying, no sharp reflections, no starburst glare, no red anywhere.

FORMAT: MP4 H.264, 1920×1080, 24 fps, ≤ 45 s.
```

### Veo 3 clip split (5 clips × ~9 s = 45 s)

1. **Clip 1 (0–9 s):** WALL 1: OPINION + start of THE PRESSURE
2. **Clip 2 (9–18 s):** THE PRESSURE finish + WALL 2: COMFORT
3. **Clip 3 (18–27 s):** WALL 3: TIME + start of WALL 4: SELF
4. **Clip 4 (27–36 s):** WALL 4: SELF finish + start of DESTINY REVEALED
5. **Clip 5 (36–45 s):** DESTINY REVEALED (hold on final frame)

### Install

Merge with §5 (5 inputs), output to `public/videos/story-destiny.mp4` + poster. Add to `storyConcepts.js['destiny']`:

```js
video: {
  src: '/videos/story-destiny.mp4',
  poster: '/videos/story-destiny-poster.jpg',
  label: 'Concept 04 film — four psychological walls, calm destruction',
},
```

---

## Story-05: Broken Hourglass (canonical 55 s)

**Canon:** [own_karma.md §Concept 05](own_karma.md) · storyConcepts.js `'broken-hourglass'`.
**Duration:** 55 seconds. **Aspect:** landscape 16:9. **Route:** `/story/broken-hourglass`.

### Master prompt

Prepend §1.5. Then submit:

```
CONCEPT 05: BROKEN HOURGLASS — THE PRISON OF TIME. Duration: 55 seconds, 24 fps native, 1920×1080 landscape.
Total 1320 frames. Story canon: own_karma.md Concept 05. Motion is DELIBERATELY slow throughout — the film is about time itself.
Philosophy: "Time contains you — until you decide to break it." Time is not the enemy — time is a frame. Destiny begins when you step outside the frame. You don't experience time; you experience alignment.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Formula: Axis · Blueprint · Realms (contained/shattered/reorganized) · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible hoodie until beat 6 REORGANIZATION where the shards align into hoodie fabric structure.

DEFINING LINE (rendered as DOM overlay in the final STILLNESS beat):
"Break the frame."

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake into video):
  Beat 5 (25–35 s): 'When you break time... you experience life.'
  Beat 7 (45–55 s): 'Time was never infinite. You are.'

HOODIE TEXTURE (must be VISIBLE in the final REORGANIZATION + STILLNESS beats — canonical 5 fabric details):
  - Fractured glass veins (subtle lines like broken crystal across the fabric).
  - Vintage brass etching patterns (aged, weathered, precise).
  - Subtle floating sand grain textures (tiny points suspended in the weave).
  - Tiny embedded cosmic specks (like stars trapped in the fabric).
  - Blueprint crack lines across the fabric (the design lines are the fractures).
When light hits the hoodie, it subtly reflects like shattered crystal. Not shiny. Subtle. Hidden depth.

THE CONSTANT: Single backlit human silhouette stands INSIDE the lower chamber of a large antique hourglass floating at center-frame. Antique brass frame (color #8A6E3F, muted, scratched patina). Glass is dark-tinted charcoal — barely see-through. Vertical golden axis passes through human and hourglass, extending floor-to-ceiling.

PALETTE: void black #000000 base (85% of frame), antique brass #8A6E3F for hourglass frame and metal joints, dark-tinted charcoal for glass surfaces, gold #D4A855 for axis + sand + hidden text + blueprint fragments, bone off-white capped Y-luma 0.86 for stars during Expansion beat.

GRADE: ARRI Log C → Rec.709, 3200K warm tungsten (aged-brass warmth), +5 magenta, 0.3% monochrome grain. Slight vignette from hourglass silhouette itself.

CANONICAL BEAT MAP (per own_karma.md Concept 05):

0–6 s (frames 0–144) — THE RELIC
  Frames 0–24: pure black. Frames 24–96: antique hourglass fades in at center-frame via 72-frame opacity ramp. Old brass frame details resolve. Scratched glass. Dust motes visible suspended inside the upper chamber (impossibly still). Frames 96–144: tiny human silhouette resolves inside the lower chamber, standing upright and still. Zero sand movement.

6–12 s (frames 144–288) — THE CONTAINMENT
  Sand begins falling from upper chamber to lower — but OPPRESSIVELY SLOWLY. Grains fall at ~1/10th realistic speed. They float PAST the human without hitting (implying: time falls but does not touch them). Human doesn't move. Camera holds. Frames 276–288: dead-air hold, sand suspended mid-fall.

12–18 s (frames 288–432) — THE REALIZATION
  Frames 288–348: human silhouette's head tilts upward (silhouette contour changes minutely). Sand stops mid-air across the entire hourglass. Absolute silence (visualized: all particulates freeze). Frames 348–408: human's hand (only movement in the whole film so far — 20-pixel shift) reaches out and touches the inner glass wall. Cracks form outward from palm point — precise geometric lines like blueprint fractures, NOT violent glass-breaking patterns. Frames 408–432: cracks spread, dead-air hold.

18–25 s (frames 432–600) — THE BREAK
  Frames 432–480: human pushes through. Glass shatters in ULTRA slow motion — crystalline shards drift outward, each shard visible individually. NO glass-break sound implied (no glare, no starburst reflections). Frames 480–540: sand bursts outward, transforming mid-air into: planets, birds mid-flight, cascading human silhouettes (past selves), stars, tiny staircases, waves, forest branches — each object visible for ~12 frames before dissolving. Frames 540–600: elements slow to a hover.

25–35 s (frames 600–840) — EXPANSION
  Floating fragments (planets, birds, past selves, staircases, waves) rotate slowly around the human at different orbital radii. Subtle golden blueprint lines connect fragments — implying underlying structure. Human still at center, absolute stillness. Frames 828–840: rotation decelerates.

35–45 s (frames 840–1080) — REORGANIZATION
  Hourglass shards align back into geometric patterns and staircase structures. Brass frame transforms into the collar/hood structure of the hoodie. Fragments dissolve into hoodie fabric on the silhouette. Sand grains become gold thread visible on the fabric. Camera locked. Frames 1068–1080: dead-air hold, hoodie fully formed.

45–55 s (frames 1080–1320) — THE STILLNESS
  Human silhouette stands wearing the completed hoodie. Empty hourglass frame floats behind them at reduced opacity (~30%), no sand, no ticking. Universe rotates slowly. Human does not. Held final 240 frames — nothing changes. This is the poster.

CAMERA: locked-off throughout the ENTIRE 55 seconds. Zero camera movement. The stillness is the point.

HIDDEN DETAIL: inside the shattered glass shards (beat 4), faint OWN KARMA inscriptions are visible when paused — as if time was secretly recording everything.

NEGATIVE: see §3, PLUS: no sand-timer clichés (medical hourglass, kitchen timer), no starburst reflections, no glass-shatter whip streaks, no violent motion, no red, no glare.

FORMAT: MP4 H.264, 1920×1080, 24 fps, ≤ 55 s.
```

### Veo 3 clip split (6 clips × ~9.2 s = 55 s)

1. **Clip 1 (0–9 s):** THE RELIC + start of THE CONTAINMENT
2. **Clip 2 (9–18 s):** CONTAINMENT finish + THE REALIZATION
3. **Clip 3 (18–28 s):** THE BREAK + start of EXPANSION
4. **Clip 4 (28–37 s):** EXPANSION finish + start of REORGANIZATION
5. **Clip 5 (37–46 s):** REORGANIZATION finish + start of THE STILLNESS
6. **Clip 6 (46–55 s):** THE STILLNESS (hold on final frame)

### Install

Merge with §5 (6 inputs), output to `public/videos/story-broken-hourglass.mp4` + poster. Add to `storyConcepts.js['broken-hourglass']`:

```js
video: {
  src: '/videos/story-broken-hourglass.mp4',
  poster: '/videos/story-broken-hourglass-poster.jpg',
  label: 'Concept 05 film — human breaks through time',
},
```

---

## 3. Universal negative prompt

Paste into every generation's "avoid" / "negative prompt" field:

```
text on screen, subtitles, letters visible in frame, on-screen typography, logos, watermarks, products, hoodies as flat garments, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo on axis, digital sharpening
```

---

## 4. Style keyword pool

Append to keyword-driven tools that accept comma-separated tags:

```
cinematic, mythological, divine geometry, sacred, adult, inevitable, controlled, slow, meditative, Hans Zimmer scored, SS Rajamouli scale, Namit Malhotra Ramayana, Sudarshan chakra, axis mundi, dark ambient, oil-painting light, IMAX composition, 24fps native, deep blacks, gold accent only, no letterbox, ARRI Alexa Log C, Rec.709 film curve, 3200K warm tungsten, monochrome film grain, cubic-bezier easing, dead-air holds, volumetric golden beam, rim-lit silhouette, single-breath macro-arc
```

---

## 5. Post-generation ffmpeg recipe

Every generated film must be re-encoded before shipping. Non-negotiable flags:

- `-c:v libx264 -profile:v main -tune fastdecode` — decoder-friendly for old laptops.
- `-bf 0` — no B-frames. Kills scroll-scrub jitter.
- `-g 4 -keyint_min 4 -sc_threshold 0` — keyframe every 4 frames.
- `-crf 25` — quality/size balance for 1080p 30–60 s films.
- `-movflags +faststart` — moov atom at head.
- `-c:a aac -b:a 96k -ac 2` — atmospheric audio (or `-an` for silent films).

### Multi-clip concat + delogo + enhance + scrub-optimize

```powershell
ffmpeg -y `
  -i clip1.mp4 -i clip2.mp4 -i clip3.mp4 -i clip4.mp4 -i clip5.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a]concat=n=5:v=1:a=1[cat][aout];[cat]delogo=x=WM_X:y=WM_Y:w=WM_W:h=WM_H,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\hero-main.mp4

ffmpeg -y -sseof -0.1 -i public\videos\hero-main.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\hero-poster.jpg
```

`WM_X`/`WM_Y`/`WM_W`/`WM_H` = Veo watermark bounding box (detect via corner-crop of clip1). Landscape typical: `1110, 570, 100, 100`. Portrait typical: `530, 1100, 130, 140`.

Adjust `n=5` to actual clip count, `scale=1920:1080` to `scale=1080:1920` for portrait, and repeat all `[N:v][N:a]` pairs for each input.

---

## 6. Iteration QA checklist

Before shipping any film, verify:

**Canonical alignment (must pass for every film):**
- [ ] Total duration matches canon (Concept 01: 42 s, Concept 02: 60–75 s, Concept 03: ~40 s, Concept 04: ~45 s, Concept 05: ~55 s).
- [ ] Every beat starts and ends at the canonical timecodes from own_karma.md.
- [ ] Beat names match canon exactly (e.g., "DESERT TRANSITION" not "DESERT", "LAVA & PRESSURE" not "LAVA", "ABSOLUTE SILENCE" not "ABSOLUTE STILLNESS").
- [ ] Final frame is the canonical "resolution" pose for that concept.

**Constants (must be true in every frame):**
- [ ] Axis is visible in every single frame — pause at random points, confirm.
- [ ] Axis position, thickness, color are pixel-identical across all beats.
- [ ] Human silhouette is motionless (except for the 20-pixel intentional shifts in Concept 04/05 where canon calls for it).
- [ ] Silhouette rim-lit only, face is pure black.
- [ ] Palette contains only concept-appropriate colors — sample 20 random pixels, anything off-palette = reject.
- [ ] No AI-rendered on-screen text, no logos, no products in frame.
- [ ] Watermark completely removed (delogo box covers full sparkle).

**Motion physics:**
- [ ] Every beat has ≥ 6 frames of dead-air at its end.
- [ ] No linear motion anywhere.
- [ ] Beat-to-beat transitions are morphs or cross-dissolves — no hard cuts.

**Deliverable format:**
- [ ] Encoded with `-profile:v main -tune fastdecode -bf 0 -g 4 -crf 25 -movflags +faststart` per §5.
- [ ] File size reasonable (concept-dependent: hero ≤ 25 MB, story concepts ≤ 20 MB).
- [ ] `ffprobe` confirms video + optional audio streams, 24 fps, correct resolution.

**Scrub test (single most important quality check):**
- [ ] Open the file in a browser tab, drag the timeline scrubber back and forth rapidly. It must play forwards and backwards smoothly with no stuttering. If it stutters, the encode is wrong — re-run §5 recipe.
- [ ] Open the installed site route (`/` for hero, `/story/[slug]` for concepts 02–05). Scroll or wait through the film. It should play smoothly on any hardware.

---

*Companion documents: [`own_karma.md`](own_karma.md) (creative canon — every timeline in this doc mirrors it) · [`requirement2.md`](requirement2.md) (site spec) · [`/public/videos/README.md`](../public/videos/README.md) (asset contract + ffmpeg pipeline).*
