import { moons, type Moon as MoonType, rings } from '../data';
import { Moon } from './Moon';
import { OrbitPath } from './OrbitPath';

interface OrbitRingsProps {
  onMoonSelect: (moon: MoonType) => void;
  isSidebarOpen: boolean;
  hoveredSkill: string | null;
}

export function OrbitRings({ onMoonSelect, isSidebarOpen, hoveredSkill }: OrbitRingsProps) {
  /* On convertit l’objet « rings » en tableau de rayons numériques */
  const orbitRadii = Object.values(rings); // => [3, 5, 7, 9]

  return (
    <group>
      {/* Chemins d’orbite */}
      {orbitRadii.map((r, idx) => (
        <OrbitPath
          key={`orbit-${idx}`}
          radius={r}
          color="#94a3b8"
          opacity={0.25}
        />
      ))}

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
}
