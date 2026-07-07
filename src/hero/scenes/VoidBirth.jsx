export default function VoidBirth({ progress }) {
    const start = 0.00
    const end = 0.10

    if (progress > end) return null

    // Local progress calculation (0 to 1)
    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))

    // Fade in at the start, fade out towards the Netherworld transition
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    return (
        <group>
            {/* Volumetric void atmosphere */}
            <mesh position={[0, 0, -2]}>
                <sphereGeometry args={[8, 32, 32]} />
                <meshBasicMaterial
                    color="#050505"
                    transparent
                    opacity={opacity * 0.4}
                    side={1} // BackSide rendering
                />
            </mesh>
        </group>
    )
}
