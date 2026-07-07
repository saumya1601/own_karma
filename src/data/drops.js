/**
 * Upcoming drops data — for the /waitlist page (§6.6).
 * In v1 these are hardcoded. In v2 they come from a CMS.
 */
export const drops = [
  {
    id: 'drop-01',
    slug: 'genesis',
    name: 'GENESIS',
    tagline: 'The First Collapse',
    description: {
      en: 'The founding drop. AXIS-01, BLUEPRINT-02, and the full tee + cargo lineup. Every piece serialized.',
      hi: 'संस्थापक ड्रॉप। AXIS-01, BLUEPRINT-02, और पूरी टी + कार्गो लाइनअप। हर टुकड़ा क्रमांकित।',
    },
    releaseDate: '2026-08-01',
    status: 'upcoming',
    productIds: ['ok-axis-01', 'ok-blueprint-02', 'ok-void-tee-01', 'ok-realm-tee-02', 'ok-collapse-tee-03', 'ok-axis-cargo-01', 'ok-axis-cap-01', 'ok-stone-cap-02', 'ok-tote-01', 'ok-socks-01', 'ok-sticker-01'],
  },
  {
    id: 'drop-02',
    slug: 'hidden',
    name: 'HIDDEN',
    tagline: 'What You Almost Missed',
    description: {
      en: 'The hidden-text collection. UV-reactive tees, tone-on-tone prints, and the REALM-JOGGER-02.',
      hi: 'छिपे-पाठ संग्रह। UV-प्रतिक्रियाशील टी, समान-रंग प्रिंट, और REALM-JOGGER-02।',
    },
    releaseDate: '2026-09-01',
    status: 'upcoming',
    productIds: ['ok-hidden-tee-04', 'ok-realm-jogger-02'],
  },
  {
    id: 'drop-03',
    slug: 'eye',
    name: "KARMA'S EYE",
    tagline: 'It Sees What You Refuse To',
    description: {
      en: 'Concept 03 — the EYE-03 hoodie and companion pieces. Limited to 500 units.',
      hi: 'कॉन्सेप्ट 03 — EYE-03 हुडी और साथी टुकड़े। 500 इकाइयों तक सीमित।',
    },
    releaseDate: '2026-10-01',
    status: 'coming-soon',
    productIds: ['ok-eye-03'],
  },
]
