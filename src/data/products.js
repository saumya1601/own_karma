/** @typedef {import('../schemas/product.js').Product} Product */

/**
 * OWN KARMA v2 catalog — 4 SKUs (client trim, 2026-07-07).
 * See `_document/requirement2.md §10 "Catalog Reset (v2 — 4 SKUs)"`.
 *
 * Client mapping (WhatsApp, Devraj Bhai):
 *   • Hoodie 1 — "Devin — the Blueprint"   →  BLUEPRINT-02  (concept 02)
 *   • Hoodie 2 — "Karma's Eye"             →  EYE-03        (concept 03)
 *   • Tee    1 — "Destiny"                 →  DESTINY-04    (concept 04)
 *   • Tee    2 — "Broken Hourglass"        →  HOURGLASS-05  (concept 05)
 *
 * Image paths point to `/images/products/[slug]/*.avif`. All are placeholder
 * paths — real photography is delivered by the client and dropped into
 * `/public/images/products/` (the folder tree is created only when the assets
 * arrive; missing paths gracefully fall back to `/images/placeholder.svg`
 * via <SafeImage>).
 *
 * @type {Product[]}
 */
export const products = [
  // ─── HOODIES (2) ──────────────────────────────────────────────────────
  {
    id: 'ok-blueprint-02',
    slug: 'blueprint-02-hoodie',
    name: 'BLUEPRINT-02',
    category: 'hoodies',
    concept: 2,
    subtitle: 'The Divine Blueprint',
    priceINR: 5499,
    images: {
      front: '/images/products/blueprint-02-hoodie/front.avif',
      back: '/images/products/blueprint-02-hoodie/back.avif',
      detail: '/images/products/blueprint-02-hoodie/detail.avif',
      hiddenText: '/images/products/blueprint-02-hoodie/hidden.avif',
      lifestyle: '/images/products/blueprint-02-hoodie/lifestyle.avif',
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 'in-stock', M: 'in-stock', L: 'in-stock', XL: 'in-stock', XXL: 'last-few-left' },
    serial: { prefix: 'OK-BLPT', total: 800, remaining: 612 },
    modelPath: '/models/classic_black_flame_hoodie.glb',
    materials: ['480 GSM organic cotton', 'Tonal blueprint grid print on inner lining', 'Matte black hardware'],
    care: ['Cold wash inside out', 'No tumble dry', 'Do not iron print'],
    description: {
      en: 'Blueprint geometry hidden inside the lining. The structure you carry but never show.',
      hi: 'ब्लूप्रिंट ज्यामिति अस्तर के अंदर छिपी है। वह संरचना जो आप ढोते हैं पर कभी दिखाते नहीं।',
    },
    releasedAt: '2026-08-01',
    featured: true,
  },
  {
    id: 'ok-eye-03',
    slug: 'eye-03-hoodie',
    name: 'EYE-03',
    category: 'hoodies',
    concept: 3,
    subtitle: "Karma's Eye",
    priceINR: 5499,
    images: {
      front: '/images/products/eye-03-hoodie/front.avif',
      back: '/images/products/eye-03-hoodie/back.avif',
      detail: '/images/products/eye-03-hoodie/detail.avif',
      hiddenText: '/images/products/eye-03-hoodie/hidden.avif',
      lifestyle: '/images/products/eye-03-hoodie/lifestyle.avif',
    },
    sizes: ['M', 'L', 'XL'],
    stock: { M: 'in-stock', L: 'in-stock', XL: 'in-stock' },
    serial: { prefix: 'OK-EYE', total: 500, remaining: 500 },
    modelPath: '/models/gray_hoodie.glb',
    materials: ['500 GSM organic cotton', 'Reflective eye detail on hood', 'Hidden neck-tape serial'],
    care: ['Cold wash inside out', 'No tumble dry', 'Do not iron print'],
    description: {
      en: 'A single reflective eye on the hood. It sees what you refuse to.',
      hi: 'हुड पर एक एकल परावर्तक आँख। यह वह देखती है जो आप देखने से इनकार करते हैं।',
    },
    releasedAt: '2026-10-01',
    featured: true,
  },

  // ─── TEES (2) ─────────────────────────────────────────────────────────
  {
    id: 'ok-destiny-04',
    slug: 'destiny-04-tee',
    name: 'DESTINY-04',
    category: 'tees',
    concept: 4,
    subtitle: 'The Walls You Call Reality',
    priceINR: 2499,
    images: {
      front: '/images/products/destiny-04-tee/front.avif',
      back: '/images/products/destiny-04-tee/back.avif',
      detail: '/images/products/destiny-04-tee/detail.avif',
      hiddenText: '/images/products/destiny-04-tee/hidden.avif',
      lifestyle: '/images/products/destiny-04-tee/lifestyle.avif',
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 'in-stock', S: 'in-stock', M: 'in-stock', L: 'last-few-left', XL: 'in-stock' },
    serial: { prefix: 'OK-DST', total: 1000, remaining: 743 },
    materials: ['240 GSM combed cotton', 'Blueprint-line back print', 'Neck-tape serial'],
    care: ['Machine wash cold', 'Tumble dry low', 'Do not iron print'],
    description: {
      en: 'The walls you call reality — printed in tone-on-tone lines that only reveal themselves in direct light. Destiny begins when you stop noticing what contains you.',
      hi: 'जिन दीवारों को आप सच्चाई कहते हैं — समान-रंग की रेखाओं में छपी, जो केवल सीधी रोशनी में दिखती हैं। नियति तब शुरू होती है जब आप ध्यान देना छोड़ देते हैं कि क्या आपको घेरे हुए है।',
    },
    releasedAt: '2026-08-01',
    featured: true,
  },
  {
    id: 'ok-hourglass-05',
    slug: 'hourglass-05-tee',
    name: 'HOURGLASS-05',
    category: 'tees',
    concept: 5,
    subtitle: 'Break the Frame',
    priceINR: 2499,
    images: {
      front: '/images/products/hourglass-05-tee/front.avif',
      back: '/images/products/hourglass-05-tee/back.avif',
      detail: '/images/products/hourglass-05-tee/detail.avif',
      hiddenText: '/images/products/hourglass-05-tee/hidden.avif',
      lifestyle: '/images/products/hourglass-05-tee/lifestyle.avif',
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 'in-stock', M: 'in-stock', L: 'in-stock', XL: 'in-stock', XXL: 'in-stock' },
    serial: { prefix: 'OK-HRG', total: 1000, remaining: 928 },
    materials: ['240 GSM combed cotton', 'Shattered-hourglass chest graphic', 'Reinforced neck seam'],
    care: ['Machine wash cold', 'Tumble dry low', 'Do not iron print'],
    description: {
      en: 'A shattered hourglass across the chest. Sand frozen mid-fall. Time was never infinite — you are.',
      hi: 'छाती पर एक टूटी हुई घड़ी। बीच गिरती रेत जमी हुई। समय कभी अनंत नहीं था — आप हैं।',
    },
    releasedAt: '2026-08-01',
    featured: true,
  },
]
