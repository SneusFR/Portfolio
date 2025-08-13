import { useMemo, memo } from 'react';
import { moons, type Moon as MoonType, rings } from '../data';
import { Moon } from './Moon';
import { OrbitPath } from './OrbitPath';

interface OrbitRingsProps {
  onMoonSelect: (moon: MoonType) => void;
  isSidebarOpen: boolean;
  hoveredSkill: string | null;
}

export const OrbitRings = memo(function OrbitRings({ onMoonSelect, isSidebarOpen, hoveredSkill }: OrbitRingsProps) {
  // Mémoriser les rayons d'orbite
  const orbitRadii = useMemo(() => Object.values(rings), []);

  // Mémoriser les chemins d'orbite
  const orbitPaths = useMemo(() => 
    orbitRadii.map((r, idx) => (
      <OrbitPath
        key={`orbit-${idx}`}
        radius={r}
        color="#94a3b8"
        opacity={0.25}
      />
    )), [orbitRadii]
  );

  return (
    <group>
      {/* Chemins d'orbite */}
      {orbitPaths}

      {/* Lunes interactives */}
      {moons.map((moon) => (
        <Moon
          key={moon.id}
          moon={moon}
          onMoonSelect={onMoonSelect}
          isSidebarOpen={isSidebarOpen}
          isHovered={hoveredSkill === moon.id}
        />
      ))}
    </group>
  );
});
