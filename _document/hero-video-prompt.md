# OWN KARMA — Hero Cinematic Video Prompt

**Purpose:** Generate the scroll-scrubbed hero film specified in [`requirement2.md`](requirement2.md) (Landing Hero v2).
**Target output:** `/public/videos/hero-main.mp4` — 1920×1080, 24 fps, ≤ 30 s, no audio.
**Reference bar:** *Ramayana — The Introduction* (Sony Music India / Hans Zimmer + AR Rahman) + *Varanasi to the World* (T-Series / SS Rajamouli / MM Keeravaani).

Copy-paste the block below into the AI video tool of your choice. Master prompt is for single-shot tools (Sora, Veo 3, Kling 2, Runway Gen-4). Per-beat variant is for tools capped at 5–10 s per call.

---

## 1. Master prompt (single-shot generators)

```
A 24-second cinematic hero film for OWN KARMA, an Indian streetwear brand.
Reference bar: Namit Malhotra's "Ramayana — The Introduction" (Hans Zimmer + AR Rahman)
and SS Rajamouli's "Varanasi to the World" (MM Keeravaani).
Slow, controlled, mythological, divine-scale, IMAX composition.

FORMAT: 1920×1080, 16:9, 24 fps native (no frame interpolation, no motion smoothing, no 60fps blend). No audio. No on-screen text. No logos. No products. No faces close-up. No letterbox bars.

THE CONSTANT (present in EVERY frame at pixel-identical position — verify by overlaying any two beat mid-frames):
- The AXIS: a vertical light beam dead-center, 2 px solid core + 8 px anisotropic gaussian glow, color #D4A855. Brightest at Y=40% from top (heart-level of the silhouette), exponential falloff toward top and bottom edges. The axis is volumetric and physically penetrates through obsidian, water, ice, everything — it is never occluded, never intersected, never broken.
- The HUMAN: a single backlit silhouette. Face is pure black, no features. Rim light only — gradient from #D4A855 at shoulders (30% opacity) fading to #000000 at feet. 7-head-tall canonical proportions, gender-neutral, feet touching (no ankle gap), arms at sides. NO movement of any kind: no breathing, no hair sway, no clothing shift. The silhouette is a reference point, not a character.
- SUBJECT PLACEMENT: center frame X, object-position Y=40% (slightly above middle). Lower third of frame is kept empty for DOM text overlays — do not put anything visually loud there.

PALETTE (strict, monochromatic + one accent):
- Void black #000000 as the base of every shot. Lift shadows to 0.02, hard toe roll-off.
- Bone off-white #F3EFE7, capped at Y-luma 0.86 — never pure white, never blown highlights.
- Single accent gold #D4A855 for axis, embers, sun, hidden text, rim light.
- Fire is golden not red. Water is deep blue-black not cyan. Ice is pale gold not blue. No other colors exist anywhere in frame.

GRADE: ARRI Alexa Log C → Rec.709 film-emulation curve. Color temperature 3200K (warm tungsten cinema). Slight +5 magenta tint to prevent silhouette rim-light from drifting green. Film grain 0.3% monochrome Gaussian (equal R:G:B, not colored). No digital sharpening. No chromatic aberration. No lens flare. No bloom on the axis — the anisotropic glow is baked into the render, not a post effect.

MOTION PHYSICS (this is what makes it feel smooth and inevitable):
- Every transition uses cubic-bezier(0.65, 0, 0.35, 1) or slower — no linear motion anywhere, not even for camera dollies.
- Every beat holds on its "settled" state for the final 6 frames (0.25 s) before the morph to the next beat begins. This dead-air pause is what gives the film its controlled feel — without it the beats bleed into each other and read as chaos.
- Every morph begins with a 6-frame ease-in and ends with a 6-frame ease-out. No morph is shorter than 12 frames (0.5 s) or longer than 20 frames (0.83 s).
- Camera dolly speed is measured in arcseconds-per-frame — imperceptible when watching normally, precise when scrubbing. Only ONE rapid camera move exists in the entire 24 s: the pull-back during GALAXY REVEAL (beat 8). Everything else is locked-off or ultra-slow dolly-in.
- Macro-arc across all 24 s: inhale (beats 1–3) → held tension (beats 4–7) → exhale (beats 8–10). The film reads as a single breath. Adjust dolly speed accordingly — slowest during held tension, subtle acceleration during exhale.

TRANSITION ENGINEERING (all transitions are morphs or cross-dissolves, never hard cuts):
- Void → Nether: ground fractures propagate in a 45° cone from the human's feet, 18 frames.
- Nether → Desert: mist evaporates upward while obsidian morphs to sand — 2 layers cross-dissolving, offset by 4 frames.
- Desert → Water: liquefaction wave travels from foreground to background, 14 frames.
- Water → Forest: water columns lift into fog first, THEN trees grow from below — 2 stages, 6-frame gap between them.
- Forest → Lava: fire propagates from a single ignition point at frame-left, sweeps right, 16 frames.
- Lava → Ice: freeze wave propagates from the axis outward in concentric shells, 12 frames.
- Ice → Galaxy: shatter is exactly 12 frames — particles INHERIT their previous positions, do not respawn randomly.
- Galaxy → Sun: sun ignites at a specific point on the axis (Y=25% from top), then reveals concentric rings sequentially over 18 frames.
- Sun → Lock: everything decelerates to absolute zero over 20 frames, cubic ease-out.

BEAT MAP — exactly 2.4 s per beat (10 beats, 24 s total). Each beat = 58 frames of motion + 6 frames of end-hold:
0.0–2.4   VOID BIRTH     — pure black. Axis fades in from top and bottom toward center. Human silhouette resolves aligned to it.
2.4–4.8   NETHERWORLD    — dark obsidian terrain fractures outward in a slow radial wave from the human's feet. Black volumetric mist rises. Human still.
4.8–7.2   DESERT         — obsidian dissolves into fine golden sand. Heat shimmer. Sand curls around the axis like magnetic field lines, never touching the human.
7.2–9.6   WATER          — sand liquefies into deep dark blue-black water. Gravity flips. Water rotates 360° around the axis. Human dry and unmoving.
9.6–12.0  FOREST         — water evaporates upward as pale gold fog. Dark trees grow rapidly. Roots visibly bend to avoid the human. Leaves freeze mid-air near the axis.
12.0–14.4 LAVA           — forest chars in a slow wave. Molten gold lava erupts but arcs AWAY from the axis, magnetically repelled. Human untouched.
14.4–16.8 ICE SHATTER    — lava flash-freezes mid-air into pale-gold crystalline structures. Time stops. Absolute stillness.
16.8–19.2 GALAXY REVEAL  — ice shatters silently into stars. Camera pulls back RAPIDLY (only rapid move in the film). All previous realms are revealed to have existed inside a slowly rotating cosmic mandala.
19.2–21.6 SUN IGNITION   — a small golden sun ignites directly above the human on the axis. Concentric Sudarshan-chakra geometry forms, mathematical and precise.
21.6–24.0 LOCK           — everything freezes. Absolute stillness. Axis, sun geometry, and human align in one perfect vertical line. Hold for the last 1.2 s.

HIDDEN DETAIL (subtle, discoverable, do not emphasise):
Faintly etch the letters "OWN KARMA" into at least one texture per beat — sand ripples, ice fractures, star constellations, lava cracks, tree bark. Legible only when the scrubber is paused on the right frame.

NEGATIVE / DO NOT INCLUDE:
text on screen, subtitles, letters visible in frame, logos, watermarks, products, hoodies, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries.

DELIVERABLE: MP4 H.264 High profile, 1920×1080, 24 fps native, audio stripped, keyframe every ≤ 12 frames (-g 12 -keyint_min 12), moov atom at head (-movflags +faststart), ≤ 8 MB total, duration 24 s ± 1 s.
```

---

## 1.5. Motion Physics & Grade cheat-sheet (paste into any per-beat call)

Most short-form video tools forget prior context between calls. When invoking beat 2 through beat 10, prepend this **verbatim** block so the film stays consistent shot-to-shot:

```
STYLE LOCK (do not deviate):
- 24 fps native, no frame interpolation.
- Every motion uses cubic-bezier(0.65, 0, 0.35, 1) easing — no linear motion.
- Last 6 frames of this clip: hold the settled state, zero motion (dead-air pause).
- Axis: vertical golden beam at center frame X, 2 px core + 8 px anisotropic glow, color #D4A855, brightest at Y=40%.
- Human silhouette: backlit, rim-lit gold at shoulders fading to black at feet, 7-head-tall, arms at sides, feet touching, absolutely motionless.
- Palette: void black + bone off-white capped at Y=0.86 + gold #D4A855 accent. Nothing else.
- Grade: ARRI Log C → Rec.709 film curve, 3200K warm tint, +5 magenta, 0.3% monochrome film grain.
- No text, no logos, no products, no faces, no lens flare, no bloom, no chromatic aberration.
```

---

## 2. Per-beat prompts (short-form tools: Runway Gen-4, Kling 1.6, Pika, Luma Dream Machine)

Feed the **Master prompt** as "style reference" once, then for each 2.4-second beat submit the block below. **Also prepend the §1.5 Style Lock cheat-sheet** to every call — short-form tools forget context between generations. Each beat = 58 frames of motion + 6 frames of end-hold (zero-motion pause).

### Beat 1 — Void Birth (0.0–2.4 s)

```
Opens on pure black frame. Over the first 36 frames (1.5 s), the vertical golden axis fades in from top and bottom toward center using cubic-bezier ease-out. Simultaneously, a backlit human silhouette resolves at center-frame aligned to the axis via a 24-frame opacity ramp. Rim light appears gradually at the shoulders. Frames 55–58: motion decelerates to zero. Frames 59–64: absolute stillness (dead-air hold). Static locked-off camera. Sub-bass energy carried entirely by the fade curve, not by any visual jitter. Last frame: fully drawn axis, silhouette resolved, ready to morph into ground fracture. No text, no lens flare, no particles, 16:9, 24 fps, no audio.
```

### Beat 2 — Netherworld (2.4–4.8 s)

```
Axis and silhouette are constant at center-frame. From the human's feet, over 18 frames, dark obsidian terrain fractures outward in a 45° cone — propagation follows cubic-bezier(0.65, 0, 0.35, 1), never linear. Black volumetric mist rises simultaneously, offset by 4 frames from the fracture start. Camera performs an imperceptible dolly-in (approx. 2% zoom over the full 2.4 s). Frames 52–58: motion tapers to stillness. Frames 59–64: dead-air hold. Palette: void black, gold axis rim-light only. Last frame: obsidian ground fully formed, mist at peak-rise, ready to dissolve into sand. No text.
```

### Beat 3 — Desert (4.8–7.2 s)

```
Obsidian ground morphs into fine golden sand via 2-layer cross-dissolve offset by 4 frames — no particle spawn, no fizz, watercolor-bleed feel. Heat shimmer distorts air in a subtle 2–3 px sine wave. Sand storms curl around the golden axis in magnetic-field-line arcs, never touching the silhouette. Motion uses cubic ease-in-out. Camera continues imperceptible dolly-in. Faintly etch the letters "OWN KARMA" into sand ripples near the human's feet — barely legible when paused. Frames 52–58: swirl slows to a stop. Frames 59–64: dead-air hold. Last frame: sand storm frozen at peak swirl.
```

### Beat 4 — Water (7.2–9.6 s)

```
Sand liquefies into deep dark blue-black water via a foreground-to-background liquefaction wave over 14 frames. Gravity visibly flips (indicated by the water rotating counter-clockwise around the axis at ~40°/second). Water encircles the axis in a 360° vortex but never touches the human silhouette — there is a 1 cm gap of clear void around the figure. Reflections of gold ripple across the surface. Human silhouette stands dry, motionless. Camera locked. Frames 52–58: rotation decelerates. Frames 59–64: water frozen at peak rotation, dead-air hold. Last frame: still tableau of water suspended around axis.
```

### Beat 5 — Forest (9.6–12.0 s)

```
Water evaporates upward as pale gold fog over 8 frames — then, with a 6-frame gap, dark trees grow rapidly from below the frame in stop-motion cadence over 20 frames. Roots visibly bend around the human silhouette — no root within 1 cm of the figure. Leaves freeze mid-air within a 30 cm radius of the axis, unmoving. Camera imperceptibly dollies in. Etch "OWN KARMA" faintly into tree bark near the frame edge. Frames 52–58: leaf-freeze completes. Frames 59–64: dead-air hold. Last frame: fully grown forest, leaves suspended in air.
```

### Beat 6 — Lava (12.0–14.4 s)

```
Forest chars in a slow left-to-right radial wave over 16 frames. Molten GOLDEN lava (color #D4A855, never red) erupts from ground cracks but arcs AWAY from the axis in visible parabolic curves — magnetically repelled, gap of at least 20% frame width around the figure. Ember particles rise on cubic ease-out. Camera locked. Frames 52–58: eruption peak, arcs still curving. Frames 59–64: dead-air hold, embers suspended. Etch "OWN KARMA" faintly into lava crack lines. Last frame: eruption frozen mid-air.
```

### Beat 7 — Ice Shatter (14.4–16.8 s)

```
Over 12 frames, lava flash-freezes mid-air into pale-gold crystalline structures — the freeze wave propagates from the axis outward in concentric shells. All embers stop mid-air. Frost creeps along the ground with a 20-frame delay after the primary freeze. Absolute stillness by frame 40. Frames 40–64: pure held silence, no motion whatsoever. Etch "OWN KARMA" faintly into the ice fracture patterns. Camera locked. Palette: void black, pale gold-white crystals. Last frame: crystalline tableau, glass-like clarity.
```

### Beat 8 — Galaxy Reveal (16.8–19.2 s) — the only rapid camera move

```
At frame 0, the crystals silently shatter into stars — individual particles INHERIT their previous position (do not respawn). Simultaneously the camera pulls back rapidly using cubic ease-out over 30 frames, revealing that every previous realm existed inside a slowly rotating cosmic mandala. Human silhouette becomes microscopic at center-frame but the golden axis extends across the entire cosmos, still visible. Etch "OWN KARMA" faintly into star constellation patterns. Frames 48–58: camera decelerates to full stop. Frames 59–64: dead-air hold. Last frame: full mandala visible, human as a golden dot at center.
```

### Beat 9 — Sun Ignition (19.2–21.6 s)

```
Camera fully re-locked. At Y=25% from top on the axis, a small golden sun (color #D4A855, no bloom halo) ignites over 6 frames using cubic ease-in-out. Concentric Sudarshan-chakra geometry forms around it — six rotating rings of golden line-art, revealed sequentially over 18 frames (3 frames per ring). Mathematical, precise, slow. No other elements move. Palette: void black, single gold. Frames 52–58: geometry rotation decelerates. Frames 59–64: dead-air hold, chakra frozen. Last frame: sun and full geometry formed, hovering above the human.
```

### Beat 10 — Lock (21.6–24.0 s)

```
All motion decelerates to absolute zero over 20 frames using cubic ease-out. The axis, the Sudarshan sun geometry, and the human silhouette settle into one perfect vertical line at center-frame. Faint golden particles hang suspended, unmoving. Frames 21–64 (44 frames ≈ 1.83 s): held final frame — zero motion, this is the resolution. This last frame IS the poster.jpg export. Palette: void black, gold. Locked camera. No text. Nothing changes. The film ends on this frame.
```

---

## 2b. 3-clip variant for 10-second-limited tools (Gemini Veo 3, Google AI Studio)

**Use this when**: your generator caps single-shot output at 8–10 seconds — Gemini Veo 3, some Runway plans, Kling free tier. Total film after merge = **30 seconds** (10 s per clip, no overlap trim). Still within the ≤30 s ceiling of [`requirement2.md §4`](requirement2.md#4-asset-contract).

**Why the merge feels smooth in this variant:** each clip **ends on a dead-air held state**, and the next clip is generated using that last frame as its `start image` / `reference image` (Veo 3 supports this — it's called "image-to-video" mode). The AI is told to *match the reference image exactly at frame 0*, so the concat point is pixel-continuous.

**Beat re-distribution across the 3 clips:**

|    Clip    |   Time   | Beats packed inside                    | Handoff-OUT state (last frame → next clip's start image)                                    |
| :---------: | :------: | :------------------------------------- | :------------------------------------------------------------------------------------------- |
| **1** | 0–10 s | Void Birth → Netherworld → Desert    | Sand storm at peak swirl around axis, human motionless, zero motion.                         |
| **2** | 10–20 s | Water → Forest → Lava → Ice Shatter | Crystalline ice tableau, all embers suspended, absolute stillness.                           |
| **3** | 20–30 s | Galaxy Reveal → Sun Ignition → Lock  | LOCK — axis + sun geometry + microscopic human in perfect vertical alignment. Poster frame. |

### §2b.0 Workflow (do these steps in exact order)

1. Generate Clip 1 using its prompt (§2b.1). Download as `clip1.mp4`.
2. Extract Clip 1's final frame as PNG:
   ```powershell
   ffmpeg -sseof -0.05 -i clip1.mp4 -vframes 1 -q:v 1 handoff-1.png
   ```
3. In Veo 3 / Gemini, switch to **image-to-video** mode. Upload `handoff-1.png` as the reference/start image. Submit the Clip 2 prompt (§2b.2). Download as `clip2.mp4`.
4. Extract Clip 2's final frame:
   ```powershell
   ffmpeg -sseof -0.05 -i clip2.mp4 -vframes 1 -q:v 1 handoff-2.png
   ```
5. In Veo 3, upload `handoff-2.png` as the start image. Submit the Clip 3 prompt (§2b.3). Download as `clip3.mp4`.
6. Concatenate and re-encode all three (§2b.4).
7. Extract poster from the final frame (§2b.4 step 5).
8. Drop `hero-main.mp4` + `hero-poster.jpg` into `/public/videos/`.

### §2b.1 Clip 1 — AWAKENING (0–10 s)

**Prepend the §1.5 Style Lock cheat-sheet, then submit:**

```
CLIP 1 OF 3 — AWAKENING. Duration: exactly 10 seconds, 24 fps native.
Total 240 frames. Every motion uses cubic-bezier(0.65, 0, 0.35, 1). Never linear.

OPENING FRAME (frame 0): Pure black frame. No axis, no silhouette. Empty void.

BEAT MAP:

0.0–3.3 s (frames 0–80) — VOID BIRTH
  Frames  0–36 : the AXIS fades in from top and bottom toward center. Volumetric golden beam, 2 px solid core + 8 px anisotropic gaussian glow, color #D4A855, brightest at Y=40% from top.
  Frames 24–60 (overlap): a backlit human silhouette resolves at center-frame via a 36-frame opacity ramp. Rim light appears at shoulders (#D4A855 @ 30% opacity, gradient to #000 at feet). 7-head-tall canonical proportions, gender-neutral, feet touching, arms at sides. NO breathing, NO hair sway.
  Frames 60–80 : motion decelerates. Silhouette fully resolved and completely still.

3.3–6.6 s (frames 80–160) — NETHERWORLD
  Frames  80–98 (18 frames): dark obsidian terrain fractures outward from the human's feet in a 45° cone. Propagation follows cubic-bezier ease-out.
  Frames  84–120 (offset by 4 frames): black volumetric mist rises simultaneously.
  Frames 120–160: obsidian fully formed, mist at peak-rise. Imperceptible dolly-in (~1 % zoom).

6.6–10.0 s (frames 160–240) — DESERT (ends on the HANDOFF frame)
  Frames 160–180 (20 frames): obsidian morphs into fine golden sand via a 2-layer cross-dissolve offset by 4 frames — no particle spawn, no fizz, watercolor-bleed feel.
  Frames 180–220: sand storms curl around the golden axis in magnetic-field-line arcs, never touching the silhouette. Motion cubic ease-in-out. Heat shimmer distorts air in a subtle 2–3 px sine wave.
  Frames 220–234: swirl decelerates to its peak position.
  Frames 234–240 (final 6 frames): DEAD-AIR HOLD — absolutely zero motion.

CLOSING FRAME (frame 240 — THIS IS THE HANDOFF FRAME, will be extracted as handoff-1.png):
Sand storm frozen mid-swirl around the golden axis at center-frame. Individual golden sand grains suspended motionless in mid-air in magnetic-field-line arcs. Backlit silhouette absolutely motionless with gold rim-light at shoulders. Obsidian ground faintly visible beneath the sand. Heat shimmer paused mid-oscillation. Palette strictly void black + gold #D4A855, nothing else. Camera locked-off. Zero motion.

Grade: ARRI Alexa Log C → Rec.709 film curve, 3200K warm tungsten, +5 magenta, 0.3 % monochrome film grain, no digital sharpening, no chromatic aberration, no lens flare, no bloom halo on axis.

DO NOT INCLUDE: text on screen, subtitles, logos, watermarks, products, hoodies, apparel, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, chromatic aberration, cyberpunk, neon pink, neon cyan, cartoon, anime, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, motion trail, tracer lines, ghosting, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, RGB primaries.

FORMAT: 1920×1080, 16:9, 24 fps native (NO interpolation), no audio. Deliver as MP4 H.264.
```

### §2b.2 Clip 2 — COLLAPSE (10–20 s)

**Before submitting**: switch Veo 3 to *image-to-video* mode and upload `handoff-1.png` as the start / reference image. Prepend the §1.5 Style Lock cheat-sheet, then submit:

```
CLIP 2 OF 3 — COLLAPSE. Duration: exactly 10 seconds, 24 fps native.
Total 240 frames. Every motion uses cubic-bezier(0.65, 0, 0.35, 1).

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Sand storm frozen mid-swirl around a vertical golden axis (color #D4A855) at center-frame, backlit silhouette absolutely motionless with gold rim-light at shoulders, obsidian ground faintly visible beneath the sand, heat shimmer paused. Palette: void black + gold only.

BEAT MAP (4 beats × 60 frames each):

0.0–2.5 s (frames 0–60) — WATER
  Frames  0–14 : sand liquefies into deep dark blue-black water via a foreground-to-background liquefaction wave. No cut, no fizz. Sand grains lose surface tension and pool.
  Frames 14–48: gravity visibly flips. Water rotates counter-clockwise around the axis at ~40 °/second. 360° vortex encircles the axis but NEVER touches the human silhouette — maintain a 1 cm clear void gap around the figure. Gold reflections ripple across the water surface. Human is dry, motionless.
  Frames 48–54: rotation decelerates.
  Frames 54–60: dead-air hold, water frozen at peak rotation.

2.5–5.0 s (frames 60–120) — FOREST
  Frames  60–68 (8 frames): water evaporates upward as pale gold fog.
  Frames  74–94 (6-frame gap after fog, then 20 frames): dark trees grow rapidly from below the frame in stop-motion cadence. Roots visibly bend around the human silhouette — no root within 1 cm of the figure.
  Frames  94–114: leaves freeze mid-air within a 30 cm radius of the axis, absolutely unmoving.
  Frames 114–120: dead-air hold, forest suspended.

5.0–7.5 s (frames 120–180) — LAVA
  Frames 120–136 (16 frames): forest chars in a slow left-to-right radial wave.
  Frames 136–170: molten GOLDEN lava (color #D4A855, NEVER red) erupts from ground cracks but arcs AWAY from the axis in visible parabolic curves — gap of at least 20 % frame width around the figure. Ember particles rise on cubic ease-out.
  Frames 170–180: dead-air hold, eruption frozen mid-arc, embers suspended.

7.5–10.0 s (frames 180–240) — ICE SHATTER (ends on HANDOFF frame)
  Frames 180–192 (12 frames): lava flash-freezes mid-air into pale-gold crystalline structures. Freeze wave propagates from the axis outward in concentric shells. All embers stop mid-air.
  Frames 192–212 (20-frame delay): frost creeps along the ground.
  Frames 212–240 (final 28 frames): absolute stillness. NO motion whatsoever. Pure held silence.

CLOSING FRAME (frame 240 — THIS IS THE HANDOFF FRAME, will be extracted as handoff-2.png):
Frozen crystalline tableau. Pale-gold crystals suspended in mid-air where lava used to be. Ember particles frozen mid-rise. Frost creeps across the ground. Backlit silhouette absolutely motionless at center-frame with gold rim-light at shoulders, aligned to the vertical golden axis. Palette: void black + pale gold + gold axis #D4A855. Glass-like clarity. Camera locked. Zero motion.

Grade + negatives: same as Clip 1.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.3 Clip 3 — REVELATION (20–30 s)

**Before submitting**: upload `handoff-2.png` as the start / reference image in Veo 3's image-to-video mode. Prepend the §1.5 Style Lock cheat-sheet, then submit:

```
CLIP 3 OF 3 — REVELATION. Duration: exactly 10 seconds, 24 fps native.
Total 240 frames. This clip contains the ONLY rapid camera move in the entire film and ends on the poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Frozen crystalline tableau, pale-gold crystals suspended mid-air, frost across the ground, backlit silhouette absolutely motionless at center-frame with gold rim-light at shoulders, aligned to the vertical golden axis #D4A855. Palette: void black + pale gold + gold.

BEAT MAP (3 beats):

0.0–3.3 s (frames 0–80) — GALAXY REVEAL (only rapid camera move in the film)
  Frame   0 : crystals silently shatter into stars. Individual particles INHERIT their previous positions — DO NOT respawn randomly.
  Frames  0–30 (30 frames, cubic ease-out): camera pulls back RAPIDLY, revealing every previous realm existed inside a slowly rotating cosmic mandala. Human silhouette becomes microscopic at center-frame. Golden axis extends across the entire cosmos, still visible.
  Frames 30–74: mandala rotates slowly. "OWN KARMA" faintly etched into star constellation patterns.
  Frames 74–80: camera fully decelerates to a stop. Mandala continues its slow rotation.

3.3–6.6 s (frames 80–160) — SUN IGNITION
  Frame  80 : camera fully re-locked.
  Frames  80–86 (6 frames, cubic ease-in-out): a small golden sun (color #D4A855, NO bloom halo, NO lens flare) ignites at Y=25 % from top on the axis, directly above the microscopic human.
  Frames  86–104 (18 frames, 3 frames per ring): six concentric Sudarshan-chakra rings of golden line-art reveal sequentially around the sun. Mathematical, precise.
  Frames 104–154: chakra rotates slowly around the sun.
  Frames 154–160: rotation decelerates to zero.

6.6–10.0 s (frames 160–240) — LOCK
  Frames 160–180 (20 frames, cubic ease-out): all remaining motion decelerates to absolute zero. The axis, the Sudarshan sun geometry, and the human silhouette settle into ONE perfect vertical line at center-frame. Faint golden particles hang suspended.
  Frames 180–240 (final 60 frames = 2.5 s): HELD FINAL FRAME. Zero motion. Nothing changes. This is the resolution.

CLOSING FRAME (frame 240 — THIS IS THE POSTER FRAME, will be extracted as hero-poster.jpg):
LOCK configuration. From top to bottom on the vertical golden axis at center-frame: small golden sun with 6-ring Sudarshan chakra above, cosmic mandala rotating faintly in the deep background, microscopic backlit human silhouette below the sun, faint golden particles suspended, unmoving. All in perfect vertical alignment. Palette: void black + gold #D4A855 only. Camera locked-off. Absolute stillness.

Grade + negatives: same as Clip 1.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### §2b.4 Merge command (concatenate + re-encode for scroll-scrub)

Run after all three clips are downloaded to the same folder:

```powershell
# Step 1 — write the concat filelist
@'
file 'clip1.mp4'
file 'clip2.mp4'
file 'clip3.mp4'
'@ | Out-File -Encoding ascii concat.txt

# Step 2 — concat (lossless copy, assumes identical codec params across all 3)
ffmpeg -f concat -safe 0 -i concat.txt -c copy merged-raw.mp4

# Step 3 — single re-encode with the mandatory scroll-scrub flags
ffmpeg -i merged-raw.mp4 `
  -c:v libx264 -profile:v high -crf 20 `
  -g 12 -keyint_min 12 `
  -pix_fmt yuv420p `
  -movflags +faststart `
  -an `
  -vf "scale=1920:-2:flags=lanczos,fps=24" `
  hero-main.mp4

# Step 4 — export the poster from the final held frame
ffmpeg -sseof -0.05 -i hero-main.mp4 -vframes 1 -q:v 3 hero-poster.jpg
```

**If step 2 errors with "codec parameters don't match"** (Veo sometimes exports different pixel formats per clip), replace step 2 with a re-encoding concat via the filter graph:

```powershell
ffmpeg -i clip1.mp4 -i clip2.mp4 -i clip3.mp4 `
  -filter_complex "[0:v][1:v][2:v]concat=n=3:v=1:a=0[out]" `
  -map "[out]" `
  -c:v libx264 -profile:v high -crf 18 `
  -g 12 -keyint_min 12 -pix_fmt yuv420p `
  -movflags +faststart -an `
  -vf "scale=1920:-2:flags=lanczos,fps=24" `
  merged-raw.mp4
```

Then skip step 3 (already encoded) and go straight to step 4.

### §2b.5 Extra QA for the 3-clip merge

Additional checks on top of the §6 master checklist:

- [ ] `handoff-1.png` and Clip 2's first frame are visually identical — open both in an image diff tool (Photoshop Layer Difference, or `ffmpeg` `-filter_complex "psnr"`); PSNR should be ≥ 40 dB.
- [ ] `handoff-2.png` and Clip 3's first frame likewise ≥ 40 dB PSNR.
- [ ] Merged `hero-main.mp4` scrubbed slowly back and forth across the **10.0 s** and **20.0 s** timestamps in a browser tab shows no flash, no color jump, no luminance step.
- [ ] Final duration is 30.0 s ± 0.1 s (`ffprobe hero-main.mp4 -show_entries format=duration`).
- [ ] `ffprobe hero-main.mp4 -show_streams` reports exactly 1 stream, `codec_type=video`, 0 audio streams.
- [ ] Poster JPEG file size ≤ 250 KB.

---

## 2c. Mobile variant (9:16 vertical film for phones)

The landscape 16:9 hero, when `object-cover`-cropped to a phone viewport (~9:19), throws away 74 % of its horizontal pixels — wasted bandwidth on cellular India. Solution: ship a separate 9:16 clip generated natively in portrait. HeroFilm.jsx will pick the right one via `matchMedia('(max-width: 767px)')` (wired once the file arrives).

**Why our story adapts perfectly to portrait:**
- The AXIS is a vertical line — portrait framing accentuates it.
- The human silhouette is vertical — no cropping penalty.
- All key content is centered on the axis — the extra vertical real estate on portrait just lets the axis "breathe" further top and bottom.
- Overlay text lives in the lower third — portrait *gives us more* room for the beat titles than landscape.

### §2c.0 Files & sizes

| File | Aspect | Resolution | Target size | Purpose |
| :--- | :---: | :---: | :---: | :--- |
| `hero-main.mp4` | 16:9 | 1280×720 | ≤ 8 MB | Desktop / tablet (≥ 768 px viewport) |
| `hero-main-mobile.mp4` | **9:16** | **720×1280** | **≤ 6 MB** | Mobile portrait (< 768 px viewport) |
| `hero-poster.jpg` | 16:9 | 1280×720 | ≤ 250 KB | Desktop pre-decode poster |
| `hero-poster-mobile.jpg` | 9:16 | 720×1280 | ≤ 200 KB | Mobile pre-decode poster |

### §2c.1 What changes vs the landscape prompts

Only three things:

1. **Aspect ratio → 9:16.** In Flow / Veo 3, change the aspect selector to `9:16` (Portrait) *before* pasting the prompt.
2. **Framing note in the prompt.** The axis needs to extend to the *full vertical height* of a taller frame. Include an explicit "extends floor-to-ceiling" instruction so the AI doesn't shrink the axis.
3. **Lower-third safe area** grows from ~30 % of frame to ~40 % of frame — copy the DOM overlay text room accordingly.

Everything else — palette, motion physics, dead-air holds, silhouette rendering, hidden text, negative prompts — is identical.

### §2c.2 Mobile Clip 1 prompt — AWAKENING (0–10 s, 9:16)

**Set Flow / Veo 3 aspect to 9:16 before submitting.** Then prepend the §1.5 Style Lock cheat-sheet, then submit:

```
CLIP 1 OF 3 (MOBILE 9:16) — AWAKENING. Duration: exactly 10 seconds, 24 fps native, portrait orientation.
Total 240 frames. Every motion uses cubic-bezier(0.65, 0, 0.35, 1). Never linear.

FRAMING (portrait — critical):
- Aspect ratio: 9:16 (vertical / portrait).
- Target resolution: 720×1280 or 1080×1920.
- The AXIS extends floor-to-ceiling — literally top pixel to bottom pixel of the frame, no fade at the extremes for the first half of the clip. It is a full-height vertical light beam, brightest at Y=40% from top.
- The human silhouette is centered horizontally, Y=40% from top (same as landscape). The extra vertical room on portrait sits above the head and below the feet — do not fill this with content; the axis alone lives there.
- Lower ~40% of the frame is kept visually quiet (dark, minimal detail) for DOM overlay text. Do NOT put embers, particles, or bright elements in the lower 40% of the frame at any beat.

OPENING FRAME (frame 0): Pure black frame. No axis, no silhouette. Empty void, taller than wide.

BEAT MAP:

0.0–3.3 s (frames 0–80) — VOID BIRTH
  Frames  0–36: the AXIS fades in from top and bottom toward center. Volumetric golden beam, 2 px solid core + 8 px anisotropic gaussian glow, color #D4A855. In portrait framing, the axis is visible for the FULL height of the frame — top and bottom edges included.
  Frames 24–60 (overlap): a backlit human silhouette resolves at center-X, Y=40% from top via a 36-frame opacity ramp. Rim light at shoulders (#D4A855 @ 30% opacity, gradient to #000 at feet). 7-head-tall canonical proportions, gender-neutral, feet touching, arms at sides. NO breathing, NO hair sway.
  Frames 60–80: motion decelerates. Silhouette fully resolved.

3.3–6.6 s (frames 80–160) — NETHERWORLD
  Frames  80–98: dark obsidian terrain fractures outward from the human's feet in a 45° cone. Fracture spreads horizontally but does NOT rise past the human's knees — keep the lower quarter (below feet) mostly dark for overlay text.
  Frames  84–120 (offset by 4 frames): black volumetric mist rises simultaneously, ONLY in the middle third of the frame vertically. Above and below stays clear.
  Frames 120–160: obsidian fully formed, mist at peak-rise. Imperceptible dolly-in (~1 % zoom).

6.6–10.0 s (frames 160–240) — DESERT (ends on the HANDOFF frame)
  Frames 160–180: obsidian morphs into fine golden sand via a 2-layer cross-dissolve offset by 4 frames — no particle spawn, no fizz, watercolor-bleed feel. Sand fills the middle third of the frame vertically; upper and lower thirds fade to void black.
  Frames 180–220: sand storms curl around the golden axis in magnetic-field-line arcs, never touching the silhouette, and never extending into the lower 40% or upper 20% of the frame. Motion cubic ease-in-out.
  Frames 220–234: swirl decelerates to its peak position.
  Frames 234–240 (final 6 frames): DEAD-AIR HOLD — absolutely zero motion.

CLOSING FRAME (frame 240 — HANDOFF, will be extracted as handoff-mobile-1.png):
Sand storm frozen mid-swirl around the vertical golden axis at center-X. Individual golden sand grains suspended motionless in the middle third of the frame. Backlit silhouette absolutely motionless with gold rim-light at shoulders. Upper 20% and lower 40% of frame is pure void black (empty for DOM text). Camera locked-off. Zero motion.

Grade: ARRI Alexa Log C → Rec.709 film curve, 3200K warm tungsten, +5 magenta, 0.3 % monochrome film grain, no digital sharpening, no chromatic aberration, no lens flare, no bloom halo on axis.

DO NOT INCLUDE: text on screen, subtitles, logos, watermarks, products, hoodies, apparel, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, chromatic aberration, cyberpunk, neon pink, neon cyan, cartoon, anime, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, motion trail, tracer lines, ghosting, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, RGB primaries, content in the lower 40% of the frame, content in the upper 20% of the frame.

FORMAT: 720×1280 (or 1080×1920) 9:16 portrait, 24 fps native (NO interpolation), no audio. Deliver as MP4 H.264.
```

### §2c.3 Mobile Clip 2 — COLLAPSE (10–20 s, 9:16)

**Before submitting**: extract Mobile Clip 1's final frame as `handoff-mobile-1.png` (see §2c.4) and upload it as the start / reference image in Flow's *Frames to Video* mode. Aspect still **9:16**. Then prepend the §1.5 Style Lock cheat-sheet, then submit:

```
CLIP 2 OF 3 (MOBILE 9:16) — COLLAPSE. Duration: exactly 10 seconds, 24 fps native, portrait orientation.
Total 240 frames. Every motion uses cubic-bezier(0.65, 0, 0.35, 1). Never linear.

FRAMING (portrait — critical):
- Aspect ratio: 9:16 (vertical / portrait).
- Target resolution: 720×1280 or 1080×1920.
- The AXIS extends floor-to-ceiling — top pixel to bottom pixel of the frame.
- The human silhouette is centered horizontally, Y=40% from top. Absolutely motionless.
- Lower ~40% of the frame stays visually quiet (dark, minimal detail) for DOM overlay text.
- Upper ~20% of the frame stays visually quiet.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Sand storm frozen mid-swirl around a vertical golden axis (color #D4A855) at center-X in a 9:16 portrait frame, backlit silhouette absolutely motionless with gold rim-light at shoulders, upper 20% and lower 40% of frame is pure void black. Palette: void black + gold only.

BEAT MAP (4 beats × 60 frames each):

0.0–2.5 s (frames 0–60) — WATER
  Frames  0–14: sand liquefies into deep dark blue-black water via a liquefaction wave emanating from mid-frame outward. No cut, no fizz. Water fills only the middle third of the frame vertically; upper 20% and lower 40% remain pure void black.
  Frames 14–48: gravity visibly flips. Water rotates counter-clockwise around the axis at ~40 °/second, contained within the middle third. 360° vortex encircles the axis but NEVER touches the human silhouette — maintain a 1 cm clear void gap around the figure. Gold reflections ripple across the water surface.
  Frames 48–54: rotation decelerates.
  Frames 54–60: dead-air hold, water frozen at peak rotation.

2.5–5.0 s (frames 60–120) — FOREST
  Frames  60–68: water evaporates upward as pale gold fog, contained within the middle third.
  Frames  74–94 (6-frame gap after fog, then 20 frames): dark trees grow rapidly at the sides of the frame. Trunk visible only within the middle third of the frame vertically — canopies fade before reaching the upper 20%, roots fade before entering the lower 40%. Trees never obstruct the axis or the human.
  Frames  94–114: leaves freeze mid-air within a 30 cm radius of the axis, absolutely unmoving.
  Frames 114–120: dead-air hold, forest suspended.

5.0–7.5 s (frames 120–180) — LAVA
  Frames 120–136 (16 frames): forest chars via a slow radial wave from the axis outward. Char pattern respects the safe areas — upper 20% and lower 40% remain void black.
  Frames 136–170: molten GOLDEN lava (color #D4A855, NEVER red) erupts from ground cracks in the middle third but arcs AWAY from the axis in visible parabolic curves — gap of at least 20 % frame width around the figure. Ember particles rise on cubic ease-out but do NOT rise into the upper 20% of the frame.
  Frames 170–180: dead-air hold, eruption frozen mid-arc, embers suspended within the middle third.

7.5–10.0 s (frames 180–240) — ICE SHATTER (ends on HANDOFF frame)
  Frames 180–192 (12 frames): lava flash-freezes mid-air into pale-gold crystalline structures. Freeze wave propagates from the axis outward in concentric shells, contained within the middle third of the frame. All embers stop mid-air.
  Frames 192–212 (20-frame delay): frost creeps along the base of the middle third but does NOT enter the lower 40% dark zone.
  Frames 212–240 (final 28 frames): absolute stillness. NO motion whatsoever.

CLOSING FRAME (frame 240 — HANDOFF, will be extracted as handoff-mobile-2.png):
Frozen crystalline tableau contained within the middle third of the portrait frame. Pale-gold crystals suspended mid-air where lava used to be. Backlit silhouette absolutely motionless at center-X with gold rim-light at shoulders, aligned to the vertical golden axis #D4A855. Upper 20% and lower 40% of frame is pure void black. Glass-like clarity in the middle third. Camera locked. Zero motion.

DO NOT INCLUDE: text on screen, subtitles, logos, watermarks, products, hoodies, apparel, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, chromatic aberration, cyberpunk, neon pink, neon cyan, cartoon, anime, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, motion trail, tracer lines, ghosting, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, RGB primaries, content in the lower 40% of the frame, content in the upper 20% of the frame.

FORMAT: 720×1280 (or 1080×1920) 9:16 portrait, 24 fps native, no audio. Deliver as MP4 H.264.
```

### §2c.3b Mobile Clip 3 — REVELATION (20–30 s, 9:16)

**Before submitting**: extract Mobile Clip 2's final frame as `handoff-mobile-2.png` (see §2c.4) and upload it as the start / reference image in Flow's *Frames to Video* mode. Aspect still **9:16**. Then prepend the §1.5 Style Lock cheat-sheet, then submit:

```
CLIP 3 OF 3 (MOBILE 9:16) — REVELATION. Duration: exactly 10 seconds, 24 fps native, portrait orientation.
Total 240 frames. Contains the ONLY rapid camera move in the entire film. Ends on the poster frame.

FRAMING (portrait — critical):
- Aspect ratio: 9:16 (vertical / portrait).
- Target resolution: 720×1280 or 1080×1920.
- The AXIS extends floor-to-ceiling.
- The human silhouette is centered horizontally, Y=40% from top. Absolutely motionless (until it becomes microscopic during Galaxy Reveal).
- Lower ~40% of the frame stays visually quiet for DOM overlay text.
- Upper ~20% of the frame stays visually quiet.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Frozen crystalline tableau in the middle third of a 9:16 portrait frame, pale-gold crystals suspended mid-air, backlit silhouette absolutely motionless at center-X with gold rim-light at shoulders, aligned to the vertical golden axis #D4A855. Upper 20% and lower 40% of frame is pure void black.

BEAT MAP (3 beats):

0.0–3.3 s (frames 0–80) — GALAXY REVEAL (the only rapid camera move in the entire film)
  Frame  0: crystals silently shatter into stars. Individual particles INHERIT their previous positions — DO NOT respawn randomly.
  Frames  0–30 (30 frames, cubic ease-out): camera pulls back RAPIDLY along the Z-axis (straight-in zoom-out, no pan), revealing every previous realm existed inside a slowly rotating cosmic mandala. Human silhouette becomes microscopic at center-frame. Golden axis extends across the full vertical height of the cosmos, still visible top-to-bottom. Stars now visible across most of the frame, but density is REDUCED in the lower 40% (sparse dim stars only, max luma ≤ 0.2 in that region) so DOM overlay text stays readable.
  Frames 30–74: mandala rotates slowly. Faint "OWN KARMA" etched into star constellation patterns in the upper 60% of the frame only.
  Frames 74–80: camera fully decelerates to a stop.

3.3–6.6 s (frames 80–160) — SUN IGNITION
  Frame  80: camera fully re-locked. Stars in the lower 40% dim further to near-black; upper region keeps its mandala rotation.
  Frames  80–86 (6 frames, cubic ease-in-out): a small golden sun (color #D4A855, NO bloom halo, NO lens flare) ignites at Y=25% from top on the axis, directly above the microscopic human.
  Frames  86–104 (18 frames, 3 frames per ring): six concentric Sudarshan-chakra rings of golden line-art reveal sequentially around the sun. Mathematical, precise. Rings stay contained around the sun in the upper-middle region — do NOT let rings extend into the lower 40% dark zone.
  Frames 104–154: chakra rotates slowly around the sun.
  Frames 154–160: rotation decelerates to zero.

6.6–10.0 s (frames 160–240) — LOCK
  Frames 160–180 (20 frames, cubic ease-out): all remaining motion decelerates to absolute zero. The axis, the Sudarshan sun geometry, and the human silhouette settle into ONE perfect vertical line at center-X. Faint golden particles hang suspended near the axis, contained within the middle third.
  Frames 180–240 (final 60 frames = 2.5 s): HELD FINAL FRAME. Zero motion. Nothing changes. This is the resolution.

CLOSING FRAME (frame 240 — POSTER FRAME, will be extracted as hero-poster-mobile.jpg):
LOCK configuration in portrait 9:16. From top to bottom on the vertical golden axis at center-X:
  • Upper 20%: dark cosmic mandala rotating faintly, sparse stars.
  • Middle: golden sun with 6-ring Sudarshan chakra at Y=25%, microscopic backlit human silhouette at Y=40%, faint golden particles suspended.
  • Lower 40%: pure void black (empty for DOM overlay text).
All in perfect vertical alignment. Palette: void black + gold #D4A855 only. Camera locked-off. Absolute stillness.

DO NOT INCLUDE: text on screen, subtitles, logos, watermarks, products, hoodies, apparel, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, chromatic aberration, cyberpunk, neon pink, neon cyan, cartoon, anime, letterbox bars, ken burns pan, dutch tilt, handheld shake (except the intentional zoom-out in Galaxy Reveal), lens flare whip, motion trail, tracer lines, ghosting, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, RGB primaries, bright content in the lower 40% of the frame (except during Galaxy Reveal where sparse dim stars are allowed).

FORMAT: 720×1280 (or 1080×1920) 9:16 portrait, 24 fps native, no audio. Deliver as MP4 H.264.
```

### §2c.4 Mobile ffmpeg encode + watermark removal

Same recipe as landscape, only the target resolution changes. Assuming your download is at `C:\Users\saumy\Downloads\mobile-clip-1.mp4`:

```powershell
# Inspect first to find the exact Gemini watermark position on the portrait frame
# (Veo places it bottom-right relative to the frame regardless of orientation)
ffmpeg -y -i "C:\Users\saumy\Downloads\mobile-clip-1.mp4" `
  -vf "select='eq(n,60)+eq(n,180)',crop=250:250:470:1030" `
  -vsync vfr "temp-frames\mobile-corner-%02d.png"

# Then re-encode with delogo at the correct coords (adjust x,y after inspecting the crops)
ffmpeg -y -i "C:\Users\saumy\Downloads\mobile-clip-1.mp4" `
  -vf "delogo=x=576:y=1136:w=52:h=52,fps=24" `
  -c:v libx264 -profile:v high -crf 20 `
  -g 12 -keyint_min 12 -pix_fmt yuv420p `
  -movflags +faststart -an `
  public\videos\hero-main-mobile.mp4

# Extract mobile poster from the final held frame
ffmpeg -y -sseof -0.1 -i public\videos\hero-main-mobile.mp4 `
  -update 1 -frames:v 1 -q:v 3 `
  public\videos\hero-poster-mobile.jpg
```

Note: for a 720×1280 portrait frame, the bottom-right corner is at (720, 1280), so delogo coords swap: `x=576:y=1136:w=52:h=52` targets roughly the same corner *relative to the frame*. Actual coords need visual verification via the corner crops.

### §2c.5 Site wiring (auto-done once files exist)

Once `public/videos/hero-main-mobile.mp4` and `public/videos/hero-poster-mobile.jpg` land, `HeroFilm.jsx` will be updated to pick the right pair based on viewport width:

```jsx
// Pseudocode — actual wire-up happens when files arrive
const isMobile = useMediaQuery('(max-width: 767px)')
const src = isMobile ? '/videos/hero-main-mobile.mp4' : '/videos/hero-main.mp4'
const poster = isMobile ? '/videos/hero-poster-mobile.jpg' : '/videos/hero-poster.jpg'
```

No breakpoint gymnastics needed — the existing `useMediaCapability` hook already tracks `isMobile` at the same 767 px breakpoint.

---

## 3. Universal negative prompt (paste into "avoid" / "negative prompt" field)

```
text on screen, subtitles, letters visible in frame, logos, watermarks, products, hoodies, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo on axis, digital sharpening
```

---

## 4. Style keyword pool (append to keyword-driven tools)

```
cinematic, mythological, divine geometry, sacred, adult, inevitable, controlled, slow, meditative, Hans Zimmer scored, SS Rajamouli scale, Namit Malhotra Ramayana, Sudarshan chakra, axis mundi, dark ambient, oil-painting light, IMAX composition, 24fps native, deep blacks, gold accent only, no letterbox, ARRI Alexa Log C, Rec.709 film curve, 3200K warm tungsten, monochrome film grain, cubic-bezier easing, dead-air holds, volumetric golden beam, rim-lit silhouette, single-breath macro-arc
```

---

## 5. After generation — mandatory re-encode

Whatever the AI tool exports, run it through the `ffmpeg` recipe in [`/public/videos/README.md`](../public/videos/README.md) before committing. **Non-negotiable flags:**

- `-g 12 -keyint_min 12` — keyframe every ≤ 12 frames. Without this, the scroll-scrub in `HeroFilm.jsx` will stutter badly because `<video>.currentTime` walks back to the nearest keyframe on every seek.
- `-an` — strip audio. All sound is handled by `AmbientMixer`.
- `-movflags +faststart` — moves the `moov` atom to the head so the browser can start decoding before download completes.
- Target size ≤ 8 MB. Adjust `-crf` (20 → 23–25) if the raw export overshoots.

Full command:

```bash
ffmpeg -i raw-export.mp4 \
  -c:v libx264 \
  -profile:v high \
  -crf 20 \
  -g 12 -keyint_min 12 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  -vf "scale=1920:-2:flags=lanczos,fps=24" \
  hero-main.mp4
```

Then also grab a poster from beat 1:

```bash
ffmpeg -ss 00:00:02 -i hero-main.mp4 -vframes 1 -q:v 3 hero-poster.jpg
```

Drop both files into [`/public/videos/`](../public/videos/) and delete `hero-poster.svg`. No code changes needed — `HeroFilm.jsx` picks them up automatically.

---

## 6. Iteration checklist for the vendor / AI tool operator

Before shipping the final cut, walk through:

**Constants (must be true in every single frame):**

- [ ] Axis is visible in **every single frame** — pause at random points, confirm.
- [ ] Axis position, thickness, and color are **pixel-identical** across all 10 beats (open any two beat mid-frames as overlayed layers in Photoshop / DaVinci; the axis must not shift by even 1 px).
- [ ] Human silhouette is **motionless** — pause at random points, confirm feet, arms, head do not move. No breathing, no hair sway, no clothing shift.
- [ ] Silhouette rim-lit only, face is pure black, no facial features visible.
- [ ] Palette contains **only** black, bone off-white (≤ #DDDDDD / Y-luma 0.86), and gold #D4A855. Sample 20 random pixels across the film with a color picker; anything else = reject.
- [ ] No text, logo, product, apparel, or face is visible at any timestamp.

**Motion physics (this is what makes it feel smooth):**

- [ ] Every beat has **6 frames of dead-air** at its end — zero-motion hold before the next beat begins.
- [ ] No motion anywhere is linear — open the film in DaVinci, inspect motion curves, they must all be S-shaped (cubic-bezier or slower).
- [ ] Beat-to-beat transitions are morphs or cross-dissolves — no hard cuts, no swipes, no wipes.
- [ ] Camera is locked-off or ultra-slow dolly for beats 1–7 and 9–10. Only Beat 8 has a rapid pull-back.
- [ ] Macro-arc reads as a single breath — dolly speed slowest during beats 4–7 (held tension), subtle acceleration during beats 8–10 (exhale).

**Deliverable format:**

- [ ] Total duration is 24 s ± 1 s.
- [ ] Final frame holds on the "Lock" configuration for ≥ 1.2 s — this frame becomes `hero-poster.jpg`.
- [ ] Audio track is completely stripped (`ffprobe hero-main.mp4` shows only 1 video stream, 0 audio streams).
- [ ] Encoded with `-g 12 -keyint_min 12 -movflags +faststart -an` per `/public/videos/README.md`.
- [ ] File size ≤ 8 MB. If over, re-encode with `-crf 23` or `-crf 25`.

**Scrub test (single most important quality check):**

- [ ] Open `hero-main.mp4` in a browser tab, drag the timeline scrubber back and forth rapidly. It must play forwards and backwards smoothly with no stuttering, no flash-frames, no wait-for-keyframe hitches. If it stutters, the keyframe interval is wrong — re-encode with `-g 12`.
- [ ] Open the site with the file installed at `/public/videos/hero-main.mp4`. Scroll the hero region slowly from top to bottom then bottom to top. The film should scrub perfectly in both directions.

---

*Companion documents: [`requirement2.md`](requirement2.md) · [`own_karma.md`](own_karma.md) · [`/public/videos/README.md`](../public/videos/README.md).*
