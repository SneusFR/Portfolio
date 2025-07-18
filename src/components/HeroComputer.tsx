import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

interface BeardedModelProps {
  isDarkMode: boolean;
}

function BeardedModel({ isDarkMode }: BeardedModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/beared.glb');
  const { actions } = useAnimations(animations, meshRef);
  
  // Démarrer l'animation idle en boucle
  useEffect(() => {
    if (actions.idle) {
      actions.idle.reset().fadeIn(0.5).play();
      actions.idle.setLoop(THREE.LoopRepeat, Infinity);
    }
    
    return () => {
      if (actions.idle) {
        actions.idle.fadeOut(0.5);
      }
    };
  }, [actions]);

  // Animation subtile de rotation
  useFrame((state) => {
    if (meshRef.current) {
      // Rotation lente et continue
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.2}
      floatIntensity={0.15}
    >
      <group ref={meshRef} scale={[4, 4, 4]} position={[-10, -25, -60]}>
        <primitive object={scene} />
        
        {/* Éclairage principal */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={isDarkMode ? 0.8 : 0.6}
          color={isDarkMode ? "#ffffff" : "#f0f0f0"}
          castShadow
        />
        
        {/* Éclairage d'appoint coloré pour l'effet glow */}
        <pointLight
          position={[-3, 2, 3]}
          intensity={0.5}
          color={isDarkMode ? "#3b82f6" : "#6366f1"}
          distance={10}
        />
        
        <pointLight
          position={[3, -2, -3]}
          intensity={0.3}
          color={isDarkMode ? "#8b5cf6" : "#a855f7"}
          distance={8}
        />
        
        {/* Lumière ambiante */}
        <ambientLight intensity={isDarkMode ? 0.3 : 0.4} />
      </group>
    </Float>
  );
}

interface HeroComputerProps {
  isDarkMode: boolean;
}

export function HeroComputer({ isDarkMode }: HeroComputerProps) {
  return (
    <div className="relative w-full h-[500px] md:h-[650px]">
      {/* Effet glow en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glow principal */}
        <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
            : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
        }`} style={{ animationDuration: '4s' }} />
        
        {/* Glow secondaire */}
        <div className={`absolute w-80 h-80 rounded-full blur-2xl opacity-20 animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500' 
            : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400'
        }`} style={{ animationDelay: '1s', animationDuration: '5s' }} />
        
        {/* Glow tertiaire */}
        <div className={`absolute w-64 h-64 rounded-full blur-xl opacity-25 animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500' 
            : 'bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400'
        }`} style={{ animationDelay: '2s', animationDuration: '6s' }} />
      </div>
      
      {/* Effet morphing glass overlay */}
      <div className={`absolute inset-0 backdrop-blur-[1px] ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20' 
          : 'bg-gradient-to-br from-white/20 via-transparent to-gray-100/20'
      }`} />
      
      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        className="absolute inset-0 w-full h-full"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <BeardedModel isDarkMode={isDarkMode} />
          <Environment preset={isDarkMode ? "night" : "dawn"} />
        </Suspense>
      </Canvas>
      
      {/* Particules flottantes pour l'effet morphing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-30 animate-float ${
              isDarkMode ? 'bg-white' : 'bg-gray-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Précharger le modèle
useGLTF.preload('/beared.glb');
