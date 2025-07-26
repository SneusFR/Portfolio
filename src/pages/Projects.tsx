import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moons } from '../data';

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

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  // Catégories uniques
  const categories = ['all', ...Array.from(new Set(moons.map(moon => moon.label)))];

  useEffect(() => {
    let projects = selectedCategory === 'all'
      ? allProjects
      : allProjects.filter(project => project.category === selectedCategory);

    if (searchTerm.trim() !== '') {
      const lower = searchTerm.toLowerCase();
      projects = projects.filter(project =>
        project.name.toLowerCase().includes(lower) ||
        project.description.toLowerCase().includes(lower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lower))
      );
    }

    setFilteredProjects(projects);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen relative">
      {/* Contenu principal */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">

            </div>

              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 mt-2 leading-tight ${
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
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mt-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Découvrez mes réalisations techniques,
              <br className="hidden md:block" />
              alliant innovation et performance
            </p>

            {/* Barre de recherche glassmorphism */}
            <div className="flex justify-center mt-10">
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
                      ? 'text-gray-100 placeholder-gray-400'
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
            </div>
          </div>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
                  selectedCategory === category
                    ? isDarkMode
                      ? 'bg-blue-500/20 border-blue-400/30 text-blue-300 shadow-lg shadow-blue-500/25'
                      : 'bg-blue-100/70 border-blue-300/50 text-blue-700 shadow-lg shadow-blue-200/50'
                    : isDarkMode
                    ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                    : 'bg-black/5 border-black/10 text-gray-600 hover:bg-black/10 hover:border-black/20'
                } hover:scale-105`}
              >
                {category === 'all' ? 'Tous les projets' : category}
              </button>
            ))}
          </div>

          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={`${project.name}-${index}`} className="group relative">
                {/* Carte glassmorphing */}
                <div
                  className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isDarkMode
                      ? 'bg-gray-900/40 border-gray-700/30 hover:bg-gray-900/60 hover:border-gray-600/50'
                      : 'bg-white/40 border-white/30 hover:bg-white/60 hover:border-white/50'
                  } shadow-2xl hover:shadow-3xl`}
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
                      className="text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm border"
                      style={{
                        backgroundColor: `${project.categoryColor}10`,
                        borderColor: `${project.categoryColor}20`,
                        color: project.categoryColor,
                      }}
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
                        className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${
                          isDarkMode
                            ? 'bg-gray-800/50 border-gray-600/30 text-gray-300'
                            : 'bg-white/70 border-gray-200/50 text-gray-700'
                        }`}
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
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
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
    </div>
  );
}
