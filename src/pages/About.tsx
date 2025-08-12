'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin, 
  Award,
  Code,
  Palette,
  Zap,
  Users,
  Target,
  GraduationCap,
  Shield
} from "lucide-react";

// Import de la photo de profil
import profileImage from '../assets/facetete.png';

// Composant pour les compétences logicielles - Défini en dehors pour éviter les re-renders
const SoftwareSkills = ({ skills }: { skills: any[] }) => (
  <div className="space-y-4 md:space-y-6">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative w-full"
      >
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h4>
          <span className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 md:px-3 rounded-full">
            {skill.level}%
          </span>
        </div>
        
        {/* Labels des niveaux - masqués sur très petit écran */}
        <div className="hidden xs:flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Débutant</span>
          <span className="hidden sm:block">Intermédiaire</span>
          <span className="sm:hidden">Inter.</span>
          <span>Avancé</span>
          <span>Expert</span>
        </div>
        
        <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3 shadow-inner">
          {/* Séparations visuelles */}
          <div className="absolute inset-0 flex items-center">
            {/* Séparation à 25% */}
            <div className="absolute left-[25%] w-0.5 h-2 md:h-3 bg-white/60 dark:bg-gray-600/60 rounded-full"></div>
            {/* Séparation à 50% */}
            <div className="absolute left-[50%] w-0.5 h-2 md:h-3 bg-white/60 dark:bg-gray-600/60 rounded-full"></div>
            {/* Séparation à 75% */}
            <div className="absolute left-[75%] w-0.5 h-2 md:h-3 bg-white/60 dark:bg-gray-600/60 rounded-full"></div>
          </div>
          
          <motion.div
            className="h-2 md:h-3 rounded-full shadow-sm relative z-10"
            style={{ 
              backgroundColor: skill.color,
              boxShadow: `0 2px 8px ${skill.color}40`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: 0.6 + index * 0.2, duration: 1.5, ease: 'easeOut' }}
          />
        </div>
        
        {/* Marqueurs de pourcentage - masqués sur très petit écran */}
        <div className="hidden xs:flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState<'diplomas' | 'certifications'>('diplomas');
  // Données du profil
  const profile = {
    name: "Valentin Vanrumbeke",
    title: "Développeur Full-Stack",
    location: "Belgium • remote",
    email: "contact@valentin-dev.com",
    website: "valentin-dev.com",
    avatar: "/avatar.jpg",
    about: "Développeur passionné avec une expertise en technologies modernes, je crée des solutions web innovantes et performantes. Spécialisé dans le développement full-stack, j'accompagne les projets de la conception à la mise en production avec un focus sur l'expérience utilisateur et la qualité du code.",
    
    diplomas: [
      {
        title: "Bachelier en Informatique",
        institution: "ISFCE",
        year: "2025",
        type: "diploma",
        description: "Orientation développement d'applications, obtenu avec la plus grande distinction"
      }
    ],
    
    certifications: [
      {
        title: "Certification .NET",
        institution: "Dyma.fr",
        year: "2023",
        type: "certification",
        description: "Maîtrise du framework .NET et développement d'applications robustes"
      }
    ],
    
    softwareSkills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Node.js", level: 88, color: "#339933" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "Docker", level: 80, color: "#2496ED" },
      { name: "PostgreSQL", level: 82, color: "#336791" }
    ],
    
    coreSkills: [
      { icon: Code, label: "Développement Full-Stack", description: "Maîtrise complète des technologies front-end et back-end" },
      { icon: Zap, label: "Performance", description: "Optimisation et amélioration des performances applicatives" },
      { icon: Users, label: "Collaboration", description: "Travail d'équipe efficace et communication claire" },
      { icon: Target, label: "Résolution de problèmes", description: "Approche analytique et solutions innovantes" },
      { icon: Award, label: "Architecture Logicielle", description: "Conception d'architectures scalables et maintenables" },
      { icon: MapPin, label: "DevOps & CI/CD", description: "Automatisation des déploiements et gestion d'infrastructure" },
      { icon: Palette, label: "UX/UI Design", description: "Création d'interfaces intuitives et expériences utilisateur optimales" },
      { icon: Code, label: "Sécurité Applicative", description: "Implémentation de bonnes pratiques de sécurité et protection des données" }
    ],
    
    timeline: [
      {
        company: "Lexlau",
        role: "Stagiaire Développeur Full-Stack",
        dates: "2022 – 2023",
        description: "Développement et amélioration du CMS propriétaire côté front-end et back-end pour répondre aux besoins spécifiques des cabinets d'avocats. Conception et implémentation de MailFlow, une solution innovante d'automatisation des communications par email intégrant un système de workflow intelligent et des composants d'intelligence artificielle pour optimiser les processus métier.",
        color: "#6366f1"
      }
    ]
  };


  // Composant pour les diplômes et certifications avec switch
  const DiplomasAndCertifications = () => (
    <div className="space-y-6">
      {/* Switch Toggle - Style Glassmorphism CSS.glass */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="relative">
          {/* Container glassmorphism avec le style css.glass - Version 2 */}
          <div className="glass-toggle-container">
            <div className="relative flex gap-1">
              <button
                onClick={() => setActiveTab('diplomas')}
                className={`glass-toggle-btn ${
                  activeTab === 'diplomas' ? 'active' : ''
                }`}
              >
                <GraduationCap size={18} className="flex-shrink-0 md:w-5 md:h-5" />
                <span className="text-sm md:text-base sm:block">Diplômes</span>
              </button>
              
              <button
                onClick={() => setActiveTab('certifications')}
                className={`glass-toggle-btn ${
                  activeTab === 'certifications' ? 'active' : ''
                }`}
              >
                <Shield size={18} className="flex-shrink-0 md:w-5 md:h-5" />
                <span className="text-sm md:text-base sm:block">Certifications</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-[300px] md:min-h-[400px]"
      >
        {activeTab === 'diplomas' ? (
          <div className="space-y-4 md:space-y-6">
            {profile.diplomas.map((diploma, index) => (
              <motion.div
                key={diploma.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
              >
                {/* Layout mobile : vertical, desktop : horizontal */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Badge année - centré sur mobile */}
                  <div className="flex justify-center sm:justify-start flex-shrink-0">
                    <span className="inline-block text-base md:text-lg font-bold text-white bg-blue-500 px-4 py-2 md:px-6 rounded-full shadow-lg border-2 border-white dark:border-gray-800">
                      {diploma.year}
                    </span>
                  </div>
                  
                  {/* Contenu principal - centré sur mobile */}
                  <div className="flex-1 space-y-2 md:space-y-3 text-center sm:text-left">
                    {/* Titre */}
                    <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {diploma.title}
                    </h5>
                    
                    {/* Institution */}
                    <p className="text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {diploma.institution}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {diploma.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {profile.certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
              >
                {/* Layout mobile : vertical, desktop : horizontal */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Badge année - centré sur mobile */}
                  <div className="flex justify-center sm:justify-start flex-shrink-0">
                    <span className="inline-block text-base md:text-lg font-bold text-white bg-green-500 px-4 py-2 md:px-6 rounded-full shadow-lg border-2 border-white dark:border-gray-800">
                      {cert.year}
                    </span>
                  </div>
                  
                  {/* Contenu principal - centré sur mobile */}
                  <div className="flex-1 space-y-2 md:space-y-3 text-center sm:text-left">
                    {/* Titre */}
                    <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h5>
                    
                    {/* Institution */}
                    <p className="text-base md:text-lg font-semibold text-green-600 dark:text-green-400">
                      {cert.institution}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 rounded-3xl p-8 mb-12 shadow-2xl"
        >
          <div className="flex flex-col items-center text-center gap-6">
            {/* Avatar - Centré au-dessus */}
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Valentin Vanrumbeke"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/50 shadow-2xl"
              />
            </div>
            
            {/* Informations - Centrées en dessous */}
            <div className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                {profile.name}
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
                {profile.title}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-lg">
                <MapPin size={20} />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 rounded-3xl p-8 mb-12 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Award className="text-purple-600" />
            À Propos de Moi
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {profile.about}
          </p>
        </motion.div>

        {/* Grid Layout pour les sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Zap className="text-blue-600" />
              Compétences Clés
            </h3>
            <div className="space-y-4 md:space-y-6">
              {profile.coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-gradient-to-r from-white/50 to-transparent dark:from-gray-700/50 hover:from-white/70 dark:hover:from-gray-700/70 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                    <skill.icon size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.label}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Code className="text-green-600" />
              Technologies Maîtrisées
            </h3>
            <SoftwareSkills skills={profile.softwareSkills} />
          </motion.div>
        </div>

        {/* Diplomas and Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 rounded-3xl p-8 mb-12 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Award className="text-orange-600" />
            Diplômes et Certifications
          </h3>
          <DiplomasAndCertifications />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 rounded-3xl p-8 mb-12 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Palette className="text-pink-600" />
            Parcours Professionnel
          </h3>
          <div className="space-y-6 md:space-y-8">
            {profile.timeline.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative flex items-start gap-3 md:gap-4"
              >
                {/* Timeline dot - ajusté pour mobile */}
                <div className="mt-6 md:mt-8 flex flex-col items-center pt-1">
                  <div 
                    className="mt-[3px] w-3 h-3 rounded-full ring-2 ring-white shadow-lg"
                    style={{ backgroundColor: item.color }}
                  />
                  {index < profile.timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                  )}
                </div>
                
                {/* Content - padding ajusté pour mobile */}
                <div className="flex-1 pb-6 md:pb-8">
                  <div className="bg-gradient-to-r from-white/50 to-transparent dark:from-gray-700/50 rounded-2xl p-4 md:p-6 hover:from-white/70 dark:hover:from-gray-700/70 transition-all duration-300">
                    <div className="flex flex-col gap-2 mb-3">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {item.role}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h5 className="text-base md:text-lg font-semibold" style={{ color: item.color }}>
                          {item.company}
                        </h5>
                        <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 md:px-3 rounded-full self-start sm:self-auto">
                          {item.dates}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
