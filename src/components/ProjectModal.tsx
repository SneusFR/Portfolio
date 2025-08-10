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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.classList.remove('modal-open');
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


  const demoUrl = project.demoUrl || `https://demo-${project.name.toLowerCase().replace(/\s+/g, '-')}.vercel.app`;

  // Images du carrousel spécifiques à chaque projet
  const getCarouselImages = (projectName: string): string[] => {
    switch (projectName.toLowerCase()) {
      case 'tetris revolution':
        return [
          '/src/assets/tetrismin1.png',
          '/src/assets/tetrismin2.png',
          '/src/assets/tetrismin3.png',
          '/src/assets/tetrismin4.png',
          '/src/assets/tetrismin5.png',
        ];
      case 'mailflow':
        return [
          '/src/assets/MailFlow.png',
          '/src/assets/MailFlow.png', // Pour le moment on répète la même image
          '/src/assets/MailFlow.png',
          '/src/assets/MailFlow.png',
          '/src/assets/MailFlow.png',
        ];
      case 'isfce cafet':
        return [
          '/src/assets/Cafetmenu.jpg',
          '/src/assets/Cafetmenu.jpg', // Pour le moment on répète la même image
          '/src/assets/Cafetmenu.jpg',
          '/src/assets/Cafetmenu.jpg',
          '/src/assets/Cafetmenu.jpg',
        ];
      default:
        // Images par défaut pour les autres projets
        return [
          '/src/assets/tetris.png',
          '/src/assets/MailFlow.png',
          '/src/assets/Cafetmenu.jpg',
          '/src/assets/tetris.png',
          '/src/assets/MailFlow.png',
        ];
    }
  };

  const carouselImages = getCarouselImages(project.name);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const openEnlargedImage = () => {
    setIsImageEnlarged(true);
  };

  const closeEnlargedImage = () => {
    setIsImageEnlarged(false);
  };


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
        className={`project-modal-content relative w-full max-w-4xl h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-500 ${
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
              ? 'bg-gray-800/60 border-gray-600/30 text-black hover:bg-gray-700/60 hover:text-black'
              : 'bg-white/60 border-gray-200/50 text-black hover:bg-white/80 hover:text-black'
          }`}
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>


        {/* Contenu principal */}
        <div className="p-8">
          {/* En-tête du projet */}
          <div className="mb-8">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.name}
            </h2>
            
            {/* Carrousel de photos */}
            <div className="mb-6">
              {/* Image principale */}
              <div className="relative mb-4">
                <div
                  className={`relative w-full max-w-2xl mx-auto h-80 rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-800/30 border-gray-700/30'
                      : 'bg-white/50 border-white/30'
                  }`}
                >
                  <img
                    src={carouselImages[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 cursor-pointer hover:scale-105"
                    onClick={openEnlargedImage}
                  />
                </div>

                {/* Boutons de navigation */}
                <button
                  onClick={prevImage}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-gray-800/60 border-gray-600/30 text-white hover:bg-gray-700/60'
                      : 'bg-white/60 border-gray-200/50 text-gray-900 hover:bg-white/80'
                  }`}
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-gray-800/60 border-gray-600/30 text-white hover:bg-gray-700/60'
                      : 'bg-white/60 border-gray-200/50 text-gray-900 hover:bg-white/80'
                  }`}
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Miniatures */}
              <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
                {carouselImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      index === currentImageIndex
                        ? 'border-blue-500 ring-2 ring-blue-500/30'
                        : isDarkMode
                        ? 'border-gray-600/30 hover:border-gray-500/50'
                        : 'border-gray-200/50 hover:border-gray-300/70'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Miniature ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Indicateur de position */}
              <div className="flex justify-center mt-4 gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-blue-500 w-6'
                        : isDarkMode
                        ? 'bg-gray-600 hover:bg-gray-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p
              className={`text-lg leading-relaxed mb-6 text-center ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
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
              className={`text-2xl font-bold mb-6 text-center ${
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

      {/* Lightbox d'image agrandie */}
      {isImageEnlarged && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          style={{ zIndex: 10001 }}
          onClick={closeEnlargedImage}
        >
          {/* Carte lightbox */}
          <div 
            className={`relative w-full max-w-4xl max-h-[80vh] rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-900/90 border-gray-700/50'
                : 'bg-white/90 border-white/50'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={closeEnlargedImage}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? 'bg-gray-800/60 border-gray-600/30 text-white hover:bg-gray-700/60'
                  : 'bg-white/60 border-gray-200/50 text-gray-900 hover:bg-white/80'
              }`}
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenu de la lightbox */}
            <div className="p-6">
              {/* En-tête */}
              <div className="mb-4">
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Image {currentImageIndex + 1} sur {carouselImages.length}
                </p>
              </div>

              {/* Image agrandie avec meilleur affichage */}
              <div className="relative mb-4">
                <div className={`w-full max-h-[65vh] rounded-xl overflow-hidden flex items-center justify-center ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                  <img
                    src={carouselImages[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1} (agrandie)`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    style={{ 
                      maxHeight: '65vh',
                      maxWidth: '100%',
                      height: 'auto',
                      width: 'auto'
                    }}
                  />
                </div>

                {/* Boutons de navigation dans la lightbox */}
                {carouselImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                        isDarkMode
                          ? 'bg-gray-800/60 border-gray-600/30 text-white hover:bg-gray-700/60'
                          : 'bg-white/60 border-gray-200/50 text-gray-900 hover:bg-white/80'
                      }`}
                    >
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={nextImage}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                        isDarkMode
                          ? 'bg-gray-800/60 border-gray-600/30 text-white hover:bg-gray-700/60'
                          : 'bg-white/60 border-gray-200/50 text-gray-900 hover:bg-white/80'
                      }`}
                    >
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Indicateurs de position dans la lightbox */}
              {carouselImages.length > 1 && (
                <div className="flex justify-center gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? isDarkMode ? 'bg-white w-6' : 'bg-gray-900 w-6'
                          : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
