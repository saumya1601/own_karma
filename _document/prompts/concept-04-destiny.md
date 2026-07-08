# Concept 04 — Destiny — The Walls You Call Reality

**Duration:** 45 seconds (canonical, per own_karma.md timeline sum) · **Aspect:** 1920×1080 landscape only · **Route:** `/story/destiny`
**Canon:** [`_document/own_karma.md` §Concept 04](../own_karma.md) · [`storyConcepts.js['destiny']`](../../src/data/storyConcepts.js)
**Site component:** [`StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) (autoplay-loop)

---

## Canonical anchors

```
Visual reference context:  2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision
Reference bar:             Ramayana — The Introduction (Sony / Hans Zimmer + AR Rahman)
                           + Varanasi to the World (T-Series / Rajamouli / MM Keeravaani)
Formula:                   Axis · Blueprint · Realms (as walls) · Hidden Text · Stillness · Inevitability
Universal Rule:            No visible product until beat 6 DESTINY REVEALED where blueprint fragments from the shattered walls dissolve into the hoodie pattern on the silhouette. The garment is made from what was broken.
Defining line:             "Break what contains you."
```

**Central philosophy** (from canon):
> Destiny is not something you reach. It is something you remove. You are not building your future. You are breaking your prison. The walls are not concrete — they are psychological.

---

## TONE RULES — ABSOLUTE (from canon)

**This is the single most important instruction for Concept 04.** Every clip must obey:

```
MUST NOT feel:   Angry · Violent · Explosive
MUST feel:       Controlled · Inevitable · Adult · Calm Destruction
```

If any clip renders wall breaks with speed, sharp glass shards flying, starburst reflections, screen-shake, or aggressive energy — **reject and regenerate**. The walls fall like dust or reveal cracks like blueprint geometry — never like violence.

---

## Style Lock cheat-sheet (prepend to every per-clip call)

```
STYLE LOCK (do not deviate):
- 24 fps native, no frame interpolation.
- Every motion uses cubic-bezier(0.65, 0, 0.35, 1) easing — no linear motion.
- Last 6 frames of each clip: hold the settled state, zero motion (dead-air pause), UNLESS the clip explicitly hands off mid-motion for continuity.
- Camera: LOCKED-OFF for the ENTIRE film. No pans, no dollies, no zooms. Human is fixed in frame. The world moves around them.
- Human silhouette: backlit, rim-lit gold at shoulders fading to black at feet, 7-head-tall, arms at sides, feet touching, absolutely motionless (except for the ~20 px INTENTIONAL step forward at end of Clip 2 and Clip 3 as canon dictates).
- Axis: vertical golden beam BEHIND the silhouette (visible between silhouette and the wall in front), 2 px core + 8 px anisotropic glow, color #D4A855, brightest at Y=40%. The axis extends floor-to-ceiling throughout.
- Palette: void black + charcoal wall variants (Wall 1 Opinion #0F0F14, Wall 2 Comfort #1A1712 warm, Wall 3 Time #14100A, Wall 4 Self mirror #0C0C10) + gold #D4A855 for axis + blueprint lines emerging when walls break + bone off-white capped Y-luma 0.86 for light through cracks. No reds, no reflective silvers, no pure whites.
- Grade: ARRI Log C → Rec.709 film curve, 3200K NEUTRAL (less warm than desert), 0.3% monochrome film grain. Very controlled contrast — deep blacks lifted only 0.02.
- TONE: Calm Destruction. NEVER angry, violent, or explosive.
- No text on screen (canon has readable text on walls but AI renders text unreliably — imply etched writing via texture without legible letters), no logos, no products (until beat 6 hoodie), no faces, no lens flare, no bloom, no chromatic aberration.
```

---

## 1. Master prompt (single-shot 45 s generators — Sora, Veo 3 Pro tier)

Use only if your tool supports 45 s single generations. Otherwise skip to §2.

```
CONCEPT 04: DESTINY — THE WALLS YOU CALL REALITY. Duration: 45 seconds, 24 fps native, 1920×1080 landscape.
Total 1080 frames. Every motion cubic-bezier(0.65, 0, 0.35, 1). Story canon: own_karma.md Concept 04.
Philosophy: "Destiny is not something you reach. It is something you remove." The walls are psychological.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Formula: Axis · Blueprint · Realms (as walls) · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible product until beat 6 DESTINY REVEALED where blueprint fragments dissolve into the hoodie pattern on the silhouette.

TONE RULES ABSOLUTE (from canon):
- MUST NOT feel: Angry · Violent · Explosive.
- MUST feel: Controlled · Inevitable · Adult · Calm Destruction.

DEFINING LINE FOR THIS DROP (rendered as DOM overlay in the final beat, DO NOT bake into video):
'Break what contains you.'

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake as readable text into video — the AI should imply text via etched surface texture only):
  Wall 1 (0–5 s): 'What will they think?' / 'Be realistic.' / 'That's not you.'
  Beat 2 (5–12 s): 'Every destiny begins with disagreement.'
  Wall 2 (12–18 s): 'Later.' / 'You deserve rest.' / 'It's fine.'
  Wall 3 (18–25 s): 'Not now.' / 'Someday.' / 'When I'm ready.' / 'Time is not your enemy. Delay is.'

THE CONSTANT: Single backlit human silhouette (7-head-tall canonical, gender-neutral, feet touching, arms at sides, absolutely motionless except for canonical intentional steps in beats 3 and 4) at center-frame Y=40%. Vertical golden axis extends floor-to-ceiling BEHIND the silhouette. Walls appear IN FRONT of the human (between silhouette and camera).

PALETTE (austere): void black #000000 base, charcoal wall variants:
  Wall 1 Opinion:  #0F0F14 (cold neutral charcoal)
  Wall 2 Comfort:  #1A1712 (warm charcoal)
  Wall 3 Time:     #14100A (cracked amber-charcoal)
  Wall 4 Self:     #0C0C10 (mirror-dark charcoal)
Gold #D4A855 for axis + blueprint lines emerging when walls break. Bone off-white capped Y-luma 0.86 for light through cracks. No reds, no reflective silvers, no pure whites.

GRADE: ARRI Log C → Rec.709 film curve, 3200K NEUTRAL, 0.3% monochrome film grain. Very controlled contrast — deep blacks lifted only 0.02, no crushed shadows.

CAMERA: LOCKED-OFF for the ENTIRE 45 seconds. Zero camera movement at any point.

CANONICAL BEAT MAP (per own_karma.md Concept 04):

0–5 s (frames 0–120) — WALL 1: OPINION
  Massive charcoal wall (#0F0F14) stands between camera and silhouette. Wall surface textured with faint human faces emerging like low-relief fresco carvings — visible but not detailed enough to identify. Etched writing visible on the surface as texture (implies canonical text but NOT legible letters). Wind and distant murmurs conveyed via subtle particulate drift across the wall face. Silhouette absolutely still.

5–12 s (frames 120–288) — THE PRESSURE
  Frames 120–160: silhouette's shape doesn't move, but a soft golden glow (#D4A855, ~20% opacity) emanates from where the silhouette's palm would touch the wall (center-frame, at approximately Y=45%).
  Frames 160–220: silent geometric cracks form on the wall — precise golden line-art fractures, spreading outward from the palm point at ~10 px/frame over 60 frames. NOT jagged glass-break patterns — clean blueprint geometry.
  Frames 220–288: cracks reach wall edges. Faces-in-fresco fade. Whisper particulates dissipate. Wall now heavily cracked but still standing.

12–18 s (frames 288–432) — WALL 2: COMFORT
  Frames 288–336: the cracked WALL 1 dissolves into fine dust that falls calmly (~5 px/frame downward drift, NO explosive burst).
  Frames 336–360: behind the dust, WALL 2 (#1A1712, warmer charcoal) is revealed — smoother than WALL 1, glowing faintly ochre from within.
  Frames 360–420: silhouette absolutely still. Surface of WALL 2 has soft rounded pattern (implies "comfort object" texture — a bed, a blanket, a womb — silhouetted as low relief). Text implied via texture but not legible.
  Frames 420–432: silhouette takes ONE step forward — silhouette shifts 20 px toward camera in 12 frames using cubic ease-in-out. This is the ONLY silhouette motion in the entire film's first half.
  At frame 432 exactly: WALL 2 shatters INTO DUST — particles float outward at ~3 px/frame and evaporate. NO glass sound implied, NO violence, NO shards.

18–25 s (frames 432–600) — WALL 3: TIME
  Frames 432–480: WALL 3 (#14100A, cracked amber-charcoal) is revealed behind the dissolving WALL 2 dust. Wall has an hourglass-shape carved into its surface. Inside the hourglass carving: sand visibly flows UPWARD (impossible physics = "wall reality is a lie"). Sand travels at ~2 px/frame upward against gravity.
  Frames 480–540: silhouette takes ANOTHER step forward — silhouette shifts another 20 px toward camera in 12 frames using cubic ease-in-out.
  Frames 540–600: silhouette walks INTO the wall. Glass fractures around the silhouette's body in geometric blueprint lines (precise, calm). Sand halts mid-air as the silhouette passes. By frame 600: silhouette has moved through the wall's plane; wall is heavily fractured.

25–35 s (frames 600–840) — WALL 4: SELF
  Frames 600–660: WALL 3 fully fractures and its shards drift outward like slow-falling glass. WALL 4 (#0C0C10, mirror-dark charcoal) is revealed behind. WALL 4 is a distorted mirror surface — reflects a smaller, hunched, doubtful version of the silhouette.
  Frames 660–780: FULL STILLNESS. Absolutely no motion. No particulates. Silhouette and its distorted mirror-reflection both absolutely still. Camera locked. This 5-second held silence is the emotional weight of the film.
  Frames 780–830: silhouette steps THROUGH the mirror (silhouette shifts final 20 px forward). Mirror shatters SILENTLY into light fragments that transform into geometric blueprint lines mid-air.
  Frames 830–840: blueprint lines float in the space where the mirror was.

35–45 s (frames 840–1080) — DESTINY REVEALED
  Frames 840–900: walls are all gone. Space is open. Silhouette is at the SAME SIZE (canon rule: "Human has not grown — same size"). Blueprint fragments from the shattered mirror hover in the air around the silhouette at various depths.
  Frames 900–960: fragments dissolve into the hoodie pattern ON the silhouette — the garment is being made from what was broken. Hoodie forms via same organic weaving as Concept 02, but with a KEY DIFFERENCE: the pattern on the hoodie is composed of the visible CRACK LINES from the four walls (Opinion cracks + Comfort dust patterns + Time hourglass geometry + Self mirror geometry all form the design).
  Frames 960–1080: DEAD-AIR HOLD. Silhouette in completed hoodie holds pose. This is the poster frame. The defining line 'Break what contains you.' will overlay as DOM text.

CAMERA: LOCKED-OFF for the ENTIRE film. Zero camera motion.

HIDDEN DETAIL: when walls shatter, geometric blueprint lines briefly spell OWN KARMA before dissolving into the hoodie pattern. Visible only when paused between beat 4 and beat 6.

HOODIE INTEGRATION (beat 6 DESTINY REVEALED — canonical from own_karma.md):
When the walls shatter they dissolve into staircase lines, eye geometry, and blueprint threads that form the hoodie pattern. The cracks of the walls become the design lines. The garment is made from what was broken.

> You don't wear fashion — you wear what you broke through.

NEGATIVE: see §5, PLUS: no wall shattering with speed or violence, no glass shards flying, no sharp reflections, no starburst glare, no red anywhere, no whispered-text as readable letters (imply via texture only).

FORMAT: MP4 H.264, 1920×1080, 24 fps native, ≤ 45 s. Audio optional.
```

---

## 2. Veo 3 6-clip split (canonical, seam-safe — RECOMMENDED)

**Why 6 clips × 7.5 s:**

1. **Veo 3 caps at ~8 s per generation** — 7.5 s is safe under the cap.
2. **Each wall's SHATTER moment MUST be contained in one clip** — otherwise the shatter pattern re-interprets across the boundary and the wall appears to shatter twice. In this split:
   - Wall 1 shatter fully inside Clip 2
   - Wall 2 shatter fully inside Clip 3
   - Wall 3 shatter fully inside Clip 4
   - Wall 4 mirror shatter fully inside Clip 5
3. **The hoodie emergence in DESTINY REVEALED MUST be contained in one clip** — Clip 6 handles all of it.
4. **The camera is LOCKED-OFF throughout** — no rapid motion to contain, but seams still visible if lighting or contrast drifts between clips (why the palette lock is critical).

### 2.1 Clip map

| Clip | Time (s) | Frames | Canonical beats covered | Wall shatter contained? | Silhouette motion in this clip? |
| :---: | :---: | :---: | :--- | :---: | :--- |
| **1** | 0.00–7.50 | 0–180 | WALL 1: OPINION (whole) + THE PRESSURE first 60 frames (palm glow + first cracks) | — | none |
| **2** | 7.50–15.00 | 180–360 | THE PRESSURE finish (cracks complete + **Wall 1 shatters**) + WALL 2: COMFORT begin (revealed + first stillness) | **Wall 1 ✓** | none |
| **3** | 15.00–22.50 | 360–540 | WALL 2: COMFORT finish (**one step forward + Wall 2 shatters**) + WALL 3: TIME begin (revealed + upward sand) | **Wall 2 ✓** | 20 px step forward |
| **4** | 22.50–30.00 | 540–720 | WALL 3: TIME finish (**one step forward + walk through + Wall 3 fractures**) + WALL 4: SELF begin (revealed + start of stillness) | **Wall 3 ✓** | 20 px step forward |
| **5** | 30.00–37.50 | 720–900 | WALL 4: SELF held stillness + **step through + Mirror shatters** + DESTINY REVEALED begin (blueprint fragments hover) | **Wall 4 ✓** | 20 px step forward |
| **6** | 37.50–45.00 | 900–1080 | DESTINY REVEALED finish (blueprint fragments weave into hoodie + poster frame) | — | none |

### 2.2 Universal per-clip workflow

1. Prepend the Style Lock cheat-sheet to every clip's prompt.
2. In Flow / Veo 3: aspect = **16:9**, duration = **8 s** (safe under the cap), model = **Veo 3** (not Fast).
3. **Clip 1 only:** Text-to-Video mode.
4. **Clips 2–6:** Image-to-Video mode. Upload `handoff-destiny-{N-1}.png` as start frame.
5. After each generation, extract that clip's handoff frame:
   ```powershell
   ffmpeg -sseof -0.05 -i clip-destiny-N.mp4 -vframes 1 -q:v 1 handoff-destiny-N.png
   ```
6. **Visually verify** the extracted PNG matches the CLOSING FRAME description before generating the next clip. Especially critical for wall shatter clips (Clips 2, 3, 4, 5) — if the shatter renders as violent glass-break instead of calm dust dissolution, regenerate.

---

### 2.3 Clip 1 — WALL 1: OPINION + PRESSURE begin (0.00–7.50 s)

**Mode:** Text-to-Video. Prepend Style Lock. Then submit:

```
CLIP 1 OF 6 (Destiny). Duration: 7.5 s, 24 fps, 180 frames. Text-to-Video generation.
Camera: LOCKED-OFF for entire clip and entire film.
TONE: Calm Destruction. NEVER angry, violent, or explosive.

OPENING FRAME (frame 0): Backlit human silhouette at center-frame Y=40% with faint gold rim-light at shoulders (20% opacity). Vertical golden axis (#D4A855, 2 px core + 8 px glow) extends floor-to-ceiling BEHIND the silhouette. In FRONT of the silhouette (between silhouette and camera): a massive charcoal wall (#0F0F14, cold neutral) fills the middle 60% of the frame vertically and 80% horizontally. Wall surface has low-relief fresco carvings of faint human faces (visible but not identifiable). Etched writing visible as surface texture (implies text but NOT legible letters). Palette: void black + charcoal + gold axis + faint gold rim-light. Camera absolutely locked.

BEAT MAP:

0.0–5.0 s (frames 0–120) — WALL 1: OPINION (whole canonical beat)
  Frames 0–120: wall stays completely intact. Fresco face carvings hold. Subtle particulate drift across the wall face (~3 px/frame at scattered points) implying wind + distant murmurs. Silhouette absolutely still throughout. Golden axis behind the silhouette holds steady visibility.

5.0–7.5 s (frames 120–180) — THE PRESSURE (first 60 frames of canonical 168-frame beat)
  Frames 120–160 (1.67 s): a soft golden glow (#D4A855) emanates from a specific point on the wall — center-frame X, approximately Y=45% (where the silhouette's palm would touch the wall's surface). Glow ramps from 0% to 20% opacity over 40 frames. NO motion of the silhouette itself — the glow implies the silhouette's hand touching the wall from behind.
  Frames 160–180 (0.83 s): the FIRST silent geometric cracks begin to form on the wall around the glow point — precise golden line-art fractures, radiating outward from the palm point at ~10 px/frame. NOT jagged glass-break patterns — clean blueprint geometry. By frame 180: cracks extend ~200 px outward from the palm point in 4–5 line fragments.

Clip 1 ends MID-CRACK PROPAGATION (cracks still spreading) — Clip 2 continues.

CLOSING FRAME (frame 180 — extract as handoff-destiny-1.png, verify visually before Clip 2):
- Silhouette at center-frame Y=40% with faint gold rim-light at shoulders (20% opacity), absolutely still.
- Vertical golden axis behind silhouette, extending floor-to-ceiling.
- Massive charcoal wall (#0F0F14) in front of silhouette with:
  - Faint fresco face carvings still visible across the surface.
  - Soft golden glow (20% opacity) at center-frame X, Y=45% (palm point).
  - First cracks radiating outward from the palm point — 4–5 clean geometric golden line fragments extending ~200 px outward.
- Some particulate drift across the wall face.
- Palette: void black + charcoal #0F0F14 + gold #D4A855 (axis, rim-light, glow, cracks).
- Camera absolutely locked.

TEXT CALLOUTS for this clip (DOM overlays post-render, DO NOT bake as legible letters): 'What will they think?' at ~1 s, 'Be realistic.' at ~2.5 s, 'That's not you.' at ~4 s. The AI should imply text via etched wall texture only — NOT render as readable letters.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-destiny-1.mp4 -vframes 1 -q:v 1 handoff-destiny-1.png
```
**Verify:** Wall intact with fresco faces + glow at palm point + first cracks radiating outward. Camera absolutely locked (compare frame 0 and frame 180 — identical framing). If wall shatters prematurely or camera has moved, regenerate.

---

### 2.4 Clip 2 — THE PRESSURE finish + Wall 1 SHATTER + WALL 2 begin (7.50–15.00 s)

**Mode:** Image-to-Video. Upload `handoff-destiny-1.png`. Prepend Style Lock. Then submit:

```
CLIP 2 OF 6 (Destiny). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.
Camera: LOCKED-OFF (same framing as Clip 1).
TONE: Calm Destruction. Wall shatter is CALM DUST DISSOLUTION, NOT violent glass-break.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette + axis behind, charcoal wall #0F0F14 in front with fresco faces + golden glow at palm point + first cracks radiating ~200 px outward from palm point in 4–5 line fragments.

BEAT MAP:

0.0–4.0 s (frames 0–96) — THE PRESSURE (final 108 frames of canonical beat)
  Frames 0–72 (3 s): cracks continue propagating across the wall — line-fragments extend from the palm point outward toward all wall edges at ~10 px/frame. By frame 72: cracks reach all four wall edges. Wall is now heavily fractured but still standing. Fresco face carvings fade progressively from 100% to 30% opacity over this window. Particulate drift dissipates.
  Frames 72–96 (1 s): all cracks fully formed. Wall becomes visibly loose — subtle micro-motion (individual crack fragments shift 1–2 px, no more). Fresco faces at 30% opacity. Wall on the verge of collapse.

4.0–5.0 s (frames 96–120) — WALL 1 SHATTERS (contained in this clip)
  Frames 96–108 (0.5 s): wall CALMLY dissolves into fine charcoal dust. NOT explosive — no shards, no starburst, no violence. Individual dust particles at ~3–5 px in size fall in cubic ease-in-out motion, drifting downward at ~5 px/frame maximum velocity. Fresco face imagery fades to 0% as the wall dissolves.
  Frames 108–120 (0.5 s): dust continues falling and dispersing. By frame 120: ~60% of the wall dust has fallen out of frame; remaining ~40% still drifting. Silhouette + axis clearly visible now (no wall obscuring them).

5.0–7.5 s (frames 120–180) — WALL 2: COMFORT begin (first 60 frames of canonical 144-frame beat)
  Frames 120–150 (1.25 s): remaining dust from Wall 1 finishes falling. Behind the dispersing dust, WALL 2 (#1A1712, warmer charcoal) begins fading in via 30-frame opacity ramp — from 0% at frame 120 to 100% at frame 150. Wall 2 is smoother than Wall 1, with a subtle inner glow (ochre warm hue at ~10% brightness).
  Frames 150–180 (1.25 s): WALL 2 fully opaque. Surface has soft rounded pattern implying "comfort object" texture (silhouetted low relief of a bed / blanket / womb shape). Text implied via etched surface texture but NOT legible letters. Silhouette absolutely still.

CLOSING FRAME (frame 180 — extract as handoff-destiny-2.png):
- Silhouette at center-frame Y=40% with faint gold rim-light, absolutely still.
- Vertical golden axis behind silhouette, extending floor-to-ceiling.
- WALL 2 (#1A1712, warm charcoal) fully visible in front of silhouette, filling middle 60% of frame vertically.
- Wall 2 surface has soft rounded low-relief pattern (comfort object texture), warm inner glow at ~10% brightness.
- NO trace of WALL 1 remaining (all dust cleared).
- Palette: void black + warm charcoal #1A1712 + gold #D4A855 (axis, rim-light) + faint ochre inner glow.
- Camera absolutely locked (identical framing to Clip 1).

TEXT CALLOUT for this clip (DOM overlay, do NOT bake): 'Every destiny begins with disagreement.' at ~2 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-destiny-2.mp4 -vframes 1 -q:v 1 handoff-destiny-2.png
```
**Verify (critical):** Wall 1 SHATTERED into calm dust (NOT glass shards, NOT explosive). Wall 2 fully visible with warm charcoal + soft rounded pattern. Camera locked. If wall shatter appears violent, regenerate with stronger "calm dust dissolution" language.

---

### 2.5 Clip 3 — WALL 2 finish + step + Wall 2 SHATTER + WALL 3 begin (15.00–22.50 s)

**Mode:** Image-to-Video. Upload `handoff-destiny-2.png`. Prepend Style Lock. Then submit:

```
CLIP 3 OF 6 (Destiny). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette makes ONE 20 px step forward mid-clip — this is the ONLY silhouette motion in this clip.
TONE: Calm Destruction. Wall 2 dissolves into dust, NOT violent shattering.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette + axis behind, WALL 2 (#1A1712 warm charcoal) fully visible in front with soft rounded low-relief pattern + faint ochre inner glow.

BEAT MAP:

0.0–2.5 s (frames 0–60) — WALL 2: COMFORT held stillness (final 60 frames of canonical beat)
  Frames 0–60: silhouette absolutely still. Wall 2 stays fully intact. Warm inner glow modulates very subtly (10% to 12% brightness cycle over 60 frames — barely perceptible). Text implied via etched texture.

2.5–3.0 s (frames 60–72) — SILHOUETTE STEP FORWARD (canonical intentional motion)
  Frames 60–72 (0.5 s = 12 frames): silhouette shifts 20 px forward toward camera using cubic ease-in-out. Silhouette contour visibly moves forward by 20 px. This is the ONLY motion of the silhouette in the entire film's first half. Silhouette's rim-light briefly brightens to 30% opacity during the motion, back to 20% after.

3.0–4.0 s (frames 72–96) — WALL 2 SHATTERS (contained)
  Frames 72–96 (1 s): WALL 2 shatters INTO DUST. NOT explosive — no shards. Fine warm-charcoal dust particles fall in cubic ease-in-out motion at max 5 px/frame downward drift. The soft rounded pattern (comfort object texture) fades as the wall dissolves. By frame 96: ~50% of dust has fallen; wall's inner glow extinguishes.

4.0–7.5 s (frames 96–180) — WALL 3: TIME begin (first 84 frames of canonical 168-frame beat)
  Frames 96–120 (1 s): remaining Wall 2 dust finishes falling. Behind it, WALL 3 (#14100A, cracked amber-charcoal) fades in via 24-frame opacity ramp from 0% to 100%.
  Frames 120–150 (1.25 s): Wall 3 surface has an hourglass-shape CARVED INTO IT (low-relief carving of an hourglass, visible as darker charcoal shape against slightly lighter charcoal wall). No sand yet — just the empty hourglass carving.
  Frames 150–180 (1.25 s): inside the hourglass carving, sand begins to appear at the bottom chamber and starts flowing UPWARD (impossible physics = "wall reality is a lie"). Sand travels at ~2 px/frame upward against gravity. By frame 180: sand fills ~30% of the hourglass carving's upper chamber (having flowed up from the lower).

CLOSING FRAME (frame 180 — extract as handoff-destiny-3.png):
- Silhouette at center-frame Y=40% but SHIFTED 20 px forward (closer to camera) compared to Clip 1/2 opening frames. Rim-light at shoulders (20% opacity), absolutely still.
- Vertical golden axis behind silhouette, extending floor-to-ceiling.
- WALL 3 (#14100A, cracked amber-charcoal) fully visible in front of silhouette.
- Wall 3 surface has an hourglass-shape carved into it. Inside the carving: sand flowing upward, upper chamber ~30% full.
- NO trace of WALL 2 remaining (dust cleared).
- Palette: void black + cracked amber-charcoal #14100A + gold #D4A855 (axis, rim-light) + subtle amber tint in the hourglass carving.
- Camera absolutely locked (identical framing to Clips 1 and 2).

TEXT CALLOUTS for this clip (DOM overlays, do NOT bake): 'Later.' at ~0.5 s, 'You deserve rest.' at ~1.2 s, 'It's fine.' at ~2 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-destiny-3.mp4 -vframes 1 -q:v 1 handoff-destiny-3.png
```
**Verify:** Silhouette clearly 20 px closer to camera than in Clip 2's frame 0. Wall 3 revealed with hourglass carving + upward-flowing sand. If silhouette didn't step or hourglass has downward sand, regenerate.

---

### 2.6 Clip 4 — WALL 3 finish + step + walk-through + WALL 4 begin (22.50–30.00 s)

**Mode:** Image-to-Video. Upload `handoff-destiny-3.png`. Prepend Style Lock. Then submit:

```
CLIP 4 OF 6 (Destiny). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette steps forward AND walks THROUGH the wall's plane in this clip.
TONE: Calm Destruction. Wall 3 fractures as clean blueprint geometry, NOT violent glass-break.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette 20 px forward from film-start position, gold axis behind, WALL 3 (#14100A cracked amber-charcoal) in front with hourglass carving containing upward-flowing sand at ~30% upper-chamber fill.

BEAT MAP:

0.0–2.0 s (frames 0–48) — WALL 3: TIME held (canonical middle 48 frames)
  Frames 0–48: sand continues flowing upward in the hourglass carving at ~2 px/frame. By frame 48: upper chamber ~50% full. Silhouette absolutely still.

2.0–2.5 s (frames 48–60) — SILHOUETTE STEP FORWARD
  Frames 48–60 (0.5 s = 12 frames): silhouette shifts ANOTHER 20 px forward toward camera using cubic ease-in-out. Silhouette is now 40 px total forward from film-start position. Rim-light briefly brightens.

2.5–4.5 s (frames 60–108) — WALK THROUGH THE WALL (canonical final part of Wall 3 beat)
  Frames 60–96 (1.5 s): silhouette walks INTO the wall's plane — visually, the wall begins to fracture around the silhouette's body. Cracks form as clean geometric blueprint lines (golden #D4A855, precise, calm — NOT jagged violence). Cracks emanate outward from where the silhouette's body intersects the wall plane. By frame 96: silhouette has moved through the wall plane; wall is heavily fractured with golden crack lines throughout.
  Frames 96–108 (0.5 s): as silhouette passes through, sand in the hourglass carving HALTS mid-flow (frozen mid-air within the fractured hourglass). Fractures continue spreading.

4.5–5.0 s (frames 108–120) — WALL 3 FULLY FRACTURES (contained)
  Frames 108–120 (0.5 s): remaining wall fragments dissolve like slow-falling glass shards drifting at ~3 px/frame. NOT violent — controlled slow-motion glass dissolution. NO starburst reflections. By frame 120: ~50% of wall fragments have drifted out of frame.

5.0–7.5 s (frames 120–180) — WALL 4: SELF begin (first 60 frames of canonical 240-frame beat)
  Frames 120–150 (1.25 s): remaining Wall 3 fragments finish drifting. Behind them, WALL 4 (#0C0C10, mirror-dark charcoal) fades in via 30-frame opacity ramp from 0% to 100%.
  Frames 150–180 (1.25 s): WALL 4 is a distorted mirror surface. It reflects a distorted version of the silhouette — the reflection is SMALLER (about 70% of silhouette's actual size), HUNCHED, and appears more doubtful in posture. Reflection is visible in the mirror at approximately center-frame Y=50%. Silhouette itself absolutely still.

CLOSING FRAME (frame 180 — extract as handoff-destiny-4.png):
- Silhouette at center-frame Y=40% but SHIFTED 40 px forward total from film-start. Rim-light at shoulders, absolutely still.
- Vertical golden axis behind silhouette, extending floor-to-ceiling.
- WALL 4 (#0C0C10, mirror-dark charcoal) fully visible in front of silhouette.
- Wall 4 surface reflects a distorted, smaller (~70% size), hunched version of the silhouette at ~center-frame Y=50%.
- NO trace of WALL 3 remaining.
- Palette: void black + mirror-dark charcoal #0C0C10 + gold #D4A855 (axis, rim-light) + subtle bone off-white reflections in the mirror surface.
- Camera absolutely locked (identical framing to prior clips).

TEXT CALLOUTS for this clip (DOM overlays, do NOT bake): 'Not now.' at ~0.5 s, 'Someday.' at ~1.5 s, 'When I'm ready.' at ~2.5 s, 'Time is not your enemy. Delay is.' at ~5 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-destiny-4.mp4 -vframes 1 -q:v 1 handoff-destiny-4.png
```
**Verify (critical):** Silhouette 40 px forward from film-start position. Wall 3 fractured cleanly (blueprint lines, NOT jagged glass). Wall 4 mirror visible with distorted-smaller-hunched reflection. If reflection looks the same as silhouette or wall 3 shattered violently, regenerate.

---

### 2.7 Clip 5 — WALL 4 held + step through + Mirror SHATTER + DESTINY REVEALED begin (30.00–37.50 s)

**Mode:** Image-to-Video. Upload `handoff-destiny-4.png`. Prepend Style Lock. Then submit:

```
CLIP 5 OF 6 (Destiny). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette takes FINAL 20 px step forward and passes through mirror in this clip.
TONE: Calm Destruction. Mirror shatters SILENTLY into light fragments that become blueprint geometry.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette 40 px forward from film-start, gold axis behind, WALL 4 (#0C0C10 mirror-dark charcoal) in front reflecting a distorted-smaller-hunched version of the silhouette at center-frame Y=50%.

BEAT MAP:

0.0–4.0 s (frames 0–96) — WALL 4: SELF held stillness (canonical middle 96 frames of 240-frame beat)
  Frames 0–96: FULL STILLNESS. Absolutely no motion. No particulates. Silhouette and its distorted mirror-reflection both absolutely still. This is the emotional weight of the film — the silhouette stares at their diminished self for a full 4 seconds of held silence.

4.0–4.5 s (frames 96–108) — SILHOUETTE STEP FORWARD (final canonical intentional motion)
  Frames 96–108 (0.5 s = 12 frames): silhouette shifts FINAL 20 px forward toward camera using cubic ease-in-out. Silhouette is now 60 px total forward from film-start position. Rim-light briefly brightens.

4.5–5.5 s (frames 108–132) — STEP THROUGH THE MIRROR (contained)
  Frames 108–120 (0.5 s): silhouette walks INTO the mirror's plane. The mirror-reflection at center-frame Y=50% (the distorted-smaller-hunched version) begins to dissolve as the silhouette advances.
  Frames 120–132 (0.5 s): Mirror shatters SILENTLY into light fragments. NO sound implied (no starburst, no glare, no whip streaks). Fragments drift outward at ~3 px/frame in cubic ease-out. Each fragment TRANSFORMS mid-air into a golden geometric blueprint line segment — clean line-art, precise, calm. By frame 132: mirror fully dissolved into ~40 individual blueprint line segments hovering in the space where the mirror was.

5.5–7.5 s (frames 132–180) — DESTINY REVEALED begin (first 48 frames of canonical 240-frame beat)
  Frames 132–180 (2 s): walls are all gone (Wall 1, 2, 3, 4 all dissolved). Space is open. Silhouette is at THE SAME SIZE as film-start (canon rule: "Human has not grown — same size"). Blueprint fragments from the shattered mirror hover in the air around the silhouette at various depths — ~40 individual golden line segments floating.
  Frames 132–180: blueprint fragments begin drifting slowly (~1 px/frame) toward the silhouette but do NOT yet form the hoodie — hoodie weaving happens in Clip 6.

Clip 5 ends with fragments hovering, hoodie formation not yet begun — Clip 6 continues.

CLOSING FRAME (frame 180 — extract as handoff-destiny-5.png):
- Silhouette at center-frame Y=40% but SHIFTED 60 px forward total from film-start. Absolutely still with rim-light at shoulders.
- Vertical golden axis behind silhouette, extending floor-to-ceiling — now fully visible without any wall obscuring it.
- NO walls visible (all four have shattered).
- ~40 individual golden blueprint line segments hovering in the space around the silhouette at various depths.
- Fragments are drifting subtly toward the silhouette but not yet weaving.
- Palette: void black + gold #D4A855 (axis, rim-light, fragments) + faint bone off-white for any light through / around fragments.
- Camera absolutely locked (identical framing to prior clips).

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-destiny-5.mp4 -vframes 1 -q:v 1 handoff-destiny-5.png
```
**Verify (critical):** All 4 walls gone. Silhouette at same size as film-start (verify by comparing silhouette height to Clip 1's opening frame). Blueprint fragments hovering. No hoodie yet. If a hoodie is forming already or fragments have merged, regenerate.

---

### 2.8 Clip 6 — DESTINY REVEALED finish + poster frame (37.50–45.00 s)

**Mode:** Image-to-Video. Upload `handoff-destiny-5.png`. Prepend Style Lock. Then submit:

```
CLIP 6 OF 6 (Destiny). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation. Ends on the poster frame.
Camera: LOCKED-OFF. Silhouette absolutely motionless throughout.
TONE: Calm Destruction resolves into calm inevitability. Hoodie forms organically from broken wall fragments.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette 60 px forward from film-start position, gold axis behind, ~40 individual golden blueprint line segments hovering in the space around the silhouette, no walls remaining.

BEAT MAP:

0.0–5.0 s (frames 0–120) — DESTINY REVEALED (final 192 frames of canonical 240-frame beat, condensed to 120 here + 48 already in Clip 5)
  Frames 0–48 (2 s): blueprint fragments drift TOWARD the silhouette at increasing rate (~3 px/frame). Fragments visibly reorganize as they approach — line segments arrange themselves into groups that will become hoodie pattern regions.
  Frames 48–96 (2 s): fragments begin weaving into the hoodie shape ON the silhouette. Weaving is organic — fragments flow from around the silhouette inward, meeting at the axis (spine seam) first, then radiating outward. Hoodie forms from collar → shoulders → torso → arms over 48 frames. By frame 96: hoodie ~80% complete. Pattern on hoodie visibly composed of the four wall's crack lines:
    - Opinion wall's spreading cracks form the shoulder yoke pattern
    - Comfort wall's soft rounded lines form the sleeve details
    - Time wall's hourglass geometry forms a chest emblem
    - Self mirror's blueprint fragments form the overall stitch/seam pattern
  Frames 96–120 (1 s): remaining fragments complete the hoodie. Hoodie fully formed. Silhouette wearing complete hoodie made from what was broken.

5.0–7.5 s (frames 120–180) — DEAD-AIR HOLD (poster frame)
  Frames 120–180 (2.5 s): absolutely no motion. Silhouette in completed hoodie stands at center-frame Y=40%, 60 px forward from film-start position (canon: same size as start, but has advanced through the wall planes). This final frame IS the poster.jpg export.

CLOSING FRAME (frame 180 — this IS the poster frame, extract as story-destiny-poster candidate):
- Backlit human silhouette at center-frame Y=40% (60 px forward from film-start position), same body size as film-start, wearing complete hoodie.
- Hoodie fabric composed of the four walls' crack lines as design pattern: opinion cracks in shoulders, comfort curves in sleeves, time hourglass at chest, mirror fragments in overall seam. Fabric is charcoal-black with subtle gold line-art details.
- Vertical golden axis behind silhouette, extending floor-to-ceiling.
- NO walls, NO wall dust, NO blueprint fragments hovering (all absorbed into hoodie).
- Void black background around silhouette.
- Palette: void black + charcoal hoodie + gold #D4A855 (axis, hoodie design lines, rim-light).
- Camera absolutely locked (identical framing to all prior clips). Zero motion.

DEFINING LINE for this clip (rendered as DOM overlay in the final beat, DO NOT bake): 'Break what contains you.' at ~5 s, held for the final 2.5 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-destiny-6.mp4 -vframes 1 -q:v 1 handoff-destiny-6.png
```
This handoff-destiny-6.png becomes the basis for `story-destiny-poster.jpg` after the merge (§3).

---

## 3. Post-generation ffmpeg merge (6 clips → `story-destiny.mp4`)

Detect Veo watermark position first (usually bottom-right of clip 1):

```powershell
New-Item -ItemType Directory -Force -Path "temp-frames" | Out-Null
ffmpeg -y -i clip-destiny-1.mp4 -vf "select='eq(n,60)+eq(n,150)',crop=300:300:1620:780" -vsync vfr "temp-frames\corner-%02d.png"
# For most Veo 3 landscape output: x=1110, y=570, w=100, h=100
```

Merge all 6 clips + delogo + enhance + scrub-optimize:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

ffmpeg -y `
  -i clip-destiny-1.mp4 -i clip-destiny-2.mp4 -i clip-destiny-3.mp4 `
  -i clip-destiny-4.mp4 -i clip-destiny-5.mp4 -i clip-destiny-6.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a][5:v][5:a]concat=n=6:v=1:a=1[cat][aout];[cat]delogo=x=1110:y=570:w=100:h=100,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\story-destiny.mp4

# Extract poster from the final held frame
ffmpeg -y -sseof -0.1 -i public\videos\story-destiny.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\story-destiny-poster.jpg
```

**If clips have no audio**, replace with `[0:v][1:v][2:v][3:v][4:v][5:v]concat=n=6:v=1:a=0[vout]` and drop the `-map "[aout]" -c:a aac ...` args.

---

## 4. Install into the site

Once assets are in `public/videos/`, add to [`src/data/storyConcepts.js`](../../src/data/storyConcepts.js) `'destiny'` block:

```js
'destiny': {
  title: 'Concept 04 — Destiny',
  subtitle: 'The Walls You Call Reality',
  // ...existing fields...
  video: {
    src: '/videos/story-destiny.mp4',
    poster: '/videos/story-destiny-poster.jpg',
    label: 'Concept 04 film — four psychological walls, calm destruction',
  },
}
```

Refresh `/story/destiny`.

---

## 5. Universal negative prompt (paste into "avoid" field on every generation)

```
text on screen, subtitles, letters visible in frame, on-screen typography, logos, watermarks, products (until beat 6), hoodies as flat garments, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo, digital sharpening,
NO angry/violent/explosive wall breaks, NO glass shards flying, NO starburst reflections, NO whip streaks, NO screen-shake, NO red anywhere, NO whispered-text as readable letters (imply via texture only), NO Egyptian cliché iconography, NO camera motion of any kind
```

---

## 6. QA checklist — Concept 04 continuity + canon compliance

**Camera lock check (critical for this concept):**
- [ ] Extract midframes from all 6 clips. The framing must be PIXEL-IDENTICAL across all 6 clips (same wall position, same silhouette center-X, same field of view). If the framing shifts by even 5 px between clips, the seam will be visible.

**Seam checks (one per clip-to-clip boundary):**
- [ ] **Clip 1 → 2 join at 7.50 s:** Wall 1 intact with fresco face carvings + palm-point glow + first cracks radiating ~200 px outward. No shatter yet.
- [ ] **Clip 2 → 3 join at 15.00 s:** Wall 1 gone (dust cleared), Wall 2 (warm charcoal #1A1712) fully visible with soft rounded comfort-object pattern + ochre inner glow. Silhouette at film-start position (not yet stepped).
- [ ] **Clip 3 → 4 join at 22.50 s:** Silhouette 20 px forward. Wall 2 gone. Wall 3 (amber-charcoal #14100A) visible with hourglass carving containing upward-flowing sand at ~30% upper-chamber fill.
- [ ] **Clip 4 → 5 join at 30.00 s:** Silhouette 40 px forward total. Walls 1, 2, 3 all gone. Wall 4 (mirror-dark #0C0C10) visible with distorted-smaller-hunched reflection.
- [ ] **Clip 5 → 6 join at 37.50 s:** Silhouette 60 px forward total, at same body size as film-start. All 4 walls gone. ~40 blueprint fragments hovering in space around silhouette. No hoodie yet.
- [ ] **Post-merge scrub test:** open the merged file in a browser tab, scrub across each 7.50-second mark — no flash, no color jump, no framing shift.

**Wall shatter containment (each shatter fully inside its own clip):**
- [ ] Wall 1 shatter (Clip 2 frames 96–120): calm dust dissolution, no glass shards, no violence.
- [ ] Wall 2 shatter (Clip 3 frames 72–96): calm dust dissolution.
- [ ] Wall 3 fracture (Clip 4 frames 60–120): clean blueprint geometry cracks around silhouette's body as they walk through, NOT jagged.
- [ ] Wall 4 mirror shatter (Clip 5 frames 108–132): silent light-fragments that transform into golden blueprint line segments, NO starburst reflections.

**Silhouette step containment (canonical intentional motion):**
- [ ] Step 1 in Clip 3 frames 60–72 (20 px forward).
- [ ] Step 2 in Clip 4 frames 48–60 (another 20 px forward, total 40 px).
- [ ] Step 3 in Clip 5 frames 96–108 (final 20 px forward, total 60 px).
- [ ] Between steps, silhouette is ABSOLUTELY MOTIONLESS.

**TONE RULES ABSOLUTE (from canon):**
- [ ] No angry, violent, or explosive moments anywhere.
- [ ] All wall breaks feel Controlled, Inevitable, Adult, Calm Destruction.
- [ ] No sharp glass shards flying at velocity.
- [ ] No starburst reflections or lens flare whip.
- [ ] No screen-shake.

**Canonical alignment (from own_karma.md):**
- [ ] Duration is **45 s ± 1 s** (canonical timeline sums to 45s: 5+7+6+7+10+10).
- [ ] All 6 beat names match canon exactly: WALL 1: OPINION · THE PRESSURE · WALL 2: COMFORT · WALL 3: TIME · WALL 4: SELF · DESTINY REVEALED.
- [ ] Universal Rule: no hoodie visible in Clips 1, 2, 3, 4, 5. Hoodie forms only in Clip 6 from the shattered blueprint fragments.
- [ ] Camera: LOCKED-OFF for the ENTIRE 45 seconds. Zero camera motion.
- [ ] Silhouette body SIZE unchanged throughout (only 60 px forward position shift).

**Concept-specific (unique to Destiny):**
- [ ] Wall colors match canon exactly: Wall 1 #0F0F14, Wall 2 #1A1712, Wall 3 #14100A, Wall 4 #0C0C10.
- [ ] Wall 1 shows faint human faces as fresco reliefs.
- [ ] Wall 3's hourglass sand flows UPWARD (impossible physics).
- [ ] Wall 4 mirror reflection is SMALLER (~70%), HUNCHED, and appears more doubtful than the actual silhouette.
- [ ] Hoodie in final frame shows composite pattern from all 4 walls: Opinion cracks in shoulders, Comfort curves in sleeves, Time hourglass at chest, Mirror fragments in seams.
- [ ] Hidden text: sample paused frames from Clips 2, 3, 4, 5 — look for OWN KARMA arrangements in the crack patterns before they dissolve into the hoodie.

**Palette compliance:**
- [ ] No pure white anywhere.
- [ ] No red at all (canon explicitly forbids).
- [ ] No reflective silver in Wall 4 mirror (dark charcoal only).
- [ ] No colors outside the concept palette (void black + charcoal wall variants + gold + capped bone off-white for cracks-light).
- [ ] Watermark completely removed via delogo.

**Deliverable format:**
- [ ] Encoded per §3 recipe.
- [ ] `story-destiny.mp4` file size ≤ 18 MB (bump `-crf` to 27 if larger).
- [ ] `story-destiny-poster.jpg` ≤ 220 KB.
- [ ] `ffprobe` reports 1920×1080, 24 fps, H.264 main profile.

**Scrub test:**
- [ ] Timeline scrubber back and forth — no stuttering.
- [ ] On `/story/destiny`, autoplay loops smoothly.

---

## 7. Cross-references

- [`_document/own_karma.md` §Concept 04](../own_karma.md) — canonical VFX blueprint
- [`_document/hero-video-prompt.md`](../hero-video-prompt.md) — main index
- [`_document/prompts/concept-03-karmas-eye.md`](concept-03-karmas-eye.md) — previous concept
- [`_document/prompts/concept-05-broken-hourglass.md`](concept-05-broken-hourglass.md) — next concept
- [`src/routes/StoryConcept.jsx`](../../src/routes/StoryConcept.jsx) — story page route
- [`src/hero/StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) — autoplay-loop component
- [`public/videos/README.md`](../../public/videos/README.md) — asset contract
