import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Moon } from '../data';

interface SkillDialogProps {
  moon: Moon;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SkillDialog({ moon, children, isOpen, onOpenChange }: SkillDialogProps) {
  const [mounted, setMounted] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number>();

  // Mémoriser les positions des particules pour éviter les recalculs
  const particlePositions = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({ // Réduit de 20 à 8 particules
      x: Math.random() * 384,
      y: Math.random() * 128,
      delay: Math.random() * 2
    })), []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Gérer la détection du scroll pour désactiver les animations hover
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    
    // Réactiver les animations hover après 150ms d'inactivité
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, []);

  // Activer les particules après un délai pour éviter la surcharge initiale
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowParticles(true), 800);
      return () => clearTimeout(timer);
    } else {
      setShowParticles(false);
    }
  }, [isOpen]);

  // Ajouter l'event listener pour le scroll
  useEffect(() => {
    if (isOpen) {
      const scrollContainer = document.querySelector('.skill-dialog-scroll');
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
        };
      }
    }
  }, [isOpen, handleScroll]);

  const handleClick = () => {
    onOpenChange(true);
  };

  if (!mounted) return null;

  return (
    <>
      <div onClick={handleClick}>
        {children}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'tween',
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed top-0 right-0 h-screen w-[500px] sm:w-[450px] bg-gradient-to-br from-white to-gray-50 border-l border-white/20 shadow-2xl z-50 backdrop-blur-md"
            style={{
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.1), -10px 0 30px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Header avec effet de couleur */}
            <div 
              className="relative h-32 flex items-end p-6 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${moon.color}15, ${moon.color}05)`
              }}
            >
              {/* Effet de particules en arrière-plan - optimisé */}
              {showParticles && (
                <div className="absolute inset-0 opacity-15">
                  {particlePositions.map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{ 
                        backgroundColor: moon.color,
                        willChange: 'opacity, transform'
                      }}
                      initial={{ 
                        x: particle.x,
                        y: particle.y,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{ 
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}


              {/* Titre et icône */}
              <div className="flex items-center space-x-4 z-10">
                <motion.div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: moon.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
                >
                  <img 
                    src={moon.icon} 
                    alt={moon.label}
                    className="w-6 h-6 filter brightness-0 invert"
                  />
                </motion.div>
                
                <div>
                  <motion.h2 
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {moon.label}
                  </motion.h2>
                  <motion.span 
                    className="text-sm font-medium px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: moon.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {moon.ring.charAt(0).toUpperCase() + moon.ring.slice(1)}
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto skill-dialog-scroll" style={{ maxHeight: 'calc(100vh - 128px)' }}>
              <div className="p-6 space-y-8 pb-12">
                {/* Expérience et Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="section-container"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="section-title">
                      Expérience
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: moon.color }}
                      />
                      <span className="text-xl font-bold" style={{ color: moon.color }}>
                        {moon.experience}
                      </span>
                    </div>
                  </div>
                  
                  {/* Barre d'expérience */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Niveau d'expertise
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {moon.ring === 'passion' ? '95%' : moon.ring === 'frontend' ? '90%' : moon.ring === 'backend' ? '85%' : '80%'}
                      </span>
                    </div>
                    
                    {/* Labels des niveaux */}
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Très faible</span>
                      <span>Faible</span>
                      <span>Bien</span>
                      <span>Très bien</span>
                    </div>
                    
                    <div className="relative w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      {/* Séparations visuelles */}
                      <div className="absolute inset-0 flex items-center">
                        {/* Séparation à 20% */}
                        <div className="absolute left-[20%] w-0.5 h-3 bg-white/60 rounded-full"></div>
                        {/* Séparation à 40% */}
                        <div className="absolute left-[40%] w-0.5 h-3 bg-white/60 rounded-full"></div>
                        {/* Séparation à 60% */}
                        <div className="absolute left-[60%] w-0.5 h-3 bg-white/60 rounded-full"></div>
                        {/* Séparation à 80% */}
                        <div className="absolute left-[80%] w-0.5 h-3 bg-white/60 rounded-full"></div>
                      </div>
                      
                      <motion.div
                        className="h-3 rounded-full shadow-sm relative z-10"
                        style={{ 
                          backgroundColor: moon.color,
                          boxShadow: `0 2px 8px ${moon.color}40`
                        }}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: moon.ring === 'passion' ? '95%' : moon.ring === 'frontend' ? '90%' : moon.ring === 'backend' ? '85%' : '80%'
                        }}
                        transition={{ delay: 0.6, duration: 1.5, ease: 'easeOut' }}
                      />
                    </div>
                    
                    {/* Marqueurs de pourcentage */}
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0%</span>
                      <span>20%</span>
                      <span>40%</span>
                      <span>60%</span>
                      <span>80%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {moon.description}
                  </p>
                </motion.div>

                {/* Compétences */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="section-container"
                >
                  <h3 className="section-title">
                    Compétences
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {moon.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-lg shadow-md border-2 cursor-default inline-block ${
                          isScrolling 
                            ? 'transition-none' 
                            : 'transition-all duration-300 hover:scale-105 hover:shadow-lg'
                        }`}
                        style={{ 
                          backgroundColor: moon.color,
                          borderColor: `${moon.color}80`,
                          color: 'white',
                          boxShadow: `0 4px 12px ${moon.color}25`
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.7 + index * 0.05, 
                          duration: 0.3,
                          ease: 'easeOut'
                        }}
                        whileHover={!isScrolling ? { 
                          scale: 1.08,
                          boxShadow: `0 6px 20px ${moon.color}35`
                        } : {}}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Projets GitHub */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="section-container"
                >
                  <h3 className="section-title">
                    Projets GitHub
                  </h3>
                  <div className="space-y-4">
                    {moon.detailedProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        {/* Séparateur entre les projets */}
                        {index > 0 && <div className="project-separator"></div>}
                        
                    <div className="project-card -mx-1 px-0 py-5 sm:px-0">                          {/* En-tête compact */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 mb-1">
                                {project.name}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: moon.color }}
                                />
                                <span className="text-xs font-medium text-gray-500">
                                  Open Source
                                </span>
                              </div>
                            </div>
                            
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-link"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              <span>GitHub</span>
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          
                          {/* Description compacte */}
                          <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                            {project.description}
                          </p>
                          
                          {/* Technologies compactes */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="tech-tag"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Autres réalisations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="section-container"
                >
                  <h3 className="section-title">
                    Autres réalisations
                  </h3>
                  <div className="grid gap-3">
                    {moon.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="achievement-item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.03 }}
                      >
                        <div 
                          className="achievement-dot"
                          style={{ backgroundColor: moon.color }}
                        />
                        <span className="text-gray-700 font-medium">
                          {project}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
