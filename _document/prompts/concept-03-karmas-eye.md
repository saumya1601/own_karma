# Concept 03 — Karma's Eye — The Inward Descent

**Duration:** 40 seconds (canonical, per own_karma.md timeline sum) · **Aspect:** 1920×1080 landscape only · **Route:** `/story/karmas-eye`
**Canon:** [`_document/own_karma.md` §Concept 03](../own_karma.md) · [`storyConcepts.js['karmas-eye']`](../../src/data/storyConcepts.js)
**Site component:** [`StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) (autoplay-loop)

---

## Canonical anchors

```
Visual reference context:  2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision
Specific style ref:        M.C. Escher's impossible-staircase lithographs × ancient stone architecture
Reference bar:             Ramayana — The Introduction (Sony / Hans Zimmer + AR Rahman)
                           + Varanasi to the World (T-Series / Rajamouli / MM Keeravaani)
Formula:                   Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability
Universal Rule:            No visible product until beat 5 TRANSFORMATION where the maze dissolves into hoodie fabric — the garment is made from the architecture broken through.
```

**Central philosophy** (from canon):
> The staircase appears to rise — but when the camera flips perspective, it is descending inward. The climb is not upward; the climb is inward.

---

## Style Lock cheat-sheet (prepend to every per-clip call)

```
STYLE LOCK (do not deviate):
- 24 fps native, no frame interpolation.
- Every motion uses cubic-bezier(0.65, 0, 0.35, 1) easing — no linear motion.
- Last 6 frames of each clip: hold the settled state, zero motion (dead-air pause), UNLESS the clip explicitly hands off mid-motion for continuity.
- Human silhouette: fully clothed, draped in a dark formless gown, backlit, rim-lit gold at shoulders fading to black at feet, 7-head-tall, arms at sides, feet touching, absolutely motionless. Center-frame, Y=40% from top.
- Axis: subtle vertical golden thread down the silhouette's spine (2 px core + 4 px glow, #D4A855) — softer than Concept 01/02's beam because the Eye is the visual focus here. The axis is the axis around which the maze rotates.
- Palette: void black + desert warm brown #3E2F1A (deep) to #8A6B3E (highlight), all LOW saturation + gold #D4A855 for the Eye, axis, hidden text, staircase edge highlights. No greens, no blues, no reds, no pure whites.
- Grade: ARRI Log C → Rec.709 film curve, 3200K + strong magenta shift (desert light warmth), 0.3% monochrome film grain. Slight distress texture (ancient stone feel) — soft edge crumble, NOT digital noise.
- No text on screen, no logos, no products (until beat 5 hoodie emerges), no faces, no lens flare, no bloom, no chromatic aberration.
- The Eye is minimal, geometric, NOT a literal eyeball — concentric golden lines suggesting an iris outline. Calm and mathematical.
```

---

## 1. Master prompt (single-shot 40 s generators — Sora, Veo 3 Pro tier)

Use this only if your tool can generate a full 40-second clip in one call. Otherwise skip to §2 for the seam-safe 5-clip split.

```
CONCEPT 03: KARMA'S EYE — THE INWARD DESCENT. Duration: 40 seconds, 24 fps native, 1920×1080 landscape.
Total 960 frames. Every motion cubic-bezier(0.65, 0, 0.35, 1). Story canon: own_karma.md Concept 03.
Philosophy: "The staircase is not leading upward. It is folding inward."
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision.
Specific style ref: M.C. Escher's impossible-staircase lithographs × ancient stone architecture.
Formula: Axis · Blueprint · Realms · Hidden Text · Stillness · Inevitability.
Universal Rule: no visible product until beat 5 TRANSFORMATION where the maze dissolves into hoodie fabric.

TEXT CALLOUTS (rendered as DOM overlays post-generation, DO NOT bake into video):
  Beat 1 (0–5 s): 'Every journey begins in illusion.'

THE CONSTANT: Single backlit human silhouette (fully clothed, draped in a dark formless gown, 7-head-tall canonical, gender-neutral, feet touching, arms at sides, absolutely motionless) at center-frame Y=40%. Vertical golden axis on spine (subtle — this concept features the Eye, not the axis). Environment reshapes but the human does not move.

PALETTE: void black #000000 base, desert warm brown #3E2F1A to #8A6B3E (low-sat, all warm) for sand/stone/pyramids, gold #D4A855 for the Eye + axis + staircase edge highlights + hidden text. No greens, no blues, no reds, no pure whites.

GRADE: ARRI Log C → Rec.709, 3200K + strong magenta shift (desert warmth), 0.3% monochrome film grain, slight ancient-stone distress texture, no lens flare, no bloom.

CANONICAL BEAT MAP (per own_karma.md Concept 03):

0–5 s (frames 0–120) — THE DESERT
  Wide cinematic shot. Endless desert stretches to horizon. Heat distortion (subtle 2–3 px sine wave in middle third). Fractured pyramids in distance — unfinished monuments, blocky geometric ruins missing tops, NOT Egyptian cliché. Single fully clothed backlit human silhouette (draped in a dark formless gown) at center-frame Y=40%. Wind only conveyed via slow particulate drift near the ground. No other motion.

5–12 s (frames 120–288) — THE MAZE REVEALS
  Frames 120–150: sand around the human's feet begins shifting. Frames 150–200: geometric lines emerge from beneath the sand — golden line-art edges appearing along what will become staircase treads. Frames 200–260: ground morphs into impossible staircase maze around the silhouette. Sand cascades down stair edges. Pyramids in the background become connected by staircase bridges. Motion: architectural, precise, ancient — not fantasy. Frames 260–288: human takes NO steps (silhouette stays still even as ground reshapes).

12–20 s (frames 288–480) — THE INFINITE ASCENT
  Camera slowly rotates 30° clockwise over the entire 8-second beat (~3.75°/second). As it rotates:
  Frames 288–360: staircase maze forms into a clear spiral pattern radiating outward from a central point.
  Frames 360–420: at the spiral's center, a faint glowing minimalist Eye reveals itself — concentric golden lines (NOT a literal eyeball, purely geometric iris outline). The Eye does NOT move; the maze rotates around it.
  Frames 420–480: as the rotation completes, the optical illusion locks — the staircase that appeared to ASCEND upward is now visibly DESCENDING inward toward the Eye at center.

20–30 s (frames 480–720) — SCALE BREAK
  Camera pulls back at slow-but-continuous ease-out over the entire 10 seconds (biggest sustained motion in this film). As camera recedes:
  Frames 480–540: human silhouette becomes progressively smaller in the frame. Maze appears to grow enormous.
  Frames 540–660: continued pull-back. Human is now microscopic at center. Maze fills the frame.
  Frames 660–720: **THE BIG EYE REVEAL** — the entire desert maze is revealed to exist inside the outline of a huge geometric Eye (still line-art, not literal). The Eye that was at the spiral's center is now the OUTER boundary of the whole shot.

30–40 s (frames 720–960) — TRANSFORMATION
  Frames 720–780: the huge Eye + maze inside it begin dissolving into golden blueprint lines. Sand grains transform mid-air into shimmering fabric threads.
  Frames 780–840: threads weave into hoodie fabric that wraps around the (now standard-size again) human silhouette. Staircase pattern forms on the fabric. The Eye locks into the hoodie design at chest level as minimal geometric line-art.
  Frames 840–900: hoodie fully formed. Human stands wearing it — still, no pose.
  Frames 900–960: DEAD-AIR HOLD. Final tableau, held for the last 2.5 s. This is the poster frame.

CAMERA: static for beat 1. Slow 30° rotation over beat 3. Sustained rapid pull-back over beat 4 (biggest camera move). Locked for beat 5.

HIDDEN DETAIL: in the staircase maze architecture, when paused, the stair edges spell OWN KARMA in a spiral pattern around the Eye. Discoverable, not obvious.

HOODIE INTEGRATION (beat 5 TRANSFORMATION — canonical three levels of visual depth):
- Distance view: garment reads as a maze.
- Close-up view: garment reads as a spiral staircase.
- In motion: subtle light shifts across the lines feel alive.
- Texture: architectural, not psychedelic. Desert-toned with subtle gold highlights. Slightly distressed like ancient stone.
- The Eye: minimal, geometric, NOT a literal eyeball. Calm and mathematical.

NEGATIVE: see §6.

FORMAT: MP4 H.264, 1920×1080, 24 fps native, ≤ 40 s. Audio optional.
```

---

## 2. Veo 3 5-clip split (canonical, seam-safe — RECOMMENDED)

**Why 5 clips × 8 s:**

1. **Veo 3 free/standard tier caps at 8 s per generation** — 8 s is the largest safe generation size for reliable output.
2. **The camera rotation in THE INFINITE ASCENT (beat 3) is broken into two halves** — first half (rotation begins + spiral forms + first Eye appears) in Clip 2, second half (rotation completes + illusion locks: staircase descends inward) in Clip 3. The AI is instructed to maintain the SAME rotation rate across both clips using the "SAME ROTATION RATE AS CLIP 2" language in Clip 3's opening frame.
3. **The BIG EYE REVEAL in SCALE BREAK (beat 4, frames 660–720) MUST be contained in one clip** — this is the film's payoff moment, cannot straddle a boundary. In this split, the full reveal happens inside Clip 4.
4. **The hoodie emergence in TRANSFORMATION (beat 5) MUST be contained in one clip** — same reason as Concept 02: fabric weaving cannot restart mid-progress. In this split, the whole hoodie formation happens inside Clip 5.

### 2.1 Clip map

| Clip | Time (s) | Frames | Canonical beats covered | Notable content | Rapid motion? |
| :---: | :---: | :---: | :--- | :--- | :---: |
| **1** | 0.00–8.00 | 0–192 | THE DESERT (whole) + THE MAZE REVEALS first 72 frames (3 s) | Desert + pyramids + silhouette + first sand shift + emerging geometric lines | no |
| **2** | 8.00–16.00 | 192–384 | THE MAZE REVEALS finish (4 s) + THE INFINITE ASCENT first 96 frames (4 s) | Full staircase maze + camera rotation begins (15° of 30° total) + spiral forms + FIRST EYE appears | no (slow rotation) |
| **3** | 16.00–24.00 | 384–576 | THE INFINITE ASCENT finish (4 s) + SCALE BREAK first 96 frames (4 s) | Camera rotation completes (final 15°) + illusion locks (staircase descends inward) + camera begins pulling back | no (sustained ease-out) |
| **4** | 24.00–32.00 | 576–768 | SCALE BREAK finish (6 s) + TRANSFORMATION first 48 frames (2 s) | **BIG EYE REVEAL fully contained** + maze begins dissolving into blueprint lines | **yes (contained)** |
| **5** | 32.00–40.00 | 768–960 | TRANSFORMATION finish (8 s) | Hoodie weaves from threads + final held pose (poster) | no |

### 2.2 Universal per-clip workflow

1. Prepend the Style Lock cheat-sheet above to every clip's prompt.
2. In Flow / Veo 3: aspect = **16:9**, duration = **8 s** (safe under the cap), model = **Veo 3** (not Fast — cinematic quality matters).
3. **Clip 1 only:** Text-to-Video mode (no reference image).
4. **Clips 2–5:** Image-to-Video / Frames-to-Video mode. Upload `handoff-eye-{N-1}.png` as start frame. The prompt tells the AI to MATCH THE UPLOADED REFERENCE IMAGE EXACTLY at frame 0.
5. After each generation, extract that clip's handoff frame:
   ```powershell
   ffmpeg -sseof -0.05 -i clip-eye-N.mp4 -vframes 1 -q:v 1 handoff-eye-N.png
   ```
6. **Visually verify** the extracted PNG matches the "CLOSING FRAME" description at the end of each clip's prompt block below before generating the next clip.

---

### 2.3 Clip 1 — THE DESERT + partial MAZE REVEALS (0.00–8.00 s)

**Mode:** Text-to-Video (no reference image). Prepend the Style Lock cheat-sheet. Then submit:

```
CLIP 1 OF 5 (Karma's Eye). Duration: 8.0 s, 24 fps, 192 frames. Text-to-Video generation.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision + M.C. Escher's impossible-staircase lithographs × ancient stone architecture.

OPENING FRAME (frame 0): Wide cinematic desert shot. Endless desert stretching to horizon, low sun angle from off-camera (warm side-lighting). Fractured pyramids in mid-distance — blocky geometric ruins with tops missing, NOT Egyptian cliché. Deep amber sky at horizon fading to void black at the top of the frame. NO human silhouette yet, NO axis, NO maze lines.

BEAT MAP:

0.0–5.0 s (frames 0–120) — THE DESERT (whole canonical beat)
  Frame 24 (1 s in): a tiny backlit human silhouette (fully clothed, draped in a dark formless gown) resolves at center-frame Y=40% via 12-frame opacity ramp (frames 24–36). Faint gold rim-light at shoulders (20% opacity). Vertical golden axis (subtle: 2 px core + 4 px glow) draws softly down the silhouette's spine over frames 36–60 — softer than the hero's axis, but visible.
  Frames 60–120: heat distortion in the middle third of frame (subtle 2–3 px sine wave). Wind conveyed by slow particulate drift near the ground (single grains of sand catching light). Silhouette absolutely motionless. Pyramids in background utterly still.

5.0–8.0 s (frames 120–192) — THE MAZE REVEALS (first 72 frames of canonical 168-frame beat)
  Frames 120–150 (1.25 s): sand around the human's feet begins shifting — individual grains rise ~1–2 px per frame in a slow radial pattern extending ~30% of frame width outward from the silhouette.
  Frames 150–192 (1.75 s): first geometric golden line-art edges emerge from beneath the shifting sand — thin golden lines defining what will become staircase treads. By frame 192: partial line-work visible around the silhouette (~20% of the eventual maze pattern), lines are only edges (no full staircase yet), sand continues cascading down these emerging edges.

Clip 1 ends MID-MOTION (sand still cascading, lines still emerging) — Clip 2 continues the reveal.

CLOSING FRAME (frame 192 — extract as handoff-eye-1.png, verify visually before Clip 2):
- Wide desert shot, low warm side-lighting, deep amber horizon fading to void black.
- Fractured pyramids in mid-distance (blocky geometric ruins, tops missing).
- Backlit human silhouette (fully clothed, draped in a dark formless gown) at center-frame Y=40% with faint gold rim-light at shoulders and subtle gold axis on spine.
- ~20% of golden geometric line-art visible around the silhouette's feet — thin lines suggesting staircase edges, still emerging from the sand.
- Sand grains cascading in slow motion along the emerging line edges.
- No full staircase yet, no Eye yet, no rotation.
- Palette: void black + desert warm browns (#3E2F1A to #8A6B3E) + gold #D4A855 at axis/lines/rim-light.

TEXT CALLOUT for this clip (DOM overlay post-render, DO NOT bake): 'Every journey begins in illusion.' at ~2 s.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-1.mp4 -vframes 1 -q:v 1 handoff-eye-1.png
```
**Verify:** Desert + pyramids + silhouette + ~20% of maze lines emerging around feet. NO full staircase yet, NO Eye yet, NO camera rotation. If maze is fully formed already or camera has moved, regenerate.

---

### 2.4 Clip 2 — MAZE REVEALS finish + INFINITE ASCENT begin (8.00–16.00 s)

**Mode:** Image-to-Video. Upload `handoff-eye-1.png` as start frame. Prepend Style Lock. Then submit:

```
CLIP 2 OF 5 (Karma's Eye). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Wide desert shot with fractured pyramids in mid-distance, backlit human silhouette (fully clothed, draped in a dark formless gown) at center-frame Y=40% with faint gold rim-light and subtle gold spine axis, ~20% of golden staircase line-art emerging from sand around the silhouette's feet. Camera is STATIC (no rotation started yet).

BEAT MAP:

0.0–4.0 s (frames 0–96) — THE MAZE REVEALS (final 96 frames of canonical beat)
  Frames 0–48 (2 s): remaining line-art draws in — full staircase maze completes around the silhouette. Each staircase tread appears sequentially over 4–6 frames. By frame 48: staircase maze occupies the entire ground plane extending to the pyramids in the background.
  Frames 48–72 (1 s): pyramids in the background become connected by impossible staircase bridges — golden line-art extending between pyramid ruins in mathematical patterns.
  Frames 72–96 (1 s): sand cascades continue down all stair edges (subtle motion, no larger shift). Human silhouette absolutely still throughout.

4.0–8.0 s (frames 96–192) — THE INFINITE ASCENT (first 96 frames of canonical 192-frame beat)
  Frames 96–192 (4 s): camera begins slow clockwise rotation at ~3.75°/second (rotates 15° total across these 96 frames). SIMULTANEOUSLY:
    Frames 96–144: staircase maze pattern re-arranges as it rotates, forming into a clear spiral pattern radiating outward from a central point directly beneath the silhouette. Individual stair treads visibly reorient into spiral arms.
    Frames 144–180: at the spiral's center (right below the silhouette's feet, visible when camera angle permits), a faint glowing minimalist Eye reveals itself — concentric golden lines suggesting an iris outline, NOT a literal eyeball. Purely geometric. First Eye reveal.
    Frames 180–192: rotation continues at same 3.75°/second rate. Eye holds steady at spiral center; the maze rotates AROUND the Eye.

Clip 2 ends MID-ROTATION at 15° — Clip 3 must continue at the SAME rate (3.75°/second) for the next 15° of rotation.

CLOSING FRAME (frame 192 — extract as handoff-eye-2.png, verify visually before Clip 3):
- Camera rotated 15° clockwise from original position (framing angle visibly shifted).
- Full staircase maze covering the entire ground plane, extending to pyramids connected by staircase bridges in the background.
- Maze is arranged in a clear SPIRAL pattern radiating from a central point beneath the silhouette.
- At spiral's center: faint minimalist golden Eye (concentric geometric line-art, NOT eyeball), visible at ~40% opacity.
- Backlit human silhouette (fully clothed, draped in a dark formless gown) still absolutely motionless at center-frame Y=40%.
- Sand grains cascading down stair edges throughout.
- Palette: void black + desert warm browns + gold #D4A855 at Eye/axis/staircase edges/rim-light.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-2.mp4 -vframes 1 -q:v 1 handoff-eye-2.png
```
**Verify (critical):** Camera clearly rotated 15° (framing visibly shifted), spiral maze pattern formed, small golden Eye visible at spiral center. If rotation didn't happen or Eye didn't appear, regenerate. Note the rotation rate for Clip 3 to match.

---

### 2.5 Clip 3 — INFINITE ASCENT finish + SCALE BREAK begin (16.00–24.00 s)

**Mode:** Image-to-Video. Upload `handoff-eye-2.png`. Prepend Style Lock. Then submit:

```
CLIP 3 OF 5 (Karma's Eye). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Camera at 15°-rotated position (from original), full staircase maze in spiral pattern covering ground plane, small golden Eye at spiral center (concentric geometric line-art, ~40% opacity), backlit human silhouette (fully clothed, draped in a dark formless gown) at center-frame Y=40% absolutely motionless, sand cascading down stair edges.

BEAT MAP:

0.0–4.0 s (frames 0–96) — THE INFINITE ASCENT (final 96 frames of canonical beat)
  Frames 0–96: camera CONTINUES the same clockwise rotation at ~3.75°/second (rotates another 15° for total 30° from film start). CRITICAL: match Clip 2's rotation rate exactly — no acceleration, no deceleration.
    Frames 0–48: rotation continues. Eye brightness gradually increases from 40% to 70% opacity. Spiral arms of the staircase visibly reorient as the camera angle shifts.
    Frames 48–96: at frame 72 (approximately 3 s into this clip), the OPTICAL ILLUSION LOCKS — the staircase that appeared to ASCEND is now visibly DESCENDING inward toward the Eye. Sand grains that were cascading DOWN stair edges are now revealed to be flowing INWARD toward the Eye. The reveal is a perceptual shift only — no visual "click" or flash, just the natural reorientation as the camera rotation completes at frame 96. Eye now at 70% opacity, clearly visible at spiral center.

4.0–8.0 s (frames 96–192) — SCALE BREAK (first 96 frames of canonical 240-frame beat)
  Frames 96–192: camera begins pulling back along the Z-axis using cubic ease-out. This is the SUSTAINED biggest camera move in the film. Camera velocity is slow at frame 96, accelerates through frame 144, then begins to level off toward frame 192.
    Frames 96–120: subtle pull-back. Human silhouette begins to appear slightly smaller. Maze visibly expands relative to frame edges.
    Frames 120–192: pull-back continues at increasing rate. By frame 192: silhouette has shrunk to ~65% of its original frame-size. The maze now fills more of the frame area. Camera has NOT yet revealed the big Eye outline containing everything — that reveal is in Clip 4.

Clip 3 ends MID-PULL-BACK (camera still moving) — Clip 4 continues the pull-back at the same trajectory.

CLOSING FRAME (frame 192 — extract as handoff-eye-3.png):
- Camera rotated 30° clockwise from film start (full rotation complete). Camera position pulled back ~30% along Z-axis from start of Clip 3.
- Full staircase maze visible in spiral pattern, but now optically descending inward (subtle perceptual state — the maze looks like an INWARD spiral, not upward).
- Small golden Eye at spiral center, at 70% opacity.
- Backlit human silhouette (fully clothed, draped in a dark formless gown) shrunk to ~65% of original frame-size, still at center-frame Y=40%, absolutely motionless.
- Sand grains flowing INWARD toward the Eye (not falling down as they were in Clips 1–2).
- Palette: void black + desert warm browns + gold at Eye/axis/staircase edges.
- NO big Eye outline visible yet (that reveal is in Clip 4). NO transformation to fabric yet.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-3.mp4 -vframes 1 -q:v 1 handoff-eye-3.png
```
**Verify:** Camera has rotated 30° total AND pulled back ~30%. Silhouette visibly smaller. Sand flows inward toward Eye (not outward). Eye visible at spiral center. NO big Eye outline containing everything yet.

---

### 2.6 Clip 4 — SCALE BREAK finish + TRANSFORMATION begin (24.00–32.00 s) — BIG EYE REVEAL contained

**Mode:** Image-to-Video. Upload `handoff-eye-3.png`. Prepend Style Lock. Then submit:

```
CLIP 4 OF 5 (Karma's Eye). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation.
THIS CLIP CONTAINS THE BIG EYE REVEAL — the film's payoff moment. It must be fully contained here.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Camera at 30°-rotated + 30%-pulled-back position, staircase maze in inward-spiraling pattern, small golden Eye at spiral center (70% opacity), silhouette at ~65% of original frame-size at center-frame Y=40%, sand grains flowing inward.

BEAT MAP:

0.0–6.0 s (frames 0–144) — SCALE BREAK (final 144 frames of canonical beat) — sustained pull-back culminating in the BIG EYE REVEAL
  Frames 0–72 (3 s): camera continues Z-axis pull-back on cubic ease-out. Silhouette progressively shrinks — by frame 72 it's ~30% of original frame-size. Maze visibly grows relative to frame. Small Eye at spiral center reaches 100% opacity.
  Frames 72–120 (2 s): as the camera continues receding, the OUTLINE of a much larger Eye begins to emerge at the frame edges — the entire desert maze is being revealed to exist INSIDE the outline of this huge geometric Eye. The small Eye at spiral center and the huge outer Eye are visible simultaneously (Eye-within-Eye). This is the BIG REVEAL. By frame 120: the huge outer Eye outline is ~70% complete (visible at top, bottom, and one side).
  Frames 120–144 (1 s): huge Eye outline completes — the entire maze + silhouette + small central Eye are now all visibly contained WITHIN the outline of a huge geometric Eye. Camera pull-back decelerates and stops by frame 144.

6.0–8.0 s (frames 144–192) — TRANSFORMATION (first 48 frames of canonical 240-frame beat)
  Frames 144–168 (1 s): huge Eye + maze inside it begin dissolving into golden blueprint lines. Individual staircase treads visibly detach from the maze structure and drift as golden line segments.
  Frames 168–192 (1 s): sand grains transform mid-air into shimmering golden fabric threads. Blueprint lines drift toward the silhouette. First few threads begin gathering around the silhouette's torso — no hoodie shape yet, just individual threads approaching.

Clip 4 ends with transformation IN PROGRESS — Clip 5 continues the hoodie formation.

CLOSING FRAME (frame 192 — extract as handoff-eye-4.png):
- Camera fully STOPPED, no motion.
- The entire frame is now inside the outline of a huge geometric Eye (line-art, NOT literal eyeball — concentric golden lines suggesting iris).
- Inside the huge Eye: the small central Eye (still visible), the (now-dissolving) staircase maze, and the microscopic human silhouette at center-frame Y=40% (~30% of original frame-size).
- The maze is ~40% dissolved into floating golden blueprint line segments.
- Sand grains have transformed into ~30% of them being golden fabric threads drifting toward the silhouette.
- No hoodie shape yet — just threads gathering.
- Palette: void black outside the huge Eye outline + desert warm browns (fading) + gold #D4A855 (increasing dominance) for the Eye, blueprint lines, threads, small central Eye, axis.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-4.mp4 -vframes 1 -q:v 1 handoff-eye-4.png
```
**Verify (critical):** The huge Eye outline is FULLY VISIBLE containing the whole scene. Small central Eye also visible. Silhouette microscopic. Maze ~40% dissolved. Threads starting to gather. If big Eye reveal is incomplete or camera is still moving, regenerate.

---

### 2.7 Clip 5 — TRANSFORMATION finish + poster frame (32.00–40.00 s)

**Mode:** Image-to-Video. Upload `handoff-eye-4.png`. Prepend Style Lock. Then submit:

```
CLIP 5 OF 5 (Karma's Eye). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation. Ends on the poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Frame contained inside outline of a huge geometric Eye, small central Eye visible, microscopic human silhouette at center-frame Y=40%, maze ~40% dissolved into blueprint line segments, ~30% of grains transformed into golden fabric threads drifting toward silhouette.

BEAT MAP:

0.0–5.0 s (frames 0–120) — TRANSFORMATION (final 192 frames of canonical 240-frame beat, distributed across 120 frames here + 72 in prior clip)
  Frames 0–48 (2 s): remaining maze fully dissolves into blueprint lines. All sand grains complete transformation into fabric threads. Silhouette begins scaling back UP toward standard size via cubic ease-in-out over 48 frames — camera does NOT move; the illusion is that the silhouette "returns to normal scale" within the frame (a compositional/scale correction, not a camera move). By frame 48: silhouette at ~80% of original film-start size.
  Frames 48–96 (2 s): fabric threads begin weaving into a hoodie shape around the silhouette. Weaving is organic — threads flow from the axis outward. Staircase pattern visibly forms ON the fabric as it weaves. The small central Eye locks into the hoodie design at chest level as minimal geometric line-art.
  Frames 96–120 (1 s): hoodie completes. Silhouette now fully at ~100% original size, wearing the completed hoodie. Fabric shows: distance view = maze pattern, close-up detail = spiral staircase pattern. Eye clearly visible at chest.

5.0–8.0 s (frames 120–192) — DEAD-AIR HOLD (poster frame)
  Frames 120–192 (3 s): absolutely no motion. Silhouette in completed hoodie stands at center-frame Y=40%, absolutely still. Huge Eye outline still contains the scene as background/frame element. Small central Eye now integrated into hoodie chest. This final frame IS the poster.jpg export.

CLOSING FRAME (frame 192 — this IS the poster frame, extract as story-karmas-eye-poster candidate):
- Backlit human silhouette at center-frame Y=40%, at full original scale, wearing complete hoodie.
- Hoodie: desert-toned fabric with subtle gold highlights, staircase pattern visible (spiral pattern close-up, maze pattern from distance), architectural texture like ancient stone, slightly distressed.
- Eye at chest level: minimal geometric line-art (concentric golden lines forming iris outline, NOT literal eyeball).
- Huge outer Eye outline still visible as a background/frame element containing the scene.
- Small central Eye visible faintly in the void behind the silhouette.
- Palette: void black + desert warm browns + gold #D4A855.
- Camera absolutely locked. Zero motion.

FORMAT: 1920×1080, 16:9, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-5.mp4 -vframes 1 -q:v 1 handoff-eye-5.png
```
This handoff-eye-5.png becomes the basis for `story-karmas-eye-poster.jpg` after the merge (§4).

---

## 3. Mobile portrait variant (1080×1920, 5 clips × 8 s)

**Same 5-clip beat distribution as landscape**, but portrait 9:16. Set Flow / Veo 3 aspect to **9:16 (Portrait)** before each generation. Target resolution **1080×1920** (portrait 1080p — do NOT generate at 720×1280).

### Portrait framing rules (apply to every mobile clip)

- **Vertical golden axis extends from top pixel to bottom pixel of the frame** (not just silhouette extents).
- Silhouette centered horizontally (X=540 ± 10 px) and at **Y=40% from top** (~Y=768 px).
- **Upper 20% (Y=0–384)** kept visually quiet — sky / horizon area only.
- **Lower 40% (Y=1152–1920)** kept visually quiet for DOM overlay text — desert ground / staircase base fades to ≤50% detail density in this zone in Clips 1–3.
- Content density lives in the **middle 40% band (Y=384–1152)**. The Eye reveals, the silhouette, and the maze spiral all live here.
- Concept-03 specific: the huge Eye outline in Clip 4 must be **vertically oriented** (vesica-piscis / almond shape taller than wide) to fit the portrait aspect naturally — NOT a wide-oriented eye.

---

### Mobile Clip 1 — THE DESERT + partial MAZE REVEALS (0.00–8.00 s)

**Mode:** Text-to-Video (no reference image). Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 1 OF 5 (Karma's Eye Mobile 9:16). Duration: 8.0 s, 24 fps, 192 frames. Text-to-Video generation.
Visual reference: 2001: A Space Odyssey × Interstellar × Vedic Cosmology × Architectural Precision + M.C. Escher × ancient stone architecture.

OPENING FRAME (frame 0): Portrait 1080×1920 desert composition. Endless desert stretching to a horizon line positioned at Y=35% from top of frame (upper edge of the middle band). Low sun angle from off-camera left, warm side-lighting. Fractured pyramids in mid-distance — blocky geometric ruins with tops missing, positioned within the middle band (Y=25%–50%), NOT Egyptian cliché. Deep amber sky in upper 20% (Y=0–384) fading toward void black at the very top. Desert ground fills lower 60% of frame, warm brown gradient #3E2F1A to #8A6B3E. NO human silhouette yet, NO axis, NO maze lines. Camera absolutely locked.

BEAT MAP:

0.0–5.0 s (frames 0–120) — THE DESERT (whole canonical beat)
  Frame 24 (1 s in): a tiny backlit human silhouette resolves at center-frame X, Y=40% from top via 12-frame opacity ramp (frames 24–36). Faint gold rim-light at shoulders (20% opacity). Vertical golden axis (subtle: 2 px core + 4 px glow) draws softly along the silhouette's spine over frames 36–60 — in portrait the axis MUST extend from top pixel (Y=0) to bottom pixel (Y=1919) of the frame, not just silhouette extents.
  Frames 60–120: heat distortion in the middle band (subtle 2–3 px sine wave, contained within Y=384–1152). Wind conveyed by slow particulate drift near the ground (single grains of sand catching light) in the lower part of the middle band. Silhouette absolutely motionless. Pyramids in background utterly still.

5.0–8.0 s (frames 120–192) — THE MAZE REVEALS (first 72 frames of canonical 168-frame beat)
  Frames 120–150 (1.25 s): sand around the human's feet begins shifting — individual grains rise ~1–2 px per frame in a slow radial pattern extending ~30% of frame width outward from the silhouette. Radial pattern stays contained within the middle band vertically (does NOT extend into the lower 40% quiet zone yet).
  Frames 150–192 (1.75 s): first geometric golden line-art edges emerge from beneath the shifting sand — thin golden lines defining what will become staircase treads. By frame 192: partial line-work visible around the silhouette (~20% of the eventual maze pattern), lines are only edges (no full staircase yet), sand continues cascading down these emerging edges. Lines stay within the middle band.

Clip 1 ends MID-MOTION — Clip 2 continues the reveal.

CLOSING FRAME (frame 192 — extract as handoff-eye-mobile-1.png, verify visually before Clip 2):
- Portrait 1080×1920 desert composition with horizon at Y=35%, low warm side-lighting, deep amber upper 20% fading toward void black at top.
- Fractured pyramids in mid-distance (within middle band Y=25–50%).
- Backlit human silhouette at center-frame X (X=540 ± 10 px), Y=40% from top (~Y=768), with faint gold rim-light at shoulders and subtle gold axis extending from top pixel to bottom pixel of frame along spine.
- ~20% of golden geometric line-art visible around the silhouette's feet — thin lines suggesting staircase edges, within middle band only.
- Sand grains cascading in slow motion along the emerging line edges.
- Lower 40% (Y=1152–1920): mostly quiet desert ground, minimal detail — kept clear for DOM overlay text.
- Palette: void black + desert warm browns #3E2F1A to #8A6B3E + gold #D4A855 at axis/lines/rim-light.

TEXT CALLOUT for this clip (DOM overlay in lower 40% quiet zone, do NOT bake): 'Every journey begins in illusion.' at ~2 s.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-mobile-1.mp4 -vframes 1 -q:v 1 handoff-eye-mobile-1.png
```
**Verify:** Horizon at Y=35% (not at frame center). Silhouette at Y=40%. Axis extends full top-to-bottom of frame. Lower 40% stays quiet. If horizon is centered vertically (landscape composition), regenerate.

---

### Mobile Clip 2 — MAZE REVEALS finish + INFINITE ASCENT begin (8.00–16.00 s)

**Mode:** Image-to-Video. Upload `handoff-eye-mobile-1.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 2 OF 5 (Karma's Eye Mobile 9:16). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Desert composition with horizon at Y=35%, fractured pyramids in mid-distance within middle band, backlit human silhouette at center-frame X, Y=40% with faint gold rim-light and gold spine axis top-to-bottom of frame, ~20% of golden staircase line-art emerging from sand around the silhouette's feet. Camera is STATIC (no rotation yet).

BEAT MAP:

0.0–4.0 s (frames 0–96) — THE MAZE REVEALS (final 96 frames of canonical beat)
  Frames 0–48 (2 s): remaining line-art draws in — full staircase maze completes across the ground plane visible in the middle band and part of the lower zone. Each staircase tread appears sequentially over 4–6 frames. By frame 48: staircase maze occupies the ground plane extending to the pyramids. In portrait, the maze extends into the lower 40% zone but at REDUCED detail density (~50% opacity/line density) so DOM overlay text remains readable.
  Frames 48–72 (1 s): pyramids in the background become connected by impossible staircase bridges — golden line-art extending between pyramid ruins in mathematical patterns. Bridges contained within the middle band.
  Frames 72–96 (1 s): sand cascades continue down all stair edges. Silhouette absolutely still.

4.0–8.0 s (frames 96–192) — THE INFINITE ASCENT (first 96 frames of canonical 192-frame beat)
  Frames 96–192 (4 s): camera begins slow clockwise rotation at ~3.75°/second (rotates 15° total across these 96 frames). Rotation is around the vertical axis of the world — the composition in-frame appears to spin as if the camera is orbiting the silhouette. SIMULTANEOUSLY:
    Frames 96–144: staircase maze pattern re-arranges as it rotates, forming into a clear spiral pattern radiating outward from a central point directly beneath the silhouette. Individual stair treads visibly reorient into spiral arms.
    Frames 144–180: at the spiral's center (right below the silhouette's feet, visible when camera angle permits at ~Y=55%), a faint glowing minimalist Eye reveals itself — concentric golden lines suggesting an iris outline, NOT a literal eyeball. Purely geometric. First Eye reveal.
    Frames 180–192: rotation continues at 3.75°/second. Eye at spiral center; the maze rotates AROUND the Eye.

Clip 2 ends MID-ROTATION at 15° — Clip 3 must continue at the SAME rate (3.75°/second).

CLOSING FRAME (frame 192 — extract as handoff-eye-mobile-2.png, verify visually before Clip 3):
- Portrait 1080×1920. Camera rotated 15° clockwise from film start (framing angle visibly shifted).
- Full staircase maze covering the ground plane in middle band, extending to pyramids connected by staircase bridges. Maze in lower 40% zone at ~50% opacity/density.
- Maze arranged in a clear SPIRAL pattern radiating from a central point beneath the silhouette (Y=55%).
- At spiral's center: faint minimalist golden Eye (concentric geometric line-art, NOT eyeball), visible at ~40% opacity.
- Backlit human silhouette still absolutely motionless at center-frame X, Y=40% from top.
- Gold axis extends top pixel to bottom pixel of frame along spine.
- Sand grains cascading down stair edges throughout.
- Palette: void black + desert warm browns + gold #D4A855.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-mobile-2.mp4 -vframes 1 -q:v 1 handoff-eye-mobile-2.png
```
**Verify (critical):** Camera clearly rotated 15°. Spiral maze pattern formed. Small golden Eye visible at spiral center (Y≈55%). Maze in lower 40% zone stays at ≤50% density. If rotation didn't happen or Eye didn't appear, regenerate.

---

### Mobile Clip 3 — INFINITE ASCENT finish + SCALE BREAK begin (16.00–24.00 s)

**Mode:** Image-to-Video. Upload `handoff-eye-mobile-2.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 3 OF 5 (Karma's Eye Mobile 9:16). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Camera at 15°-rotated position, full staircase maze in spiral pattern covering ground plane in middle band + lower zone at reduced density, small golden Eye at spiral center (~Y=55%, 40% opacity), backlit human silhouette at center-frame X, Y=40% absolutely motionless, gold axis extends full frame, sand cascading down stair edges.

BEAT MAP:

0.0–4.0 s (frames 0–96) — THE INFINITE ASCENT (final 96 frames of canonical beat)
  Frames 0–96: camera CONTINUES the same clockwise rotation at ~3.75°/second (rotates another 15° for total 30° from film start). CRITICAL: match Clip 2's rotation rate exactly — no acceleration, no deceleration.
    Frames 0–48: rotation continues. Eye brightness gradually increases from 40% to 70% opacity.
    Frames 48–96: at frame 72 (approximately 3 s into this clip), the OPTICAL ILLUSION LOCKS — the staircase that appeared to ASCEND is now visibly DESCENDING inward toward the Eye. Sand grains that were cascading DOWN stair edges are now revealed to be flowing INWARD toward the Eye. Perceptual shift only. Eye now at 70% opacity.

4.0–8.0 s (frames 96–192) — SCALE BREAK (first 96 frames of canonical 240-frame beat)
  Frames 96–192: camera begins pulling back along the Z-axis using cubic ease-out. Sustained biggest camera move in the film. Camera velocity is slow at frame 96, accelerates through frame 144, levels off toward frame 192.
    Frames 96–120: subtle pull-back. Human silhouette begins to appear slightly smaller. Maze visibly expands relative to frame edges.
    Frames 120–192: pull-back continues at increasing rate. By frame 192: silhouette has shrunk to ~65% of its original frame-height (from ~55% of frame height to ~36% of frame height in portrait). Maze now fills more of the frame area. Camera has NOT yet revealed the big Eye outline containing everything — that reveal is in Clip 4.

Clip 3 ends MID-PULL-BACK — Clip 4 continues the pull-back at the same trajectory.

CLOSING FRAME (frame 192 — extract as handoff-eye-mobile-3.png):
- Portrait 1080×1920. Camera rotated 30° clockwise from film start. Camera pulled back ~30% along Z-axis from start of Clip 3.
- Full staircase maze visible in spiral pattern, now optically descending inward.
- Small golden Eye at spiral center at 70% opacity.
- Backlit human silhouette shrunk to ~65% of original frame-height, still at center-frame X, Y=40% from top, absolutely motionless.
- Sand grains flowing INWARD toward the Eye (not falling down).
- Gold axis extends top pixel to bottom pixel of frame.
- Palette: void black + desert warm browns + gold at Eye/axis/staircase edges.
- NO big Eye outline visible yet. NO transformation to fabric yet.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-mobile-3.mp4 -vframes 1 -q:v 1 handoff-eye-mobile-3.png
```
**Verify:** Camera rotated 30° total AND pulled back ~30%. Silhouette visibly smaller. Sand flows inward toward Eye. Eye at spiral center. NO big Eye outline yet.

---

### Mobile Clip 4 — SCALE BREAK finish + TRANSFORMATION begin (24.00–32.00 s) — BIG EYE REVEAL contained

**Mode:** Image-to-Video. Upload `handoff-eye-mobile-3.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 4 OF 5 (Karma's Eye Mobile 9:16). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation.
THIS CLIP CONTAINS THE BIG EYE REVEAL — the film's payoff moment. Must be fully contained here.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Camera at 30°-rotated + 30%-pulled-back position, staircase maze in inward-spiraling pattern, small golden Eye at spiral center (70% opacity, Y≈55%), silhouette at ~65% of original frame-height at center-frame X, Y=40%, sand grains flowing inward, gold axis top-to-bottom of frame.

BEAT MAP:

0.0–6.0 s (frames 0–144) — SCALE BREAK (final 144 frames of canonical beat) — sustained pull-back culminating in the BIG EYE REVEAL
  Frames 0–72 (3 s): camera continues Z-axis pull-back on cubic ease-out. Silhouette progressively shrinks — by frame 72 it's ~30% of original frame-height. Maze visibly grows relative to frame. Small Eye at spiral center reaches 100% opacity.
  Frames 72–120 (2 s): as camera recedes, the OUTLINE of a much larger Eye begins to emerge at the frame edges — the entire desert maze is being revealed to exist INSIDE the outline of this huge geometric Eye. CRITICAL FOR PORTRAIT: the huge Eye outline is VERTICALLY oriented (vesica-piscis / almond shape TALLER than wide) — its long axis is vertical, its short axis is horizontal. Eye outline spans from Y=15% (top pupil point) to Y=85% (bottom pupil point), with widest point at Y=50% (equator). NOT a landscape-oriented eye. The small Eye at spiral center + the huge outer vertically-oriented Eye visible simultaneously (Eye-within-Eye). This is the BIG REVEAL. By frame 120: huge outer Eye outline is ~70% complete.
  Frames 120–144 (1 s): huge Eye outline completes — the entire maze + silhouette + small central Eye are now all visibly contained WITHIN the outline of the huge vertically-oriented geometric Eye. Camera pull-back decelerates and stops by frame 144.

6.0–8.0 s (frames 144–192) — TRANSFORMATION (first 48 frames of canonical 240-frame beat)
  Frames 144–168 (1 s): huge Eye + maze inside it begin dissolving into golden blueprint lines. Individual staircase treads visibly detach and drift as golden line segments.
  Frames 168–192 (1 s): sand grains transform mid-air into shimmering golden fabric threads. Blueprint lines drift toward the silhouette. First few threads gather around silhouette's torso — no hoodie shape yet.

Clip 4 ends with transformation IN PROGRESS — Clip 5 continues.

CLOSING FRAME (frame 192 — extract as handoff-eye-mobile-4.png):
- Portrait 1080×1920. Camera fully STOPPED, no motion.
- Entire frame is inside the outline of a huge VERTICALLY-ORIENTED (almond/vesica-piscis) geometric Eye — long axis vertical spanning Y=15% to Y=85%, widest at Y=50%.
- Inside the huge Eye: small central Eye (still visible at Y≈55%), (now-dissolving) staircase maze, microscopic human silhouette at center-frame X, Y=40% (~30% of original frame-height).
- Maze is ~40% dissolved into floating golden blueprint line segments.
- ~30% of sand grains transformed into golden fabric threads drifting toward silhouette.
- No hoodie shape yet.
- Palette: void black outside the huge Eye outline + desert warm browns (fading) + gold #D4A855 (increasing dominance).

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-mobile-4.mp4 -vframes 1 -q:v 1 handoff-eye-mobile-4.png
```
**Verify (critical):** The huge Eye outline is FULLY VISIBLE and VERTICALLY ORIENTED (taller than wide, almond/vesica-piscis shape). Small central Eye also visible. Silhouette microscopic. Maze ~40% dissolved. If the huge Eye is landscape-oriented (wider than tall) or the reveal is incomplete, regenerate with stronger "vertically oriented almond eye" language.

---

### Mobile Clip 5 — TRANSFORMATION finish + poster frame (32.00–40.00 s)

**Mode:** Image-to-Video. Upload `handoff-eye-mobile-4.png`. Prepend Style Lock + Portrait framing rules. Then submit at aspect 9:16:

```
CLIP 5 OF 5 (Karma's Eye Mobile 9:16). Duration: 8.0 s, 24 fps, 192 frames. Image-to-Video generation. Ends on the mobile poster frame.

OPENING FRAME (frame 0): MATCH THE UPLOADED REFERENCE IMAGE EXACTLY. Portrait 1080×1920. Frame contained inside outline of a vertically-oriented huge geometric Eye, small central Eye visible at Y≈55%, microscopic human silhouette at center-frame X, Y=40%, maze ~40% dissolved into blueprint line segments, ~30% of grains transformed into golden fabric threads drifting toward silhouette.

BEAT MAP:

0.0–5.0 s (frames 0–120) — TRANSFORMATION (final 192 frames of canonical 240-frame beat)
  Frames 0–48 (2 s): remaining maze fully dissolves into blueprint lines. All sand grains complete transformation into fabric threads. Silhouette begins scaling back UP toward standard size via cubic ease-in-out over 48 frames — camera does NOT move; the illusion is that the silhouette "returns to normal scale" within the frame (a compositional/scale correction, not a camera move). By frame 48: silhouette at ~80% of original film-start size.
  Frames 48–96 (2 s): fabric threads begin weaving into a hoodie shape around the silhouette. Weaving is organic — threads flow from the axis outward. Staircase pattern visibly forms ON the fabric. The small central Eye locks into the hoodie design at chest level (approximately Y=48%, just below the collar) as minimal geometric line-art.
  Frames 96–120 (1 s): hoodie completes. Silhouette now fully at ~100% original size, wearing the completed hoodie. Fabric shows: distance view = maze pattern, close-up detail = spiral staircase pattern. Eye clearly visible at chest.

5.0–8.0 s (frames 120–192) — DEAD-AIR HOLD (poster frame)
  Frames 120–192 (3 s): absolutely no motion. Silhouette in completed hoodie stands at center-frame X, Y=40%, absolutely still. Huge vertically-oriented Eye outline still contains the scene as background/frame element. Small central Eye now integrated into hoodie chest at Y=48%. This final frame IS the mobile poster.jpg export.

CLOSING FRAME (frame 192 — this IS the mobile poster frame, extract as story-karmas-eye-poster-mobile candidate):
- Portrait 1080×1920. Backlit human silhouette at center-frame X, Y=40%, at full original scale, wearing complete hoodie.
- Hoodie: desert-toned fabric with subtle gold highlights, staircase pattern visible (spiral pattern close-up, maze pattern from distance), architectural texture like ancient stone, slightly distressed.
- Eye at chest level (Y=48%): minimal geometric line-art (concentric golden lines forming iris outline, NOT literal eyeball).
- Huge outer vertically-oriented Eye outline still visible as background/frame element containing the scene.
- Small central Eye visible faintly in the void behind the silhouette.
- Gold axis extends top pixel to bottom pixel of frame.
- Upper 20% and lower 40% zones remain quiet (only Eye outline curve + axis pass through).
- Palette: void black + desert warm browns + gold #D4A855.
- Camera absolutely locked. Zero motion.

FORMAT: 1080×1920 (portrait 1080p), 9:16, 24 fps native, no audio, MP4 H.264. Duration exactly 8.0 s.
```

**After generation:**
```powershell
ffmpeg -sseof -0.05 -i clip-eye-mobile-5.mp4 -vframes 1 -q:v 1 handoff-eye-mobile-5.png
```
This handoff-eye-mobile-5.png becomes the basis for `story-karmas-eye-poster-mobile.jpg` after the mobile merge (see §4).

---

### Mobile QA delta (in addition to §7 landscape QA)

- [ ] Every clip resolution is exactly **1080×1920** (portrait 1080p) — NOT 720×1280. Verify with `ffprobe -v error -select_streams v -show_entries stream=width,height -of csv=p=0 clip-eye-mobile-N.mp4`.
- [ ] Gold axis extends **top pixel to bottom pixel of frame** in every clip from Clip 1 onward.
- [ ] Silhouette centered horizontally (X=540 ± 10 px) and at Y=768 ± 30 px (Y=40% of 1920) throughout.
- [ ] Horizon in Clip 1 is at Y=35% (not vertically centered — that would be landscape composition).
- [ ] Maze in lower 40% zone stays at ≤50% density in Clips 2–3 (preserves DOM overlay text readability).
- [ ] **BIG EYE REVEAL in Clip 4: huge Eye outline is VERTICALLY ORIENTED** (long axis vertical, spanning Y=15% to Y=85%, widest at Y=50%). NOT a landscape-oriented eye. This is the single most critical portrait-specific check.
- [ ] Camera rotation rate matches between Clip 2 (15° in 4 s) and Clip 3 (15° in 4 s) = 3.75°/second consistent.
- [ ] Portrait-specific watermark coords for delogo in §4 merge: `x=530:y=1100:w=130:h=140` (verify by inspecting corner crops of `clip-eye-mobile-1.mp4`).

---

## 4. Post-generation ffmpeg merge (5 clips → `story-karmas-eye.mp4`)

Detect the Veo watermark position first:

```powershell
New-Item -ItemType Directory -Force -Path "temp-frames" | Out-Null
ffmpeg -y -i clip-eye-1.mp4 -vf "select='eq(n,60)+eq(n,150)',crop=300:300:1620:780" -vsync vfr "temp-frames\corner-%02d.png"
# For most Veo 3 landscape output: x=1110, y=570, w=100, h=100
```

Merge all 5 clips + delogo + enhance + scrub-optimize:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

ffmpeg -y `
  -i clip-eye-1.mp4 -i clip-eye-2.mp4 -i clip-eye-3.mp4 -i clip-eye-4.mp4 -i clip-eye-5.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a][4:v][4:a]concat=n=5:v=1:a=1[cat][aout];[cat]delogo=x=1110:y=570:w=100:h=100,hqdn3d=1.5:1.5:3:3,scale=1920:1080:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.06:saturation=1.04:gamma=0.98,fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 `
  public\videos\story-karmas-eye.mp4

# Extract poster from the final held frame
ffmpeg -y -sseof -0.1 -i public\videos\story-karmas-eye.mp4 -update 1 -frames:v 1 -q:v 2 public\videos\story-karmas-eye-poster.jpg
```

**If clips have no audio**, replace with `[0:v][1:v][2:v][3:v][4:v]concat=n=5:v=1:a=0[vout]` and drop the `-map "[aout]" -c:a aac ...` args.

---

## 5. Install into the site

Once assets are in `public/videos/`, add to [`src/data/storyConcepts.js`](../../src/data/storyConcepts.js) `'karmas-eye'` block:

```js
'karmas-eye': {
  title: "Concept 03 — Karma's Eye",
  subtitle: 'Inward Descent',
  // ...existing fields...
  video: {
    src: '/videos/story-karmas-eye.mp4',
    poster: '/videos/story-karmas-eye-poster.jpg',
    label: "Concept 03 film — desert maze folding inward around the Eye",
  },
}
```

Refresh `/story/karmas-eye`.

---

## 6. Universal negative prompt

```
text on screen, subtitles, letters visible in frame, on-screen typography, logos, watermarks, products (until beat 5), hoodies as flat garments, apparel, clothing, brand marks, faces close-up, hands close-up, blood, red, violence, weapons, vehicles, buildings (except unfinished pyramid ruins), modern architecture, cityscape, motion blur that streaks whites, chromatic aberration, RGB glitch, cyberpunk, neon pink, neon cyan, cartoon, anime, psychedelic patterns, Egyptian cliché iconography (hieroglyphs, pharaohs, sarcophagi), literal eyeball for the Eye (must be geometric line-art only), low resolution, blurry, jpeg artifacts, 3D-model preview look, wireframe, HUD, UI elements, letterbox bars, ken burns pan, dutch tilt, handheld shake, zoom, lens flare whip, particle sparkle overlay, motion trail, tracer lines, ghosting between frames, judder, frame-blend, 60fps interpolation, TV motion smoothing, overexposed highlights, pure white, pure red, pure blue, RGB primaries, bloom halo, digital sharpening
```

---

## 7. QA checklist — Concept 03 continuity + canon compliance

**Seam checks (one per clip-to-clip boundary):**
- [ ] **Clip 1 → 2 join at 8.00 s:** desert + pyramids + silhouette + ~20% of maze lines emerging. NO camera rotation yet.
- [ ] **Clip 2 → 3 join at 16.00 s:** camera rotated 15° from start, full spiral maze visible, small Eye at spiral center at ~40% opacity, silhouette still at original scale.
- [ ] **Clip 3 → 4 join at 24.00 s:** camera rotated 30° total AND pulled back ~30% along Z-axis, silhouette ~65% of original size, sand flowing inward, small Eye at ~70% opacity. NO big Eye outline yet.
- [ ] **Clip 4 → 5 join at 32.00 s:** huge Eye outline visible containing whole scene, small Eye inside, silhouette microscopic (~30% original size), maze ~40% dissolved, ~30% of grains transformed into fabric threads.
- [ ] **Post-merge scrub test:** open the merged file in a browser tab, scrub across each 8.00-second mark — no flash, no color jump, no luminance step at any boundary.

**Beat-containment checks:**
- [ ] Camera rotation rate is consistent across Clips 2 & 3 (both at ~3.75°/second). Extract midframes from both clips and measure — velocities must match.
- [ ] BIG EYE REVEAL fully inside Clip 4 (frames 576–720 of the merged film = frames 0–144 of Clip 4). At Clip 4 frame 0: no big Eye outline visible. At Clip 4 frame 144: huge Eye outline complete.
- [ ] Hoodie emergence + weaving fully inside Clip 5 (final 3 s of TRANSFORMATION beat).
- [ ] Sand flow direction switches from "cascading DOWN stair edges" (Clips 1–2) to "flowing INWARD toward Eye" (Clips 3–4) at the optical illusion lock moment in Clip 3.

**Canonical alignment (from own_karma.md):**
- [ ] Duration is **40 s ± 1 s** (canonical timeline sums to 40s: 5+7+8+10+10).
- [ ] All 5 beat names match canon exactly: THE DESERT · THE MAZE REVEALS · THE INFINITE ASCENT · SCALE BREAK · TRANSFORMATION.
- [ ] Universal Rule: no hoodie visible in Clips 1, 2, 3, or first 6 s of Clip 4. Fabric threads begin appearing at Clip 4 frame 168 (approximately 31 s of film). Hoodie fully formed only in Clip 5.
- [ ] Camera: static for Clip 1. Rotation only in Clips 2 & 3. Pull-back in Clips 3 & 4. Locked in Clip 5.

**Concept-specific (unique to Karma's Eye):**
- [ ] The Eye is NEVER a literal eyeball — always concentric geometric golden lines suggesting an iris outline.
- [ ] Two Eyes visible: small central Eye (at spiral center from Clip 2 onward) + huge outer Eye outline (revealed in Clip 4).
- [ ] Pyramids in background are UNFINISHED / RUINED — blocky monuments with tops missing, NOT Egyptian tourist iconography.
- [ ] Ancient stone / architectural feel throughout — NOT psychedelic, NOT fantasy.
- [ ] Hoodie design in Clip 5 shows THREE LEVELS OF DEPTH: distance view = maze pattern, close-up = spiral staircase, in motion = subtle light shifts across lines.
- [ ] Small central Eye locks into hoodie design at chest level as minimal geometric line-art.
- [ ] Hidden text: sample paused frames from Clips 2, 3, and 4 — look for OWN KARMA arrangements in staircase edge patterns spiraling around the Eye.

**Palette compliance:**
- [ ] No pure white anywhere.
- [ ] No greens, blues, reds, or any color outside the concept palette (void black + desert warm browns + gold #D4A855).
- [ ] Watermark completely removed via delogo.

**Deliverable format:**
- [ ] Encoded per §4 recipe.
- [ ] `story-karmas-eye.mp4` file size ≤ 15 MB (bump `-crf` to 27 if larger).
- [ ] `story-karmas-eye-poster.jpg` ≤ 200 KB.
- [ ] `ffprobe` reports 1920×1080, 24 fps, H.264 main profile.

**Scrub test:**
- [ ] Timeline scrubber back and forth — no stuttering, no wait-for-keyframe hitches.
- [ ] On `/story/karmas-eye`, autoplay loops smoothly, Sound On toggle works.

---

## 8. Cross-references

- [`_document/own_karma.md` §Concept 03](../own_karma.md) — canonical VFX blueprint
- [`_document/hero-video-prompt.md`](../hero-video-prompt.md) — main index
- [`_document/prompts/concept-02-divine.md`](concept-02-divine.md) — previous concept
- [`_document/prompts/concept-04-destiny.md`](concept-04-destiny.md) — next concept
- [`src/routes/StoryConcept.jsx`](../../src/routes/StoryConcept.jsx) — story page route
- [`src/hero/StoryFilm.jsx`](../../src/hero/StoryFilm.jsx) — autoplay-loop component
- [`public/videos/README.md`](../../public/videos/README.md) — asset contract
