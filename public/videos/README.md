# /public/videos/ — Landing Hero v2 Asset Contract

This folder holds the **cinematic film** that drives the Home hero.
Spec: [`_document/requirement2.md`](../../_document/requirement2.md) §4 "Asset Contract".

The `HeroFilm` component (`src/hero/HeroFilm.jsx`) expects the files below.
If any are missing, the fallback ladder collapses to **poster-only** — no crash.

---

## Expected files

| File | Required? | Notes |
| :--- | :---: | :--- |
| `hero-main.mp4`     | **YES** | H.264 High, 1920×1080, 24 fps, ≤ 8 MB, keyframe every ≤ 12 frames, no audio, `+faststart`. |
| `hero-main.webm`    | opt     | VP9 alt, 1920×1080, 24 fps, ≤ 5 MB. Served first if the browser supports it. |
| `hero-poster.jpg`   | **YES** | First-frame still, 1920×1080, ≤ 250 KB. Shown before the video decodes and in poster-only fallback. |
| `hero-poster.svg`   | shipped | Placeholder ships with the repo. **Delete or replace** once `hero-poster.jpg` exists. |

---

## Encoder command (final asset)

Client / video vendor should produce the MP4 with:

```bash
ffmpeg -i source.mov \
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

**Why the flags:**
- `-g 12 -keyint_min 12`   — keyframe every ≤ 12 frames. **This is the single most important flag** — without it, scroll scrubbing stutters badly because `<video>.currentTime` has to walk back to the nearest keyframe on every seek.
- `-movflags +faststart`   — moves the `moov` atom to the head of the file so the browser can start decoding before download completes.
- `-an`                    — strip audio. All sound comes from `AmbientMixer` (muted by default).
- `-crf 20`                — visually near-lossless for hero content; adjust up (23–25) if the final size overshoots 8 MB.

## Poster export

Any of these works:

```bash
# Grab frame at 00:00:02 of the hero
ffmpeg -ss 00:00:02 -i hero-main.mp4 -vframes 1 -q:v 3 hero-poster.jpg
```

Or export directly from After Effects / Premiere / DaVinci as JPEG-90, sRGB, 1920×1080.

---

## Do NOT

- Do not commit any file > 10 MB — repo will start to bloat. If the hero master ever needs to be that large, host it on a CDN and update the `<source>` tags in `HeroFilm.jsx`.
- Do not include an audio track. Muted `<video>` still spins up the decoder unnecessarily.
- Do not use `preload="metadata"` — HeroFilm needs `preload="auto"` for smooth scrub.
- Do not encode with the default 250-frame GOP (that is what most NLE presets do). Force `-g 12`.

---

## Rollback

If the video causes any regression, delete `hero-main.mp4` + `hero-main.webm`.
The hero automatically collapses to the poster + all DOM overlays — the site
stays fully functional.
