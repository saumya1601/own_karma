import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Leaf positions computed once at module load (pure at render).
const LEAF_COUNT = 150
const LEAF_POSITIONS = (() => {
    const pos = new Float32Array(LEAF_COUNT * 3)
    for (let i = 0; i < LEAF_COUNT; i++) {
        // Keep away from the center (x=0) to respect the "never touch human" rule
        const side = Math.random() > 0.5 ? 1 : -1
        pos[i * 3] = (1.2 + Math.random() * 2) * side
        pos[i * 3 + 1] = (Math.random() - 0.5) * 4
        pos[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    return pos
})()

export default function Forest({ progress }) {
    const start = 0.38
    const end = 0.48

    const leavesRef = useRef(null)
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    useFrame((state, delta) => {
        if (!inRange || !leavesRef.current) return
        // Faint micro-float (frozen leaves breathing)
        const positions = leavesRef.current.geometry.attributes.position.array
        const t = state.clock.getElapsedTime()
        for (let i = 0; i < LEAF_COUNT; i++) {
            positions[i * 3 + 1] += Math.sin(t + i) * delta * 0.05
        }
        leavesRef.current.geometry.attributes.position.needsUpdate = true
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    return (
        <group>
            {/* Stylized low-poly tree trunks framing the center */}
            <group>
                {/* Left Tree */}
                <mesh position={[-2.2, 0, -1]}>
                    <cylinderGeometry args={[0.15, 0.25, 6, 6]} />
                    <meshStandardMaterial
                        color="#141416"
                        roughness={0.9}
                        transparent
                        opacity={opacity}
                    />
                </mesh>

                {/* Right Tree */}
                <mesh position={[2.2, 0, -1]}>
                    <cylinderGeometry args={[0.15, 0.25, 6, 6]} />
                    <meshStandardMaterial
                        color="#141416"
                        roughness={0.9}
                        transparent
                        opacity={opacity}
                    />
                </mesh>
            </group>

            {/* Frozen Leaf Particles */}
            <points ref={leavesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={LEAF_COUNT}
                        array={LEAF_POSITIONS}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.06}
                    color="#a3b899"
                    transparent
                    opacity={opacity * 0.7}
                    sizeAttenuation
                />
            </points>
        </group>
    )
}
