export const storyConcepts = {
  'axis': {
    title: 'Concept 01 — What Is Own Karma?',
    subtitle: 'The Axis Through All Realms',
    quote: 'Not worn to be seen. Worn to stand correctly.',
    philosophy: 'Alignment distorts chaos. The closer to alignment, the slower reality moves. A thin vertical golden axis runs through the human silhouette — invisible at first, extending infinitely up and down.',
    // Video convention (for future concepts):
    //   src:    /videos/story-{slug}.mp4       — H.264 main + fastdecode + short GOP, ≤ 12 MB
    //   poster: /videos/story-{slug}-poster.jpg — first-frame still, ≤ 250 KB
    // Concept 01 reuses the home hero film directly (same 30 s cut).
    video: {
      src: '/videos/hero-main.mp4',
      poster: '/videos/hero-poster.jpg',
      label: 'Concept 01 hero film — axis through 10 collapsing realms',
    },
    timeline: [
      { time: '0–4s', name: 'Void Birth', desc: 'Black. A faint golden vertical line appears. Camera pushes forward. Tiny human silhouette aligns with axis. Low sub-bass vibration.' },
      { time: '4–8s', name: 'Netherworld', desc: 'Ground cracks beneath the axis. Dark mist rises. Obsidian terrain grows outward from feet. Human is still.' },
      { time: '8–12s', name: 'Desert Transition', desc: 'Obsidian dissolves into sand mid-frame. Heat waves distort air. Sand storms curve around the axis like magnetic fields.' },
      { time: '12–16s', name: 'Water Impossibility', desc: 'Desert liquefies into water without cutting. Gravity flips. Water rotates 360° around axis. Human does not swim — just stands.' },
      { time: '16–20s', name: 'Forest Growth', desc: 'Water evaporates upward. Trees grow rapidly. Roots never touch the human. Leaves freeze mid-air near the axis.' },
      { time: '20–24s', name: 'Lava & Pressure', desc: 'Forest chars instantly. Lava erupts but arcs away from axis like repelled. Nothing touches the human.' },
      { time: '24–28s', name: 'Ice Shatter', desc: 'Lava flash-freezes mid-air. Crystals expand outward. Sound drops to silence. World feels paused. Human remains upright.' },
      { time: '28–33s', name: 'Galaxy Reveal', desc: 'Ice shatters into stars. Camera pulls back. All realms were inside a rotating cosmic structure. Human is microscopic yet still aligned.' },
      { time: '33–38s', name: 'Sun Ignition', desc: 'A small golden sun ignites above. Sudarshan-like circular geometry forms. Mathematical, precise, slow.' },
      { time: '38–42s', name: 'Lock', desc: 'Everything stops. Absolute silence. Axis, eye geometry, and circular law align perfectly. OWN KARMA appears. Small. Centered.' },
    ],
    hiddenDetail: 'In every realm, faintly etched in the environment — OWN KARMA appears as a texture: in sand patterns, lava cracks, ice fractures, star constellations. When paused, it is there.'
  },
  'divine': {
    title: 'Concept 02 — Divine',
    subtitle: 'The Blueprint',
    quote: 'The universe exists because you observe it.',
    philosophy: 'Most brands say you are small in the universe. OWN KARMA says: The universe exists because you observe it. Human existence is older than the galaxy.',
    video: {
      src: '/videos/story-divine.mp4',
      poster: '/videos/story-divine-poster.jpg',
      label: 'Concept 02 film — cosmic reversal, human contains the galaxy',
    },
    timeline: [
      { time: '0–5s', name: 'The False Scale', desc: "Black void. A massive hyper-realistic galaxy slowly rotates. Camera pulls back. Text: 'Infinite.'" },
      { time: '5–10s', name: 'Human Scale Shift', desc: "A tiny human silhouette appears in the foreground. The galaxy is rotating inside the outline of the human chest. Text: 'Or so you thought.'" },
      { time: '10–18s', name: 'The Blueprint Reveals', desc: "Golden geometric lines form over the human. Spine becomes the axis. Arms extend into cosmic vectors. Stars align to the blueprint grid. Text: 'Before stars, there was structure.'" },
      { time: '18–25s', name: 'Reversal', desc: "Stars collapse inward into points of light that become neural networks inside the human head. Galaxy becomes synaptic energy. Text: 'Existence precedes expansion.'" },
      { time: '25–35s', name: 'Infinite Galaxy Cloth', desc: 'Blueprint lines dissolve into fabric threads shimmering like constellations. Hoodie forms organically — not stitched, not placed.' },
      { time: '35–45s', name: 'Scale Destroyed', desc: 'Camera pulls back. Human is now larger than the galaxy. Galaxies orbit them — not in ego, in inevitability. Spine glows faintly.' },
      { time: '45–55s', name: 'Absolute Stillness', desc: "Everything stops. Galaxy fades. No face. No flex. Just presence. Text: 'You are not inside the universe. The universe is inside your alignment.'" },
      { time: '55–60s', name: 'The Law', desc: "OWN KARMA appears. Very small. Centered. Final line: 'Worn to remember what came first.'" }
    ],
    hiddenDetail: 'In the galaxy clusters, if paused, the stars form faint OWN KARMA lettering. Hidden. Not readable immediately.'
  },
  'karmas-eye': {
    title: "Concept 03 — Karma's Eye",
    subtitle: 'Inward Descent',
    quote: 'The staircase is not leading upward. It is folding inward.',
    philosophy: 'An infinite staircase maze built on desert stone and fractured pyramids. The staircase appears to rise, but when the perspective rotates, it actually descends inward. The climb is not upward; the climb is inward.',
    // Concept 03 hero pair — rendered by <KarmaEyeHero> as a full-viewport HeroFilm.
    // Files must be generated per _document/prompts/concept-03-karmas-eye.md and
    // placed in public/videos/.
    video: {
      src: '/videos/story-karmas-eye.mp4',
      poster: '/videos/story-karmas-eye-poster.jpg',
      label: 'Concept 03 film — desert maze folding inward around the Eye',
    },
    timeline: [
      { time: '0–10s', name: 'The Desert', desc: "Wide cinematic shot. Endless desert. Heat distortion. Fractured pyramids. Single human silhouette. Text: 'Every journey begins in illusion.'" },
      { time: '10–20s', name: 'The Maze Reveals', desc: 'Sand shifts. Geometric lines emerge from beneath. Ground morphs into impossible staircase maze. Sand cascades down stair edges. Pyramids connected by staircase bridges.' },
      { time: '20–30s', name: 'The Infinite Ascent', desc: 'Camera rotates. Staircase forms a spiral with a faint glowing Eye at its centre. The Eye does not move — the maze rotates around it.' },
      { time: '30–40s', name: 'Scale Break', desc: 'Human becomes smaller. Maze grows enormous. Camera pulls back to reveal the entire desert maze exists inside the outline of an Eye.' },
      { time: '40–50s', name: 'Transformation', desc: 'Maze dissolves into blueprint lines. Sand turns into threads. Staircase pattern forms on fabric. Eye locks into hoodie design.' }
    ],
    designDetails: [
      { name: 'Distance view', desc: 'Looks like an architectural maze.' },
      { name: 'Close-up view', desc: 'A precision spiral staircase.' },
      { name: 'In motion', desc: 'Subtle light shifts across the lines feel alive.' },
      { name: 'Color tone', desc: 'Desert-toned with subtle gold highlights. Slightly distressed like ancient stone.' },
    ],
    hiddenDetail: 'If you stare at the maze long enough, you realize the staircase structures spell out OWN KARMA inside the stone architecture.'
  },
  'destiny': {
    title: 'Concept 04 — Destiny',
    subtitle: 'The Walls You Call Reality',
    quote: 'Break what contains you.',
    philosophy: 'Destiny is not something you reach; it is something you remove. You are not building your future; you are breaking your prison. The walls are not concrete; they are psychological.',
    video: {
      src: '/videos/story-destiny.mp4',
      poster: '/videos/story-destiny-poster.jpg',
      label: 'Concept 04 film — four psychological walls, calm destruction',
    },
    timeline: [
      { time: '0–10s', name: 'Wall 1: Opinion', desc: "A massive wall made of faint human faces and whispers. Text etched across: 'What will they think?' / 'Be realistic.' Human does not move." },
      { time: '10–20s', name: 'The Pressure', desc: "Human touches wall with one hand. Silent cracks form. Whispers stop. Text: 'Every destiny begins with disagreement.'" },
      { time: '20–30s', name: 'Wall 2: Comfort', desc: "Smoother, warmer, glowing wall. 'Later.' / 'You deserve rest.' / 'It's fine.' Human hesitates — then steps forward. Wall shatters into dust." },
      { time: '30–40s', name: 'Wall 3: Time', desc: "A cracked hourglass wall. Sand flows upward. 'Not now.' / 'Someday.' / 'When I'm ready.' Human walks through. Glass fractures. Text: 'Time is not your enemy. Delay is.'" },
      { time: '40–50s', name: 'Wall 4: Self', desc: 'A distorted mirror shows a smaller, doubtful self. Silence. Human steps through, shattering the mirror into geometric blueprint lines.' },
      { time: '50–60s', name: 'Destiny Revealed', desc: 'Walls are gone. Space is open. The human is the same size, but nothing blocks them anymore.' }
    ],
    hiddenDetail: 'When the walls shatter, they dissolve into staircase lines, eye geometry, and blueprint threads that form the hoodie pattern. The cracks of the walls become the design lines.'
  },
  'broken-hourglass': {
    title: 'Concept 05 — The Broken Hourglass',
    subtitle: 'The Prison of Time',
    quote: 'Break the frame.',
    philosophy: 'Time contains you — until you decide to break it. Time is not the enemy. Time is a frame. Destiny begins when you step outside the frame. You don’t experience time; you experience alignment.',
    video: {
      src: '/videos/story-hourglass.mp4',
      poster: '/videos/story-hourglass-poster.jpg',
      label: 'Concept 05 film — the hourglass breaks and becomes the hoodie',
    },
    timeline: [
      { time: '0–6s', name: 'The Relic', desc: 'Black void. A large antique hourglass floats. Inside the lower bulb stands a tiny backlit human silhouette, upright and still. No sand movement.' },
      { time: '6–12s', name: 'The Containment', desc: 'The tiny silhouette remains still inside the lower bulb. Sand begins to fall slowly past them, dusting the bottom of the chamber.' },
      { time: '12–18s', name: 'The Realization', desc: 'The tiny human inside looks upward. Sand stops mid-air. Silhouette reaches out to touch the glass. Cracks form like geometric blueprint lines.' },
      { time: '18–25s', name: 'The Break', desc: 'The silhouette pushes through. Glass shatters in slow motion. Sand bursts outward, transforming into planets, birds, waves, and forest branches.' },
      { time: '25–35s', name: 'Expansion', desc: "Floating elements rotate slowly around the human. Subtle golden blueprint lines connect everything. Text: 'When you break time... you experience life.'" },
      { time: '35–45s', name: 'Reorganization', desc: 'Hourglass shards align into geometric patterns and staircase structures. The brass frame transforms into the hoodie structure on the silhouette.' },
      { time: '45–55s', name: 'The Stillness', desc: "Human stands wearing the hoodie. Hollow brass frame floats behind, empty. Text: 'Time was never infinite. You are.'" }
    ],
    hiddenDetail: 'Inside the shattered glass shards, if paused, faint OWN KARMA inscriptions are visible — as if time was secretly recording everything.'
  }
}

