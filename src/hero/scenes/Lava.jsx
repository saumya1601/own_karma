import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Ember positions + speeds computed once at module load (pure at render).
const EMBER_COUNT = 200
const { EMBER_POS, EMBER_SPD } = (() => {
    const pos = new Float32Array(EMBER_COUNT * 3)
    const spd = new Float32Array(EMBER_COUNT)
    for (let i = 0; i < EMBER_COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 0.4
        pos[i * 3 + 1] = -1.2 + Math.random() * 2
        pos[i * 3 + 2] = (Math.random() - 0.5) * 2
        spd[i] = 0.4 + Math.random() * 0.8
    }
    return { EMBER_POS: pos, EMBER_SPD: spd }
})()

export default function Lava({ progress }) {
    const start = 0.48
    const end = 0.57

    const particlesRef = useRef(null)
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    useFrame((_, delta) => {
        if (!inRange || !particlesRef.current) return
        const positions = particlesRef.current.geometry.attributes.position.array
        for (let i = 0; i < EMBER_COUNT; i++) {
            const xIndex = i * 3
            const yIndex = i * 3 + 1

            // Embers rise
            positions[yIndex] += delta * EMBER_SPD[i]

            // Magnetically repelled away from the axis (x = 0)
            const x = positions[xIndex]
            const dir = x >= 0 ? 1 : -1
            const force = (0.6 / (Math.abs(x) + 0.1)) * delta
            positions[xIndex] += dir * force

            // Reset when ember rises past the top
            if (positions[yIndex] > 2.5) {
                positions[yIndex] = -1.2
                positions[xIndex] = (Math.random() - 0.5) * 0.4
                if (positions[xIndex] === 0) positions[xIndex] = 0.01
            }
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    return (
        <group>
            {/* Magma Bed at the bottom */}
            <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial
                    color="#B25141"
                    emissive="#D4A855"
                    emissiveIntensity={1.2}
                    roughness={0.8}
                    transparent
                    opacity={opacity}
                    wireframe
                />
            </mesh>

            {/* Repelled Volcanic Embers */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={EMBER_COUNT}
                        array={EMBER_POS}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05}
                    color="#D4A855"
                    transparent
                    opacity={opacity * 0.85}
                    sizeAttenuation
                />
            </points>
        </group>
    )
}
