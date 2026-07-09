# Concept 05 — The Broken Hourglass — Break the Frame

**Duration:** 55 seconds (canonical, per own_karma.md timeline sum) · **Aspect:** 1920×1080 landscape only · **Route:** `/story/broken-hourglass`
**Canon:** [`_document/own_karma.md` §Concept 05](../own_karma.md) · [`storyConcepts.js['broken-hourglass']`](../../src/data/storyConcepts.js)
**Site component:** [`StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) (autoplay-loop)

---

## Canonical anchors

```
Visual reference context:  2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision
Reference bar:             Ramayana — The Introduction (Sony / Hans Zimmer + AR Rahman)
                           + Varanasi to the World (T-Series / Rajamouli / MM Keeravaani)
Formula:                   Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability
Universal Rule:            No visible product until beat 6 REORGANIZATION where the shattered hourglass reassembles into the hoodie pattern on the silhouette. The garment is made from what shattered.
Defining line:             "Break the frame."
Text callouts:             "When you break time... you experience life." · "Time was never infinite. You are."
Capstone role:             This is the fifth and final drop. During THE BREAK, sand grains transform mid-air into the imagery from the previous four concepts — planets, birds, human silhouettes, stars, staircases, waves, forest branches — "everything time was hiding."
```

**Central philosophy** (from canon):
> Time contains you — until you decide to break it. Time is not the enemy. Time is a frame. Destiny begins when you step outside the frame. You don't experience time; you experience alignment.

**Emotional arc:** Reverence → containment → recognition of the lie → controlled break → cosmic expansion → reorganization into meaning → stillness that is finally real.

---

## TONE RULES — ABSOLUTE (from canon)

**This is the single most important instruction for Concept 05.** Every clip must obey:

```
MUST NOT feel:   Angry · Violent · Explosive · Hurried
MUST feel:       Reverent · Controlled · Inevitable · Adult · Time-stopping
```

If any clip renders the hourglass shatter with speed, jagged glass shards flying, starburst reflections, screen-shake, or aggressive energy — **reject and regenerate**. The glass fractures like blueprint geometry. The brass frame dissolves like drifting particles. The sand transforms in slow motion. Never like violence.

---

## Silhouette motion contract (three canonical scripted motions only)

Concept 05's silhouette is motionless *except* for three brief scripted motions during the REALIZATION and BREAK beats. Every other frame the silhouette is absolutely still.

| Motion | Beat | Frame window (film) | Description |
| :---: | :--- | :--- | :--- |
| **A** | REALIZATION | ~312 – 360 (~13.0 – 15.0 s) | Head tilts UPWARD by ~8° over 48 frames using cubic ease-in-out. Chin lifts. Silhouette is now looking up toward the neck of the hourglass. |
| **B** | REALIZATION | ~360 – 408 (~15.0 – 17.0 s) | Right arm raises from side and extends forward-and-slightly-up ~40 px over 48 frames using cubic ease-in-out. Palm reaches the front glass face of the lower bulb. |
| **C** | THE BREAK | ~528 – 552 (~22.0 – 23.0 s) | Extended palm pushes forward ~12 px over 24 frames using cubic ease-in-out. This push triggers the shatter. |

After motion C the silhouette holds hand extended briefly, then during EXPANSION (~26 – 28 s) lowers the arm back to side over ~48 frames using cubic ease-out, resuming the neutral pose for the remainder of the film. **No other silhouette motion is permitted.** The body never steps, shifts, or drifts. Head, torso, feet stay pixel-anchored.

---

## Style Lock cheat-sheet (prepend to every per-clip call)

```
STYLE LOCK (do not deviate):
- 24 fps native, no frame interpolation.
- Every motion uses cubic-bezier(0.65, 0, 0.35, 1) easing — no linear motion.
- Last 6 frames of each clip: hold the settled state, zero motion (dead-air pause), UNLESS the clip explicitly hands off mid-motion for continuity.
- Camera: LOCKED-OFF for the ENTIRE 55 s film. No pans, dollies, zooms, or dutch tilts. Absolute zero camera motion.
- Human silhouette: backlit, rim-lit gold at shoulders fading to black at feet, 7-head-tall, arms at sides, feet touching, at center-frame Y=40% and pixel-anchored. Silhouette is MOTIONLESS except for three scripted canonical motions: (A) head tilts upward ~8° at ~13–15 s, (B) right hand raises to touch the front glass face of the lower bulb at ~15–17 s, (C) palm pushes forward ~12 px at ~22–23 s triggering the shatter. Hand lowers back to side at ~26–28 s. No steps, no drifts, no other motion at any point.
- Silhouette / hourglass composition: A large antique hourglass floats in the center of the frame. Inside the lower bulb of the hourglass stands a tiny backlit human silhouette. The silhouette stands straight, upright, and perfectly still on the bottom inner plate of the lower chamber. The silhouette is very small, completely contained within the glass boundaries of the lower bulb. The hourglass itself is large, occupying the center region of the frame.
- Axis: vertical golden beam BEHIND the silhouette, thin core with a soft gold anisotropic glow, warm signal gold color, brightest at the upper torso level. The axis is partially obscured by the hourglass in beats 1–4, and fully visible from beat 6 onward (it passes through the axial center of the reassembled hollow brass frame).
- Palette: void black base + antique brass for hourglass frame + dark-tinted charcoal glass (with thirty percent transparency) for hourglass bulbs + warm sand ochre for sand + gold for axis + rim-light + blueprint lines + bone off-white for cosmic specks, stars, tiny human silhouettes. No reds, no reflective silvers, no pure whites, no cyan.
- Grade: ARRI Log C → Rec.709 film curve, 3200K neutral to slightly warm, subtle monochrome film grain. Deep blacks lifted very slightly.
- TONE: Reverent, controlled, adult, time-stopping. Never violent, explosive, or hurried.
- No text on screen (canon has spoken callouts but AI renders text unreliably — they will be added as DOM overlays post-render), no logos, no products (until beat 6 hoodie), no faces, no lens flare, no bloom, no chromatic aberration.
```

---

## 1. Master prompt (single-shot 55 s generators — Sora, Veo 3 Pro tier)

Use only if your tool supports 55 s single generations. Otherwise skip to §2.

```
CONCEPT 05: THE BROKEN HOURGLASS — BREAK THE FRAME. Duration: 55 seconds, 24 fps native, 1920×1080 landscape.
Total 1320 frames. Every motion cubic-bezier(0.65, 0, 0.35, 1). Story canon: own_karma.md Concept 05.
Philosophy: "Time contains you — until you decide to break it. Time is not the enemy. Time is a frame. Destiny begins when you step outside the frame."
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Formula: Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible product until beat 6 REORGANIZATION where the shattered hourglass reassembles into the hoodie pattern on the silhouette.
Capstone role: this is the fifth and final drop — during THE BREAK the sand transforms mid-air into imagery from the four prior concepts (planets, birds, human silhouettes, stars, staircases, waves, forest branches).

TONE RULES ABSOLUTE (from canon):
- MUST NOT feel: Angry · Violent · Explosive · Hurried.
- MUST feel: Reverent · Controlled · Inevitable · Adult · Time-stopping.

DEFINING LINE FOR THIS DROP (rendered as DOM overlay in the final beat, DO NOT bake into video):
'Break the frame.'

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake into video):
  Beat 5 EXPANSION (~30 s): 'When you break time... you experience life.'
  Beat 7 THE STILLNESS (~52 s): 'Time was never infinite. You are.'

THE CONSTANT: Single backlit human silhouette (7-head-tall canonical, gender-neutral, feet touching, arms at sides, at center-frame Y=40%, pixel-anchored throughout the film). The silhouette is MOTIONLESS EXCEPT FOR THREE SCRIPTED MOTIONS: (A) head tilts upward ~8° at ~13–15 s, (B) right hand raises to touch the front glass face of the lower bulb at ~15–17 s, (C) palm pushes forward ~12 px at ~22–23 s triggering the shatter. Hand lowers back to neutral at ~26–28 s. No steps, no drifts, no other motion at any point.

COMPOSITION: A large antique hourglass is centered. A tiny backlit human silhouette stands upright and still inside the lower bulb of the hourglass, standing on its bottom inner plate. The silhouette is very small, completely contained inside the lower chamber of the hourglass. A vertical golden axis extends floor-to-ceiling behind the hourglass, aligned with the silhouette's spine.

PALETTE (austere): void black base + antique brass for hourglass frame + dark-tinted charcoal glass (thirty percent transparency) for hourglass bulbs + warm sand ochre for the sand grains + gold for axis + rim-light + blueprint lines when hourglass breaks + bone off-white for cosmic specks, tiny stars, tiny human silhouettes. No reds, no reflective silvers, no pure whites, no cyan.

GRADE: ARRI Log C → Rec.709 film curve, 3200K neutral-to-slightly-warm, subtle monochrome film grain. Deep blacks lifted very slightly.

CAMERA: LOCKED-OFF for the ENTIRE 55 seconds. Zero camera motion at any point.

CANONICAL BEAT MAP (per own_karma.md Concept 05):

0–6 s (frames 0–144) — THE RELIC
  The hourglass appears in void black space, in the center foreground. Inside the lower bulb of the hourglass, a tiny backlit human silhouette stands upright and perfectly still on the bottom plate of the bulb, completely contained within the glass chamber. Lower bulb has no sand (empty). Upper bulb: warm sand ochre at seventy percent fill sits in COMPLETE SUSPENDED STILLNESS — sand is suspended with no sand movement. Not a single grain falls. Hourglass frame is antique brass. Bulbs are dark-tinted charcoal glass. Environment is void black. Camera locked.

6–12 s (frames 144–288) — THE CONTAINMENT
  Frame 144: first sand grain breaks loose from suspended equilibrium. Frames 144–288 (over 144 frames): sand begins to fall, initially at ~1 px/frame, accelerating to a steady ~3 px/frame by frame 288 (12 s). Sand pile in lower bulb grows from 0% to ~20% fill, upper bulb drops to ~50% fill. The brass frame's supports subtly reveal a cage-like inward curve, gaining faint gold rim-light. Silhouette absolutely still. Camera locked.

12–18 s (frames 288–432) — THE REALIZATION
  Frames 288–312 (1 s): sand continues falling at ~3 px/frame. Lower bulb fill reaches ~23%.
  Frames 312–360 (2 s, MOTION A): silhouette's head TILTS UPWARD by ~8° using cubic ease-in-out. Chin lifts. Silhouette now looks up toward the hourglass neck. Sand flow begins to slow to ~1.5 px/frame. Lower bulb fill reaches ~30% at frame 360.
  Frames 360–408 (2 s, MOTION B): silhouette's right arm RAISES from side and extends forward-and-slightly-up ~40 px using cubic ease-in-out. Palm reaches the front glass face of the lower bulb. Sand flow slows further to ~1 px/frame. Lower bulb fill reaches ~35% at frame 408.
  Frames 408–420 (0.5 s): at the moment of contact, the sand HALTS mid-fall — every grain suspended in place. Time has stopped. Silence. Upper bulb is at ~40% fill, lower bulb is at ~35% fill.
  Frames 420–432 (0.5 s): fine hairline blueprint cracks (golden, clean line-art, NOT jagged glass-break) begin radiating outward from the palm-contact point across the lower bulb's front face. Cracks are ~10 px long at frame 432.
  Silhouette holds position (head tilted up, hand extended) — no further motion in this beat.

18–25 s (frames 432–600) — THE BREAK
  Frames 432–480 (2 s): hairline cracks spread at ~10 px/frame across both bulbs and up along the brass frame. Suspended sand grains between bulbs remain frozen mid-fall.
  Frames 480–528 (2 s): cracks fully form throughout the hourglass. Each suspended sand grain shows tiny gold crack lines. Brass frame develops crack pattern along its length.
  Frames 528–552 (1 s, MOTION C): silhouette's extended palm PUSHES FORWARD ~12 px using cubic ease-in-out. At the moment of push, the glass bulbs SHATTER simultaneously into thousands of individual crystalline shards, and the brass frame breaks into small fragments. Fragments hang suspended at their fracture positions — no explosive spread, calm shatter.
  Frames 552–600 (2 s): TRANSFORMATION. The released sand grains BURST OUTWARD in slow motion and TRANSFORM mid-air into seven canonical forms simultaneously (the four prior concepts made visible): PLANETS (small spheres with subtle terrain), BIRDS (silhouetted wings mid-flap), MINIATURE HUMAN SILHOUETTES (backlit figures), TINY STARS (bone off-white points with faint 4-point diffraction), STAIRCASES (short geometric flights), WAVES (arcing water forms), FOREST BRANCHES (bare tree branches). Each form is clearly recognizable at its own position. All catch faint gold rim-light. Brass fragments and glass shards drift alongside the transformed elements.

25–35 s (frames 600–840) — EXPANSION
  Frames 600–648 (2 s): silhouette's raised hand LOWERS back to side in cubic ease-out (~40 px return). By frame 648: silhouette is back in neutral pose (head still tilted up ~4°, then returning to level by frame 672). By frame 672: silhouette fully neutral again — head level, arms at sides. No further silhouette motion.
  Frames 600–840: the transformed elements + brass fragments + glass shards begin a SLOW ROTATION around the silhouette at ~1°/second (a full revolution would take ~6 minutes — so the film only shows ~10° of arc). Rotation axis is the vertical golden axis behind the silhouette. Elements drift outward slightly (~0.5 px/frame radial) as they rotate. Golden blueprint lines (thin hairline) emerge and connect groups of elements — subtle web of line-art threads. Cosmic specks (bone off-white pinpricks) appear in the negative space at ~5 new specks per second (by frame 840: ~50 cosmic specks). By frame 840: elements span the middle 70% of the frame, blueprint lines link them, cosmic specks fill negative space, silhouette centered and still.
  Text callout '"When you break time... you experience life."' rendered as DOM overlay at ~30 s (frame 720).

35–45 s (frames 840–1080) — REORGANIZATION
  Frames 840–960 (5 s): glass shards + brass fragments + a portion of the transformed elements (specifically the tiny stars, small planets, and some birds) drift TOWARD the silhouette at ~2 px/frame while continuing their slow rotation. As they approach:
    - Sand-derived textures + tiny stars cluster along silhouette's shoulder and torso.
    - Glass shards align to form the hoodie's seam / panel geometry, transforming mid-air from hard fragments into soft-edged fabric seams.
    - Brass fragments split into TWO streams: some form small hoodie hardware (rivets, hem trim, drawstring caps), the rest ARC AROUND the silhouette and reassemble BEHIND the silhouette as the HOLLOW BRASS FRAME (same shape as the original hourglass but empty — no bulbs, no sand).
    - The larger orbital elements (staircases, waves, forest branches, larger human silhouettes) do NOT approach — they remain in slow orbit in the environment as evidence of the transformation.
  Frames 960–1080 (5 s): the hoodie weaves into place organically — spine seam first, then radiating to shoulders → torso → sleeves → hood. Simultaneously the hollow brass frame completes its reassembly behind the silhouette. By frame 1080: hoodie ~95% complete with 5 texture layers visible (fractured glass veins + vintage brass etching + sand grain textures + cosmic specks + blueprint crack lines). Hollow brass frame fully reassembled behind silhouette, EMPTY (no bulbs, no glass, no sand — just the brass skeleton outline).

45–55 s (frames 1080–1320) — THE STILLNESS
  Frames 1080–1200 (5 s): final fragments complete the hoodie. Hoodie fully formed. Silhouette wearing complete hoodie made from what shattered. Hollow brass frame floats behind silhouette (empty outline). Vertical golden axis passes through the axial centerline of the hollow frame, fully visible for the first time.
  Frames 1200–1320 (5 s): DEAD-AIR HOLD. Silhouette absolutely still. Environmental orbital elements (staircases, waves, birds, forest branches, larger planets, human silhouettes, cosmic specks) continue their barely-perceptible slow rotation at ~0.5°/second — motion so slow that any single frame reads as still. Canon: "Universe rotates slowly. Human does not." The defining line 'Break the frame.' will overlay as DOM text at ~frame 1250. Second callout 'Time was never infinite. You are.' at ~frame 1290, held until frame 1320.

CAMERA: LOCKED-OFF for the ENTIRE film. Zero camera motion.

HIDDEN DETAIL: when the hourglass shatters (frames 528–600), the fine crack pattern briefly arranges into OWN KARMA text in blueprint geometry (frames 500–528) before the shatter. Additionally, inside a handful of the suspended crystalline shards immediately after the shatter (frames 552–580), tiny OWN KARMA inscriptions are visible etched onto the shard faces. Visible only when paused. Canon: "as if time was secretly recording everything."

HOODIE INTEGRATION (beat 6 REORGANIZATION — canonical from own_karma.md):
The sand + shards + brass fragments reorganize into the hoodie pattern. The garment is made from what shattered. Five texture layers combined into one fabric:
  1. Fractured glass veins.
  2. Vintage brass etching patterns.
  3. Subtle floating sand grain textures.
  4. Tiny embedded cosmic specks.
  5. Blueprint crack lines across fabric.

NEGATIVE: see §6, PLUS: no explosive shattering, no violent glass-break, no sharp-edged shards flying at velocity, no bloom halo, no starburst reflections, no red anywhere, no cyan, no lens flare, no camera motion of any kind, no silhouette motion outside the three scripted motions (A/B/C).

FORMAT: MP4 H.264, 1920×1080, 24 fps native, ≤ 55 s. Audio optional.
```

---

## 2. Veo 3 7-clip split (canonical, seam-safe — RECOMMENDED)

**Why 7 clips × ~8 s (final clip 7 s):**

1. **Veo 3 caps at ~8 s per generation** — 8 s clips are safe (7-second final adjusts total to 55 s).
2. **The hourglass shatter moment (frames 540–600 canonical) MUST be contained in one clip** — otherwise the shatter pattern re-interprets across the boundary. In this split, the shatter is fully inside Clip 3 (frames 384–480 of Clip 3, which covers 16 s → 24 s of film time).
3. **The hoodie weaving (frames 960–1080 canonical) MUST be contained in one clip** — otherwise the fabric pattern re-interprets. In this split, the primary weaving happens in Clip 6.
4. **The camera is LOCKED-OFF throughout** — no rapid motion to contain, but seams still visible if palette or fragment positions drift between clips (why every closing-frame description must match every next opening-frame description exactly).

### 2.1 Clip map

| Clip | Time (s) | Duration | Canonical beats covered | Key moment contained in this clip? |
| :---: | :---: | :---: | :--- | :--- |
| **1** | 0 – 8 | 8 s | THE RELIC (whole 6 s) + THE CONTAINMENT begin (2 s) | Hourglass introduced — sand suspended (THE RELIC) then first grain falls (CONTAINMENT) |
| **2** | 8 – 16 | 8 s | THE CONTAINMENT finish (4 s) + THE REALIZATION begin (4 s of 6 s) | Cage-frame reveal + sand slowing begins |
| **3** | 16 – 24 | 8 s | THE REALIZATION finish (2 s of 6 s) + THE BREAK almost entirely (6 s of 7 s) | **Hourglass hairline cracks + frame breaks + suspended fragments ✓** |
| **4** | 24 – 32 | 8 s | THE BREAK final 1 s + EXPANSION first 7 s (of 10 s) | Fragment cloud drifts outward + cosmic specks appear |
| **5** | 32 – 40 | 8 s | EXPANSION final 3 s + REORGANIZATION first 5 s (of 10 s) | Fragments begin drifting toward silhouette |
| **6** | 40 – 48 | 8 s | REORGANIZATION final 5 s + THE STILLNESS first 3 s (of 10 s) | **Hoodie weaves onto silhouette ✓** |
| **7** | 48 – 55 | 7 s | THE STILLNESS final 7 s (of 10 s) | Held poster frame with defining line overlay |

### 2.2 Universal per-clip workflow

1. Prepend the Style Lock cheat-sheet to every clip's prompt.
2. In Flow / Veo 3: aspect = **16:9**, model = **Veo 3** (not Fast).
3. Duration setting per clip: **8 s** for Clips 1–6, **7 s** for Clip 7.
4. **Clip 1 only:** Text-to-Video mode.
5. **Clips 2–7:** Image-to-Video mode. Upload `handoff-hourglass-{N-1}.png` as start frame.
6. After each generation, extract that clip's handoff frame:
   ```powershell
   ffmpeg -sseof -0.05 -i clip-hourglass-N.mp4 -vframes 1 -q:v 1 handoff-hourglass-N.png
   ```
7. **Visually verify** the extracted PNG matches the CLOSING FRAME description before generating the next clip. Especially critical for Clips 3 (shatter) and 6 (hoodie weave) — if the shatter renders as violent glass-break or the hoodie has wrong texture components, regenerate.

---

### 2.3 Clip 1 — THE RELIC + CONTAINMENT begin (0 – 8 s)

**Mode:** Text-to-Video. Duration: 8 s. Prepend Style Lock. Then submit:

```
CLIP 1 OF 7 (Broken Hourglass). Duration: 8 s, 24 fps, 192 frames. Text-to-Video generation. 
OPENING FRAME (frame 0): Void black environment, no floor, no walls, no horizon. At center-frame: a large antique hourglass, scale occupies the center of the frame. Inside the lower bulb of the hourglass stands a tiny backlit human silhouette. The silhouette stands straight, upright, and perfectly still on the bottom inner plate of the lower chamber. The silhouette is very small, completely contained within the glass boundaries of the lower bulb. Silhouette has faint gold rim-light at shoulders. Vertical golden axis (thin core with a soft gold anisotropic glow) extends floor-to-ceiling BEHIND the hourglass (aligned with the silhouette's spine). Hourglass frame is antique brass with visible aged patina and etched geometric markings (implies text via texture but NOT legible letters). Bulbs are dark-tinted charcoal glass. Inside the upper bulb: warm sand ochre at seventy percent fill, COMPLETELY SUSPENDED AND MOTIONLESS — not a single grain is falling. Lower bulb has no sand (empty). Palette: void black + antique brass + dark charcoal glass + warm ochre sand + gold rim-light and axis. Camera absolutely locked.

BEAT MAP:

0–6 s (frames 0–144) — THE RELIC (whole canonical beat)
  Frames 0–144: sand in upper bulb is in COMPLETE SUSPENDED STILLNESS — sand is suspended with no sand movement. Not a single grain falls. The sand ochre mass sits frozen at seventy percent fill in the upper bulb. Inside the lower bulb: the tiny backlit human silhouette stands straight and upright on the bottom plate, completely motionless. Environment is void black. Camera locked.

6–8 s (frames 144–192) — THE CONTAINMENT begin (first 48 frames of canonical 144-frame beat)
  Frame 144: the first sand grain detaches from the frozen mass in the upper bulb and drifts downward through the neck.
  Frames 144–192: sand begins to fall slowly through the narrow neck — grains resolvable as individual particles. Sand falls past the tiny silhouette inside the lower bulb without hitting it. Lower bulb sand pile grows from empty to three percent (dusting the bottom around the silhouette's feet). Upper bulb drops to sixty-eight percent fill. The brass frame's supports begin to reveal a cage-like inward curve, gaining faint gold rim-light. Silhouette stands straight and absolutely still inside the lower bulb. Camera locked.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-1.png, verify visually before Clip 2):
- A large antique hourglass centered in the frame.
- Inside the lower bulb of the hourglass stands a tiny backlit human silhouette, standing straight and still on the bottom plate of the bulb.
- Vertical golden axis behind the hourglass (aligned with the silhouette).
- Upper bulb (dark charcoal glass): sand at roughly sixty-eight percent fill.
- Lower bulb (dark charcoal glass): thin sand dusting at roughly three percent fill, surrounding the tiny silhouette's feet.
- Sand falling slowly through the neck downward — individual grains resolvable.
- Brass support columns visible with subtle inward curve, faint gold rim-lighting at edges.
- Void black environment, no floor, no walls.
- Palette: void black + antique brass + dark charcoal glass + warm ochre sand + gold rim-light.
- Camera absolutely locked.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-1.mp4 -vframes 1 -q:v 1 handoff-hourglass-1.png
```
**Verify:** Hourglass antique brass with dark-tinted glass bulbs. Sand MOTIONLESS for first 6s then slowly beginning to fall. Lower bulb has a tiny silhouette standing inside, with sand dusting at its feet. Camera absolutely locked.

---

### 2.4 Clip 2 — CONTAINMENT finish + REALIZATION begin (8 – 16 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-1.png`. Duration: 8 s. Prepend Style Lock. Then submit:

```
CLIP 2 OF 7 (Broken Hourglass). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF (same framing as Clip 1). Silhouette absolutely still.
TONE: Reverent tension. The cage-frame is revealed. Sand begins to slow — realization begins.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. A large antique hourglass centered. Inside the lower bulb stands a tiny backlit human silhouette, sand at sixty-eight percent fill in the upper bulb and a three percent thin sand dusting in the lower bulb, sand falling slowly with individual grains resolvable.

BEAT MAP:

0–4 s (frames 0–96) — THE CONTAINMENT finish (final 96 frames of canonical 144-frame beat)
  Frames 0–96: sand flow accelerates to a steady flowing speed by frame 96. Sand falls past the tiny silhouette inside the lower bulb. Lower bulb fill grows to twenty percent fill (burying the tiny silhouette up to its ankles/calves). Upper bulb drops to fifty percent fill.
  DURING THIS WINDOW: the brass frame's cage-nature becomes more evident. The support columns curve inward, appearing as a cage enclosing the tiny silhouette. Etched markings on the frame catch faint gold light and reveal geometric containment patterns. Silhouette stands straight and absolutely still inside. Camera locked.

4–8 s (frames 96–192) — THE REALIZATION begin (first 96 frames of canonical 144-frame beat)
  Frames 96–144 (2 s): sand flow slows down. Sand pile growth rate slows correspondingly.
  Frames 144–192 (2 s): sand flow slows further. Individual sand grains in the falling stream begin to be visible as separated particles. At frame 192: sand flow is at a slow crawl with clearly individual grains visible in the falling stream between bulbs. Lower bulb fill is at thirty-five percent (burying the tiny silhouette up to its waist). Upper bulb is at forty percent.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-2.png):
- A large antique hourglass centered in the frame.
- Inside the lower bulb: a tiny backlit human silhouette, buried to its waist in sand, absolutely still.
- Vertical golden axis behind the hourglass.
- Upper bulb: sand at forty percent fill.
- Lower bulb: sand pile at thirty-five percent fill.
- Sand flowing slowly with clearly individual grains visible in the falling stream.
- Brass cage-frame very evident with etched geometric containment patterns.
- Void black environment.
- Palette: void black + antique brass + dark charcoal glass + warm ochre sand + gold rim-light. Grain visibility hint of bone off-white cosmic specks inside individual sand grains (visible only if paused).
- Camera absolutely locked (identical framing to Clip 1).

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-2.mp4 -vframes 1 -q:v 1 handoff-hourglass-2.png
```
**Verify:** Sand flow visibly slower than Clip 1 (individual grains resolvable in the stream). Brass cage-nature obvious. Camera locked. If sand is still flowing at normal speed or the cage-frame isn't apparent, regenerate.

---

### 2.5 Clip 3 — REALIZATION finish + THE BREAK (hourglass shatter) (16 – 24 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-2.png`. Duration: 8 s. Prepend Style Lock. Then submit:

```
CLIP 3 OF 7 (Broken Hourglass). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: The hourglass shatters CALMLY — glass fractures as clean blueprint geometry, NOT violent glass-break. Brass frame dissolves like drifting particles, NOT explosive burst. Sand released hangs suspended.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette behind hourglass, sand flowing slowly with individual grains visible in the falling stream, upper bulb forty percent sand, lower bulb thirty-five percent sand.

BEAT MAP:

0–2 s (frames 0–48) — THE REALIZATION finish (final 48 frames of canonical beat)
  Frames 0–48: sand flow continues to slow to essentially halted. By frame 48: a few final sand grains are visibly suspended mid-fall in the narrow neck between bulbs — time has stopped. Silhouette absolutely still. Camera locked.

2–4 s (frames 48–96) — THE BREAK stage 1: hairline cracks (first 48 frames of canonical beat)
  Frames 48–96: fine hairline cracks begin to form in the hourglass glass — clean geometric blueprint lines (golden), radiating outward from the narrow neck between bulbs. NOT jagged glass-break patterns — clean line-art fractures spreading slowly. Cracks spread through both bulbs. By frame 96: cracks fully cover both bulbs. Brass frame remains intact but its etched markings glow faintly gold as if resonating with the cracks. Suspended sand grains still hang in the neck. Silhouette absolutely still.

4–6.5 s (frames 96–156) — THE BREAK stage 2: full fracture (middle canonical beat frames)
  Frames 96–156: cracks fully form throughout the hourglass glass. The suspended sand grains between bulbs also visibly fracture (each grain shows tiny gold crack lines). Brass frame cracks form along its length. HIDDEN DETAIL: cracks briefly arrange into OWN KARMA text in blueprint geometry (frames 120–140, visible only if paused). By frame 156: hourglass is fully fractured — every element ready to break apart. Nothing has moved yet.

6.5–8 s (frames 156–192) — THE BREAK stage 3: hourglass breaks (final canonical beat frames + slight overlap)
  Frames 156–180 (1 s): THE FRAME BREAKS. Antique brass frame CALMLY dissolves — brass fragments float outward slowly in cubic ease-out. NO explosive burst, NO violence, NO sharp-edged fragments flying at velocity — slow drift only.
  Frames 180–192 (0.5 s): glass bulbs simultaneously fracture into thousands of individual glass shards that hang SUSPENDED in air at their fracture positions (they do NOT fall). Sand grains released from containment hang SUSPENDED in the space between the shards. By frame 192: hourglass is entirely fragmented into brass pieces + glass shards + suspended sand, but everything is STILL in position — the shape of the hourglass is still recognizable, just fractured into a cloud of components.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-3.png):
- Silhouette at center-frame, absolutely still with faint gold rim-light.
- Vertical golden axis behind silhouette (STILL partially obscured by the suspended hourglass fragment cloud).
- Hourglass shape STILL RECOGNIZABLE but fragmented:
  - Brass frame pieces suspended in position, gently drifting outward slowly.
  - Glass shards from bulbs suspended in position at their fracture points, showing golden crack lines along their edges.
  - Sand grains suspended in the space where the neck was and around the lower bulb — no longer falling.
- Everything is CALMLY suspended — no explosive spread yet.
- Void black environment around the fragment cloud.
- Palette: void black + antique brass fragments + dark charcoal glass shards + warm ochre suspended sand + gold rim-light + gold crack lines on glass edges.
- Camera absolutely locked (identical framing to prior clips).

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-3.mp4 -vframes 1 -q:v 1 handoff-hourglass-3.png
```
**Verify (CRITICAL):** Hourglass shape still recognizable but fully fractured. Fragments SUSPENDED, not exploded outward. NO violent glass-break patterns, NO sharp shards flying at velocity. Silhouette still. Camera locked. If shatter appears violent or fragments have already dispersed widely, regenerate with stronger "suspended in position" language.

---

### 2.6 Clip 4 — THE BREAK final + EXPANSION begin (24 – 32 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-3.png`. Duration: 8 s. Prepend Style Lock. Then submit:

```
CLIP 4 OF 7 (Broken Hourglass). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: Slow, meditative expansion. Fragment cloud drifts outward like a controlled slow-motion release, revealing cosmic space behind.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette behind fragment cloud, hourglass shape still recognizable but fully fractured into suspended brass + glass + sand, everything calmly suspended in position.

BEAT MAP:

0–1 s (frames 0–24) — THE BREAK final (final 24 frames of canonical beat)
  Frames 0–24: fragments continue their gentle outward drift slowly. Hourglass shape becoming less recognizable as pieces separate.

1–8 s (frames 24–192) — EXPANSION begin (first 168 frames of canonical 240-frame beat)
  Frames 24–96 (3 s): fragment cloud (brass + glass + sand) drifts OUTWARD from the hourglass center slowly. Individual sand grains and glass shards catch faint gold rim-light at their edges. Cloud slowly expands to reveal more of the void black behind. Silhouette becomes progressively more visible through gaps in the fragment cloud.
  Frames 96–192 (4 s): expansion CONTINUES. Fragment cloud drifts slowly. As fragments spread out further, COSMIC SPECKS become visible in the negative space — bone off-white pinpricks scattered across the void black, appearing where there is now empty space between fragments. Each pinprick has a small diameter and appears at a rate of several new specks per second. Canonical: "each grain of sand contains a universe." By frame 192: fragment cloud has expanded to fill the middle region of the frame; cosmic specks fill the gaps.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-4.png):
- Silhouette at center-frame, mostly visible now through the dispersing fragment cloud, absolutely still with faint gold rim-light.
- Vertical golden axis behind silhouette, much more visible than before.
- Fragment cloud (brass + glass + sand) spread across the middle region:
  - Brass pieces: fragments at various depths, catching faint gold light.
  - Glass shards: fragments, showing gold crack-line edges.
  - Sand grains: individual grains distributed throughout the cloud.
- Cosmic specks (bone off-white pinpricks) visible in the negative space between fragments.
- No trace of hourglass shape remaining.
- Palette: void black + antique brass fragments + dark charcoal glass shards + warm ochre sand + gold rim-light + capped bone off-white cosmic specks.
- Camera absolutely locked (identical framing to prior clips).

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-4.mp4 -vframes 1 -q:v 1 handoff-hourglass-4.png
```
**Verify:** Fragment cloud has spread outward. Cosmic specks visible in negative space. Silhouette now more visible. Camera locked. If cosmic specks look like stars/lens-flare or fragments moved too fast, regenerate.

---

### 2.7 Clip 5 — EXPANSION finish + REORGANIZATION begin (32 – 40 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-4.png`. Duration: 8 s. Prepend Style Lock. Then submit:

```
CLIP 5 OF 7 (Broken Hourglass). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: The pivot moment — expansion completes and inward reorganization begins. Fragments start moving TOWARD the silhouette.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette mostly visible through fragment cloud, cosmic specks visible in negative space, fragments (brass + glass + sand) spread across the middle region of the frame drifting outward.

BEAT MAP:

0–3 s (frames 0–72) — EXPANSION finish (final 72 frames of canonical 240-frame beat)
  Frames 0–48 (2 s): outward drift continues but decelerates further — slowly drifting until it almost halts. By frame 48: outward drift essentially halts.
  Frames 48–72 (1 s): fragments HOLD STATIC for 1 second at their expanded positions. More cosmic specks appear (rate of several new specks per second continues). By frame 72: total cosmic specks visible.

3–8 s (frames 72–192) — REORGANIZATION begin (first 120 frames of canonical 240-frame beat)
  Frames 72–120 (2 s): fragments begin to reverse direction — brass + glass + sand all begin DRIFTING TOWARD the silhouette slowly, gaining speed by frame 120. Fragments move in cubic ease-in — starting slow, gaining speed.
  Frames 120–192 (3 s): fragments continue drifting inward slowly. Individual fragments visibly reorganize by TYPE as they approach the silhouette:
    - Sand grains cluster along paths that will become the silhouette's shoulder and torso lines.
    - Glass shards align to form the future hoodie's seam / panel geometry.
    - Brass etched fragments group into small hardware clusters that will become rivets and hem details.
    - Cosmic specks scatter but do NOT move toward silhouette — they remain in the environment.
  By frame 192: fragments are close to silhouette but the hoodie has NOT yet begun forming — that happens in Clip 6.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-5.png):
- Silhouette at center-frame, absolutely still with faint gold rim-light.
- Vertical golden axis behind silhouette, fully visible now (fragment cloud has cleared from behind silhouette).
- Fragments approaching silhouette from the outer perimeter of the frame:
  - Sand grains: grains in loose paths approaching silhouette's shoulder and torso lines.
  - Glass shards: shards, visibly beginning to align in seam/panel geometry near the silhouette.
  - Brass fragments: pieces clustering near silhouette's hem, cuffs, hood-drawstring points.
- No hoodie yet — fragments are close but not fused.
- Cosmic specks scattered throughout the environment (remain in space).
- Palette: void black + antique brass fragments + dark charcoal glass shards + warm ochre sand + gold rim-light + gold on axis + capped bone off-white cosmic specks.
- Camera absolutely locked (identical framing to prior clips).

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-5.mp4 -vframes 1 -q:v 1 handoff-hourglass-5.png
```
**Verify:** Fragments have reversed direction and are drifting toward silhouette. Fragment types visibly organizing (sand → shoulders/torso, glass → seams, brass → hem/cuffs). NO hoodie yet. Camera locked. If a hoodie has started forming, regenerate.

---

### 2.8 Clip 6 — REORGANIZATION finish (hoodie weaves) + STILLNESS begin (40 – 48 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-5.png`. Duration: 8 s. Prepend Style Lock. Then submit:

```
CLIP 6 OF 7 (Broken Hourglass). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: Reverent completion. The hoodie weaves organically from the shattered components. Fabric emerges as a unified garment made from what was broken.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette at center, fragments approaching from perimeter and organizing by type (sand near shoulders/torso, glass near seam-lines, brass near hem/cuffs/hood), no hoodie yet, cosmic specks in environment.

BEAT MAP:

0–5 s (frames 0–120) — REORGANIZATION finish (final 120 frames of canonical 240-frame beat)
  Frames 0–48 (2 s): fragments make final approach to silhouette. Sand grains contact silhouette surface first — beginning at spine seam (center of silhouette back), radiating outward. As sand grains settle onto the silhouette they visibly stick and cluster in weave-like patterns.
  Frames 48–96 (2 s): glass shards join in — they align along the sand-grain paths and MELT into fabric-panel seams. Glass shards visibly transform mid-air from hard fragments into soft-edged fabric seams as they meet the sand-textured surface. Brass fragments simultaneously align at hem, cuffs, and hood-drawstring points, transforming from hard metal into fabric hardware details (small rivets, brass hem trim, brass drawstring caps).
  Frames 96–120 (1 s): hoodie fabric visibly WEAVES into place across the silhouette. Weaving pattern is organic — meeting at spine seam first, then radiating outward to shoulders → torso → sleeves → hood. By frame 120: hoodie is nearly complete. Pattern visibly composed of 5 texture layers:
    1. FRACTURED GLASS VEINS (subtle gold line-art in fabric weave).
    2. VINTAGE BRASS ETCHING (small geometric details at hem, cuffs, drawstring caps).
    3. SAND GRAIN TEXTURES (fine granular texture across fabric surface).
    4. COSMIC SPECKS (pinprick bone off-white points scattered across fabric).
    5. BLUEPRINT CRACK LINES (golden line-art pattern flowing across hoodie panels).

5–8 s (frames 120–192) — THE STILLNESS begin (first 72 frames of canonical 240-frame beat)
  Frames 120–168 (2 s): remaining fragments complete the hoodie. Final sand grains fill any texture gaps. Final glass shards complete the seam-line pattern. Final brass fragments settle at hardware points. By frame 168: hoodie is 100% complete.
  Frames 168–192 (1 s): holding begins. Silhouette in completed hoodie absolutely still. Vertical golden axis fully visible behind silhouette. Cosmic specks in environment hold their positions.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-6.png):
- Silhouette at center-frame wearing complete hoodie, absolutely still.
- Hoodie fabric composed of 5 visible texture layers:
  1. Fractured glass veins (subtle gold line-art in fabric weave).
  2. Vintage brass etching (small geometric details at hem, cuffs, drawstring caps).
  3. Sand grain textures (fine granular texture across fabric).
  4. Cosmic specks (bone off-white pinpricks scattered on fabric).
  5. Blueprint crack lines (golden line-art pattern flowing across panels).
- Vertical golden axis behind silhouette, extending floor-to-ceiling, fully visible.
- Cosmic specks in the environment holding position around the silhouette.
- NO trace of hourglass, brass fragments in air, glass shards in air, or free-floating sand grains — all absorbed into the hoodie.
- Void black environment.
- Palette: void black + charcoal hoodie (dark base) with gold line-art details + brass hardware accents + capped bone off-white cosmic specks (fabric + environment) + gold axis.
- Camera absolutely locked (identical framing to prior clips). Zero motion.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-6.mp4 -vframes 1 -q:v 1 handoff-hourglass-6.png
```
**Verify (CRITICAL):** Hoodie fully formed on silhouette. All 5 texture layers visible in fabric (glass veins + brass etching + sand grains + cosmic specks + blueprint lines). Vertical axis fully visible behind silhouette. Camera locked. If the hoodie is missing any texture layer, or brass/glass/sand fragments are still visible in air, regenerate.

---

### 2.9 Clip 7 — THE STILLNESS finish + poster frame (48 – 55 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-6.png`. Duration: 7 s. Prepend Style Lock. Then submit:

```
CLIP 7 OF 7 (Broken Hourglass). Duration: 7 s, 24 fps, 168 frames. Image-to-Video generation. Ends on the poster frame.
Camera: LOCKED-OFF. Silhouette absolutely motionless throughout the entire 7-second held stillness.
TONE: Reverent completion. Poster frame held for maximum contemplative weight.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Silhouette in complete hoodie at center-frame, vertical golden axis behind, cosmic specks in environment.

BEAT MAP:

0–7 s (frames 0–168) — THE STILLNESS finish (final 168 frames of canonical 240-frame beat)
  Frames 0–168: ABSOLUTELY NO MOTION. Silhouette in completed hoodie stands centered. Vertical golden axis behind silhouette extends floor-to-ceiling. Cosmic specks in environment hold their positions with minimal drift.
  The only "life" in the frame is the extremely subtle 0.3% monochrome film grain across the whole image. Everything else is dead-static.

  This clip IS the poster frame. Every single frame in this 7-second window looks essentially identical.

CLOSING FRAME (frame 168 — this IS the poster frame, extract as story-hourglass-poster candidate):
- Backlit human silhouette at center-frame wearing complete hoodie.
- Hoodie fabric shows all 5 texture layers: fractured glass veins + vintage brass etching + sand grain textures + cosmic specks + blueprint crack lines.
- Vertical golden axis behind silhouette, extending floor-to-ceiling, fully visible.
- Cosmic specks in the environment around the silhouette.
- No hourglass, no fragments, no motion.
- Void black background.
- Palette: void black + charcoal hoodie + gold (axis, hoodie design lines, rim-light) + capped bone off-white cosmic specks.
- Camera absolutely locked (identical framing to all prior clips). Zero motion.

DEFINING LINE for this clip (rendered as DOM overlay in the final beat, DO NOT bake into video): 'Break the frame.' at ~2 s, held until frame 168.
SECOND CALLOUT: 'Time was never infinite. You are.' at ~4 s, held until frame 168.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 7 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-7.mp4 -vframes 1 -q:v 1 handoff-hourglass-7.png
```
This handoff-hourglass-7.png becomes the basis for `story-hourglass-poster.jpg` after the merge (§4).

---

## 3. Mobile portrait variant (1080×1920, 7 clips × ~8 s)

**Same 7-clip beat distribution as landscape** (Clips 1–6 at 8 s, Clip 7 at 7 s = 55 s total), but portrait 9:16. Set Flow / Veo 3 aspect to **9:16 (Portrait)** before each generation. Target resolution **1080×1920** (portrait 1080p — do NOT generate at 720×1280).

### Portrait framing rules (apply to every mobile clip)

- **Vertical golden axis extends from top pixel to bottom pixel of the frame** (not just silhouette extents). Partially obscured by hourglass in Clips 1–3, fully visible from Clip 6 onward.
- Silhouette centered horizontally (X=540 ± 10 px) and at **Y=40% from top** (~Y=768 px). Silhouette is **MOTIONLESS except for three scripted canonical motions** (same as landscape): (A) head tilts upward ~8° at ~13–15 s, (B) right hand raises to touch the front glass face at ~15–17 s, (C) palm pushes forward ~12 px at ~22–23 s. Hand lowers back at ~26–28 s. **No steps, no shifts, no drift outside these three motions.** Verify by comparing silhouette position across all 7 clips.
- **Upper 20% (Y=0–384)** kept visually quiet.
- **Lower 40% (Y=1152–1920)** kept visually quiet for DOM overlay text (defining line "Break the frame." + "Time was never infinite. You are.").
- Concept-05 specific: the hourglass is naturally **vertically oriented** — in portrait it fits gorgeously, occupying Y=25%–75% (spanning the middle 50% of the frame vertically) and roughly 55% of frame width horizontally (X=245–835).
- Camera **LOCKED-OFF for entire 55 s** — same as landscape.
- Fragment cloud in Clips 4–5 stays within the **middle 60% band (Y=384–1536)**.
- Cosmic specks in Clips 4–7 are scattered within the middle 60% band — upper 20% and lower 20% zones stay dark (only axis passes through).

---

### Mobile Clip 1 — THE RELIC + CONTAINMENT begin (0 – 8 s)

**Mode:** Text-to-Video. Duration: 8 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 1 OF 7 (Broken Hourglass Mobile 9:16). Duration: 8 s, 24 fps, 192 frames. Text-to-Video generation.
Camera: LOCKED-OFF for entire clip and entire film. Silhouette absolutely still throughout the entire film.
TONE: Reverent, controlled, contemplative. Sand is SUSPENDED AND MOTIONLESS for the first 6 seconds (THE RELIC). First grain breaks free at 6 s (THE CONTAINMENT begins).

OPENING FRAME (frame 0): Portrait 1080×1920. Void black environment, no floor, no walls, no horizon. At center-frame X, spanning Y=25%–75% vertically (occupies middle 50% of frame): a tall antique hourglass positioned IN FRONT of a backlit human silhouette. Hourglass scale is generous in portrait — spans middle 50% vertically, ~55% of frame width horizontally. Silhouette is 7-head-tall canonical, gender-neutral, feet touching, arms at sides, absolutely motionless, at center-frame X, Y=40% from top, PARTIALLY OBSCURED by the hourglass frame + bulbs. Silhouette has faint gold rim-light at shoulders (20% opacity). Vertical golden axis (#D4A855, 2 px core + 8 px glow) extends from top pixel (Y=0) to bottom pixel (Y=1919) BEHIND the silhouette (partially obscured by the hourglass). Hourglass frame is antique brass (#8A6E3F) with visible aged patina + etched geometric markings (implies text via texture but NOT legible letters). Bulbs are dark-tinted charcoal glass (#0C0A0A, 30% transparency). Inside the upper bulb: warm sand ochre (#B08B5A) at ~70% fill, COMPLETELY SUSPENDED AND MOTIONLESS — not a single grain is falling. Lower bulb: EMPTY (0% fill — no sand has fallen yet). Dust particles may float <1 px in the upper bulb as barely-perceptible ambient float. Upper 25% and lower 25% of frame show pure void black + axis only. Palette: void black + antique brass + dark charcoal glass + warm ochre sand + gold. Camera absolutely locked.

BEAT MAP:

0–6 s (frames 0–144) — THE RELIC (whole canonical beat)
  Frames 0–144: sand in upper bulb is in COMPLETE SUSPENDED STILLNESS — canon says "Dust suspended. No sand movement." NOT A SINGLE GRAIN FALLS in this beat. The sand ochre mass sits frozen at ~70% fill in the upper bulb. Lower bulb remains EMPTY (0% fill). Occasional single dust motes may drift <1 px up or down as barely-perceptible float, that's it.
  The stillness is eerie and reverent — the hourglass exists but time has not started. The audience should feel the weight of contained potential.
  Environment stays void black. Silhouette absolutely still behind the hourglass. Camera locked. Antique brass frame catches faint gold light at edges.

6–8 s (frames 144–192) — THE CONTAINMENT begin (first 48 frames of canonical 144-frame beat)
  Frame 144: THE FIRST GRAIN BREAKS FREE from suspended equilibrium in the upper bulb — a single visible sand grain detaches from the frozen mass and drifts downward through the narrow neck. This is the moment time begins.
  Frames 144–192: sand begins to fall OPPRESSIVELY SLOWLY at ~1 px/frame through the narrow neck — grains resolvable as individual particles. Lower bulb fill grows from 0% to ~3% (just a thin dusting at the bottom). Upper bulb drops from ~70% to ~68%. Brass frame's supports (the two vertical columns holding the bulbs) begin to reveal a subtle characteristic — they curve inward very slightly, implying a cage forming. Visible only if you look for it. Brass supports gain very faint gold rim-lighting revealing their curved profile.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-mobile-1.png, verify visually before Clip 2):
- Portrait 1080×1920. Silhouette at center-frame X, Y=40% behind the hourglass, absolutely still with faint gold rim-light at shoulders.
- Vertical golden axis behind silhouette, top pixel to bottom pixel of frame (partially obscured by hourglass in the middle 50% region).
- Antique hourglass IN FRONT of silhouette (Y=25–75% vertical, ~55% frame width):
  - Antique brass (#8A6E3F) frame with aged patina + etched geometric markings.
  - Upper bulb (dark charcoal glass): sand at ~68% fill.
  - Lower bulb (dark charcoal glass): thin sand dusting at ~3% fill.
  - Sand falling SLOWLY through the neck at ~1 px/frame downward — individual grains resolvable.
  - Brass support columns visible with subtle inward curve.
- Void black environment. Upper 25% and lower 25% of frame show only void + axis.
- Palette: void black + antique brass + dark charcoal glass + warm ochre sand + gold.
- Camera absolutely locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-1.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-1.png
```
**Verify:** Hourglass fits middle 50% vertically (spans Y=25–75%, not the entire frame height). Sand MOTIONLESS for first 6s then slowly beginning to fall. Lower bulb nearly empty (just a thin dusting). Silhouette behind hourglass at Y=40%. Camera absolutely locked. If hourglass fills the entire frame height, sand is flowing from frame 0, or the lower bulb is already substantially filled, regenerate.

---

### Mobile Clip 2 — CONTAINMENT finish + REALIZATION begin (8 – 16 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-mobile-1.png`. Duration: 8 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 2 OF 7 (Broken Hourglass Mobile 9:16). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: Reverent tension. The cage-frame is revealed. Sand begins to slow.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette behind hourglass at Y=40%, axis top pixel to bottom pixel, antique hourglass in front (Y=25–75%) with upper bulb ~68% sand and lower bulb ~3% thin sand dusting, sand falling slowly at ~1 px/frame with individual grains resolvable.

BEAT MAP:

0–4 s (frames 0–96) — THE CONTAINMENT finish (final 96 frames of canonical beat)
  Frames 0–96: sand flow ACCELERATES from the oppressively slow ~1 px/frame at frame 0 to a steady ~3 px/frame by frame 96 (linear ramp-up — gravity asserting itself, containment tightening). Lower bulb fill grows from ~3% to ~20%. Upper bulb drops from ~68% to ~50%.
  The brass frame's cage-nature becomes more evident. The subtle inward curve of the support columns now visibly connects visually as a full enclosure — the frame is holding the bulbs like a prison. Etched markings on the frame catch faint gold light and reveal geometric containment patterns (grid-like structures implying "control").

4–8 s (frames 96–192) — THE REALIZATION begin (first 96 frames of canonical 144-frame beat)
  Frames 96–144 (2 s): sand flow SLOWS. From ~3 px/frame at frame 96 to ~1.5 px/frame at frame 144 (linear ramp-down).
  Frames 144–192 (2 s): sand flow slows further to ~1 px/frame. Individual sand grains in the falling stream begin to be visible as separated particles. At frame 192: sand flow at ~1 px/frame with clearly individual grains visible in the falling stream between bulbs. Lower bulb fill ~35%. Upper bulb ~40%.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-mobile-2.png):
- Portrait 1080×1920. Silhouette at Y=40% behind the hourglass, absolutely still with faint gold rim-light.
- Vertical golden axis behind silhouette, top pixel to bottom pixel of frame (still partially obscured).
- Antique hourglass IN FRONT (Y=25–75%) with:
  - Upper bulb: sand at ~40% fill.
  - Lower bulb: sand pile at ~35% fill.
  - Sand flowing SLOWLY at ~1 px/frame with clearly individual grains visible.
  - Brass cage-frame very evident with etched geometric containment patterns.
- Void black environment. Upper 25% and lower 25% show only void + axis.
- Palette: void black + antique brass + dark charcoal glass + warm ochre sand + gold.
- Camera absolutely locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-2.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-2.png
```
**Verify:** Sand flow visibly slower than Clip 1 (individual grains resolvable). Brass cage-nature obvious. Camera locked. If sand still flowing at normal speed or cage isn't apparent, regenerate.

---

### Mobile Clip 3 — REALIZATION finish + THE BREAK (hourglass shatter) (16 – 24 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-mobile-2.png`. Duration: 8 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 3 OF 7 (Broken Hourglass Mobile 9:16). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: The hourglass shatters CALMLY — glass fractures as clean blueprint geometry, NOT violent glass-break. Brass frame dissolves like drifting particles, NOT explosive burst. Sand released hangs suspended.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette behind hourglass, sand flowing slowly (~1 px/frame) with individual grains visible, upper bulb ~40% sand, lower bulb ~35% sand.

BEAT MAP:

0–2 s (frames 0–48) — THE REALIZATION finish (final 48 frames of canonical beat)
  Frames 0–48: sand flow continues to slow from ~1 px/frame to essentially halted. By frame 48: a few final sand grains are visibly suspended mid-fall in the narrow neck — time has stopped.

2–4 s (frames 48–96) — THE BREAK stage 1: hairline cracks
  Frames 48–96: fine hairline cracks begin to form in the hourglass glass — clean geometric blueprint lines (golden #D4A855), radiating outward from the narrow neck between bulbs. NOT jagged glass-break — clean line-art fractures spreading at ~10 px/frame. Cracks spread through both bulbs. By frame 96: cracks fully cover both bulbs. Brass frame remains intact but its etched markings glow faintly gold. Suspended sand grains still hang in the neck.

4–6.5 s (frames 96–156) — THE BREAK stage 2: full fracture
  Frames 96–156: cracks fully form throughout the hourglass glass. The suspended sand grains between bulbs also visibly fracture (each grain shows tiny gold crack lines). Brass frame cracks form along its length. HIDDEN DETAIL: cracks briefly arrange into OWN KARMA text in blueprint geometry (frames 120–140, visible only if paused). By frame 156: hourglass is fully fractured — every element ready to break apart. Nothing has moved yet.

6.5–8 s (frames 156–192) — THE BREAK stage 3: hourglass breaks
  Frames 156–180 (1 s): THE FRAME BREAKS. Antique brass frame CALMLY dissolves — brass fragments float outward at ~2 px/frame in cubic ease-out. NO explosive burst, NO violence.
  Frames 180–192 (0.5 s): glass bulbs simultaneously fracture into thousands of individual glass shards that hang SUSPENDED in air at their fracture positions (they do NOT fall). Sand grains released from containment hang SUSPENDED in the space between the shards. By frame 192: hourglass is entirely fragmented into brass pieces + glass shards + suspended sand, but everything is STILL in position within the hourglass region (Y=25–75%) — the shape of the hourglass is still recognizable, just fractured into a cloud of components.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-mobile-3.png):
- Portrait 1080×1920. Silhouette at Y=40%, absolutely still with faint gold rim-light.
- Vertical golden axis behind silhouette (STILL partially obscured by the suspended hourglass fragment cloud).
- Hourglass shape STILL RECOGNIZABLE but fragmented, contained within Y=25–75%:
  - Brass frame pieces suspended in position, gently drifting outward at ~2 px/frame.
  - Glass shards from bulbs suspended in position at their fracture points, showing golden crack lines along edges.
  - Sand grains suspended in the space where the neck was and around the lower bulb.
- Everything CALMLY suspended — no explosive spread yet.
- Upper 25% and lower 25% still show void black + axis only.
- Palette: void black + antique brass fragments + dark charcoal glass shards + warm ochre suspended sand + gold.
- Camera absolutely locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-3.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-3.png
```
**Verify (CRITICAL):** Hourglass shape still recognizable but fully fractured. Fragments SUSPENDED, not exploded outward. NO violent glass-break patterns. Silhouette absolutely still. Camera locked. If shatter appears violent or fragments have already dispersed widely, regenerate with stronger "suspended in position" language.

---

### Mobile Clip 4 — THE BREAK final + EXPANSION begin (24 – 32 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-mobile-3.png`. Duration: 8 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 4 OF 7 (Broken Hourglass Mobile 9:16). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: Slow, meditative expansion. Fragment cloud drifts outward like a controlled slow-motion release, revealing cosmic space behind.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette at Y=40% behind fragment cloud, hourglass shape still recognizable but fully fractured into suspended brass + glass + sand within Y=25–75%, everything calmly suspended.

BEAT MAP:

0–1 s (frames 0–24) — THE BREAK final (final 24 frames of canonical beat)
  Frames 0–24: fragments continue their gentle outward drift at ~2 px/frame. Hourglass shape becoming less recognizable as pieces separate. Drift stays within middle 60% band (Y=384–1536).

1–8 s (frames 24–192) — EXPANSION begin (first 168 frames of canonical 240-frame beat)
  Frames 24–96 (3 s): fragment cloud (brass + glass + sand) drifts OUTWARD from the hourglass center at ~2 px/frame. Individual sand grains and glass shards catch faint gold rim-light. Cloud slowly expands within the middle 60% band — fragments stay within Y=384–1536 (do NOT enter the upper 20% or lower 20% quiet zones). Silhouette becomes progressively more visible through gaps in the fragment cloud.
  Frames 96–192 (4 s): expansion CONTINUES. Fragment cloud drifts at ~1.5 px/frame. As fragments spread further, COSMIC SPECKS become visible in the negative space between fragments — bone off-white pinpricks scattered across the void black. Cosmic specks appear ONLY within the middle 60% band (Y=384–1536), NOT in the upper 20% or lower 20% zones. Each pinprick ~1 px diameter. Appearance rate ~5 new specks per second (so by frame 192, ~35 cosmic specks visible). By frame 192: fragment cloud has expanded to fill ~65% of the middle band; cosmic specks fill the gaps.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-mobile-4.png):
- Portrait 1080×1920. Silhouette at Y=40%, mostly visible now through the dispersing fragment cloud, absolutely still.
- Vertical golden axis behind silhouette, much more visible than before.
- Fragment cloud (brass + glass + sand) spread across the middle 60% band (Y=384–1536):
  - Brass pieces: ~30 fragments at various depths, catching faint gold light.
  - Glass shards: ~60 fragments, showing gold crack-line edges.
  - Sand grains: ~200+ individual grains distributed throughout the cloud.
- ~35 cosmic specks (bone off-white pinpricks) visible in the negative space between fragments, all within middle 60% band.
- Upper 20% (Y=0–384) and lower 20% (Y=1536–1920) contain ONLY axis + void black (no fragments, no specks).
- No trace of hourglass shape remaining.
- Palette: void black + antique brass fragments + dark charcoal glass shards + warm ochre sand + gold + capped bone off-white cosmic specks.
- Camera absolutely locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-4.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-4.png
```
**Verify:** Fragment cloud has spread outward within middle 60% band. Cosmic specks visible in negative space, contained within middle band. Upper 20% and lower 20% stay dark. If cosmic specks look like stars/lens-flare or fragments spread into the quiet zones, regenerate.

---

### Mobile Clip 5 — EXPANSION finish + REORGANIZATION begin (32 – 40 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-mobile-4.png`. Duration: 8 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 5 OF 7 (Broken Hourglass Mobile 9:16). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: The pivot moment — expansion completes and inward reorganization begins.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette at Y=40% mostly visible through fragment cloud, ~35 cosmic specks visible in negative space within middle 60% band, fragments spread across middle band drifting outward.

BEAT MAP:

0–3 s (frames 0–72) — EXPANSION finish (final 72 frames of canonical beat)
  Frames 0–48 (2 s): outward drift continues but decelerates further — from ~1.5 px/frame at frame 0 to ~0.5 px/frame at frame 48. By frame 48: outward drift essentially halts.
  Frames 48–72 (1 s): fragments HOLD STATIC for 1 second at their expanded positions. More cosmic specks appear within middle band. By frame 72: ~40 total cosmic specks visible in middle band.

3–8 s (frames 72–192) — REORGANIZATION begin (first 120 frames of canonical 240-frame beat)
  Frames 72–120 (2 s): fragments begin to reverse direction — brass + glass + sand all begin DRIFTING TOWARD the silhouette at ~1 px/frame initially, ramping to ~2 px/frame by frame 120. Fragments move in cubic ease-in.
  Frames 120–192 (3 s): fragments continue drifting inward at ~2 px/frame. Individual fragments visibly reorganize by TYPE as they approach the silhouette:
    - Sand grains cluster along paths that will become silhouette's shoulder and torso lines.
    - Glass shards align to form the future hoodie's seam / panel geometry.
    - Brass etched fragments group into small hardware clusters that will become rivets and hem details.
    - Cosmic specks scatter but do NOT move toward silhouette — they remain in the environment within middle 60% band.
  By frame 192: fragments close to silhouette but the hoodie has NOT yet begun forming.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-mobile-5.png):
- Portrait 1080×1920. Silhouette at Y=40%, absolutely still with faint gold rim-light.
- Vertical golden axis behind silhouette, top pixel to bottom pixel of frame, fully visible (fragment cloud has cleared from behind silhouette).
- Fragments approaching silhouette from the outer perimeter of the middle band:
  - Sand grains: ~200 grains in loose paths approaching silhouette's shoulder and torso lines.
  - Glass shards: ~60 shards, visibly beginning to align in seam/panel geometry near the silhouette.
  - Brass fragments: ~30 pieces clustering near silhouette's hem, cuffs, hood-drawstring points.
- No hoodie yet.
- ~50 cosmic specks scattered throughout the environment within middle 60% band.
- Upper 20% and lower 20% contain ONLY axis + void black.
- Palette: void black + antique brass fragments + dark charcoal glass shards + warm ochre sand + gold on axis + capped bone off-white cosmic specks.
- Camera absolutely locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-5.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-5.png
```
**Verify:** Fragments have reversed direction and are drifting toward silhouette. Fragment types visibly organizing (sand → shoulders/torso, glass → seams, brass → hem/cuffs). NO hoodie yet. Cosmic specks stay in middle band. If hoodie has started forming or fragments enter quiet zones, regenerate.

---

### Mobile Clip 6 — REORGANIZATION finish (hoodie weaves) + STILLNESS begin (40 – 48 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-mobile-5.png`. Duration: 8 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 6 OF 7 (Broken Hourglass Mobile 9:16). Duration: 8 s, 24 fps, 192 frames. Image-to-Video generation.
Camera: LOCKED-OFF. Silhouette absolutely still.
TONE: Reverent completion. The hoodie weaves organically from the shattered components.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette at Y=40%, fragments approaching from perimeter of middle band and organizing by type, no hoodie yet, ~50 cosmic specks in environment within middle 60% band.

BEAT MAP:

0–5 s (frames 0–120) — REORGANIZATION finish (final 120 frames of canonical beat)
  Frames 0–48 (2 s): fragments make final approach to silhouette. Sand grains contact silhouette surface first — beginning at spine seam (center of silhouette back), radiating outward. Sand grains settle onto the silhouette in weave-like patterns.
  Frames 48–96 (2 s): glass shards join in — they align along the sand-grain paths and MELT into fabric-panel seams. Glass shards visibly transform mid-air from hard fragments into soft-edged fabric seams. Brass fragments simultaneously align at hem, cuffs, and hood-drawstring points, transforming into fabric hardware details (small rivets, brass hem trim, brass drawstring caps).
  Frames 96–120 (1 s): hoodie fabric visibly WEAVES into place across the silhouette. Weaving pattern is organic — spine seam first, then radiating outward to shoulders → torso → sleeves → hood. By frame 120: hoodie ~85% complete. Pattern visibly composed of 5 texture layers:
    1. FRACTURED GLASS VEINS (subtle gold line-art in fabric weave).
    2. VINTAGE BRASS ETCHING (small geometric details at hem, cuffs, drawstring caps).
    3. SAND GRAIN TEXTURES (fine granular texture across fabric surface).
    4. COSMIC SPECKS (pinprick bone off-white points scattered across fabric).
    5. BLUEPRINT CRACK LINES (golden line-art pattern flowing across hoodie panels).

5–8 s (frames 120–192) — THE STILLNESS begin (first 72 frames of canonical 240-frame beat)
  Frames 120–168 (2 s): remaining fragments complete the hoodie. Final sand grains fill any texture gaps. Final glass shards complete the seam-line pattern. Final brass fragments settle at hardware points. By frame 168: hoodie is 100% complete.
  Frames 168–192 (1 s): DEAD-AIR HOLD begins. Silhouette in completed hoodie absolutely still. Vertical golden axis fully visible behind silhouette. Cosmic specks in environment hold their positions.

CLOSING FRAME (frame 192 — extract as handoff-hourglass-mobile-6.png):
- Portrait 1080×1920. Silhouette at center-frame X, Y=40% wearing complete hoodie, absolutely still.
- Hoodie fabric composed of 5 visible texture layers (all 5 must be present in the fabric):
  1. Fractured glass veins (subtle gold line-art in fabric weave).
  2. Vintage brass etching (small geometric details at hem, cuffs, drawstring caps).
  3. Sand grain textures (fine granular texture across fabric).
  4. Cosmic specks (bone off-white pinpricks scattered on fabric).
  5. Blueprint crack lines (golden line-art pattern flowing across panels).
- Vertical golden axis behind silhouette, top pixel to bottom pixel of frame, fully visible.
- ~50 cosmic specks in the environment holding position around the silhouette within middle 60% band.
- NO trace of hourglass, brass fragments in air, glass shards in air, or free-floating sand grains — all absorbed into the hoodie.
- Upper 20% and lower 20% show void black + axis only.
- Palette: void black + charcoal hoodie (dark base) with gold line-art details + brass hardware accents + capped bone off-white cosmic specks + gold axis.
- Camera absolutely locked.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-6.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-6.png
```
**Verify (CRITICAL):** Hoodie fully formed on silhouette. All 5 texture layers visible in fabric (glass veins + brass etching + sand grains + cosmic specks + blueprint lines). Vertical axis fully visible behind silhouette. Cosmic specks in environment stay within middle band. Camera locked. If any of the 5 texture layers is missing or fragments still visible in air, regenerate.

---

### Mobile Clip 7 — THE STILLNESS finish + poster frame (48 – 55 s)

**Mode:** Image-to-Video. Upload `handoff-hourglass-mobile-6.png`. Duration: 7 s. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 7 OF 7 (Broken Hourglass Mobile 9:16). Duration: 7 s, 24 fps, 168 frames. Image-to-Video generation. Ends on the mobile poster frame.
Camera: LOCKED-OFF. Silhouette absolutely motionless throughout the entire 7-second held stillness.
TONE: Reverent completion. Poster frame held for maximum contemplative weight.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Silhouette in complete hoodie at center-frame X, Y=40%, vertical golden axis top pixel to bottom pixel of frame, ~50 cosmic specks in environment within middle 60% band.

BEAT MAP:

0–7 s (frames 0–168) — THE STILLNESS finish (final 168 frames of canonical 240-frame beat)
  Frames 0–168: ABSOLUTELY NO MOTION. Silhouette in completed hoodie stands at center-frame X, Y=40%. Vertical golden axis behind silhouette extends top pixel to bottom pixel of frame. Cosmic specks in environment hold their positions with minimal (<0.5 px) drift within middle 60% band.
  The only "life" in the frame is the extremely subtle 0.3% monochrome film grain. Everything else is dead-static.
  This clip IS the mobile poster frame. Every single frame in this 7-second window looks essentially identical.

CLOSING FRAME (frame 168 — this IS the mobile poster frame, extract as story-hourglass-poster-mobile candidate):
- Portrait 1080×1920. Backlit human silhouette at center-frame X, Y=40% wearing complete hoodie.
- Hoodie fabric shows all 5 texture layers: fractured glass veins + vintage brass etching + sand grain textures + cosmic specks + blueprint crack lines.
- Vertical golden axis behind silhouette, top pixel to bottom pixel of frame, fully visible.
- ~50 cosmic specks in the environment around the silhouette within middle 60% band.
- No hourglass, no fragments, no motion.
- Upper 20% and lower 40% show void black + axis only (lower 40% has more clear space for DOM overlay text than upper 20%).
- Void black background.
- Palette: void black + charcoal hoodie + gold #D4A855 + capped bone off-white cosmic specks.
- Camera absolutely locked. Zero motion.

DEFINING LINE for this clip (rendered as DOM overlay in lower 40% quiet zone, DO NOT bake into video): 'Break the frame.' at ~2 s, held until frame 168.
SECOND CALLOUT (DOM overlay): 'Time was never infinite. You are.' at ~4 s, held until frame 168.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 7 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-hourglass-mobile-7.mp4 -vframes 1 -q:v 1 handoff-hourglass-mobile-7.png
```
This handoff-hourglass-mobile-7.png becomes the basis for `story-hourglass-poster-mobile.jpg` after the mobile merge (see §4).

---

### Mobile QA delta (in addition to §7 landscape QA)

- [ ] Every clip resolution is exactly **1080×1920** (portrait 1080p) — NOT 720×1280. Verify with `ffprobe -v error -select_streams v -show_entries stream=width,height -of csv=p=0 clip-hourglass-mobile-N.mp4`.
- [ ] Gold axis extends **top pixel to bottom pixel of frame** in every clip.
- [ ] Silhouette centered horizontally (X=540 ± 10 px) and at Y=768 ± 30 px (Y=40% of 1920) — verify pixel-identical position across ALL 7 clips (Concept 05 has zero silhouette movement).
- [ ] Hourglass in Clips 1–3 fits within Y=25–75% (middle 50% of frame vertically) — does NOT extend to top or bottom of frame.
- [ ] Fragment cloud in Clips 4–5 stays within middle 60% band (Y=384–1536). Upper 20% and lower 20% remain dark (only axis + void black).
- [ ] Cosmic specks in Clips 4–7 stay within middle 60% band (Y=384–1536). Zero cosmic specks in upper 20% or lower 20% zones.
- [ ] All 5 hoodie texture layers present in Clips 6–7: fractured glass veins + vintage brass etching + sand grain textures + cosmic specks + blueprint crack lines.
- [ ] Camera absolutely LOCKED-OFF for all 55 seconds — no drift, no shift, no zoom.
- [ ] Portrait-specific watermark coords for delogo in §4 merge: `x=530:y=1100:w=130:h=140` (verify by inspecting corner crops of `clip-hourglass-mobile-1.mp4`).

---

## 4. Post-generation ffmpeg merge (7 clips → `story-hourglass.mp4`)

Detect Veo watermark position first (usually bottom-right of clip 1):

```powershell
New-Item -ItemType Directory -Force -Path "temp-frames" | Out-Null
ffmpeg -y -i clip-hourglass-1.mp4 -vf "select='eq(n,60)+eq(n,150)',crop=300:300:1620:780" -vsync vfr "temp-frames\corner-%02d.png"
# For most Veo 3 landscape output: x=1110, y=570, w=100, h=100
```

Merge all 7 clips + delogo + enhance + scrub-optimize:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

ffmpeg -y `
  -i clip-hourglass-1.mp4 -i clip-hourglass-2.mp4 -i clip-hourglass-3.mp4 `
  -i clip-hourglass-4.mp4 -i clip-hourglass-5.mp4 -i clip-hourglass-6.mp4 `
  -i clip-hourglass-7.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a][5:v][5:a][6:v][6:a]concat=n=7:v=1:a=1[cat][aout];[cat]delogo=x=1110:y=570:w=100:h=100,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\story-hourglass.mp4

# Extract poster from the final held frame
ffmpeg -y -sseof -0.1 -i public\videos\story-hourglass.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\story-hourglass-poster.jpg
```

**If clips have no audio**, replace with `[0:v][1:v][2:v][3:v][4:v][5:v][6:v]concat=n=7:v=1:a=0[vout]` and drop the `-map "[aout]" -c:a aac ...` args.

---

## 5. Install into the site

Once assets are in `public/videos/`, add to [`src/data/storyConcepts.js`](../../src/data/storyConcepts.js) `'broken-hourglass'` block:

```js
'broken-hourglass': {
  title: 'Concept 05 — The Broken Hourglass',
  subtitle: 'Break the Frame',
  // ...existing fields...
  video: {
    src: '/videos/story-hourglass.mp4',
    poster: '/videos/story-hourglass-poster.jpg',
    label: 'Concept 05 film — the hourglass breaks and becomes the hoodie',
  },
}
```

Refresh `/story/broken-hourglass`.

---

## 6. Universal negative prompt (paste into "avoid" field on every generation)

```
text on screen, subtitles, letters visible in frame, on-screen typography, logos, watermarks, products (until beat 6), hoodies as flat garments, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo, digital sharpening,
NO explosive hourglass shatter, NO violent glass-break, NO sharp shards flying at velocity, NO starburst reflections, NO whip streaks, NO screen-shake, NO red or cyan anywhere, NO clear bright glass (bulbs are dark-tinted charcoal), NO reflective silvers on brass (antique matte only), NO camera motion of any kind, NO silhouette movement outside the three scripted motions (A/B/C)
```

---

## 7. QA checklist — Concept 05 continuity + canon compliance

**Camera lock check (critical for this concept):**
- [ ] Extract midframes from all 7 clips. The framing must be PIXEL-IDENTICAL across all 7 clips (same silhouette center-X, same field of view, same axis position). If the framing shifts by even 5 px between clips, the seam will be visible.

**Silhouette immobility check (critical for this concept):**
- [ ] Compare silhouette position at frame 0 of Clip 1 vs. frame N of every other clip — silhouette center-X and Y should be pixel-identical throughout all 55 seconds EXCEPT for three scripted motions: (A) head tilt ~8° at ~13–15 s, (B) right arm raise at ~15–17 s, (C) palm push at ~22–23 s. Outside those windows, zero silhouette movement.

**Seam checks (one per clip-to-clip boundary):**
- [ ] **Clip 1 → 2 join at 8 s:** Hourglass fully intact, sand falling oppressively slowly at ~1 px/frame with individual grains visible, upper bulb ~68% fill, lower bulb ~3% fill (thin dusting). Brass frame's inward-curve implication just barely visible.
- [ ] **Clip 2 → 3 join at 16 s:** Sand flowing slowly at ~1 px/frame with individual grains visible in the falling stream. Brass cage-frame obvious. Upper ~40% / lower ~35% fill.
- [ ] **Clip 3 → 4 join at 24 s:** Hourglass fully fractured but shape still recognizable. Fragments SUSPENDED in position (not exploded outward). Brass drifting outward at ~2 px/frame gently.
- [ ] **Clip 4 → 5 join at 32 s:** Fragment cloud spread across middle 65% of frame. ~35 cosmic specks visible in negative space. Silhouette mostly visible through gaps.
- [ ] **Clip 5 → 6 join at 40 s:** Fragments approaching silhouette from perimeter and organizing by type (sand → shoulders/torso, glass → seams, brass → hem/cuffs). NO hoodie yet.
- [ ] **Clip 6 → 7 join at 48 s:** Hoodie fully formed on silhouette. All 5 texture layers visible. Vertical golden axis fully visible behind silhouette. ~50 cosmic specks in environment.
- [ ] **Post-merge scrub test:** open the merged file in a browser tab, scrub across each seam mark — no flash, no color jump, no framing shift.

**Key moment containment (each moment fully inside one clip):**
- [ ] Hourglass shatter (Clip 3 frames 156–192): calm fracture with suspended fragments, no violence.
- [ ] Hoodie weave (Clip 6 frames 0–168): organic weaving spine-first outward, all 5 texture layers.

**Canonical alignment (from own_karma.md):**
- [ ] Duration is **55 s ± 1 s** (canonical timeline sums to 55s: 6+6+6+7+10+10+10).
- [ ] All 7 beat names match canon exactly: THE RELIC · THE CONTAINMENT · THE REALIZATION · THE BREAK · EXPANSION · REORGANIZATION · THE STILLNESS.
- [ ] Universal Rule: no hoodie visible in Clips 1, 2, 3, 4, 5. Hoodie forms only in Clip 6 from the fragments.
- [ ] Camera: LOCKED-OFF for the ENTIRE 55 seconds. Zero camera motion.
- [ ] Silhouette body position UNCHANGED throughout (zero silhouette movement across all 7 clips).

**Concept-specific (unique to Broken Hourglass):**
- [ ] Hourglass frame is antique brass (#8A6E3F), NOT gold or silver.
- [ ] Hourglass bulbs are dark-tinted charcoal glass (#0C0A0A, 30% transparency), NOT clear bright glass.
- [ ] Sand is warm ochre (#B08B5A), NOT white or bright.
- [ ] Sand flows DOWNWARD initially (normal gravity) then slows to near-halt (canonical realization moment).
- [ ] Hourglass shatter is CALM: fragments SUSPENDED in position, not exploded outward.
- [ ] Hoodie in final frame shows ALL 5 texture layers: fractured glass veins + vintage brass etching + sand grain textures + cosmic specks + blueprint crack lines.
- [ ] Cosmic specks appear in the environment during EXPANSION beat (~35 by end of Clip 4, ~50 by Clip 7).
- [ ] Hidden text: sample paused frames from Clip 3 (frames 120–140) — look for OWN KARMA arrangements in the crack patterns before they dissolve.

**Palette compliance:**
- [ ] No pure white anywhere (cosmic specks are capped bone off-white at Y-luma 0.86 max).
- [ ] No red or cyan anywhere (canon explicitly forbids).
- [ ] No reflective silvers on brass (antique matte only).
- [ ] Watermark completely removed via delogo.

**Deliverable format:**
- [ ] Encoded per §4 recipe.
- [ ] `story-hourglass.mp4` file size ≤ 22 MB (bump `-crf` to 27 if larger — 55s is longer than most story videos).
- [ ] `story-hourglass-poster.jpg` ≤ 220 KB.
- [ ] `ffprobe` reports 1920×1080, 24 fps, H.264 main profile.

**Scrub test:**
- [ ] Timeline scrubber back and forth — no stuttering.
- [ ] On `/story/broken-hourglass`, autoplay loops smoothly.

---

## 8. Cross-references

- [`_document/own_karma.md` §Concept 05](../own_karma.md) — canonical VFX blueprint
- [`_document/hero-video-prompt.md`](../hero-video-prompt.md) — main index
- [`_document/prompts/concept-04-destiny.md`](concept-04-destiny.md) — previous concept
- [`_document/prompts/concept-01-axis.md`](concept-01-axis.md) — hero concept (first)
- [`src/routes/StoryConcept.jsx`](../../src/routes/StoryConcept.jsx) — story page route
- [`src/hero/StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) — autoplay-loop component
- [`public/videos/README.md`](../../public/videos/README.md) — asset contract
