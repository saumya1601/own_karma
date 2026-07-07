import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, useGLTF } from '@react-three/drei'

export default function Lock({ progress }) {
    const start = 0.90
    const end = 1.00

    const groupRef = useRef(null)
    const { scene } = useGLTF('/models/hoodie.glb')
    const clonedScene = useMemo(() => scene.clone(true), [scene])
    const inRange = progress >= start - 0.02

    useFrame((state, delta) => {
        if (!inRange || !groupRef.current) return
        // 1. Slow, inevitable rotation
        groupRef.current.rotation.y += delta * 0.25
        // 2. Gentle vertical hover float
        const t = state.clock.getElapsedTime()
        groupRef.current.position.y = Math.sin(t * 0.8) * 0.04
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const scale = local * 1.5

    return (
        <group ref={groupRef} scale={[scale, scale, scale]} position={[0, 0.2, 0]}>
            <Center>
                <primitive object={clonedScene} />
            </Center>
        </group>
    )
}
