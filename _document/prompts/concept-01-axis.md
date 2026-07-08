# Concept 01 — The Axis Through All Realms

**Duration:** 42 seconds · **Aspect:** 1920×1080 landscape + 1080×1920 portrait sibling · **Route:** `/` (Home hero, scroll-scrubbed)
**Canon:** [`_document/own_karma.md` §Concept 01](../own_karma.md) · [`storyConcepts.js['axis']`](../../src/data/storyConcepts.js)
**Site component:** [`HeroFilm.jsx`](../../src/hero/HeroFilm.jsx)
**Related hoodie:** the film ENDS **before** any hoodie appears. This is the "AXIS-01 · The Divine Blueprint" (`BLUEPRINT-02`) drop teaser.

---

## Canonical anchors (must respect all four)

```
Visual reference context:  2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision
Reference bar:             Ramayana — The Introduction (Sony Music India / Hans Zimmer + AR Rahman)
                           + Varanasi to the World (T-Series / SS Rajamouli / MM Keeravaani)
Formula:                   Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability
Universal Rule:            No visible product (hoodie/tee) anywhere in this film — Concept 01 ENDS on the LOCK frame BEFORE any garment exists.
```

**Signature ending:** `OWN KARMA. Black. Silence. End.` (implemented as: LOCK final frame is the poster + AmbientMixer handles silence).

---

## Style Lock cheat-sheet (prepend to every per-clip call)

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

## 1. Master prompt (single-shot generators — Sora, Veo 3 Pro, etc.)

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

FINAL WHISPERED LINE (visual reference only, DO NOT render as on-screen text — will be layered as DOM overlay by the site):
"Not worn to be seen. Worn to stand correctly."

NEGATIVE / DO NOT INCLUDE: see § Negative prompt at the bottom of this file.

DELIVERABLE: MP4 H.264 High profile, 1920×1080, 24 fps native, audio stripped, keyframe every ≤ 12 frames (-g 12 -keyint_min 12), moov atom at head (-movflags +faststart), duration 42 s ± 1 s. Post-process with the ffmpeg recipe at the bottom of this file.
```

---

## 2. Web 5-clip variant for 8–10 s Veo 3 (canonical 42 s)

Use when your generator caps at 8–10 s per generation (Gemini Veo 3, Runway free tiers, Kling free tier). 5 clips × 8.4 s each = 42 s canonical.

### Workflow

1. Generate Clip 1 in Text-to-Video mode.
2. Extract final frame: `ffmpeg -sseof -0.05 -i clip1.mp4 -vframes 1 -q:v 1 handoff-1.png`
3. Switch to Image-to-Video mode. Upload `handoff-1.png` as start frame. Generate Clip 2.
4. Repeat handoff → Clip 3 → Clip 4 → Clip 5.
5. Merge + delogo + scrub-optimize with the ffmpeg recipe below.

### Beat distribution

| Clip | Time | Canonical beats covered | Handoff-out state |
| :---: | :---: | :--- | :--- |
| **1** | 0–8.4 s   | VOID BIRTH + NETHERWORLD + first half of DESERT TRANSITION | Obsidian dissolving to sand mid-frame, dead-air hold |
| **2** | 8.4–16.8 s | Rest of DESERT TRANSITION + WATER IMPOSSIBILITY | Water frozen at peak 360° rotation around axis |
| **3** | 16.8–25.2 s | FOREST GROWTH + LAVA & PRESSURE + start of ICE SHATTER | Lava mid-flash-freeze, first crystals forming |
| **4** | 25.2–33.6 s | Rest of ICE SHATTER + GALAXY REVEAL + start of SUN IGNITION | Camera settled after pull-back, sun beginning to ignite |
| **5** | 33.6–42.0 s | Rest of SUN IGNITION + LOCK | Final LOCK frame (poster) |

### Clip 1 — VOID BIRTH → NETHERWORLD → DESERT TRANSITION begin (0–8.4 s)

Prepend Style Lock. Then submit in Text-to-Video mode:

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

### Clip 2 — DESERT TRANSITION complete → WATER IMPOSSIBILITY (8.4–16.8 s)

Image-to-Video mode. Upload `handoff-1.png`. Prepend Style Lock. Then submit:

```
CLIP 2 OF 5. Duration: 8.4 s, 24 fps native, 202 frames.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Sand-obsidian cross-dissolve frozen mid-transition, ~30% sand ~70% obsidian, golden axis + silhouette centered.

0.0–3.6 s (frames 0–86) — DESERT TRANSITION completes
  Cross-dissolve completes over first 24 frames — sand replaces obsidian fully. Heat shimmer 2–3 px sine wave distorts air. Sand storms curl around the axis in magnetic-field-line arcs, never touching silhouette. Frames 78–86: dead-air hold, sand suspended at peak swirl.

3.6–7.6 s (frames 86–182) — WATER IMPOSSIBILITY
  Sand liquefies into deep dark blue-black water via foreground-to-background liquefaction wave (14 frames). Gravity visibly flips (water rotates counter-clockwise around axis at ~40°/second). 360° vortex encircles axis, 1 cm clear void gap around human. Gold reflections ripple. Human is dry, motionless. Frames 172–182: rotation decelerates.

7.6–8.4 s (frames 182–202) — WATER HOLD
  Water frozen at peak 360° rotation. Dead-air hold — zero motion. HANDOFF frame.

CLOSING FRAME (frame 202 — HANDOFF): Water in 360° vortex around golden axis, frozen at peak rotation. Human silhouette dry and still at center. Palette void black + gold + deep blue-black water only. Camera locked.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264.
```

### Clip 3 — FOREST GROWTH → LAVA & PRESSURE → ICE SHATTER begin (16.8–25.2 s)

Image-to-Video mode. Upload `handoff-2.png`. Prepend Style Lock. Then submit:

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

### Clip 4 — ICE SHATTER completes → GALAXY REVEAL → SUN IGNITION begin (25.2–33.6 s)

Image-to-Video mode. Upload `handoff-3.png`. Prepend Style Lock. Then submit:

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

### Clip 5 — SUN IGNITION completes → LOCK (33.6–42.0 s) — poster frame

Image-to-Video mode. Upload `handoff-4.png`. Prepend Style Lock. Then submit:

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

---

## 3. Mobile portrait variant (1080×1920, 5 clips × 8.4 s)

**Same beat distribution as landscape**, but portrait 9:16. Set Flow / Veo 3 aspect to **9:16 (Portrait)** before each generation. Target resolution 1080×1920 (portrait 1080p — do NOT generate at 720×1280).

### Portrait framing rules (apply to every clip)

- **Axis extends floor-to-ceiling** — literally top pixel to bottom pixel of the frame.
- Human silhouette centered horizontally, Y=40% from top.
- **Lower ~40% of frame stays visually quiet** (dark, minimal detail) for DOM overlay text.
- **Upper ~20% of frame stays visually quiet.**
- Content lives in the middle 40% band of the frame vertically. Realm elements fill only this band unless a beat explicitly extends further.

### Mobile Clip 1 — VOID BIRTH → NETHERWORLD → DESERT TRANSITION begin (0–8.4 s)

Prepend Style Lock. Then submit in Text-to-Video mode with aspect 9:16:

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

### Mobile Clips 2–5

Structurally identical to §Web Clip 2–5 above, with these substitutions applied to each:
- Aspect: **9:16 portrait**, resolution **1080×1920**
- Prepend the Portrait framing rules (above) to every prompt
- All realm content **contained within the middle 40 % band** of the frame vertically
- Handoff filenames: `handoff-mobile-2.png`, `handoff-mobile-3.png`, `handoff-mobile-4.png`
- Only exception: Galaxy Reveal (Clip 4) — stars can extend across most of the frame during the pull-back beat, but density is REDUCED in the lower 40% (sparse dim stars only, max luma ≤ 0.2)

For the complete mobile Clip 2–5 prompts, see [hero-video-prompt.md §2c](../hero-video-prompt.md) — same content, just kept in the index doc to avoid duplication in this concept file.

---

## 4. Post-generation ffmpeg recipe

Same recipe as all OWN KARMA films. Non-negotiable flags:

- `-c:v libx264 -profile:v main -tune fastdecode` — decoder-friendly for older laptops (kills scrub jitter on Intel iGPUs).
- `-bf 0` — no B-frames. Biggest single scrub-jitter fix.
- `-g 4 -keyint_min 4 -sc_threshold 0` — keyframe every 4 frames.
- `-crf 25` — quality/size balance for 1080p 42 s.
- `-movflags +faststart` — moov atom at head (streams before download completes).
- `-c:a aac -b:a 96k -ac 2` — atmospheric-quality audio (or `-an` for silent).

### Merge 5 clips + delogo + enhance + scrub-optimize

```powershell
ffmpeg -y `
  -i clip1.mp4 -i clip2.mp4 -i clip3.mp4 -i clip4.mp4 -i clip5.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a]concat=n=5:v=1:a=1[cat][aout];[cat]delogo=x=WM_X:y=WM_Y:w=WM_W:h=WM_H,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\hero-main.mp4

# Poster from final LOCK frame
ffmpeg -y -sseof -0.1 -i public\videos\hero-main.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\hero-poster.jpg
```

**Watermark coords**: detect by extracting a bottom-right corner crop from clip1. Landscape Veo 3 typical: `x=1110, y=570, w=100, h=100`. Portrait Veo 3 typical: `x=530, y=1100, w=130, h=140`.

**Mobile merge**: swap `scale=1920:1080` to `scale=1080:1920` and use portrait watermark coords. Output to `public\videos\hero-main-mobile.mp4` + `hero-poster-mobile.jpg`.

---

## 5. Install into the site

**No `storyConcepts.js` edit needed for Concept 01** — the hero film is picked up automatically by `HeroFilm.jsx` from `public/videos/hero-main.mp4`. The `'axis'` concept in `storyConcepts.js` already points at the same file for `/story/axis` reuse:

```js
'axis': {
  ...
  video: {
    src: '/videos/hero-main.mp4',
    poster: '/videos/hero-poster.jpg',
    label: 'Concept 01 hero film — axis through 10 collapsing realms',
  },
}
```

After the mp4 lands in `public/videos/`, refresh `/` — HeroFilm auto-picks it up. `/story/axis` also uses the same video via StoryFilm.

---

## 6. Universal negative prompt

Paste into every generation's "avoid" / "negative prompt" field:

```
text on screen, subtitles, letters visible in frame, on-screen typography, logos, watermarks, products, hoodies as flat garments, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo on axis, digital sharpening
```

---

## 7. QA checklist (Concept 01 specific)

Before shipping, verify:

**Canonical alignment:**
- [ ] Total duration is **42 s ± 1 s** (canonical, per own_karma.md).
- [ ] All 10 beat names match canon exactly: VOID BIRTH · NETHERWORLD · DESERT TRANSITION · WATER IMPOSSIBILITY · FOREST GROWTH · LAVA & PRESSURE · ICE SHATTER · GALAXY REVEAL · SUN IGNITION · LOCK.
- [ ] Beat time boundaries match canon (4 s each for beats 1–7, 5 s for beats 8–9, 4 s for beat 10).
- [ ] Final frame is the LOCK configuration (axis + sun + human aligned).
- [ ] **No visible product** anywhere — the film ends BEFORE any hoodie/garment.

**Constants:**
- [ ] Axis visible in every single frame — pause at random points, confirm.
- [ ] Human silhouette absolutely motionless (no breathing, no hair sway).
- [ ] Palette contains only void black, bone off-white (≤ #DDDDDD), and gold #D4A855.
- [ ] No AI-rendered on-screen text (canonical text is DOM-layered).
- [ ] Watermark completely removed via delogo.

**Motion physics:**
- [ ] Every beat has ≥ 6 frames of dead-air hold at its end.
- [ ] No linear motion anywhere — all curves are S-shaped.
- [ ] Only beat 8 (GALAXY REVEAL) has a rapid camera pull-back.

**Deliverable:**
- [ ] Encoded per §4 recipe (`-profile:v main -tune fastdecode -bf 0 -g 4 -crf 25`).
- [ ] File size ≤ 25 MB for landscape, ≤ 22 MB for mobile portrait.
- [ ] `ffprobe` confirms 1 video stream, 24 fps, correct resolution.

**Scrub test (single most important quality check):**
- [ ] Drag the timeline scrubber back and forth rapidly in a browser tab — no stuttering, no flash-frames.
- [ ] On the site, scroll `/` rapidly — film scrubs smoothly on any hardware.

---

## 8. Cross-references

- [`_document/own_karma.md` §Concept 01](../own_karma.md) — canonical VFX blueprint
- [`_document/hero-video-prompt.md`](../hero-video-prompt.md) — main index + shared anchors
- [`_document/prompts/concept-02-divine.md`](concept-02-divine.md) — next concept
- [`src/hero/HeroFilm.jsx`](../../src/hero/HeroFilm.jsx) — site component that renders this film
- [`src/routes/Home.jsx`](../../src/routes/Home.jsx) — REALMS array with DOM overlay text per beat
- [`public/videos/README.md`](../../public/videos/README.md) — asset contract
