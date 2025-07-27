import { useState, useEffect } from 'react';
import type { Project } from '../data';

interface ProjectModalProps {
  project: Project & {
    category: string;
    categoryColor: string;
    categoryIcon: string;
    image?: string;
    demoUrl?: string;
    technicalSpecs?: {
      architecture: string;
      performance: string;
      security: string;
      scalability: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export function ProjectModal({ project, isOpen, onClose, isDarkMode }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isVisible || !project) return null;

  // Données par défaut pour les spécifications techniques
  const defaultSpecs = {
    architecture: "Architecture modulaire avec séparation des responsabilités",
    performance: "Optimisé pour des temps de réponse < 100ms",
    security: "Authentification JWT et validation des données",
    scalability: "Conçu pour supporter une montée en charge horizontale"
  };

  const specs = project.technicalSpecs || defaultSpecs;

  // Image par défaut basée sur la catégorie
  const getDefaultImage = (category: string) => {
    const images = {
      'Jeux-vidéo': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
      'Football': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop',
      'Piano': 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=400&fit=crop',
      'Node.js': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
      'UI/UX': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      'Animation': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop',
      'Vue.js': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      'Angular': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      'Svelte': 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
      'Next.js': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
      'Tailwind CSS': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      'React': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      'Python': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop',
      'Java': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop',
      'C#': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      'PHP': 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&h=400&fit=crop',
      'Go': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop',
      'Rust': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      'PostgreSQL': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
      'MySQL': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
      'MongoDB': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      'Redis': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      'Elasticsearch': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      'SQLite': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop'
    };
    return images[category as keyof typeof images] || 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop';
  };

  const projectImage = project.image || getDefaultImage(project.category);
  const demoUrl = project.demoUrl || `https://demo-${project.name.toLowerCase().replace(/\s+/g, '-')}.vercel.app`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
      {/* Backdrop avec glassmorphing */}
      <div
        className={`absolute inset-0 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } ${isDarkMode ? 'bg-black/50' : 'bg-white/30'}`}
        onClick={onClose}
        style={{ zIndex: 9998 }}
      />

      {/* Contenu de la modale */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-500 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        } ${
          isDarkMode
            ? 'bg-gray-900/80 border-gray-700/30'
            : 'bg-white/80 border-white/30'
        }`}
        style={{ zIndex: 10000 }}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 z-10 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-gray-800/60 border-gray-600/30 text-gray-300 hover:bg-gray-700/60 hover:text-white'
              : 'bg-white/60 border-gray-200/50 text-gray-700 hover:bg-white/80 hover:text-gray-900'
          }`}
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image d'illustration */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={projectImage}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Badge de catégorie sur l'image */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
              style={{ backgroundColor: `${project.categoryColor}20` }}
            >
              <img
                src={project.categoryIcon}
                alt={project.category}
                className="w-6 h-6 object-contain"
              />
            </div>
            <span
              className="text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 text-white"
              style={{
                backgroundColor: `${project.categoryColor}20`,
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-8">
          {/* En-tête du projet */}
          <div className="mb-8">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.name}
            </h2>
            
            <p
              className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gray-800/50 border-gray-600/30 text-gray-300'
                      : 'bg-white/70 border-gray-200/50 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fiche technique */}
          <div className="mb-8">
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Aspects Techniques
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(specs).map(([key, value]) => (
                <div
                  key={key}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gray-800/30 border-gray-700/30'
                      : 'bg-white/50 border-white/30'
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold mb-3 capitalize ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {key === 'architecture' && '🏗️ Architecture'}
                    {key === 'performance' && '⚡ Performance'}
                    {key === 'security' && '🔒 Sécurité'}
                    {key === 'scalability' && '📈 Évolutivité'}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border ${
                isDarkMode
                  ? 'bg-gray-800/60 border-gray-600/30 text-gray-300 hover:bg-gray-700/60 hover:text-white'
                  : 'bg-white/60 border-gray-200/50 text-gray-700 hover:bg-white/80 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Voir le code
            </a>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
