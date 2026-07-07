import { Suspense, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, useGLTF } from '@react-three/drei'
import SafeImage from '../ui/SafeImage.jsx'
import Badge from '../ui/Badge.jsx'
import PriceINR from '../ui/PriceINR.jsx'
import { cn } from '../../lib/cn.js'

// Captured once at module load so render stays pure (React 19 compiler-lint).
// "New" badge freshness is anchored to session start — acceptable for our use case.
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000
const NEW_CUTOFF_MS = Date.now() - THIRTY_DAYS_MS

// Preload the one shared hoodie GLB so it's cached before the first card mounts.
useGLTF.preload('/models/hoodie.glb')

/**
 * ProductCard — grid cell for /shop and /shop/[category].
 *
 * Preview:
 *  - category 'hoodies' → 3D rotating hoodie (WebGL, rotates only on hover for perf)
 *  - everything else → SafeImage with placeholder fallback
 *
 * Auto-selects a badge from stock/release/serial state:
 *  - all sold out → 'sold-out'
 *  - serial remaining < 50 → 'last-few-left'
 *  - released within last 30 days → 'new'
 *  - otherwise no badge
 *
 * @param {Object} props
 * @param {import('../../schemas/product.js').Product} props.product
 * @param {string} [props.className]
 */
export default function ProductCard({ product, className }) {
    const [hovering, setHovering] = useState(false)

    const stockStates = Object.values(product.stock)
    const anyInStock = stockStates.some((s) => s === 'in-stock' || s === 'last-few-left')
    const allSoldOut = stockStates.length > 0 && stockStates.every((s) => s === 'sold-out')
    const releasedRecently = new Date(product.releasedAt).getTime() > NEW_CUTOFF_MS

    const badge = allSoldOut
        ? 'sold-out'
        : product.serial.remaining < 50
            ? 'last-few-left'
            : releasedRecently
                ? 'new'
                : null

    const has3DPreview = product.category === 'hoodies'

    return (
        <Link
            to={`/product/${product.slug}`}
            onPointerEnter={() => setHovering(true)}
            onPointerLeave={() => setHovering(false)}
            className={cn(
                'group relative flex flex-col',
                'transition-opacity duration-500 ease-ok',
                !anyInStock && 'opacity-60 hover:opacity-100',
                className,
            )}
            aria-label={`View ${product.name}`}
        >
            {/* Preview */}
            <div className="relative aspect-[4/5] bg-ok-obsidian overflow-hidden">
                {has3DPreview ? (
                    <Suspense
                        fallback={
                            <div className="absolute inset-0 bg-ok-obsidian/60 animate-pulse" />
                        }
                    >
                        <HoodieCardCanvas rotating={hovering} />
                    </Suspense>
                ) : (
                    <SafeImage
                        src={product.images.front}
                        alt={product.name}
                        className="h-full w-full transition-transform duration-[1200ms] ease-ok group-hover:scale-[1.03]"
                    />
                )}
                {badge && (
                    <div className="absolute top-3 left-3 z-10">
                        <Badge variant={badge} />
                    </div>
                )}
            </div>

            {/* Meta row */}
            <div className="pt-4 pb-2 flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ok-bone group-hover:text-ok-axis transition-colors duration-300 truncate">
                        {product.name}
                    </h3>
                    <p className="text-xs text-ok-dust mt-1 truncate">{product.subtitle}</p>
                </div>
                <PriceINR amount={product.priceINR} className="text-sm text-ok-bone shrink-0" />
            </div>
        </Link>
    )
}

/* Card-scale 3D scene wrapping the hoodie. Rotates only when hovering.
 * NOTE: Environment removed — the HDR fetch per card was contributing to
 * WebGL-context pressure. Fallback: brighter ambient + a stronger key light. */
function HoodieCardCanvas({ rotating }) {
    return (
        <Canvas
            className="absolute inset-0"
            camera={{ position: [0, 0.3, 3.2], fov: 40 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: false }}
        >
            <color attach="background" args={['#0A0A0C']} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 4]} intensity={1.8} color="#F3EFE7" />
            <directionalLight position={[-3, 2, 3]} intensity={0.9} color="#F3EFE7" />
            <pointLight position={[0, 1, -2]} intensity={3} color="#D4A855" distance={5} decay={2} />
            <HoodieMesh rotating={rotating} />
        </Canvas>
    )
}

/* Loads the shared hoodie GLB, deep-clones it (one THREE.Object3D can only live in one scene). */
function HoodieMesh({ rotating }) {
    const { scene } = useGLTF('/models/hoodie.glb')
    const clonedScene = useMemo(() => scene.clone(true), [scene])
    const ref = useRef(null)

    useFrame((state, delta) => {
        if (!ref.current) return
        // Auto-rotates at 0.25 speed, speeds up to 0.75 on hover
        const speed = rotating ? 0.75 : 0.25
        ref.current.rotation.y += delta * speed
        // Subtle premium floating/bobbing effect
        ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.04
    })

    return (
        <group ref={ref}>
            <Center>
                <primitive object={clonedScene} scale={1.4} />
            </Center>
        </group>
    )
}
