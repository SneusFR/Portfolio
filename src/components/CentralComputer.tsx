import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface CentralComputerProps {
  isSidebarOpen: boolean;
}

export function CentralComputer({ isSidebarOpen }: CentralComputerProps) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Charger le modèle 3D
  const { scene } = useGLTF('/computer.glb');
  
  // Animation de tapotement
  useFrame((state) => {
    if (isSidebarOpen) return; // ← Arrêter l'animation quand la sidebar est ouverte
    
    if (meshRef.current) {
      // Animation de rotation légère
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Animation de tapotement (mouvement vertical subtil)
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={[4, 4, 4]}>
      <primitive object={scene} />
      
      {/* Lumière directionnelle pour éclairer le modèle */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        castShadow={false}
      />
      
      {/* Lumière d'appoint */}
      <pointLight
        position={[-5, 5, 5]}
        intensity={0.3}
        color="#ffffff"
      />
    </group>
  );
}

// Précharger le modèle
useGLTF.preload('/computer.glb');
