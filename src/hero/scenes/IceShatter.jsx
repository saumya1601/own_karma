import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vert from '../shaders/hiddenText.vert.glsl'
import frag from '../shaders/hiddenText.frag.glsl'

// Procedural OWN KARMA text texture built once at module load.
const TEXT_TEXTURE = (() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, 512, 128)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 50px monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('OWN KARMA', 256, 64)
    return new THREE.CanvasTexture(canvas)
})()

const ICE_COLOR = new THREE.Color('#d4efff')

const CRYSTALS = [
    { pos: [-1.2, 0.6, -0.5], rot: [0.2, 0.4, 0.5] },
    { pos: [1.2, -0.6, -0.5], rot: [0.5, -0.2, 0.2] },
    { pos: [-0.8, -1.0, 0.5], rot: [-0.4, 0.6, -0.2] },
    { pos: [0.8, 1.0, 0.5], rot: [0.1, -0.5, 0.6] },
]

export default function IceShatter({ progress }) {
    const start = 0.57
    const end = 0.67

    const groupRef = useRef(null)
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    // Stable uniforms object shared across all 4 crystals — they fade together.
    // useMemo gives us a stable object safe to read during render; mutation in useFrame
    // requires a targeted disable of the immutability rule (three.js pattern).
    const uniforms = useMemo(() => ({
        baseColor: { value: ICE_COLOR },
        textTexture: { value: TEXT_TEXTURE },
        opacity: { value: 0 },
        textStrength: { value: 0.25 },
    }), [])

    useFrame(() => {
        if (!inRange) return
        const localFrame = Math.max(0, Math.min(1, (progress - start) / (end - start)))
        const op = localFrame < 0.2
            ? localFrame / 0.2
            : localFrame > 0.8 ? (1 - localFrame) / 0.2 : 1
        // eslint-disable-next-line react-hooks/immutability -- three.js uniforms are mutable by design
        uniforms.opacity.value = op * 0.7
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const scale = 0.2 + local * 1.2

    return (
        <group ref={groupRef} scale={[scale, scale, scale]}>
            {CRYSTALS.map((c, i) => (
                <mesh key={i} position={c.pos} rotation={c.rot}>
                    <octahedronGeometry args={[0.4, 0]} />
                    <shaderMaterial
                        vertexShader={vert}
                        fragmentShader={frag}
                        uniforms={uniforms}
                        transparent
                        depthWrite={false}
                    />
                </mesh>
            ))}
        </group>
    )
}
