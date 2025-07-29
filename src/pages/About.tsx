import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Baby, 
  GraduationCap, 
  School, 
  Trophy,
  Calendar,
  MapPin,
  X,
  ChevronRight
} from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  location: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  details: string[];
  images?: string[];
  achievements?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'birth',
    date: '7 janvier 1999',
    title: 'Naissance',
    subtitle: 'Le début de l\'aventure',
    location: 'Belgique',
    icon: <Baby className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Le commencement d\'un parcours qui me mènera vers la passion de l\'informatique et du développement.',
    details: [
      'Naissance en Belgique',
      'Premiers pas vers un avenir technologique',
      'Curiosité naturelle pour la technologie'
    ],
    images: [],
    achievements: []
  },
  {
    id: 'ipet',
    date: '2015 - 2017',
    title: 'IPET',
    subtitle: 'Études secondaires - Première partie',
    location: 'Institut Provincial d\'Enseignement Technique',
    icon: <School className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Mes premières années d\'études secondaires à l\'IPET, où j\'ai découvert ma passion pour les sciences et la technologie.',
    details: [
      'Formation technique générale',
      'Découverte des sciences appliquées',
      'Développement de l\'esprit analytique',
      'Premiers contacts avec l\'informatique'
    ],
    images: [],
    achievements: [
      'Excellents résultats en mathématiques',
      'Participation aux olympiades scientifiques',
      'Développement de projets techniques'
    ]
  },
  {
    id: 'sacre-coeur',
    date: '2018 - 2020',
    title: 'Sacré Cœur de Waterloo',
    subtitle: 'Études secondaires - Fin de parcours',
    location: 'Waterloo, Belgique',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Finalisation de mes études secondaires au Sacré Cœur de Waterloo, avec une spécialisation qui m\'a préparé aux études supérieures en informatique.',
    details: [
      'Spécialisation en sciences et mathématiques',
      'Approfondissement des connaissances techniques',
      'Préparation aux études supérieures',
      'Développement de projets personnels'
    ],
    images: [],
    achievements: [
      'Diplôme d\'études secondaires avec distinction',
      'Prix d\'excellence en informatique',
      'Projet de fin d\'études remarqué',
      'Admission en bachelier informatique'
    ]
  },
  {
    id: 'isfce',
    date: '2022 - 2025',
    title: 'ISFCE - Bachelier Informatique',
    subtitle: 'Formation supérieure - Diplômé',
    location: 'Institut Supérieur de Formation Continuée et d\'Enseignement',
    icon: <Trophy className="w-6 h-6" />,
    color: 'from-purple-500 to-violet-500',
    description: 'Mon parcours universitaire à l\'ISFCE où j\'ai acquis une expertise complète en développement informatique, de la programmation aux architectures complexes.',
    details: [
      'Formation complète en développement logiciel',
      'Maîtrise des langages de programmation modernes',
      'Apprentissage des architectures web et mobile',
      'Projets en équipe et méthodologies agiles',
      'Stage en entreprise et projets réels'
    ],
    images: [],
    achievements: [
      'Diplôme de Bachelier en Informatique obtenu avec grande distinction',
      'Projet de fin d\'études primé',
      'Stage réussi avec mention excellente',
      'Maîtrise de plus de 15 technologies',
      'Développement d\'applications web complètes',
      'Participation à des hackathons et concours'
    ]
  }
];

export function About({ isDarkMode }: AboutProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const openEventDetails = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background avec particules animées */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
        }`} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
        }`} style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse ${
          isDarkMode ? 'bg-pink-500' : 'bg-pink-400'
        }`} style={{ animationDelay: '2s', animationDuration: '6s' }} />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-white/5 border-white/10 text-gray-300' 
                : 'bg-black/5 border-black/10 text-gray-600'
            }`}>
              👋 Mon parcours
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            À propos
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              de moi
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Découvrez les moments clés qui ont façonné mon parcours
            <br className="hidden md:block" />
            vers le développement informatique
          </motion.p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="relative">
          {/* Ligne centrale */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full ${
            isDarkMode 
              ? 'bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-pink-500/30' 
              : 'bg-gradient-to-b from-purple-400/40 via-blue-400/40 to-pink-400/40'
          }`} />

          {/* Événements de la timeline */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Point central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.button
                    onClick={() => openEventDetails(event)}
                    onMouseEnter={() => setHoveredEvent(event.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-16 h-16 rounded-full backdrop-blur-xl border-2 border-white/20 cursor-pointer transition-all duration-300 ${
                      hoveredEvent === event.id ? 'shadow-2xl' : 'shadow-lg'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${event.color.replace('from-', '').replace(' to-', ', ')})`,
                      boxShadow: hoveredEvent === event.id 
                        ? `0 0 30px ${event.color.includes('purple') ? '#a855f7' : event.color.includes('blue') ? '#3b82f6' : event.color.includes('green') ? '#10b981' : '#ec4899'}40`
                        : undefined
                    }}
                  >
                    <div className="text-white">
                      {event.icon}
                    </div>
                    
                    {/* Effet de pulsation */}
                    <motion.div
                      animate={hoveredEvent === event.id ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                    />
                  </motion.button>
                </div>

                {/* Contenu de l'événement */}
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}
                  >
                    <div className={`p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
                      isDarkMode
                        ? 'bg-gray-900/40 border-gray-700/30 hover:bg-gray-900/60 hover:border-gray-600/50'
                        : 'bg-white/40 border-white/30 hover:bg-white/60 hover:border-white/50'
                    }`}
                    onClick={() => openEventDetails(event)}
                    >
                      {/* Date */}
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {event.date}
                        </span>
                      </div>

                      {/* Titre */}
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {event.title}
                      </h3>

                      {/* Sous-titre */}
                      <p className={`text-lg font-medium mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {event.subtitle}
                      </p>

                      {/* Localisation */}
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {event.location}
                        </span>
                      </div>

                      {/* Description courte */}
                      <p className={`text-base leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {event.description}
                      </p>

                      {/* Bouton pour plus de détails */}
                      <div className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
                        <span>En savoir plus</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de détails */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: 'blur(12px)' }}
            onClick={closeEventDetails}
          >
            <div className={`absolute inset-0 ${
              isDarkMode ? 'bg-black/50' : 'bg-white/30'
            }`} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl border ${
                isDarkMode
                  ? 'bg-gray-900/80 border-gray-700/30'
                  : 'bg-white/80 border-white/30'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header de la modal */}
              <div className="relative p-8 pb-6">
                <button
                  onClick={closeEventDetails}
                  className={`absolute top-6 right-6 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-gray-800/60 border-gray-600/30 text-gray-300 hover:bg-gray-700/60 hover:text-white'
                      : 'bg-white/60 border-gray-200/50 text-gray-700 hover:bg-white/80 hover:text-gray-900'
                  }`}
                >
                  <X className="w-5 h-5 mx-auto" />
                </button>

                {/* Icône et titre */}
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${selectedEvent.color.replace('from-', '').replace(' to-', ', ')})`
                    }}
                  >
                    {selectedEvent.icon}
                  </div>
                  <div>
                    <h2 className={`text-4xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedEvent.title}
                    </h2>
                    <p className={`text-xl ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {selectedEvent.subtitle}
                    </p>
                  </div>
                </div>

                {/* Informations */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {selectedEvent.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {selectedEvent.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu de la modal */}
              <div className="px-8 pb-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Description
                  </h3>
                  <p className={`text-lg leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Détails */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Détails
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvent.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${selectedEvent.color.replace('from-', '').replace(' to-', ', ')})`
                          }}
                        />
                        <span className={`${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Réalisations */}
                {selectedEvent.achievements && selectedEvent.achievements.length > 0 && (
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Réalisations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedEvent.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-2xl backdrop-blur-sm border ${
                            isDarkMode
                              ? 'bg-gray-800/30 border-gray-700/30'
                              : 'bg-white/50 border-white/30'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <Trophy className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className={`${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {achievement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
