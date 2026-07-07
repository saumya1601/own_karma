import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useMediaCapability } from '../hooks/useMediaCapability.js'
import HeroVideoFallback from './fallback/HeroVideoFallback.jsx'
import HeroStaticFallback from './fallback/HeroStaticFallback.jsx'

// Import the 10 scene components
import VoidBirth from './scenes/VoidBirth.jsx'
import Netherworld from './scenes/Netherworld.jsx'
import Desert from './scenes/Desert.jsx'
import Water from './scenes/Water.jsx'
import Forest from './scenes/Forest.jsx'
import Lava from './scenes/Lava.jsx'
import IceShatter from './scenes/IceShatter.jsx'
import GalaxyReveal from './scenes/GalaxyReveal.jsx'
import SunIgnition from './scenes/SunIgnition.jsx'
import Lock from './scenes/Lock.jsx'

export default function HeroCanvas({ progress = 0 }) {
    const { isMobile, prefersReducedMotion, hasWebGL } = useMediaCapability()

    // Graceful fallback ladder
    if (isMobile) {
        return <HeroVideoFallback />
    }
    if (prefersReducedMotion || !hasWebGL) {
        return <HeroStaticFallback />
    }

    return (
        <Canvas
            className="absolute inset-0 w-full h-full"
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 1.5]} // optimized dpr for stable frame rates
            gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
        >
            <color attach="background" args={['#000000']} />
            <fog attach="fog" args={['#000000', 8, 20]} />

            {/* Realistic lighting environment */}
            <Environment preset="studio" background={false} />
            <ambientLight intensity={0.15} />

            {/* Dynamic light sources */}
            <directionalLight position={[5, 5, 5]} intensity={1.0} color="#F3EFE7" />
            <directionalLight position={[-5, 3, 2]} intensity={0.4} color="#D4A855" />
            <pointLight position={[0, 0, 2]} intensity={1.5} color="#D4A855" distance={10} decay={2} />

            <Suspense fallback={null}>
                {/* Core primitives present across all frames */}
                <AxisConstant progress={progress} />

                {/* Render all 10 collapsing realms. Opposing ranges calculate local animations. */}
                <VoidBirth progress={progress} />
                <Netherworld progress={progress} />
                <Desert progress={progress} />
                <Water progress={progress} />
                <Forest progress={progress} />
                <Lava progress={progress} />
                <IceShatter progress={progress} />
                <GalaxyReveal progress={progress} />
                <SunIgnition progress={progress} />
                <Lock progress={progress} />
            </Suspense>

            {/*
       * NOTE: EffectComposer (Bloom + Vignette) removed — it crashed with
       * "Cannot read properties of null (reading 'alpha')" when the browser
       * hit its WebGL-context limit (Hero + 3 ProductCard canvases + StrictMode
       * double-mount in dev). If bloom is wanted back later, wrap it in a
       * component that guards on `useThree().gl` being non-null before mounting.
       */}
        </Canvas>
    )
}

/**
 * Constant AxisLine — constant vertical golden cylinder, z=0.
 * Opacity and thickness respond subtly to the progression.
 */
function AxisConstant({ progress }) {
    const meshRef = useRef(null)

    // Subtle pulsing response on scroll
    const scale = 1.0 + Math.sin(progress * Math.PI) * 0.1
    const colorIntensity = progress >= 0.9 ? 1.5 : 2.5 // Softens during Lock resolution

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[scale, 1, 1]}>
            <cylinderGeometry args={[0.005, 0.005, 20, 8]} />
            <meshBasicMaterial color={[colorIntensity, 1.8 * scale, 0.9 * scale]} toneMapped={false} />
        </mesh>
    )
}

