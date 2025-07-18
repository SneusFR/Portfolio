import { useMemo } from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

interface OrbitPathProps {
  radius: number;
  color?: string;
  opacity?: number;
  segments?: number;
}

export function OrbitPath({
  radius,
  color = '#94a3b8',
  opacity = 0.25,
  segments = 128,
}: OrbitPathProps) {
  /* Points du cercle */
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        radius * Math.cos(t),
        radius * Math.sin(t),
        0
      ));
    }
    return pts;
  }, [radius, segments]);

  return (
    <Line
      points={points}
      color={color}
      transparent
      opacity={opacity}
      lineWidth={1} /* pris en compte seulement sur WebGL2 / haute‑dpi */
    />
  );
}
