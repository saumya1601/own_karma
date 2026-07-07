/**
 * Upcoming drops data — for the /waitlist page (§6.6).
 * v2 catalog (2026-07-07): only 4 SKUs exist. See `_document/requirement2.md §10`.
 * In v1 these are hardcoded. In v2 they come from a CMS.
 */
export const drops = [
    {
        id: 'drop-01',
        slug: 'genesis',
        name: 'GENESIS',
        tagline: 'The First Collapse',
        description: {
            en: 'The founding drop. Blueprint hoodie, Karma\'s Eye hoodie, and the Destiny + Broken Hourglass tees. Every piece serialized.',
            hi: 'संस्थापक ड्रॉप। ब्लूप्रिंट हुडी, कर्मा की आँख हुडी, और डेस्टिनी + टूटी घड़ी टी। हर टुकड़ा क्रमांकित।',
        },
        releaseDate: '2026-08-01',
        status: 'upcoming',
        productIds: ['ok-blueprint-02', 'ok-destiny-04', 'ok-hourglass-05'],
    },
    {
        id: 'drop-03',
        slug: 'eye',
        name: "KARMA'S EYE",
        tagline: 'It Sees What You Refuse To',
        description: {
            en: 'Concept 03 — the EYE-03 hoodie. Limited to 500 units.',
            hi: 'कॉन्सेप्ट 03 — EYE-03 हुडी। 500 इकाइयों तक सीमित।',
        },
        releaseDate: '2026-10-01',
        status: 'coming-soon',
        productIds: ['ok-eye-03'],
    },
]
