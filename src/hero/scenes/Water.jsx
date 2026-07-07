import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Water({ progress }) {
    const start = 0.29
    const end = 0.38

    const meshRef = useRef(null)
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    // Hook is called unconditionally on every render; guard inside.
    useFrame((state, delta) => {
        if (!inRange || !meshRef.current) return
        // 1. Water rotates 360° around the Axis
        meshRef.current.rotation.y += delta * 1.5
        // 2. Liquid organic deformation
        const t = state.clock.getElapsedTime()
        meshRef.current.scale.set(
            1.2 + Math.sin(t * 1.8) * 0.08,
            1.2 + Math.cos(t * 1.4) * 0.08,
            1.2 + Math.sin(t * 2.2) * 0.08,
        )
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    return (
        <group>
            {/* Refractive Water Sphere */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <icosahedronGeometry args={[1.5, 3]} />
                <meshPhysicalMaterial
                    color="#a3c1ad"
                    roughness={0.1}
                    metalness={0.1}
                    transmission={0.9}
                    thickness={1.8}
                    ior={1.333}
                    transparent
                    opacity={opacity}
                    depthWrite={false}
                />
            </mesh>
        </group>
    )
}
