import { useState, useEffect } from 'react';

interface StarryBackgroundProps {
  isDarkMode: boolean;
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
      
      {/* Effets de glow subtils et uniformes */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 animate-pulse ${
        isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
      }`} style={{ animationDelay: '0s', animationDuration: '8s' }} />
      
      <div className={`absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-6 animate-pulse ${
        isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
      }`} style={{ animationDelay: '2s', animationDuration: '10s' }} />
      
      <div className={`absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-4 animate-pulse ${
        isDarkMode ? 'bg-emerald-500' : 'bg-emerald-400'
      }`} style={{ animationDelay: '4s', animationDuration: '12s' }} />
      
      <div className={`absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-3 animate-pulse ${
        isDarkMode ? 'bg-pink-500' : 'bg-pink-400'
      }`} style={{ animationDelay: '6s', animationDuration: '9s' }} />
    </div>
  );
}
