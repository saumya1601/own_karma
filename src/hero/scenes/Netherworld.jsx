export default function Netherworld({ progress }) {
    const start = 0.10
    const end = 0.19

    if (progress < start - 0.02 || progress > end + 0.02) return null

    const local = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    const opacity = local < 0.2 ? local / 0.2 : local > 0.8 ? (1 - local) / 0.2 : 1

    // Obsidian growth animation scales outward as scroll increases
    const terrainScale = 0.5 + local * 1.5

    return (
        <group position={[0, -1.2, 0]} scale={[terrainScale, 1, terrainScale]}>
            {/* Dark displaced grid mesh for the obsidian bed */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10, 20, 20]} />
                <meshStandardMaterial
                    color="#0A0A0C"
                    roughness={0.9}
                    metalness={0.8}
                    wireframe
                    transparent
                    opacity={opacity * 0.75}
                />
            </mesh>

            {/* Dynamic mist rising */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[8, 1, 8]} />
                <meshStandardMaterial
                    color="#1A1A1D"
                    transparent
                    opacity={opacity * 0.25}
                    wireframe
                />
            </mesh>
        </group>
    )
}
