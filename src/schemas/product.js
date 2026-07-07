/**
 * Product data schema — §8.
 * JSDoc typedefs for editor IntelliSense.
 * Optional zod runtime validation below.
 */

/** @typedef {'hoodies' | 'tees' | 'pants' | 'caps' | 'accessories'} Category */
/** @typedef {'in-stock' | 'last-few-left' | 'sold-out' | 'coming-soon'} StockState */
/** @typedef {'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'ONE-SIZE'} Size */

/**
 * @typedef {Object} ProductImages
 * @property {string} front
 * @property {string} back
 * @property {string} detail
 * @property {string} hiddenText   - macro of shader-etched serial texture
 * @property {string} lifestyle
 */

/**
 * @typedef {Object} ProductColor
 * @property {string} name
 * @property {string} hex
 */

/**
 * @typedef {Object} ProductSerial
 * @property {string} prefix       - e.g. 'OK-AXIS'
 * @property {number} total        - e.g. 1000
 * @property {number} remaining    - hardcoded, drives 'last-few-left' badge if < 50
 */

/**
 * @typedef {Object} ProductDescription
 * @property {string} en
 * @property {string} hi
 */

/**
 * @typedef {Object} Product
 * @property {string} id                        - e.g. 'ok-axis-01'
 * @property {string} slug                      - e.g. 'axis-01-hoodie'
 * @property {string} name                      - e.g. 'AXIS-01'
 * @property {Category} category
 * @property {1|2|3|4|5|null} concept           - link to own_karma.md concept
 * @property {string} subtitle                  - e.g. 'The Axis Through All Realms'
 * @property {number} priceINR                  - integer rupees, no decimals
 * @property {ProductImages} images
 * @property {Size[]} sizes
 * @property {ProductColor[]} [colors]
 * @property {Object<string, StockState>} stock - keyed by Size
 * @property {ProductSerial} serial
 * @property {string} [modelPath]               - optional path to 3D GLB model
 * @property {string[]} materials               - e.g. ['500 GSM organic cotton', 'YKK metal hardware']
 * @property {string[]} care
 * @property {ProductDescription} description
 * @property {string} releasedAt                - ISO date
 * @property {boolean} featured
 */

// ---------- Zod schema for dev-mode validation ----------
import { z } from 'zod'

export const CategoryEnum = z.enum(['hoodies', 'tees', 'pants', 'caps', 'accessories'])
export const StockStateEnum = z.enum(['in-stock', 'last-few-left', 'sold-out', 'coming-soon'])
export const SizeEnum = z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'ONE-SIZE'])

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: CategoryEnum,
  concept: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.null()]),
  subtitle: z.string(),
  priceINR: z.number().int().positive(),
  images: z.object({
    front: z.string(),
    back: z.string(),
    detail: z.string(),
    hiddenText: z.string(),
    lifestyle: z.string(),
  }),
  sizes: z.array(SizeEnum),
  colors: z.array(z.object({ name: z.string(), hex: z.string() })).optional(),
  // Products only carry stock entries for sizes they actually offer, so this is a partial record.
  // (Zod 4's z.record requires ALL enum keys; z.partialRecord allows a subset.)
  stock: z.partialRecord(SizeEnum, StockStateEnum),
  serial: z.object({
    prefix: z.string(),
    total: z.number().int().positive(),
    remaining: z.number().int().nonnegative(),
  }),
  modelPath: z.string().optional(),
  materials: z.array(z.string()),
  care: z.array(z.string()),
  description: z.object({
    en: z.string(),
    hi: z.string(),
  }),
  releasedAt: z.string(),
  featured: z.boolean(),
})

export const ProductsArraySchema = z.array(ProductSchema)
