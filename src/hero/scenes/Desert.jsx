import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vert from '../shaders/hiddenText.vert.glsl'
import frag from '../shaders/hiddenText.frag.glsl'

// Precomputed sand-storm particle positions + speeds at module load (pure at render).
const SAND_COUNT = 400
const { SAND_POS, SAND_SPD } = (() => {
    const pos = new Float32Array(SAND_COUNT * 3)
    const spd = new Float32Array(SAND_COUNT)
    for (let i = 0; i < SAND_COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 6
        pos[i * 3 + 1] = (Math.random() - 0.5) * 4
        pos[i * 3 + 2] = (Math.random() - 0.5) * 6
        spd[i] = 0.5 + Math.random() * 1.5
    }
    return { SAND_POS: pos, SAND_SPD: spd }
})()

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

const SAND_COLOR = new THREE.Color('#9c733c')

export default function Desert({ progress }) {
    const start = 0.19
    const end = 0.29

    const groupRef = useRef(null)
    const particlesRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const inRange = progress >= start - 0.02 && progress <= end + 0.02

    // Stable uniforms object. R3F requires each uniform to be a { value } object BEFORE
    // <shaderMaterial> mounts. The React 19 compiler-lint sees this as immutable, but
    // three.js is designed around mutating uniform .value fields — the targeted disable
    // below opts out of the rule for that one legitimate mutation.
    const uniforms = useMemo(() => ({
        baseColor: { value: SAND_COLOR },
        textTexture: { value: TEXT_TEXTURE },
        opacity: { value: 0 },
        textStrength: { value: 0.15 },
    }), [])

    useEffect(() => {
        if (!inRange) return
        const onMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, [inRange])

    // useFrame mutates three.js uniform values — mutable by design, but the React 19
    // compiler-lint flags this as an immutability violation. Legitimate escape.
    // eslint-disable-next-line react-hooks/immutability
    useFrame((_, delta) => {
        if (!inRange) return

        // 0. Fade shader opacity smoothly across scene entry/exit
        const localFrame = Math.max(0, Math.min(1, (progress - start) / (end - start)))
        const op = localFrame < 0.2
            ? localFrame / 0.2
            : localFrame > 0.8 ? (1 - localFrame) / 0.2 : 1
        // eslint-disable-next-line react-hooks/immutability -- three.js uniforms are mutable by design
        uniforms.opacity.value = op * 0.8

        // 1. Cursor-driven dune tilt (±2°)
        if (groupRef.current) {
            const targetRotZ = mouseRef.current.x * ((2 * Math.PI) / 180)
            const targetRotX = mouseRef.current.y * ((2 * Math.PI) / 180)
            groupRef.current.rotation.z += (targetRotZ - groupRef.current.rotation.z) * 0.1
            groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.1
        }

        // 2. Swirling sand particles
        if (particlesRef.current) {
            const positions = particlesRef.current.geometry.attributes.position.array
            for (let i = 0; i < SAND_COUNT; i++) {
                const xIndex = i * 3
                const zIndex = i * 3 + 2
                const x = positions[xIndex]
                const z = positions[zIndex]
                const speed = SAND_SPD[i] * delta * 0.8
                positions[xIndex] = x * Math.cos(speed) - z * Math.sin(speed)
                positions[zIndex] = x * Math.sin(speed) + z * Math.cos(speed)
                positions[i * 3 + 1] += delta * 0.2
                if (positions[i * 3 + 1] > 2) positions[i * 3 + 1] = -2
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true
        }
    })

    if (!inRange) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    return (
        <group ref={groupRef}>
            {/* Dunes plane with custom OWN KARMA hidden-text shader */}
            <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[12, 12, 32, 32]} />
                <shaderMaterial
                    vertexShader={vert}
                    fragmentShader={frag}
                    uniforms={uniforms}
                    transparent
                    depthWrite={false}
                />
            </mesh>

            {/* Sand storm swirling particles */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={SAND_COUNT}
                        array={SAND_POS}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.03}
                    color="#D4A855"
                    transparent
                    opacity={opacity * 0.6}
                    sizeAttenuation
                />
            </points>
        </group>
    )
}
