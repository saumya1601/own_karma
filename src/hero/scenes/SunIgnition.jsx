import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function SunIgnition({ progress }) {
    const start = 0.79
    const end = 0.90

    const ring1Ref = useRef(null)
    const ring2Ref = useRef(null)
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    useFrame((_, delta) => {
        if (!inRange) return
        if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 1.2
        if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.8
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1
    const scale = 0.1 + local * 1.5

    return (
        <group scale={[scale, scale, scale]}>
            {/* Sudarshan Outer Ring */}
            <mesh ref={ring1Ref}>
                <torusGeometry args={[1.2, 0.03, 8, 48]} />
                <meshBasicMaterial
                    color={[4.5, 3.2, 1.2]}
                    toneMapped={false}
                    wireframe
                    transparent
                    opacity={opacity}
                />
            </mesh>

            {/* Inner Concentric Ring */}
            <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
                <ringGeometry args={[0.6, 0.7, 8]} />
                <meshBasicMaterial
                    color={[3.5, 2.4, 0.8]}
                    toneMapped={false}
                    transparent
                    opacity={opacity * 0.8}
                    wireframe
                />
            </mesh>

            {/* Volumetric Center Sun Core */}
            <mesh>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshBasicMaterial
                    color={[5.0, 3.6, 1.4]}
                    toneMapped={false}
                    transparent
                    opacity={opacity * 0.9}
                />
            </mesh>
        </group>
    )
}
