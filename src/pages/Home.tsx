import { Link } from 'react-router-dom';
import { HeroComputer } from '../components/HeroComputer';
import mailflowLogo from '../assets/mailflowlogo.png';

interface HomeProps {
  isDarkMode: boolean;
}

export function Home({ isDarkMode }: HomeProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section - Pinia Style avec modèle 3D */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`} />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel - Style Pinia */}
          <div className="text-center lg:text-left">
            {/* Titre principal - Style Pinia */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Valentin Vanrumbeke
              </span>
              <br />
              Développeur
              <br />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                Full-stack
              </span>
            </h1>
            
            {/* Sous-titre */}
            <p className={`text-lg md:text-xl mb-8 max-w-2xl leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Des applications robustes, un rendu utilisateur exceptionnel.
              <br />
              Transformons vos idées en expériences digitales inoubliables.
            </p>
            
            {/* Boutons CTA - Style Pinia */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Link
                to="/skills"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Découvrir mes compétences</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gray-800/80 border-gray-600 text-gray-100 hover:bg-gray-700 hover:border-gray-400 hover:text-gray-50'
                    : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                Me contacter
              </button>
            </div>
            
            {/* Liens supplémentaires - Style Pinia */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center text-sm">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                En savoir plus sur moi
              </a>
              
              <a
                href="https://github.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Voir mes projets GitHub
              </a>
            </div>
          </div>
          
          {/* Modèle 3D - Côté droit - Caché sur mobile */}
          <div className="hidden md:block relative h-[500px] lg:h-[700px]">
            <HeroComputer isDarkMode={isDarkMode} />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-200 cursor-pointer"
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            padding: 0,
            margin: 0,
            boxShadow: 'none',
            appearance: 'none',
            WebkitAppearance: 'none'
          }}
          aria-label="Aller à la section projets"
        >
          <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Projects Preview Section - Enhanced Glassmorphism */}
      <section id="projects" className="relative py-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-orange-500' : 'bg-orange-400'
          }`} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse ${
            isDarkMode ? 'bg-red-500' : 'bg-red-400'
          }`} style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <div className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse ${
            isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'
          }`} style={{ animationDelay: '2s', animationDuration: '6s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 text-gray-300' 
                  : 'bg-black/5 border-black/10 text-gray-600'
              }`}>
                🚀 Réalisations
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">Projets</span>
              <span className="block mt-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                sélectionnés
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Un aperçu de mes réalisations récentes,
              <br className="hidden md:block" />
              alliant innovation et performance technique
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Project placeholders - you can replace with real projects */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative">
              <div className="glass-panel relative p-10">
                  <div className="relative z-10">
                    {/* Project image */}
                    <div className="relative mb-8">
                      <div className={`w-full h-48 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl overflow-hidden ${
                        isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'
                      }`}>
                        <img 
                          src={mailflowLogo} 
                          alt={`Projet ${i}`}
                          className="w-full h-full object-contain p-6"
                        />
                      </div>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Projet Example {i}
                    </h3>
                    
                    <p className={`text-lg mb-8 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Description détaillée du projet et des technologies utilisées pour sa réalisation.
                    </p>
                    
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                        <span 
                          key={tech}
                          className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm border ${
                            i === 1 ? (isDarkMode 
                              ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' 
                              : 'bg-blue-100/70 border-blue-200/50 text-blue-700') :
                            i === 2 ? (isDarkMode 
                              ? 'bg-green-500/10 border-green-500/20 text-green-300' 
                              : 'bg-green-100/70 border-green-200/50 text-green-700') :
                            (isDarkMode 
                              ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' 
                              : 'bg-purple-100/70 border-purple-200/50 text-purple-700')
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="#"
                      className={`inline-flex items-center font-semibold transition-colors duration-300 ${
                        i === 1 ? 'text-blue-600 hover:text-blue-700' :
                        i === 2 ? 'text-green-600 hover:text-green-700' :
                        'text-purple-600 hover:text-purple-700'
                      }`}
                    >
                      Voir le projet
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced Glassmorphism */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`} style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <div className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse ${
            isDarkMode ? 'bg-green-500' : 'bg-green-400'
          }`} style={{ animationDelay: '2s', animationDuration: '6s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 text-gray-300' 
                  : 'bg-black/5 border-black/10 text-gray-600'
              }`}>
                ✨ Expertise technique
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Mes domaines
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                d'expertise
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Des solutions complètes pour vos projets numériques, 
              <br className="hidden md:block" />
              alliant innovation et performance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Frontend Card - Simplified */}
            <div className="group relative">
              <div className="glass-panel relative p-10">
                <div className="relative z-10 text-center">
                  {/* Icon with simple animation */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Front-end
                  </h3>
                  
                  <p className={`text-lg mb-8 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Interfaces utilisateur modernes et réactives avec React, TypeScript, et les dernières technologies web.
                  </p>
                  
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((tech) => (
                      <span 
                        key={tech}
                        className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm border ${
                          isDarkMode 
                            ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' 
                            : 'bg-blue-100/70 border-blue-200/50 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to="/skills"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                  >
                    Voir les compétences
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Backend Card - Simplified */}
            <div className="group relative">
              <div className="glass-panel relative p-10">
                <div className="relative z-10 text-center">
                  {/* Icon with simple animation */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Back-end
                  </h3>
                  
                  <p className={`text-lg mb-8 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    APIs robustes et scalables avec Node.js, Python, et architectures cloud modernes.
                  </p>
                  
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {['Node.js', 'Python', 'Express', 'FastAPI'].map((tech) => (
                      <span 
                        key={tech}
                        className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm border ${
                          isDarkMode 
                            ? 'bg-green-500/10 border-green-500/20 text-green-300' 
                            : 'bg-green-100/70 border-green-200/50 text-green-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to="/skills"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
                  >
                    Voir les compétences
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Database Card - Simplified */}
            <div className="group relative">
              <div className="glass-panel relative p-10">
                <div className="relative z-10 text-center">
                  {/* Icon with simple animation */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Base de données
                  </h3>
                  
                  <p className={`text-lg mb-8 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Gestion et optimisation de données avec PostgreSQL, MongoDB, et solutions cloud performantes.
                  </p>
                  
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'].map((tech) => (
                      <span 
                        key={tech}
                        className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm border ${
                          isDarkMode 
                            ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' 
                            : 'bg-purple-100/70 border-purple-200/50 text-purple-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to="/skills"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300"
                  >
                    Voir les compétences
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`} style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <div className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse ${
            isDarkMode ? 'bg-emerald-500' : 'bg-emerald-400'
          }`} style={{ animationDelay: '2s', animationDuration: '6s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 text-gray-300' 
                  : 'bg-black/5 border-black/10 text-gray-600'
              }`}>
                👨‍💻 À propos
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Créateur d'expériences
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                numériques
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionné par l'innovation technologique,
              <br className="hidden md:block" />
              je transforme vos idées en solutions digitales performantes
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Passionné par l'innovation technologique, je transforme des idées complexes en solutions élégantes et performantes. Mon approche combine créativité artistique et rigueur technique.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Spécialisé dans les technologies web modernes, je crée des expériences utilisateur immersives qui repoussent les limites du possible.
                </p>
              </div>
              
              {/* Tech stack */}
              <div className="mt-8">
                <h3 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Technologies favorites
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'React', color: 'blue' },
                    { name: 'TypeScript', color: 'indigo' },
                    { name: 'Three.js', color: 'green' },
                    { name: 'Node.js', color: 'emerald' },
                    { name: 'Python', color: 'yellow' },
                    { name: 'WebGL', color: 'purple' },
                    { name: 'Next.js', color: 'gray' },
                    { name: 'Tailwind', color: 'cyan' }
                  ].map((tech) => (
                    <span 
                      key={tech.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${
                        tech.color === 'blue' ? (isDarkMode 
                          ? 'bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20' 
                          : 'bg-blue-100/70 border-blue-200/50 text-blue-700 hover:bg-blue-200/70') :
                        tech.color === 'indigo' ? (isDarkMode 
                          ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20' 
                          : 'bg-indigo-100/70 border-indigo-200/50 text-indigo-700 hover:bg-indigo-200/70') :
                        tech.color === 'green' ? (isDarkMode 
                          ? 'bg-green-500/10 border-green-500/20 text-green-300 hover:bg-green-500/20' 
                          : 'bg-green-100/70 border-green-200/50 text-green-700 hover:bg-green-200/70') :
                        tech.color === 'emerald' ? (isDarkMode 
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20' 
                          : 'bg-emerald-100/70 border-emerald-200/50 text-emerald-700 hover:bg-emerald-200/70') :
                        tech.color === 'yellow' ? (isDarkMode 
                          ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/20' 
                          : 'bg-yellow-100/70 border-yellow-200/50 text-yellow-700 hover:bg-yellow-200/70') :
                        tech.color === 'purple' ? (isDarkMode 
                          ? 'bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20' 
                          : 'bg-purple-100/70 border-purple-200/50 text-purple-700 hover:bg-purple-200/70') :
                        tech.color === 'gray' ? (isDarkMode 
                          ? 'bg-gray-500/10 border-gray-500/20 text-gray-300 hover:bg-gray-500/20' 
                          : 'bg-gray-100/70 border-gray-200/50 text-gray-700 hover:bg-gray-200/70') :
                        tech.color === 'cyan' ? (isDarkMode 
                          ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20' 
                          : 'bg-cyan-100/70 border-cyan-200/50 text-cyan-700 hover:bg-cyan-200/70') :
                        (isDarkMode 
                          ? 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50' 
                          : 'bg-white/70 border-white/60 text-gray-700 hover:bg-white/90')
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              isDarkMode
                ? 'bg-gray-800/50 border-gray-700/50'
                : 'bg-white/70 border-white/60'
            }`}>
              <h3 className={`text-2xl font-bold mb-8 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                En quelques chiffres
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    25+
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Projets réalisés
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Technologies
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Années d'expérience
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Satisfaction client
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Prêt à collaborer ?
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Transformons ensemble vos idées en réalité numérique
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:contact@example.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un email
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50'
                  : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
