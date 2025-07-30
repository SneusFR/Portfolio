'use client';

import { motion } from "framer-motion";
import { 
  MapPin, 
  Award,
  Code,
  Palette,
  Zap,
  Users,
  Target
} from "lucide-react";

export default function About() {
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
        title: "Master en Informatique",
        institution: "Université de Technologie",
        year: "2018",
        type: "diploma",
        description: "Spécialisation en développement logiciel et architecture système"
      },
      {
        title: "Bachelor en Sciences Informatiques",
        institution: "École Supérieure d'Informatique",
        year: "2016",
        type: "diploma",
        description: "Formation complète en programmation et bases de données"
      }
    ],
    
    certifications: [
      {
        title: "AWS Certified Solutions Architect",
        institution: "Amazon Web Services",
        year: "2023",
        type: "certification",
        description: "Architecture et déploiement d'applications cloud scalables"
      },
      {
        title: "React Developer Certification",
        institution: "Meta",
        year: "2022",
        type: "certification",
        description: "Développement d'applications React avancées"
      },
      {
        title: "Docker Certified Associate",
        institution: "Docker Inc.",
        year: "2022",
        type: "certification",
        description: "Containerisation et orchestration d'applications"
      },
      {
        title: "PostgreSQL Professional",
        institution: "PostgreSQL Global Development Group",
        year: "2021",
        type: "certification",
        description: "Administration et optimisation de bases de données"
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
      { icon: Target, label: "Résolution de problèmes", description: "Approche analytique et solutions innovantes" }
    ],
    
    timeline: [
      {
        company: "TechCorp",
        role: "Développeur Full-Stack Senior",
        dates: "2022 – présent",
        description: "Développement d'applications web complexes avec React, Node.js et PostgreSQL. Lead technique sur plusieurs projets critiques.",
        color: "#6366f1"
      },
      {
        company: "StartupLab",
        role: "Développeur Full-Stack",
        dates: "2020 – 2022",
        description: "Création d'applications web modernes pour des startups. Mise en place d'architectures scalables et de bonnes pratiques DevOps.",
        color: "#e879f9"
      },
      {
        company: "WebAgency",
        role: "Développeur Front-End",
        dates: "2018 – 2020",
        description: "Développement d'interfaces utilisateur réactives et accessibles. Spécialisation en React et TypeScript.",
        color: "#06b6d4"
      },
      {
        company: "FreeLance",
        role: "Développeur Web",
        dates: "2016 – 2018",
        description: "Projets variés en développement web, de la création de sites vitrine aux applications métier complexes.",
        color: "#f59e0b"
      }
    ]
  };


  // Composant pour les diplômes et certifications
  const DiplomasAndCertifications = () => (
    <div className="space-y-8">
      {/* Diplômes */}
      <div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Award className="text-blue-600" size={24} />
          Diplômes
        </h4>
        <div className="space-y-4">
          {profile.diplomas.map((diploma, index) => (
            <motion.div
              key={diploma.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 rounded-2xl p-6 border-l-4 border-blue-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                  {diploma.title}
                </h5>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                  {diploma.year}
                </span>
              </div>
              <p className="text-md font-semibold text-blue-700 dark:text-blue-300 mb-2">
                {diploma.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {diploma.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Award className="text-green-600" size={24} />
          Certifications
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 rounded-2xl p-5 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
              <h5 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                {cert.title}
              </h5>
              <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                {cert.institution}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // Composant pour les compétences logicielles
  const SoftwareSkills = () => (
    <div className="space-y-6">
      {profile.softwareSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative w-full"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skill.name}
            </h4>
            <span className="text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {skill.level}%
            </span>
          </div>
          
          {/* Labels des niveaux */}
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Débutant</span>
            <span>Intermédiaire</span>
            <span>Avancé</span>
            <span>Expert</span>
          </div>
          
          <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
            {/* Séparations visuelles */}
            <div className="absolute inset-0 flex items-center">
              {/* Séparation à 25% */}
              <div className="absolute left-[25%] w-0.5 h-3 bg-white/60 dark:bg-gray-600/60 rounded-full"></div>
              {/* Séparation à 50% */}
              <div className="absolute left-[50%] w-0.5 h-3 bg-white/60 dark:bg-gray-600/60 rounded-full"></div>
              {/* Séparation à 75% */}
              <div className="absolute left-[75%] w-0.5 h-3 bg-white/60 dark:bg-gray-600/60 rounded-full"></div>
            </div>
            
            <motion.div
              className="h-3 rounded-full shadow-sm relative z-10"
              style={{ 
                backgroundColor: skill.color,
                boxShadow: `0 2px 8px ${skill.color}40`
              }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: 0.6 + index * 0.2, duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          
          {/* Marqueurs de pourcentage */}
          <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
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
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src="/src/assets/facetete.png"
                alt="Valentin Vanrumbeke"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/50 shadow-2xl"
              />
            </div>
            
            {/* Informations */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                {profile.name}
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
                {profile.title}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300 text-lg">
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
            <div className="space-y-6">
              {profile.coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/50 to-transparent dark:from-gray-700/50 hover:from-white/70 dark:hover:from-gray-700/70 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <skill.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.label}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
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
            <SoftwareSkills />
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
          <div className="space-y-8">
            {profile.timeline.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative flex items-start gap-4"
              >
                {/* Timeline dot */}
                <div className="mt-8 flex flex-col items-center pt-1">
                  <div 
                    className="mt-[3px] w-3 h-3 rounded-full ring-2 ring-white shadow-lg"
                    style={{ backgroundColor: item.color }}
                  />
                  {index < profile.timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-r from-white/50 to-transparent dark:from-gray-700/50 rounded-2xl p-6 hover:from-white/70 dark:hover:from-gray-700/70 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.role}
                      </h4>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {item.dates}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold mb-3" style={{ color: item.color }}>
                      {item.company}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
