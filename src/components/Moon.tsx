import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Moon as MoonType } from '../data';
import { rings, angularVelocities } from '../data';

interface MoonProps {
  moon: MoonType;
  onMoonSelect: (moon: MoonType) => void;
  isSidebarOpen: boolean;
  isHovered?: boolean;
}

export function Moon({ moon, onMoonSelect, isSidebarOpen, isHovered: isHoveredFromSidebar = false }: MoonProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mémoriser les valeurs constantes
  const radius = useMemo(() => rings[moon.ring], [moon.ring]);
  const angularVelocity = useMemo(() => angularVelocities[moon.ring], [moon.ring]);

  // Détecter si on est sur mobile (mémorisé)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint de Tailwind
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Callbacks mémorisés
  const handleDragStart = useCallback(() => setIsDragging(true), []);
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  }, []);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleClick = useCallback(() => onMoonSelect(moon), [onMoonSelect, moon]);

  // Animation frame optimisée
  useFrame((state) => {
    if (isSidebarOpen || isDragging) return; // Arrêter l'animation quand nécessaire
    
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const angle = moon.angle0 + angularVelocity * time;
      
      meshRef.current.position.x = radius * Math.cos(angle);
      meshRef.current.position.y = radius * Math.sin(angle);
      meshRef.current.position.z = 0;
    }
  });

  // Styles mémorisés
  const moonStyle = useMemo(() => ({
    backgroundColor: moon.color,
    boxShadow: `0 0 20px ${moon.color}40`,
  }), [moon.color]);

  const pulseStyle = useMemo(() => ({
    backgroundColor: moon.color
  }), [moon.color]);

  return (
    <mesh ref={meshRef}>
      <Html
        transform
        position={[0, 0, 0]}
        zIndexRange={[0, 20]}
        style={{
          pointerEvents: 'auto',
        }}
      >
        <motion.div
          drag={!isMobile}
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileHover={isMobile ? undefined : { scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: dragOffset.x,
            y: dragOffset.y,
            scale: isHoveredFromSidebar ? 1.15 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: isMobile ? 120 : 180, // Réduire la rigidité sur mobile
            damping: isMobile ? 25 : 20,
          }}
          className="relative cursor-pointer moon-element"
          role="button"
          aria-label={`Ouvrir les détails de ${moon.label}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
            {/* Cercle principal de la lune */}
            <div
              className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
              style={moonStyle}
            >
              <img
                src={moon.icon}
                alt={moon.label}
                className="w-6 h-6 filter drop-shadow-sm"
                draggable={false}
              />
            </div>

            {/* Label */}
            {isHovered && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                  {moon.label}
                </span>
              </div>
            )}

            {/* Effet de pulsation - désactivé sur mobile pour les performances */}
            {!isMobile && (
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={pulseStyle}
              />
            )}
        </motion.div>
      </Html>
    </mesh>
  );
}
