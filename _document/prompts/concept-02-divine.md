# Concept 02 — Divine — The Blueprint

**Duration:** 60 seconds (canonical 60–75 s range, mid) · **Aspect:** 1920×1080 landscape only · **Route:** `/story/divine`
**Canon:** [`_document/own_karma.md` §Concept 02](../own_karma.md) · [`storyConcepts.js['divine']`](../../src/data/storyConcepts.js)
**Site component:** [`StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) (autoplay-loop)

---

## Canonical anchors

```
Visual reference context:  2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision
Reference bar:             Ramayana — The Introduction (Sony / Hans Zimmer + AR Rahman)
                           + Varanasi to the World (T-Series / Rajamouli / MM Keeravaani)
Formula:                   Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability
Universal Rule:            No visible product until beat 5 INFINITE GALAXY CLOTH where the hoodie emerges ORGANICALLY from cosmic threads — not stitched, not placed.
```

**Central philosophy** (from canon):
> Most brands say you are small in the universe. OWN KARMA says: **The universe exists because you observe it.** Human existence is older than the galaxy.

---

## Style Lock cheat-sheet (prepend to every per-clip call)

```
STYLE LOCK (do not deviate):
- 24 fps native, no frame interpolation.
- Every motion uses cubic-bezier(0.65, 0, 0.35, 1) easing — no linear motion.
- Last 6 frames of this clip: hold the settled state, zero motion (dead-air pause) — EXCEPT when this specific clip's prompt says 'ends MID-MOTION', in which case continue the described motion through the final frame.
- Axis: vertical golden beam at center frame X, 2 px core + 8 px anisotropic glow, color #D4A855, brightest at Y=40%. The HUMAN'S SPINE IS THE AXIS — but the axis only appears from beat 3 onward (first drawn in Clip 2 starting at its 2.5 s mark, i.e., 10 s into the film).
- Human silhouette: backlit, rim-lit gold at shoulders fading to black at feet, 7-head-tall, arms at sides, feet touching, absolutely motionless.
- Palette: void black + gold #D4A855 + deep cosmic blue-black #0B1220 (≤5% sat) for nebulae + bone off-white capped Y-luma 0.86 for stars. Nothing else.
- Grade: ARRI Log C → Rec.709 film curve, 3200K warm tint, +5 magenta, 0.3% monochrome film grain.
- No text on screen, no logos, no products (until Universal Rule permits in beat 5), no faces, no lens flare, no bloom, no chromatic aberration.
```

---

## 1. Master prompt (single-shot 60 s generators — Sora, Veo 3 Pro tier)

Use this only if your tool can generate a full 60-second clip in one call. Otherwise skip to §2 for the seam-safe 8-clip split.

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

NEGATIVE: see §5.

FORMAT: MP4 H.264, 1920×1080, 24 fps native, ≤ 60 s. Audio optional (kept for AmbientMixer overlay compatibility).
```

---

> [!NOTE]
> **Timing note:** The master prompt above uses canonical timings from `own_karma.md` (e.g., SCALE DESTROYED at 35–45 s, pull-back at frames 840–870). The recommended 8-clip split (§2) shifts some beats by up to 2.5 s to accommodate dead-air buffer holds at clip boundaries — e.g., the pull-back becomes frames 900–930 of the merged film. The per-clip prompts in §2 contain the correct shifted timings; use those when generating.

---

## 2. Veo 3 8-clip split (canonical, seam-safe — RECOMMENDED for Flow / Veo 3 free / most tools)

**Why 8 clips × 7.5 s instead of 6 × 10 s:**

1. **Veo 3 free / standard tier caps at 8 s per generation.** 10-s clips fail on most tiers — Flow silently truncates them. 7.5 s is the largest safe generation size.
2. **The rapid camera pull-back in SCALE DESTROYED (beat 6, frames 840–870) MUST be contained in one clip.** If the pull-back crosses a clip boundary, the two halves render at slightly different velocities and produce a visible seam. In this 8-clip split, the entire rapid motion is fully inside Clip 6.
3. **The hoodie emergence in INFINITE GALAXY CLOTH (beat 5) MUST be contained in one clip.** The fabric weaving pattern cannot restart mid-progress — the AI will re-interpret and the weave will visibly shift. In this split, the whole hoodie formation happens inside Clip 5.

### 2.1 Clip map

| Clip | Time (s) | Frames | Canonical beats covered | Notable content | Rapid motion? |
| :---: | :---: | :---: | :--- | :--- | :---: |
| **1** | 0.00–7.50 | 0–180 | THE FALSE SCALE (whole) + first 60 frames (2.5 s) of HUMAN SCALE SHIFT | Galaxy fade-in + rotation + half-resolved silhouette | no |
| **2** | 7.50–15.00 | 180–360 | HUMAN SCALE SHIFT finish + BLUEPRINT REVEALS first 120 frames (5 s) | Silhouette resolves + spine glows as axis + arm vectors | no |
| **3** | 15.00–22.50 | 360–540 | BLUEPRINT REVEALS finish + REVERSAL first 108 frames (4.5 s) | Blueprint grid complete + first stars collapse into head | no |
| **4** | 22.50–30.00 | 540–720 | REVERSAL finish + INFINITE GALAXY CLOTH first 120 frames (5 s) | Neural network complete + hoodie fabric ~60% woven | no |
| **5** | 30.00–37.50 | 720–900 | INFINITE GALAXY CLOTH finish + 2.5 s dead-air hold on completed hoodie | Hoodie fully formed + held stillness | no |
| **6** | 37.50–45.00 | 900–1080 | **SCALE DESTROYED — entire beat, rapid pull-back fully contained** | Rapid pull-back at frames 900–930, then locked scale-destroyed hold | **yes (contained)** |
| **7** | 45.00–52.50 | 1080–1260 | ABSOLUTE SILENCE first 180 frames (7.5 s) | Galaxies + blueprint fade to void, only silhouette + axis remain | no |
| **8** | 52.50–60.00 | 1260–1440 | ABSOLUTE SILENCE finish + THE LAW (poster frame) | OWN KARMA wordmark fades in, held as poster | no |

### 2.2 Universal per-clip workflow

1. Prepend the Style Lock cheat-sheet above to every clip's prompt.
2. In Flow / Veo 3: aspect = **16:9**, duration = **8 s** (safe under the cap), model = **Veo 3** (not Fast — cinematic quality matters).
3. **Clip 1 only:** Text-to-Video mode (no reference image).
4. **Clips 2–8:** Image-to-Video / Frames-to-Video mode. Upload `handoff-divine-{N-1}.png` as start frame. The prompt tells the AI to MATCH THE UPLOADED REFERENCE IMAGE EXACTLY at frame 0.
5. After each generation, extract that clip's handoff frame:
   ```powershell
   ffmpeg -sseof -0.05 -i clip-divine-N.mp4 -vframes 1 -q:v 1 handoff-divine-N.png
   ```
6. **Visually verify** the extracted PNG matches the "CLOSING FRAME" description at the end of each clip's prompt block below. If it doesn't match, regenerate that clip before continuing — otherwise the seam will show in the final merged film.
7. **Seed / CFG guidance:** If your tool supports seed locking, use the same seed for all 8 clips to improve style coherence. If it supports CFG/guidance scale, use 7–9 for cinematic consistency.

---

### 2.3 Clip 1 — THE FALSE SCALE + partial HUMAN SCALE SHIFT (0.00–7.50 s)

**Mode:** Text-to-Video (no reference image). Prepend the Style Lock cheat-sheet. Then submit:

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

### 2.4 Clip 2 — HUMAN SCALE SHIFT finish + BLUEPRINT REVEALS begin (7.50–15.00 s)

**Mode:** Image-to-Video. Upload `handoff-divine-1.png` as start frame. Prepend Style Lock. Then submit:

```
CLIP 2 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Massive galaxy rotated ~40° clockwise from original orientation at center-frame filling ~60% of frame width, half-resolved backlit human silhouette (~50% opacity) at center-frame Y=40%, faint gold rim-light (10% opacity) at silhouette's shoulders. No golden axis yet.

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
**Verify:** Fully opaque silhouette + galaxy-in-chest + gold spine axis + arm vectors + partial chest grid. If axis missing or chest grid already complete, regenerate.

---

### 2.5 Clip 3 — BLUEPRINT REVEALS finish + REVERSAL begin (15.00–22.50 s)

**Mode:** Image-to-Video. Upload `handoff-divine-2.png`. Prepend Style Lock. Then submit:

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

### 2.6 Clip 4 — REVERSAL finish + INFINITE GALAXY CLOTH begin (22.50–30.00 s)

**Mode:** Image-to-Video. Upload `handoff-divine-3.png`. Prepend Style Lock. Then submit:

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
**Verify:** Neural network complete + hoodie ~60% woven (collar+shoulders+torso+upper arms). If hoodie complete already or missing, regenerate.

---

### 2.7 Clip 5 — INFINITE GALAXY CLOTH finish + dead-air hold (30.00–37.50 s)

**Mode:** Image-to-Video. Upload `handoff-divine-4.png`. Prepend Style Lock. Then submit:

```
CLIP 5 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette with vertical gold axis as spine seam, complete synaptic neural network inside skull outline, hoodie fabric covering ~60% of silhouette (collar + shoulders + torso + upper arms), background blueprint grid ~40% dissolved.

BEAT MAP:

0.0–5.0 s (frames 0–120) — INFINITE GALAXY CLOTH (final 120 frames of canonical 240-frame beat)
  Frames 0–48 (2 s): weaving continues — hoodie extends down to cover full arms and reach hem at the silhouette's waist. Sleeves complete by frame 48.
  Frames 48–96 (2 s): fabric detail densifies — subtle gold thread patterns become more defined across the entire garment. Neural network in head slowly dims to ~30% opacity (galaxy energy fully absorbed into the fabric). Background blueprint grid finishes dissolving (all remaining grid lines become fabric threads on the hoodie).
  Frames 96–120 (1 s): hoodie hood forms over the head — hood is UP for the remainder of the film. Final weaving passes complete. Hooded silhouette is fully rendered.

5.0–7.5 s (frames 120–180) — DEAD-AIR HOLD (buffer for seamless join with Clip 6)
  Frames 120–180: absolutely no motion. Silhouette in completed hoodie holds pose. Camera locked. Neural network in head at low-opacity glow. Faint gold rim-light at shoulders continues. Void black background with the axis extending floor-to-ceiling. This 2.5-second held-stillness gives Clip 6 a clean starting point for the rapid camera pull-back.

CLOSING FRAME (frame 180 — extract as handoff-divine-5.png, verify VERY carefully — Clip 6's rapid camera move MUST start from this exact locked state):
- Silhouette at center-frame Y=40%, occupying ~50% of frame height, fully clothed in complete hoodie (hood UP).
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
**Verify (critical):** Hoodie fully formed, void black background with axis + hooded silhouette only, absolutely no motion. Extract a second frame 0.5 s earlier and confirm they're pixel-identical (proves the dead-air hold). If they differ, regenerate.

---

### 2.8 Clip 6 — SCALE DESTROYED (37.50–45.00 s) — rapid camera pull-back fully contained

**Mode:** Image-to-Video. Upload `handoff-divine-5.png`. Prepend Style Lock. Then submit:

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
**Verify (critical):** The rapid pull-back is COMPLETE within this clip (small silhouette + orbiting galaxies visible). Extract frame 30 too and confirm the pull-back finished by then — if the camera is still moving at frame 180, regenerate with more explicit "camera FULLY STOPPED by frame 30" instruction.

---

### 2.9 Clip 7 — ABSOLUTE SILENCE (45.00–52.50 s) — galaxies fade to void

**Mode:** Image-to-Video. Upload `handoff-divine-6.png`. Prepend Style Lock. Then submit:

```
CLIP 7 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Small hooded silhouette (~15% frame height) at center-frame with vertical gold axis floor-to-ceiling, galaxies orbiting in cosmic blue-black nebula backdrop.

BEAT MAP:

0.0–2.5 s (frames 0–60) — GALAXIES FADE
  Frames 0–60: orbiting galaxies in the background begin to fade toward pure black. Fade is uniform across all galaxies. Cosmic blue-black nebula also fades. By frame 60: galaxies at ~30% opacity, nebula at ~40% opacity.

2.5–5.0 s (frames 60–120) — FULL FADE TO VOID
  Frames 60–120: galaxies and nebula continue fading. By frame 120: all galaxies fully faded to void black. All nebula faded to void black. Only the silhouette, the gold axis, and ~20 faint gold particles — remnants of the dissolved galaxies, NOT sparkle effects, each 1–2 px — suspended motionless around the silhouette remain visible.

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

### 2.10 Clip 8 — ABSOLUTE SILENCE finish + THE LAW (52.50–60.00 s) — poster frame

**Mode:** Image-to-Video. Upload `handoff-divine-7.png`. Prepend Style Lock. Then submit:

```
CLIP 8 OF 8 (Divine). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation. Ends on THE LAW poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Small hooded silhouette at center-frame Y=40%, vertical gold axis floor-to-ceiling, ~20 faint gold particles suspended in pure void black background.

BEAT MAP:

0.0–2.5 s (frames 0–60) — ABSOLUTE SILENCE (final 60 frames of canonical beat)
  Frames 0–60: absolutely no motion. Silhouette + axis + faint particles held. Pure stillness continues from Clip 7 seamlessly.

2.5–7.5 s (frames 60–180) — THE LAW (canonical beat 8)
  Frames 60–90 (30 frames = 1.25 s): a subtle golden glow marker appears very small, centered horizontally at frame X, positioned at Y=75% from top (below the silhouette, in the empty lower-third region). This is a PLACEHOLDER for the OWN KARMA wordmark — the AI may render it as garbled text, which is expected; the SITE will overlay the correct DOM text on top of this position, so what matters is the SPACE and slight golden glow marker in this region, not readable letters. Fade uses cubic ease-in over 30 frames.
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
This final handoff-divine-8.png will become the basis for `story-divine-poster.jpg` after the merge (§3).

---

## 3. Mobile portrait variant (1080×1920, 8 clips × 7.5 s)

**Same beat distribution as landscape**, but portrait 9:16. Set Flow / Veo 3 aspect to **9:16 (Portrait)** before each generation. Target resolution 1080×1920 (portrait 1080p — do NOT generate at 720×1280).

### Portrait framing rules (apply to every clip)

- **Axis extends floor-to-ceiling** — literally top pixel to bottom pixel of the frame.
- Human silhouette centered horizontally, Y=40% from top.
- **Lower ~40% of frame stays visually quiet** (dark, minimal detail) for DOM overlay text.
- **Upper ~20% of frame stays visually quiet.**
- Content lives in the middle 40% band of the frame vertically. Realm elements fill only this band unless a beat explicitly extends further.

### Mobile Clip 1 — THE FALSE SCALE + partial HUMAN SCALE SHIFT (0.00–7.50 s)

**Mode:** Text-to-Video (no reference image). Prepend the Style Lock cheat-sheet. Then submit with aspect 9:16:

```
CLIP 1 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Text-to-Video generation.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.

OPENING FRAME (frame 0): PURE BLACK. Empty void. NO galaxy yet, NO axis, NO human silhouette. Just the void in portrait orientation.

BEAT MAP:

0.0–5.0 s (frames 0–120) — THE FALSE SCALE (whole canonical beat)
  Frames 0–24 (1 s opacity ramp): a massive hyper-realistic galaxy fades in at center-frame. Galaxy fits within the vertical frame, filling ~60% of frame width. Spiral galactic arms, deep cosmic blue-black nebula #0B1220 as backdrop, bone off-white stars (max Y-luma 0.86) scattered throughout, subtle gold accents in the brightest galactic arm regions.
  Frames 24–120 (4 s slow rotation): galaxy rotates clockwise at ~10°/second (rotates ~40° total across this window). Camera pulls back at arcseconds-per-frame. NO human silhouette visible. NO golden axis visible.

5.0–7.5 s (frames 120–180) — HUMAN SCALE SHIFT (first 50% of canonical beat)
  Frames 120–180 (60 frames): a tiny backlit human silhouette resolves in the foreground via 60-frame opacity ramp. At frame 120 = 0% opacity, at frame 180 = 50% opacity. Silhouette position: center-frame X, Y=40% from top. Faint gold rim-light (10% opacity at frame 180) at silhouette's shoulders only. 7-head-tall proportions, feet touching, arms at sides, absolutely motionless. Galaxy continues rotating behind the silhouette.

Clip 1 ends MID-MOTION (not on a dead-air hold) — Clip 2 continues the resolution ramp seamlessly.

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-1.png, verify visually before Clip 2):
- Massive galaxy centered, rotated ~40° clockwise from film start, filling ~60% of frame width.
- Half-resolved backlit human silhouette (~50% opacity, semi-transparent) at center-frame Y=40%.
- Faint gold rim-light (10% opacity) only at silhouette's shoulder tops.
- Palette: void black #000000, cosmic blue-black #0B1220 for nebula, bone off-white stars (capped Y=0.86), faint gold at shoulders.
- NO golden vertical axis anywhere. NO blueprint lines. NO chest galaxy-contained reveal yet. Camera mid pull-back (not stopped).
- Frame is in portrait format (1080×1920).

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

### Mobile Clip 2 — HUMAN SCALE SHIFT finish + BLUEPRINT REVEALS begin (7.50–15.00 s)

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-1.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 2 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Massive galaxy rotated ~40° clockwise at center-frame filling ~60% of frame WIDTH (occupies middle 40% vertical band), half-resolved backlit human silhouette (~50% opacity) at center-frame X, Y=40% from top, faint gold rim-light (10% opacity) at silhouette's shoulders. Upper 20% and lower 40% of frame are quiet void black. No golden axis yet.

BEAT MAP:

0.0–2.5 s (frames 0–60) — HUMAN SCALE SHIFT (second 50% of canonical beat)
  Frames 0–60: silhouette opacity ramps from 50% to 100% via cubic ease-in-out. Gold rim-light at shoulders ramps from 10% to 30% opacity. Simultaneously, the galaxy scales down slightly (~5%) and rotation SLOWS to ~2°/second — the camera reveals the galaxy is rotating INSIDE the outline of the human's chest cavity. By frame 60: silhouette fully opaque, galaxy visibly contained within chest region rotating slowly. Camera decelerates to fully-locked position.

2.5–7.5 s (frames 60–180) — THE BLUEPRINT REVEALS (first 120 frames of canonical 192-frame beat)
  Frames 60–108 (48 frames = 2 s) — SPINE BECOMES THE AXIS: a vertical golden light beam (color #D4A855, 2 px solid core + 8 px anisotropic gaussian glow) draws downward along the silhouette's spine from head to feet using cubic ease-in-out. In portrait, the axis MUST extend from top pixel of frame to bottom pixel of frame (not just silhouette extents). This is the FIRST appearance of the golden axis.
  Frames 108–156 (48 frames = 2 s) — ARM VECTORS EXTEND: golden lines draw from the silhouette's shoulders outward toward stars. In portrait, vectors extend HORIZONTALLY only to the frame's left/right edges (not diagonally to corners — keeps the vertical composition clean). Each vector line segment appears over 6–8 frames.
  Frames 156–180 (24 frames = 1 s) — CHEST GRID BEGINS: the first blueprint grid lines start drawing across the chest area, still incomplete. Grid stays contained within the middle 40% vertical band — do NOT extend grid lines into the upper 20% or lower 40% quiet zones yet.

Clip 2 ends MID-DRAWING (chest grid partial) — Clip 3 continues.

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-2.png, verify visually before Clip 3):
- Fully opaque backlit human silhouette at center-frame Y=40%, gold rim-light at shoulders (30% opacity).
- Galaxy visibly contained within silhouette's chest cavity outline, rotating slowly (~2°/second).
- Vertical golden axis drawn TOP PIXEL to BOTTOM PIXEL of frame along the silhouette's spine (2 px core + 8 px anisotropic glow, #D4A855).
- Golden vector lines extending horizontally from both shoulders to left/right frame edges.
- ~30% of chest blueprint grid lines drawn (within middle 40% vertical band only).
- Upper 20% and lower 40% of frame remain visually quiet (only axis passes through).
- Camera fully locked. Palette: void black + cosmic blue-black + gold #D4A855 + bone off-white stars.

TEXT CALLOUTS for this clip (DOM overlays post-render, positioned in lower 40% quiet zone): 'Or so you thought.' at ~0.5 s, 'Before stars, there was structure.' at ~5 s.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-2.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-2.png
```
**Verify:** Axis extends full frame top-to-bottom (not just silhouette height). Arm vectors go horizontally only (not diagonal). Upper 20% + lower 40% stay quiet. If axis doesn't reach frame edges or vectors go diagonal, regenerate.

---

### Mobile Clip 3 — BLUEPRINT REVEALS finish + REVERSAL begin (15.00–22.50 s)

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-2.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 3 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Fully opaque silhouette at center-frame X, Y=40% with gold rim-light at shoulders (30% opacity), galaxy visible within chest cavity rotating slowly, gold vertical axis top-to-bottom of frame, gold horizontal vector lines from shoulders to left/right edges, ~30% of chest blueprint grid drawn within middle 40% vertical band.

BEAT MAP:

0.0–3.0 s (frames 0–72) — THE BLUEPRINT REVEALS (final 72 frames of canonical beat)
  Frames 0–48: remaining chest blueprint grid lines complete, drawing sequentially at 6 frames per line segment. By frame 48: full blueprint grid visible across the chest region.
  Frames 48–72: blueprint grid extends OUTWARD from the silhouette into the void — golden line-art extending across the full frame background, forming a cosmic-scale grid pattern. In portrait, grid lines extend into upper 20% and lower 40% zones but at REDUCED opacity (40% max in those zones so they don't overpower DOM text overlays). By frame 72: full blueprint grid overlaying void behind silhouette + axis + galaxy-in-chest.

3.0–7.5 s (frames 72–180) — REVERSAL (first 108 frames of canonical 168-frame beat)
  Frames 72–120: individual stars in the background begin to detach and drift slowly inward toward the silhouette's head. In portrait, stars originate from the wider parts of the frame (which is short axis) and travel toward center along mostly-horizontal + slightly-vertical paths. Motion is slow — each star travels ~50 px per frame. First ~30% of stars have begun moving by frame 120.
  Frames 120–180: more stars flow inward, accelerating slightly. By frame 180: ~65% of background stars have flowed into the silhouette's head region. Inside the skull outline (visible against the void at ~Y=32%), first tiny synaptic pulse patterns begin appearing as golden line fragments connecting the incoming star-points.

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-3.png):
- Fully opaque silhouette at center-frame X, Y=40%, gold rim-light at shoulders.
- Galaxy still visible within chest cavity (opacity slightly reduced ~80%).
- Complete gold vertical axis on spine, top-to-bottom of frame.
- Full blueprint grid overlaying void behind silhouette. Grid at 40% max opacity in upper 20% and lower 40% zones; full opacity in middle 40% band.
- ~65% of background stars have collapsed into silhouette's head area (visible at ~Y=32%).
- First synaptic pulse fragments visible inside skull outline (thin golden line-fragments connecting star-points).
- ~35% of background stars still in original positions, drifting inward.
- Camera fully locked. Palette: void black + gold blueprint lines + gold axis + gold synaptic fragments + fewer stars.

TEXT CALLOUT for this clip (DOM overlay in lower 40% quiet zone): 'Existence precedes expansion.' at ~4 s.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-3.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-3.png
```
**Verify:** Full blueprint grid visible + faded appropriately in top/bottom quiet zones + ~65% stars into head + first synapses. If synaptic network already complete or grid overpowers quiet zones, regenerate.

---

### Mobile Clip 4 — REVERSAL finish + INFINITE GALAXY CLOTH begin (22.50–30.00 s)

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-3.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 4 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Fully opaque silhouette with gold spine axis top-to-bottom of frame and shoulder rim-light, galaxy at ~80% opacity in chest cavity, full blueprint grid across void (dimmed in quiet zones), ~65% of stars have collapsed into head region, first synaptic pulse fragments inside skull outline, ~35% of stars still drifting inward.

BEAT MAP:

0.0–2.5 s (frames 0–60) — REVERSAL (final 60 frames of canonical beat)
  Frames 0–36: remaining 35% of background stars flow into the head region. By frame 36: all stars collapsed inside skull outline.
  Frames 36–60: synaptic pulse fragments knit together into a complete neural network pattern inside the skull outline. Golden line-art fully connects all collapsed star-points into an intricate network that pulses softly (subtle brightness modulation, no motion of lines themselves). By frame 60: neural network complete, galaxy in chest fully dissolves into synaptic energy (chest cavity now empty of galaxy, filled with subtle golden pulse).

2.5–7.5 s (frames 60–180) — INFINITE GALAXY CLOTH (first 120 frames of canonical 240-frame beat)
  Frames 60–108 (48 frames): blueprint grid lines behind silhouette begin transforming — golden line segments detach from grid and drift toward silhouette, becoming shimmering fabric threads. Individual threads visible.
  Frames 108–156 (48 frames): threads weave into a hoodie shape that grows FROM THE AXIS OUTWARD around the silhouette. First the collar and shoulders (frames 108–130), then torso (frames 130–156). Weaving is organic — not stitched, not placed — threads flow from the spine axis outward like woven light. By frame 156: hoodie ~50% formed.
  Frames 156–180 (24 frames): weaving continues, hoodie covers ~60% of silhouette (collar + shoulders + full torso + upper arms).

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-4.png):
- Silhouette at center-frame X, Y=40%, still fully opaque with rim-light at shoulders (still visible above hoodie collar).
- Vertical gold axis on spine, top-to-bottom of frame — now visible as the SPINE SEAM of the emerging hoodie.
- Complete synaptic neural network inside skull outline at ~Y=32% (golden interconnected line pattern, subtly pulsing).
- Empty chest cavity (galaxy fully dissolved into neural energy).
- Hoodie fabric covering ~60% of silhouette: collar, shoulders, full torso, upper arms visible.
- Fabric is deep black with fine gold thread visible where light hits (subtle shimmer).
- Blueprint grid behind silhouette is ~40% dissolved — most lines have become fabric threads on the hoodie; remaining background grid is fading.
- Upper 20% and lower 40% zones stay quiet (only axis passing through + fading background grid remnants).
- Camera fully locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-4.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-4.png
```
**Verify:** Neural network complete + hoodie ~60% woven (collar+shoulders+torso+upper arms). If hoodie complete already or missing, regenerate.

---

### Mobile Clip 5 — INFINITE GALAXY CLOTH finish + dead-air hold (30.00–37.50 s)

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-4.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 5 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette with vertical gold axis top-to-bottom as spine seam, complete synaptic neural network inside skull outline, hoodie fabric covering ~60% of silhouette (collar + shoulders + torso + upper arms), background blueprint grid ~40% dissolved.

BEAT MAP:

0.0–5.0 s (frames 0–120) — INFINITE GALAXY CLOTH (final 120 frames of canonical 240-frame beat)
  Frames 0–48 (2 s): weaving continues — hoodie extends down to cover full arms and reaches hem at silhouette's waist. Sleeves complete by frame 48.
  Frames 48–96 (2 s): fabric detail densifies — subtle gold thread patterns become more defined across the entire garment. Neural network in head slowly dims to ~30% opacity (galaxy energy fully absorbed into fabric). Background blueprint grid finishes dissolving (all remaining grid lines become fabric threads on the hoodie).
  Frames 96–120 (1 s): hoodie hood forms over the head — hood is UP for the remainder of the film. Final weaving passes complete. Hooded silhouette is fully rendered.

5.0–7.5 s (frames 120–180) — DEAD-AIR HOLD (buffer for seamless join with Clip 6)
  Frames 120–180: absolutely no motion. Silhouette in completed hoodie holds pose. Camera locked. Neural network in head at low-opacity glow. Faint gold rim-light at shoulders continues. Void black background with axis extending top-to-bottom of frame. This 2.5-second held-stillness gives Clip 6 a clean starting point.

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-5.png, verify VERY carefully — Clip 6's rapid camera move MUST start from this exact locked state):
- Silhouette at center-frame X, Y=40%, occupying ~40% of frame HEIGHT (portrait is taller so silhouette height feels smaller than in landscape), fully clothed in complete hoodie (hood UP).
- Hoodie: deep black fabric with subtle gold thread pattern visible, spine seam is the golden axis, collar snug at neck, sleeves reaching wrists.
- Head above hoodie collar: neural network subtly glowing at ~30% opacity inside skull outline.
- Vertical gold axis (spine seam) extends TOP PIXEL to BOTTOM PIXEL of frame (from top edge through silhouette head, through the body, past feet to bottom edge).
- Faint gold rim-light at shoulders (30% opacity), above the hoodie collar.
- Void black background — NO stars, NO blueprint grid, NO galaxy — completely empty void behind silhouette.
- Upper 20% and lower 40% zones show void black + axis only.
- Camera absolutely locked, no motion whatsoever.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-5.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-5.png
```
**Verify (critical):** Hoodie fully formed, void black background with axis + hooded silhouette only, absolutely no motion in last 2.5 s. Extract a second frame 0.5 s earlier and confirm pixel-identical to frame 180 (proves dead-air hold). If they differ, regenerate.

---

### Mobile Clip 6 — SCALE DESTROYED (37.50–45.00 s) — rapid camera pull-back fully contained

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-5.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 6 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation. THIS CLIP CONTAINS THE ONLY RAPID CAMERA MOVE IN THE ENTIRE FILM — it must be fully contained here.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette in complete hoodie at center-frame X, Y=40%, vertical gold axis extending top-to-bottom of frame as spine seam, faint neural network glow in head, void black background with no other elements. Camera locked at final position from Clip 5.

BEAT MAP:

0.0–1.25 s (frames 0–30) — RAPID CAMERA PULL-BACK (the ONE rapid move in the film)
  Camera pulls back rapidly along the Z-axis using cubic ease-out over exactly 30 frames. As camera recedes:
    - Human silhouette becomes progressively smaller in frame — by frame 30 silhouette occupies only ~12% of frame HEIGHT (was ~40% at frame 0). Silhouette stays centered horizontally and at Y=40% vertically.
    - Golden vertical axis stretches to cover full cosmic scale — axis continues to span top pixel to bottom pixel of frame regardless of silhouette size.
    - Deep cosmic blue-black nebulae + faint galaxies appear in background as camera reveals surrounding cosmos.
    - Galaxies visibly ORBIT the (now microscopic) silhouette at different distances — not in ego, in inevitability.

PORTRAIT-SPECIFIC ORBITING CONSTRAINT (critical): orbiting galaxies MUST fit within the middle 60% vertical band of the frame (approximately Y=20% to Y=80%). The upper 20% (Y=0–20%) and lower 20% (Y=80–100%) should remain relatively quiet — orbiting galaxies at low opacity (<25%) in those zones only, no dense galaxy content. This preserves DOM overlay text space at the bottom AND keeps the top clean for the axis to remain the visual focus.

1.25–7.5 s (frames 30–180) — POST-PULL-BACK HOLD (camera locked, scale destroyed)
  Frames 30–180: camera absolutely locked at pulled-back position. Human silhouette is now DOMINANT in the sense that galaxies orbit them — not the other way around. Silhouette is small but centered on axis. Galaxies rotate slowly around at ~5°/second across the background middle band. Spine glows faintly — the axis is now the cosmic-scale center of everything visible.

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-6.png):
- Small silhouette (~12% of frame height) in complete hoodie at center-frame X, Y=40%.
- Vertical golden axis extends top pixel to bottom pixel of frame, passing through silhouette's spine.
- Multiple galaxies visible at various distances in background middle band (Y=20% to Y=80%), orbiting slowly around silhouette-axis center.
- Upper 20% (Y=0–20%) and lower 20% (Y=80–100%) contain only faint galaxy remnants at <25% opacity + the axis.
- Lower 40% (Y=60–100%) minus the bottom-most galaxy remnants is quiet enough for DOM overlay text.
- Deep cosmic blue-black nebula backdrop.
- Camera locked (no motion at frame 180).
- Palette: void black + cosmic blue-black + gold axis + orbiting galaxies (blue-black + gold accents) + hooded silhouette.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-6.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-6.png
```
**Verify (critical):** The rapid pull-back is COMPLETE within this clip (small silhouette + orbiting galaxies visible in middle band). Extract frame 30 too and confirm pull-back finished by then. Confirm upper 20% and lower 20% stay quiet (no dense galaxy content). If camera still moving at frame 180, or galaxies fill the top/bottom quiet zones densely, regenerate with more explicit "camera FULLY STOPPED by frame 30" + "galaxies contained in middle 60% vertical band" instruction.

---

### Mobile Clip 7 — ABSOLUTE SILENCE (45.00–52.50 s) — galaxies fade to void

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-6.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 7 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Small hooded silhouette (~12% frame height) at center-frame X, Y=40% with vertical gold axis top-to-bottom of frame, galaxies orbiting in cosmic blue-black nebula backdrop (contained in middle 60% vertical band).

BEAT MAP:

0.0–2.5 s (frames 0–60) — GALAXIES FADE
  Frames 0–60: orbiting galaxies in background begin fading toward pure black. Fade is uniform across all galaxies. Cosmic blue-black nebula also fades. By frame 60: galaxies at ~30% opacity, nebula at ~40% opacity.

2.5–5.0 s (frames 60–120) — FULL FADE TO VOID
  Frames 60–120: galaxies and nebula continue fading. By frame 120: all galaxies fully faded to void black. All nebula faded to void black. Only silhouette, gold axis, and ~20 faint gold particles (remnants of the dissolved galaxies, NOT sparkle effects, each 1–2 px) suspended motionless around the silhouette remain visible. Particles distributed within middle 60% vertical band only.

5.0–7.5 s (frames 120–180) — HELD STILLNESS
  Frames 120–180: absolutely no motion. Silhouette + axis + faint particles held in void. Very subtle particulate drift (~1 px per 30 frames) at the axis line only — everything else absolutely still. Pure "ABSOLUTE SILENCE" beat.

CLOSING FRAME (frame 180 — extract as handoff-divine-mobile-7.png):
- Small hooded silhouette (~12% frame height) at center-frame X, Y=40%.
- Vertical golden axis (2 px core + 8 px anisotropic glow) extending top pixel to bottom pixel of frame, through silhouette's spine.
- Faint gold particles (~20 individual specks, each 1–2 px) suspended around axis in the void, unmoving, all within middle 60% vertical band.
- Pure void black #000000 background — NO galaxies, NO nebula, NO stars.
- Upper 20% and lower 40% zones show pure void black + axis only.
- Palette: void black + gold #D4A855 only.
- Camera absolutely locked.

TEXT CALLOUT for this clip (DOM overlay in lower 40% quiet zone): 'You are not inside the universe. The universe is inside your alignment.' at ~3 s.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-7.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-7.png
```
**Verify:** Only silhouette + axis + faint particles in pure void. If any galaxy fragments remain visible, regenerate.

---

### Mobile Clip 8 — ABSOLUTE SILENCE finish + THE LAW (52.50–60.00 s) — poster frame

**Mode:** Image-to-Video. Upload `handoff-divine-mobile-7.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 8 OF 8 (Divine Mobile 9:16). Duration: 7.5 s, 24 fps, 180 frames. Image-to-Video generation. Ends on THE LAW poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Small hooded silhouette at center-frame X, Y=40%, vertical gold axis top-to-bottom of frame, ~20 faint gold particles suspended in pure void black background.

BEAT MAP:

0.0–2.5 s (frames 0–60) — ABSOLUTE SILENCE (final 60 frames of canonical beat)
  Frames 0–60: absolutely no motion. Silhouette + axis + faint particles held. Pure stillness continues from Clip 7 seamlessly.

2.5–7.5 s (frames 60–180) — THE LAW (canonical beat 8)
  Frames 60–90 (30 frames = 1.25 s): a subtle golden glow marker appears very small, centered horizontally at frame X, positioned at Y=78% from top (below the silhouette, in the empty lower quiet region — pushed slightly lower than landscape's Y=75% to account for portrait's taller lower quiet zone). This is a PLACEHOLDER for the OWN KARMA wordmark — the AI may render it as garbled text, which is expected; the SITE will overlay the correct DOM text on top of this position, so what matters is the SPACE and slight golden glow marker in this region, not readable letters. Fade uses cubic ease-in over 30 frames.
  Frames 90–180 (90 frames = 3.75 s): HELD FINAL FRAME. Zero motion. Silhouette + axis + faint particles + wordmark position all held. This last frame IS the mobile poster.jpg export.

CLOSING FRAME (frame 180 — this IS the mobile poster frame, extract as story-divine-poster-mobile candidate):
- Small hooded silhouette (~12% frame height) at center-frame X, Y=40%.
- Vertical golden axis extending top pixel to bottom pixel of frame, through silhouette's spine.
- ~20 faint gold particles suspended around axis in the void, unmoving, all within middle 60% vertical band.
- Small gold marker/wordmark region at Y=78% (may appear as garbled text — will be overlaid by DOM in-site).
- Pure void black #000000 background.
- Upper 20% shows pure void black + axis only.
- Palette: void black + gold #D4A855 only.
- Camera absolutely locked. Zero motion.

TEXT CALLOUT for this clip (DOM overlay, replaces the AI-rendered wordmark region): 'Worn to remember what came first.' at ~4 s, and 'OWN KARMA' centered at Y=78% held for the final 4 s.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7.5 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-divine-mobile-8.mp4 -vframes 1 -q:v 1 handoff-divine-mobile-8.png
```
This final handoff-divine-mobile-8.png will become the basis for `story-divine-poster-mobile.jpg` after the mobile merge (see §4).

---

### Mobile QA delta (in addition to §7 landscape QA)

- [ ] Every clip resolution is exactly **1080×1920** (portrait 1080p) — NOT 720×1280. Verify with `ffprobe -v error -select_streams v -show_entries stream=width,height -of csv=p=0 clip-divine-mobile-N.mp4`.
- [ ] Axis extends **top pixel to bottom pixel of frame** in every clip from Clip 2 onward.
- [ ] Silhouette centered horizontally (X=540 ± 10 px) and at Y=768 ± 30 px (Y=40% of 1920).
- [ ] Upper 20% (Y=0–384) stays visually quiet in every clip except during star-flow in Clip 3 (stars pass through).
- [ ] Lower 40% (Y=1152–1920) stays visually quiet in every clip (DOM overlay text goes here).
- [ ] Blueprint grid in Clip 3 fades to ≤40% opacity in the upper 20% + lower 40% zones.
- [ ] In Clip 6, orbiting galaxies contained in middle 60% vertical band (Y=384–1536). Upper and lower 20% at <25% galaxy opacity.
- [ ] Portrait-specific watermark coords for delogo in §4 merge: `x=530:y=1100:w=130:h=140` (verify by inspecting corner crops of `clip-divine-mobile-1.mp4`).

---

## 4. Post-generation ffmpeg merge (8 clips → `story-divine.mp4`)

Detect the Veo watermark position first (usually bottom-right corner of clip 1):

```powershell
# Extract corner crops from clip 1 to locate the Veo 3 watermark
New-Item -ItemType Directory -Force -Path "temp-frames" | Out-Null
ffmpeg -y -i clip-divine-1.mp4 -vf "select='eq(n,60)+eq(n,150)',crop=300:300:1620:780" -vsync vfr "temp-frames\corner-%02d.png"
# Inspect corner-01.png and corner-02.png visually — note the pixel position + size of the ✧ watermark
# For most Veo 3 landscape output: x=1110, y=570, w=100, h=100
```

Merge all 8 clips + delogo + enhance + scrub-optimize in one pass:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

ffmpeg -y `
  -i clip-divine-1.mp4 -i clip-divine-2.mp4 -i clip-divine-3.mp4 -i clip-divine-4.mp4 `
  -i clip-divine-5.mp4 -i clip-divine-6.mp4 -i clip-divine-7.mp4 -i clip-divine-8.mp4 `
  -filter_complex "[0:v][1:v][2:v][3:v][4:v][5:v][6:v][7:v]concat=n=8:v=1:a=0[cat];[cat]delogo=x=1120:y=560:w=80:h=80,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart `
  public\videos\story-divine.mp4

# Extract poster from the final held frame (frame 1440 of the merged 60 s film)
ffmpeg -y -sseof -0.1 -i public\videos\story-divine.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\story-divine-poster.jpg
```

**If clips include audio tracks**, replace the concat filter with `[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a][5:v][5:a][6:v][6:a][7:v][7:a]concat=n=8:v=1:a=1[cat][aout]`, change the map to `-map "[vout]" -map "[aout]"`, and add `-c:a aac -b:a 96k -ac 2` to the output arguments.

**Adjust `x=1120:y=560:w=80:h=80`** to your actual watermark box.

**Mobile Merge:**
For mobile portrait output, modify the merge script to:
- Use `-i` with portrait clips (`clip-divine-mobile-1.mp4`, etc.)
- Change the filter chain to use portrait watermark coordinates (typical: `x=530:y=1100:w=130:h=140`)
- Change the output scaling flag to `scale=1080:1920:flags=lanczos`
- Output to `public\videos\story-divine-mobile.mp4` and `public\videos\story-divine-poster-mobile.jpg`

---

## 5. Install into the site

Once `story-divine.mp4` + `story-divine-poster.jpg` are in `public/videos/`, add the `video` field to `'divine'` in [`src/data/storyConcepts.js`](../../src/data/storyConcepts.js):

```js
'divine': {
  title: 'Concept 02 — Divine',
  subtitle: 'The Blueprint',
  // ...existing fields (quote, philosophy, timeline, hiddenDetail)...
  video: {
    src: '/videos/story-divine.mp4',
    poster: '/videos/story-divine-poster.jpg',
    label: 'Concept 02 film — cosmic reversal, human contains the galaxy',
  },
}
```

Refresh `/story/divine` — [`StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) picks it up automatically and autoplays with the Sound On toggle available.

---

## 6. Universal negative prompt (paste into "avoid" field on every generation)

```
text on screen, subtitles, letters visible in frame, on-screen typography, logos, watermarks, products (until beat 5), hoodies as flat garments, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo on axis, digital sharpening
```

---

## 7. QA checklist — Concept 02 continuity + canon compliance

**Seam checks (one per clip-to-clip boundary — critical for split-clip continuity):**
- [ ] **Clip 1 → 2 join at 7.50 s:** galaxy centered, rotation angle ~40°, silhouette opacity ~50%, NO axis yet.
- [ ] **Clip 2 → 3 join at 15.00 s:** silhouette fully opaque, gold axis on spine drawn, arm vectors extending, ~30% of chest grid drawn.
- [ ] **Clip 3 → 4 join at 22.50 s:** full blueprint grid across void, ~65% of stars collapsed into head, first synaptic fragments visible.
- [ ] **Clip 4 → 5 join at 30.00 s:** neural network complete, hoodie ~60% woven (collar + shoulders + torso + upper arms).
- [ ] **Clip 5 → 6 join at 37.50 s:** hoodie FULLY formed, camera LOCKED, silhouette at ~50% of frame height, void black background with no other elements.
- [ ] **Clip 6 → 7 join at 45.00 s:** silhouette shrunk to ~15% frame height, galaxies orbiting, cosmic nebula backdrop, camera locked.
- [ ] **Clip 7 → 8 join at 52.50 s:** only silhouette + axis + ~20 faint particles in pure void, no galaxies remaining.
- [ ] **Post-merge scrub test:** open the merged file in a browser tab, scrub across each 7.5-second mark (7.5, 15, 22.5, 30, 37.5, 45, 52.5) — no flash, no color jump, no luminance step at any boundary.

**Beat-containment checks:**
- [ ] Rapid camera pull-back is fully inside Clip 6 (frames 900–930 of the merged film). At frame 900 (start of Clip 6): silhouette at ~50% frame height. At frame 930: silhouette at ~15% frame height. Between frames 930 and 1080: no camera motion.
- [ ] Hoodie emergence (fabric weaving) fully inside Clips 4 & 5 — no fabric visible before Clip 4, hoodie complete by end of Clip 5.
- [ ] Neural network in head fully formed inside Clip 4 (visible from ~frame 60 of that clip onward).

**Canonical alignment (from own_karma.md):**
- [ ] Duration is **60 s ± 2 s** (canonical range 60–75 s).
- [ ] All 8 beat names match canon exactly: THE FALSE SCALE · HUMAN SCALE SHIFT · THE BLUEPRINT REVEALS · REVERSAL · INFINITE GALAXY CLOTH · SCALE DESTROYED · **ABSOLUTE SILENCE** (not "STILLNESS") · THE LAW.
- [ ] Universal Rule: no hoodie/garment visible in Clips 1, 2, 3. First appearance is Clip 4 (partial weave).
- [ ] Axis rule: no golden axis visible in Clip 1. First appearance is Clip 2 as the spine glow.
- [ ] Camera locked-off in Clips 1–5, 7, 8. Rapid pull-back ONLY in Clip 6.

**Concept-specific (unique to Divine):**
- [ ] Human's spine IS the axis (spine glows in Clip 2, matches axis position throughout).
- [ ] Galaxy visibly rotates INSIDE the human's chest outline in Clip 2 (not floating in front, not behind — CONTAINED).
- [ ] Neural network / synaptic patterns visible inside the skull in Clip 4.
- [ ] Hoodie fabric in Clip 5 shows fine gold thread visible only in certain light angles.
- [ ] Clip 6 SCALE DESTROYED shows human silhouette DOMINANT — galaxies orbit around them, not the reverse.
- [ ] Hidden text: sample paused frames from Clips 1, 4, and 7 — look for OWN KARMA arrangements in galaxy patterns, synaptic connections, and particle suspensions respectively.

**Palette compliance:**
- [ ] No pure white anywhere. Sample stars with color picker — all ≤ Y-luma 0.86.
- [ ] No red, cyan, magenta, or other colors outside the concept palette (void black + gold + cosmic blue-black + bone off-white stars).
- [ ] Watermark completely removed via delogo — verify corner crops from the final merged mp4 show no ✧ sparkle.

**Deliverable format:**
- [ ] Encoded per §3 recipe (H.264 main + tune fastdecode + bf 0 + g 4 + faststart).
- [ ] `story-divine.mp4` file size ≤ 20 MB (bump `-crf` to 27 if larger).
- [ ] `story-divine-poster.jpg` ≤ 250 KB.
- [ ] `ffprobe story-divine.mp4` reports 1920×1080, 24 fps, H.264 main profile.

**Scrub test (single most important quality check):**
- [ ] Timeline scrubber back and forth — no stuttering, no wait-for-keyframe hitches.
- [ ] On `/story/divine`, autoplay loops smoothly, Sound On toggle works, no jitter on transitions.

---

## 8. Cross-references

- [`_document/own_karma.md` §Concept 02](../own_karma.md) — canonical VFX blueprint
- [`_document/hero-video-prompt.md`](../hero-video-prompt.md) — main index (contains identical §Story-02 content)
- [`_document/prompts/concept-01-axis.md`](concept-01-axis.md) — previous concept (the hero)
- [`_document/prompts/concept-03-karmas-eye.md`](concept-03-karmas-eye.md) — next concept
- [`src/routes/StoryConcept.jsx`](../../src/routes/StoryConcept.jsx) — story page route
- [`src/hero/StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) — autoplay-loop component
- [`public/videos/README.md`](../../public/videos/README.md) — asset contract
