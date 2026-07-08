# OWN KARMA — Workspace Guidelines & Rules

Welcome to the OWN KARMA workspace. Below are the design guidelines, style locks, and rules that must be followed for all agent actions.

## 1. Core Visual Style & Color Palette (§10.1)
Always adhere to the additive color palette tokens:
- **Void Black**: `#000000` (primary canvas and background)
- **Obsidian**: `#0A0A0C` (secondary panels, card bases)
- **Stone**: `#1A1A1D` (borders, subtle separators)
- **Gold / Axis / Signal**: `#D4A855` (accent color, glowing elements, horizontal lines, active text indicators)
- **Bone**: `#F3EFE7` (primary typographic text)
- **Dust**: `#A9A399` (secondary typographic text, subheadings)
- **Alert**: `#B25141` (error states, high priority alerts)

No other accent colors should be introduced unless explicitly requested.

## 2. Typography Hierarchy (§10.2)
- **Display Font**: `Playfair Display`, Georgia, serif (used for serif titles, main cinematic taglines)
- **Sans-Serif Font**: `Inter`, system-ui, sans-serif (used for UI copy, description texts)
- **Mono Font**: `JetBrains Mono`, monospace (used for metadata tags, technical specs, numbers, alignment states)
- **Hindi Font**: `Noto Sans Devanagari` (used for translations where `lang="hi"` is active)
- **Typography Scale**:
  - `text-ok-md`: `1.75rem` (28px)
  - `text-ok-lg`: `2.5rem` (40px)
  - `text-ok-xl`: `4rem` (64px)
  - `text-ok-2xl`: `7rem` (112px)
  - `text-ok-3xl`: `11.25rem` (180px)
  - *Rule*: Avoid using raw large scale tokens (`text-ok-xl` or above) on body sentences or long taglines as it breaks layout on smaller screens. Prefer responsive configurations like `text-ok-md md:text-ok-lg lg:text-ok-xl`.

## 3. Motion & Animation Principles (§11)
- **Easing**: Standard animations must use the calm, asymmetric easing curve: `cubic-bezier(0.65, 0, 0.35, 1)`.
- **GSAP Easing**: Use `power4.inOut` or `power2.out` for slow, cinematic transitions.
- **Cinematic Fadeout**: Multi-stage transitions (like the Home Hero split intro) must start slowly, accelerate, and decelerate slowly. Use custom overlays with `display: 'none'` at the end of timelines to pass clicks to the underlying canvas elements.

## 4. Concept 02 — Divine — The Blueprint Guidelines
When working on pages, modules, or assets relating to Concept 02 (e.g., `/story/divine` or custom layouts):
- **Universal Rule**: No hoodie or visible product is revealed until beat 5 (the garment must emerge organically from the gold threads/axis).
- **The Axis**: Emerges as a vertical golden beam (`#D4A855`, 2 px core + 8 px glow) representing the human spine.
- **The Silhouette**: Motionless, backlit, rim-lit gold at shoulders fading to black at the feet.
- **Background**: Void black background, deep cosmic blue-black backdrops, bone-colored stars.
