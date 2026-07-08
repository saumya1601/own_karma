# /public/videos/ — Cinematic Film Asset Contract

This folder holds every cinematic film in OWN KARMA:
- **Hero** (Concept 01) — scroll-scrubbed on `/` via `src/hero/HeroFilm.jsx`.
- **Story concepts** (02–05) — autoplay-loop on `/story/[slug]` via `src/hero/StoryFilm.jsx`.

Specs: [`_document/requirement2.md`](../../_document/requirement2.md) · prompts: [`_document/hero-video-prompt.md`](../../_document/hero-video-prompt.md).

If any file is missing, the corresponding component collapses to poster-only — no crash.

---

## Expected files

### Hero (Concept 01)

| File | Required? | Notes |
| :--- | :---: | :--- |
| `hero-main.mp4`         | **YES** | Landscape 1920×1080, 24 fps, ≤ 25 MB with audio. Scrub-optimized encoding. |
| `hero-main-mobile.mp4`  | **YES** | Portrait 1080×1920, 24 fps, ≤ 22 MB with audio. |
| `hero-poster.jpg`       | **YES** | Landscape first / final frame still, ≤ 250 KB. |
| `hero-poster-mobile.jpg`| **YES** | Portrait first / final frame still, ≤ 300 KB. |

### Story concepts (drop these when generated)

| File | Concept | Route | Notes |
| :--- | :--- | :--- | :--- |
| `story-divine.mp4` + `-poster.jpg`          | 02 Divine — The Blueprint  | `/story/divine`         | ~60–70 s landscape 1920×1080 |
| `story-karmas-eye.mp4` + `-poster.jpg`      | 03 Karma's Eye             | `/story/karmas-eye`     | ~40 s landscape 1920×1080 |
| `story-destiny.mp4` + `-poster.jpg`         | 04 Destiny                 | `/story/destiny`        | ~45 s landscape 1920×1080 |
| `story-broken-hourglass.mp4` + `-poster.jpg`| 05 Broken Hourglass        | `/story/broken-hourglass` | ~55 s landscape 1920×1080 |

Naming convention is enforced by `src/data/storyConcepts.js` — each concept's `video.src` and `video.poster` fields point at these exact paths.

---

## Encoder recipe (scroll-scrub-optimized H.264)

This is the recipe used for both hero and story films. It solves scroll-scrub jitter on older hardware by removing B-frames, shortening the keyframe interval, and using Main profile (drops CABAC → faster decode on Intel iGPUs / older ARM).

```powershell
ffmpeg -i source.mov `
  -c:v libx264 `
  -profile:v main `
  -tune fastdecode `
  -crf 25 `
  -bf 0 `
  -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p `
  -movflags +faststart `
  -c:a aac -b:a 96k -ac 2 `
  -vf "scale=1920:-2:flags=lanczos,fps=24" `
  hero-main.mp4
```

**What each flag does:**
- `-profile:v main` — drops CABAC entropy coding to CAVLC. ~15 % faster decode on old GPUs. Same visual quality.
- `-tune fastdecode` — disables trellis quantization + loop filter tweaks. ~3 % bitrate cost, decoder wins.
- `-bf 0` — no B-frames (frames that reference the *future*). This is the single biggest scrub fix — B-frames make the decoder walk forward AND backward on every seek.
- `-g 4 -keyint_min 4 -sc_threshold 0` — keyframe every 4 frames (6/sec). Any scroll position seeks to the nearest keyframe in < 1 frame of decode.
- `-movflags +faststart` — puts the `moov` atom at the head of the file so playback can start before download completes.
- `-crf 25` — tuned so the resulting file lands ≤ 25 MB for a 30 s 1080p clip. Bump up to 27 for smaller files, down to 22 for near-lossless.
- `-c:a aac -b:a 96k -ac 2` — atmospheric-quality audio (drop to `-an` if the story concept is silent).

For mobile portrait, swap the scale filter: `-vf "scale=1080:-2:flags=lanczos,fps=24"`.

## Poster extraction

Grab the final held frame (which is the "resolution" pose in every OWN KARMA concept):

```powershell
ffmpeg -sseof -0.1 -i hero-main.mp4 -update 1 -frames:v 1 -q:v 2 hero-poster.jpg
```

Or from a specific timestamp (Concept 02 "The Law" beat, for example):

```powershell
ffmpeg -ss 00:00:58 -i story-divine.mp4 -vframes 1 -q:v 2 story-divine-poster.jpg
```

---

## Merging multi-clip Veo 3 sequences

Long films (>10 s) come from Veo 3 as multiple ~10 s clips. See [`_document/hero-video-prompt.md § 2b.4`](../../_document/hero-video-prompt.md) for the concat + delogo pipeline. Summary:

```powershell
ffmpeg -y -i clip1.mp4 -i clip2.mp4 -i clip3.mp4 `
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[cat][aout];
                   [cat]delogo=x=WM_X:y=WM_Y:w=WM_W:h=WM_H,
                        hqdn3d=1.5:1.5:3:3,
                        scale=1920:1080:flags=lanczos,
                        unsharp=5:5:0.6,
                        eq=contrast=1.06:saturation=1.04:gamma=0.98,
                        fps=24[vout]" `
  -map "[vout]" -map "[aout]" `
  -c:v libx264 -profile:v main -tune fastdecode -crf 25 -bf 0 -g 4 -keyint_min 4 -sc_threshold 0 `
  -pix_fmt yuv420p -movflags +faststart `
  -c:a aac -b:a 96k -ac 2 `
  hero-main.mp4
```

`WM_X`/`WM_Y`/`WM_W`/`WM_H` = Veo watermark bounding box, detected by extracting a corner crop from `clip1.mp4`. Landscape usually at `1110, 570, 100, 100`. Portrait at `530, 1100, 130, 140`.

---

## Cache headers on Vercel

`vercel.json` at the repo root sets `Cache-Control: public, max-age=31536000, immutable` on `/videos/*`. First visitor per Vercel edge region fetches from origin; every visitor after gets the file from the nearest edge (~30–50 ms). Do **not** change filenames without bumping some version hint — otherwise browsers serve stale.

## Do NOT

- Do not commit any file > 25 MB. If a film runs longer than 30 s at 1080p, either raise `-crf` or split into multiple story-concept files that lazy-load.
- Do not encode with the default 250-frame GOP (that is what most NLE presets do). Force `-g 4`.
- Do not re-encode a re-encoded file. Always process from the original Veo 3 sources → one generation, one output.
- Do not commit temp inspection frames (`temp-frames/` should be gitignored if you use it).

## Rollback

If any video causes a regression, delete or rename the file. The corresponding component (HeroFilm or StoryFilm) automatically falls back to the poster + graceful "loading…" state — the page stays fully functional and passes lint.
