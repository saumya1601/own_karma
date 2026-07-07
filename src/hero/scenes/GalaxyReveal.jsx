import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Spiral galaxy particle positions computed once at module load.
const GALAXY_COUNT = 8000
const GALAXY_POSITIONS = (() => {
    const arr = new Float32Array(GALAXY_COUNT * 3)
    for (let i = 0; i < GALAXY_COUNT; i++) {
        const r = 0.5 + Math.random() * 5
        const theta = r * 2.2 + (i % 3) * ((2 * Math.PI) / 3) + (Math.random() - 0.5) * 0.3
        arr[i * 3] = r * Math.sin(theta)
        arr[i * 3 + 1] = (Math.random() - 0.5) * 0.8
        arr[i * 3 + 2] = r * Math.cos(theta)
    }
    return arr
})()

export default function GalaxyReveal({ progress }) {
    const start = 0.67
    const end = 0.79

    const pointsRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    useEffect(() => {
        if (!inRange) return
        const onMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, [inRange])

    useFrame((_, delta) => {
        if (!inRange || !pointsRef.current) return
        // 1. Slow Y-rotation
        pointsRef.current.rotation.y += delta * 0.2
        // 2. Cursor-driven tilt
        const targetRotX = mouseRef.current.y * 0.15
        const targetRotZ = mouseRef.current.x * 0.15
        pointsRef.current.rotation.x += (targetRotX - pointsRef.current.rotation.x) * 0.05
        pointsRef.current.rotation.z += (targetRotZ - pointsRef.current.rotation.z) * 0.05
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    return (
        <group>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={GALAXY_COUNT}
                        array={GALAXY_POSITIONS}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#F3EFE7"
                    transparent
                    opacity={opacity * 0.9}
                    sizeAttenuation
                />
            </points>
        </group>
    )
}
