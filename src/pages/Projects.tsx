import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moons } from '../data';
import { ProjectModal } from '../components/ProjectModal';

interface ProjectsProps {
  isDarkMode: boolean;
}

export function Projects({ isDarkMode }: ProjectsProps) {
  // Récupérer tous les projets détaillés de toutes les lunes
  const allProjects = moons.flatMap(moon =>
    moon.detailedProjects.map(project => ({
      ...project,
      category: moon.label,
      categoryColor: moon.color,
      categoryIcon: moon.icon,
    }))
  );

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedRings, setSelectedRings] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    let projects = allProjects;

    // Filtrage par rings (passion, frontend, backend, database)
    if (selectedRings.length > 0) {
      projects = projects.filter(project => {
        const projectMoon = moons.find(moon => moon.label === project.category);
        return projectMoon && selectedRings.includes(projectMoon.ring);
      });
    }

    if (searchTerm.trim() !== '') {
      const lower = searchTerm.toLowerCase();
      projects = projects.filter(project =>
        project.name.toLowerCase().includes(lower) ||
        project.description.toLowerCase().includes(lower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lower))
      );
    }

    setFilteredProjects(projects);
  }, [searchTerm, selectedRings]);

  const toggleRingFilter = (ring: string) => {
    setSelectedRings(prev => 
      prev.includes(ring) 
        ? prev.filter(r => r !== ring)
        : [...prev, ring]
    );
  };

  const clearAllFilters = () => {
    setSelectedRings([]);
    setIsFilterOpen(false);
  };

  const openModal = (project: typeof allProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen relative">
      {/* Contenu principal */}
      <div className="relative z-10 pt-24 pb-16 px-6 safe-top safe-bottom">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center">
            <div className="inline-block mb-6">

            </div>

              <h1
                className={`h1-fluid font-bold mb-2 leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span>Mes&nbsp;</span>{/* insécable pour forcer le non‑retour à la ligne */}<span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Projets
                </span>
              </h1>

            <p
              className={`lead-fluid max-w-3xl mx-auto leading-relaxed mt-0 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Découvrez mes réalisations techniques,
              <br className="hidden md:block" />
              alliant innovation et performance
            </p>

            {/* Barre de recherche et filtres */}
            <div className="flex flex-col items-center gap-4 mt-10">
              {/* Container principal avec searchbar et bouton filtre */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                {/* Barre de recherche glassmorphism */}
                <div
                  className={`flex items-center gap-3 w-full max-w-md px-6 py-4 rounded-full backdrop-blur-lg border shadow-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10'
                      : 'bg-black/5 border-black/10'
                  }`}
                >
                  {/* Icône loupe */}
                  <svg
                    className={`w-5 h-5 flex-shrink-0 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
                    />
                  </svg>

                  {/* Champ de recherche */}
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Rechercher un projet..."
                    className={`flex-1 bg-transparent focus:outline-none text-base ${
                      isDarkMode
                        ? 'text-white placeholder-gray-400'
                        : 'text-gray-700 placeholder-gray-500'
                    }`}
                  />

                  {/* Bouton clear */}
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200 ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Bouton filtre style navbar */}
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`w-full md:w-auto justify-center flex items-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-lg border shadow-lg hover:scale-105 ${
                    isFilterOpen || selectedRings.length > 0
                      ? isDarkMode
                        ? 'bg-blue-500/20 border-blue-400/30 text-blue-300 shadow-blue-500/25'
                        : 'bg-blue-100/70 border-blue-300/50 text-blue-700 shadow-blue-200/50'
                      : isDarkMode
                      ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                      : 'bg-black/5 border-black/10 text-gray-600 hover:bg-black/10 hover:border-black/20'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  <span>Filtres</span>
                  {selectedRings.length > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {selectedRings.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Panel de filtres avec animation horizontale */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isFilterOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className={`flex flex-wrap justify-center gap-3 p-6 rounded-2xl backdrop-blur-lg border shadow-lg ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10'
                      : 'bg-black/5 border-black/10'
                  }`}
                >
                  {/* Filtres par rings */}
                  {[
                    { key: 'passion', label: 'Passion', color: '#60a5fa' },
                    { key: 'frontend', label: 'Front-end', color: '#4ade80' },
                    { key: 'backend', label: 'Back-end', color: '#f59e0b' },
                    { key: 'database', label: 'Base de données', color: '#ef4444' }
                  ].map(ring => (
                    <button
                      key={ring.key}
                      onClick={() => toggleRingFilter(ring.key)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border hover:scale-105 ${
                        selectedRings.includes(ring.key)
                          ? 'text-white shadow-lg'
                          : isDarkMode
                          ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                          : 'bg-black/5 border-black/10 text-gray-600 hover:bg-black/10'
                      }`}
                      style={selectedRings.includes(ring.key) ? {
                        backgroundColor: `${ring.color}40`,
                        borderColor: `${ring.color}60`,
                        boxShadow: `0 4px 20px ${ring.color}25`
                      } : {}}
                    >
                      {ring.label}
                    </button>
                  ))}

                  {/* Bouton clear filters */}
                  {selectedRings.length > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border hover:scale-105 ${
                        isDarkMode
                          ? 'bg-red-500/20 border-red-400/30 text-red-300 hover:bg-red-500/30'
                          : 'bg-red-100/70 border-red-300/50 text-red-700 hover:bg-red-200/70'
                      }`}
                    >
                      Effacer tout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>


          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={`${project.name}-${index}`} className="group relative">
                {/* Carte glassmorphing - maintenant cliquable */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal(project);
                  }}
                  className="glass-project-card relative p-8 cursor-pointer"
                >
                  {/* Badge de catégorie */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${project.categoryColor}20` }}
                    >
                      <img
                        src={project.categoryIcon}
                        alt={project.category}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span
                      className="category-badge text-sm font-semibold px-3 py-2 rounded-full backdrop-blur-sm border transition-all duration-200 hover:scale-105"
                      style={{
                        '--cat': project.categoryColor,
                        backgroundColor: `${project.categoryColor}33`,
                        borderColor: `${project.categoryColor}55`,
                        color: project.categoryColor,
                        boxShadow: '0 1px 3px rgba(0,0,0,.06)'
                      } as React.CSSProperties}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Titre du projet */}
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-base mb-6 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className={`tech-tag px-3 py-2 text-xs font-semibold rounded-full backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${
                          isDarkMode
                            ? 'bg-gray-500/15 border-gray-500/35 text-gray-200'
                            : 'bg-gray-500/15 border-gray-500/35 text-gray-900'
                        }`}
                        style={{
                          boxShadow: '0 1px 3px rgba(0,0,0,.06)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Liens */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white'
                          : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:text-gray-900'
                      } backdrop-blur-sm border border-white/10`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                      style={{ pointerEvents: 'auto', zIndex: 10 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Détails
                    </button>
                  </div>

                  {/* Effet de glow au hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: project.categoryColor }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center mt-20">
            <div
              className={`inline-block p-12 rounded-3xl backdrop-blur-xl border ${
                isDarkMode ? 'bg-gray-900/40 border-gray-700/30' : 'bg-white/40 border-white/30'
              }`}
            >
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Intéressé par une collaboration ?
              </h2>

              <p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Discutons de votre prochain projet et créons ensemble quelque chose d'exceptionnel
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/skills"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Voir mes compétences</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <a
                  href="mailto:contact@example.com"
                  className={`px-8 py-4 font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50'
                      : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modale des détails du projet */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
