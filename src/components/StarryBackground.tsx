import { useState, useEffect } from 'react';

interface StarryBackgroundProps {
  isDarkMode: boolean;
}

interface GlowEffect {
  id: number;
  initialX: number;
  initialY: number;
  size: number;
  color: string;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

export function StarryBackground({ isDarkMode }: StarryBackgroundProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    opacity: number;
    animationDelay: number;
    animationDuration: number;
  }>>([]);

  const [glowEffects, setGlowEffects] = useState<GlowEffect[]>([]);

  useEffect(() => {
    const colors = [
      '#60a5fa', // blue
      '#34d399', // emerald
      '#fbbf24', // amber
      '#f472b6', // pink
      '#a78bfa', // violet
      '#fb7185', // rose
      '#06b6d4', // cyan
      '#10b981', // emerald
    ];

    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 3 + 2,
    }));

    setParticles(newParticles);

    // Initialiser les effets de glow fixes qui bougent lentement
    const glowColors = ['blue', 'purple', 'emerald', 'pink'];
    const fixedGlows = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 70 + 15, // Entre 15% et 85%
      initialY: Math.random() * 70 + 15, // Entre 15% et 85%
      size: Math.random() * 150 + 200, // Entre 200px et 350px
      color: glowColors[i % glowColors.length],
      opacity: Math.random() * 0.015 + 0.008, // Très subtil : entre 0.008 et 0.023
      animationDelay: i * 5, // Décalage de 5s entre chaque glow
      animationDuration: Math.random() * 10 + 20, // Entre 20s et 30s pour un mouvement très lent
    }));

    setGlowEffects(fixedGlows);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Particules étoilées */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}, 0 0 ${particle.size * 8}px ${particle.color}40`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
      
      {/* Effets de glow fixes qui bougent lentement */}
      {glowEffects.map((glow) => (
        <div
          key={glow.id}
          className={`absolute rounded-full blur-3xl animate-slow-float bg-${glow.color}-${isDarkMode ? '500' : '400'}`}
          style={{
            left: `${glow.initialX}%`,
            top: `${glow.initialY}%`,
            width: `${glow.size}px`,
            height: `${glow.size}px`,
            opacity: glow.opacity,
            animationDelay: `${glow.animationDelay}s`,
            animationDuration: `${glow.animationDuration}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
