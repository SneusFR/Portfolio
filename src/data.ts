export type Project = {
  name: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  technicalSpecs?: {
    architecture: string;
    performance: string;
    security: string;
    scalability: string;
  };
} ;

export type Moon = {
  id: string;
  label: string;
  ring: "software" | "frontend" | "backend" | "database";
  angle0: number;
  color: string;
  description: string;
  projects: string[];
  detailedProjects: Project[];
  skills: string[];
  experience: string;
  icon: string;
};

export const rings = {
  software: 3.0,
  frontend: 5.0,
  backend: 7.0,
  database: 9.0,
} as const;

import reactLogoUrl from './assets/reactlogo.png';
import nextUrl from './assets/next.png';
import angularUrl from './assets/angular.png';
import svelteUrl from './assets/svelte.png';
import vuejsUrl from './assets/vuejs.png';
import tailwindUrl from './assets/tailwind.png';
import javaUrl from './assets/javalogo.png';
import pythonUrl from './assets/python.png';
import cUrl from './assets/csharp.png';
import rustUrl from './assets/rust.png';
import phpUrl from './assets/php.png';
import gologoUrl from './assets/gologo2.png';
import postgresqlUrl from './assets/postegres.png';
import redisUrl from './assets/redis.png';
import sqliteUrl from './assets/sqllite.png';
import mysqlUrl from './assets/mysql.png';
import mssqlUrl from './assets/msql.png';
import mongodbUrl from './assets/mongodb.png';
import tetrisUrl from './assets/tetris.png';
import mailflowUrl from './assets/MailFlow.png';
import isfceCafetUrl from './assets/Cafetmenu.jpg';
import gitUrl from './assets/git.png';
import dockerUrl from './assets/docker.png';
import kubernetesUrl from './assets/kubernete.png';
import awsUrl from './assets/aws.png';
import studioUrl from './assets/visual.png';
import codeUrl from './assets/visualstudio.png';


export const moons: Moon[] = [
  {
    id: "vscode",
    label: "Visual Studio Code",
    ring: "software",
    angle0: 0,
    color: "#fdfeffff",
    description: "IDE léger et puissant de Microsoft, extensible avec de nombreux plugins pour le développement web moderne.",
    projects: [],
    detailedProjects: [],
    skills: ["Extensions", "Debugging", "Git Integration", "IntelliSense", "Live Share", "Terminal Integration"],
    experience: "5 ans",
    icon: studioUrl
  },
  {
    id: "visualstudio",
    label: "Visual Studio",
    ring: "software",
    angle0: Math.PI / 3,
    color: "#5C2D91",
    description: "IDE complet de Microsoft pour le développement .NET et applications d'entreprise.",
    projects: [],
    detailedProjects: [],
    skills: [".NET Development", "Debugging", "NuGet", "Team Foundation", "Azure Integration", "Testing Tools"],
    experience: "3 ans",
    icon: codeUrl
  },
  {
    id: "git",
    label: "Git",
    ring: "software",
    angle0: (2 * Math.PI) / 3,
    color: "#cc877aff",
    description: "Système de contrôle de version distribué essentiel pour la collaboration et le suivi des modifications.",
    projects: [],
    detailedProjects: [],
    skills: ["Version Control", "Branching", "Merging", "GitHub", "GitLab", "Pull Requests", "Conflict Resolution"],
    experience: "5 ans",
    icon: gitUrl
  },
  {
    id: "docker",
    label: "Docker",
    ring: "software",
    angle0: Math.PI,
    color: "#5b9fd3ff",
    description: "Plateforme de conteneurisation pour déployer et gérer des applications de manière portable.",
    projects: [],
    detailedProjects: [
      {
        name: "MailFlow",
        description: "Mailflow est une application React complète pour créer et gérer des workflows d'automatisation d'emails. Elle permet de concevoir visuellement des diagrammes de flux avec des nœuds drag-and-drop (IA, API, conditions, emails), d'importer des spécifications API, de gérer l'authentification utilisateur, et d'analyser les performances via des métriques et logs d'exécution. L'application combine un éditeur de diagrammes interactif avec des fonctionnalités avancées comme la collaboration, l'OCR pour les pièces jointes, et l'intégration d'IA pour l'automatisation des emails.",
        githubUrl: "https://github.com/SneusFR/mailflow-editor",
        technologies: ["React", "NodeJS", "MongoDB"],
        image: mailflowUrl,
        technicalSpecs: {
          architecture: "Architecture React avec éditeur de diagrammes drag-and-drop et API NodeJS",
          performance: "Rendu optimisé des workflows complexes avec virtualisation des nœuds",
          security: "Authentification utilisateur et chiffrement des données sensibles",
          scalability: "Architecture modulaire avec système de plugins et collaboration temps réel"
        }
      }
    ],
    skills: ["Containerization", "Docker Compose", "Dockerfile", "Image Management", "Orchestration", "DevOps"],
    experience: "3 ans",
    icon: dockerUrl
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    ring: "software",
    angle0: (4 * Math.PI) / 3,
    color: "#326CE5",
    description: "Plateforme d'orchestration de conteneurs pour automatiser le déploiement et la gestion d'applications.",
    projects: [],
    detailedProjects: [],
    skills: ["Container Orchestration", "Pods", "Services", "Deployments", "ConfigMaps", "Ingress", "Helm"],
    experience: "2 ans",
    icon: kubernetesUrl
  },
  {
    id: "aws",
    label: "AWS",
    ring: "software",
    angle0: (5 * Math.PI) / 3,
    color: "#d7cab5ff",
    description: "Plateforme cloud d'Amazon offrant une large gamme de services pour héberger et gérer des applications.",
    projects: [],
    detailedProjects: [],
    skills: ["EC2", "S3", "RDS", "Lambda", "CloudFormation", "API Gateway", "CloudWatch"],
    experience: "3 ans",
    icon: awsUrl
  },
  {
    id: "vue",
    label: "Vue.js",
    ring: "frontend",
    angle0: 0,
    color: "#4ade80",
    description: "Framework JavaScript progressif pour construire des interfaces utilisateur modernes.",
    projects: [],
    detailedProjects: [],
    skills: ["Vue 3", "Composition API", "Vuex", "Vue Router", "Nuxt.js", "Quasar"],
    experience: "3 ans",
    icon: vuejsUrl
  },
  {
    id: "angular",
    label: "Angular",
    ring: "frontend",
    angle0: (2 * Math.PI) / 3,
    color: "#ef4444",
    description: "Framework TypeScript robuste pour développer des applications web d'entreprise.",
    projects: [],
    detailedProjects: [],
    skills: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "PrimeNG"],
    experience: "2 ans",
    icon: angularUrl
  },
  {
    id: "svelte",
    label: "Svelte",
    ring: "frontend",
    angle0: Math.PI,
    color: "#f97316",
    description: "Framework moderne qui compile vers du JavaScript vanilla ultra-optimisé.",
    projects: [],
    detailedProjects: [],
    skills: ["Svelte", "SvelteKit", "Stores", "Actions", "Transitions", "Vite"],
    experience: "1 an",
    icon: svelteUrl
  },
  {
    id: "nextjs",
    label: "Next.js",
    ring: "frontend",
    angle0: (4 * Math.PI) / 3,
    color: "#6366f1",
    description: "Framework React avec rendu côté serveur et génération de sites statiques.",
    projects: [],
    detailedProjects: [],
    skills: ["Next.js", "SSR", "SSG", "API Routes", "NextAuth", "Vercel", "Prisma"],
    experience: "1 an",
    icon: nextUrl
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    ring: "frontend",
    angle0: Math.PI / 3,
    color: "#9cc8cfff",
    description: "Framework CSS utilitaire pour créer rapidement des interfaces personnalisées.",
    projects: [],
    detailedProjects: [],
    skills: ["Tailwind CSS", "Responsive Design", "Custom Plugins", "JIT Mode", "PostCSS", "Headless UI"],
    experience: "1 an",
    icon: tailwindUrl
  },
  {
    id: "react",
    label: "React",
    ring: "frontend",
    angle0: (5 * Math.PI) / 3,
    color: "#ec4899",
    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur réactives et modulaires.",
    projects: [],
    detailedProjects: [
      {
        name: "Tetris Revolution",
        description: "Tetris Revolution est une application de jeu Tetris moderne développée en React avec Electron, offrant des fonctionnalités avancées comme l'authentification, un système de classement en ligne, une boutique, des statistiques, des effets visuels et sonores, et disponible à la fois en version web et desktop",
        githubUrl: "https://github.com/SneusFR/tetris-revolution",
        technologies: ["React", "Electron", "ExpressJS"],
        image: tetrisUrl,
        technicalSpecs: {
          architecture: "Architecture hybride web/desktop avec Electron et API REST ExpressJS",
          performance: "Rendu 60fps avec optimisation Canvas et gestion d'état React",
          security: "Authentification JWT et validation des scores côté serveur",
          scalability: "Architecture modulaire avec système de plugins et classements distribués"
        }
      },
      {
        name: "Isfce cafet",
        description: "Isfce cafet est une application web de gestion de cafétéria développée en React/Vite avec authentification Keycloak. Le système permet aux utilisateurs de passer des commandes, consulter leur historique, et gérer leur profil. Il inclut une interface d'administration pour la gestion des sessions, utilisateurs et articles, avec un système de rôles (CAFET, ADMIN). L'application utilise Material-UI pour l'interface, TanStack Query pour la gestion des données, et intègre des fonctionnalités de notifications et de protection des routes selon les permissions utilisateur.",
        githubUrl: "https://github.com/SneusFR/isfce-cafet",
        technologies: ["SpringBoot", "React", "Keycloak"],
        image: isfceCafetUrl,
        technicalSpecs: {
          architecture: "Architecture React/Vite avec backend SpringBoot et authentification Keycloak",
          performance: "Interface optimisée avec TanStack Query pour la gestion d'état et cache",
          security: "Authentification Keycloak avec système de rôles et protection des routes",
          scalability: "Architecture modulaire avec séparation frontend/backend et gestion des permissions"
        }
      }
    ],
    skills: [
      "Hooks (useState/useEffect/useMemo)",
      "Context API & Zustand",
      "Routing (React Router)",
      "Performance (memo, lazy, Suspense)",
      "Code Splitting",
      "Testing (Jest, RTL)",
      "TypeScript",
      "Accessibilité (ARIA)"
    ],    
    experience: "4 ans",
    icon: reactLogoUrl
  },
  {
    id: "python",
    label: "Python",
    ring: "backend",
    angle0: 0,
    color: "#3776ab",
    description: "Langage polyvalent pour le développement backend, data science et automatisation.",
    projects: [],
    detailedProjects: [],
    skills: ["Django", "FastAPI", "Flask", "SQLAlchemy", "Pandas", "Celery", "pytest"],
    experience: "5 ans",
    icon: pythonUrl
  },
  {
    id: "java",
    label: "Java",
    ring: "backend",
    angle0: Math.PI / 3,
    color: "#ed8b00",
    description: "Langage robuste pour applications d'entreprise et microservices.",
    projects: [],
    detailedProjects: [],
    skills: ["Spring Boot", "Spring Framework", "Hibernate", "Maven", "JUnit", "Microservices"],
    experience: "4 ans",
    icon: javaUrl
  },
  {
    id: "csharp",
    label: "C#",
    ring: "backend",
    angle0: (2 * Math.PI) / 3,
    color: "#239120",
    description: "Langage Microsoft pour développement .NET et applications Windows.",
    projects: [],
    detailedProjects: [],
    skills: [".NET Core", "ASP.NET", "Entity Framework", "LINQ", "Azure", "WPF", "xUnit"],
    experience: "3 ans",
    icon: cUrl
  },
  {
    id: "php",
    label: "PHP",
    ring: "backend",
    angle0: Math.PI,
    color: "#777bb4",
    description: "Langage serveur populaire pour développement web et CMS.",
    projects: [],
    detailedProjects: [
      {
        name: "Rtbf-copy",
        description: "Rtbf-copy est une reproduction fidèle du site web de la RTBF développée dans le cadre d'un projet étudiant avec Laravel. L'application comprend un système complet de gestion d'articles avec un back-office administrateur, permettant la création et modification de contenu. Les utilisateurs peuvent créer un compte, se connecter, mettre des articles en favoris, effectuer des recherches par mots-clés et naviguer dans une interface moderne reproduisant l'expérience du site officiel.",
        githubUrl: "https://github.com/SneusFR/rtbf-copy",
        technologies: ["Laravel", "Eloquent", "PHP"],
        technicalSpecs: {
          architecture: "Architecture MVC Laravel avec ORM Eloquent et système d'authentification intégré",
          performance: "Optimisation des requêtes avec Eloquent et mise en cache des articles populaires",
          security: "Authentification Laravel avec protection CSRF et validation des données utilisateur",
          scalability: "Structure modulaire avec migrations de base de données et système de rôles extensible"
        }
      }
    ],
    skills: ["Laravel", "Symfony", "WordPress", "Composer", "PHPUnit", "MySQL", "Eloquent ORM"],
    experience: "4 ans",
    icon: phpUrl
  },
  {
    id: "golang",
    label: "Go",
    ring: "backend",
    angle0: (4 * Math.PI) / 3,
    color: "#00add8",
    description: "Langage moderne de Google pour services haute performance et concurrence.",
    projects: [],
    detailedProjects: [],
    skills: ["Go", "Gin", "Echo", "gRPC", "Goroutines", "Channels", "Testing"],
    experience: "2 ans",
    icon: gologoUrl
  },
  {
    id: "rust",
    label: "Rust",
    ring: "backend",
    angle0: (5 * Math.PI) / 3,
    color: "#ce422b",
    description: "Langage système moderne axé sur la sécurité mémoire et les performances.",
    projects: [],
    detailedProjects: [],
    skills: ["Rust", "Actix-web", "Tokio", "Serde", "Cargo", "Memory Safety", "Concurrency"],
    experience: "1 an",
    icon: rustUrl
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    ring: "database",
    angle0: 0,
    color: "#336791",
    description: "Base de données relationnelle avancée avec support JSON et fonctionnalités étendues.",
    projects: [],
    detailedProjects: [],
    skills: ["SQL", "PL/pgSQL", "Indexing", "Query Optimization", "JSONB", "Partitioning", "Replication"],
    experience: "5 ans",
    icon: postgresqlUrl
  },
  {
    id: "mysql",
    label: "MySQL",
    ring: "database",
    angle0: Math.PI / 3,
    color: "#a1444aff",
    description: "Base de données relationnelle populaire pour applications web et mobiles.",
    projects: [],
    detailedProjects: [],
    skills: ["MySQL", "InnoDB", "Query Optimization", "Replication", "Clustering", "Performance Tuning"],
    experience: "6 ans",
    icon: mysqlUrl
  },
  {
    id: "mongodb",
    label: "MongoDB",
    ring: "database",
    angle0: (2 * Math.PI) / 3,
    color: "#be54b8ff",
    description: "Base de données NoSQL orientée documents pour applications modernes.",
    projects: [],
    detailedProjects: [],
    skills: ["MongoDB", "Mongoose", "Aggregation Pipeline", "Sharding", "Replica Sets", "GridFS"],
    experience: "4 ans",
    icon: mongodbUrl
  },
  {
    id: "redis",
    label: "Redis",
    ring: "database",
    angle0: Math.PI,
    color: "#dc382d",
    description: "Base de données en mémoire pour cache, sessions et données temps réel.",
    projects: [],
    detailedProjects: [],
    skills: ["Redis", "Caching Strategies", "Pub/Sub", "Lua Scripting", "Redis Cluster", "Sentinel"],
    experience: "3 ans",
    icon: redisUrl
  },
  {
    id: "elasticsearch",
    label: "Elasticsearch",
    ring: "database",
    angle0: (4 * Math.PI) / 3,
    color: "#005571",
    description: "Moteur de recherche et d'analyse distribué pour données textuelles et logs.",
    projects: [],
    detailedProjects: [],
    skills: ["Elasticsearch", "Kibana", "Logstash", "Query DSL", "Aggregations", "Index Management"],
    experience: "2 ans",
    icon: mssqlUrl
  },
  {
    id: "sqlite",
    label: "SQLite",
    ring: "database",
    angle0: (5 * Math.PI) / 3,
    color: "#003b57",
    description: "Base de données légère et embarquée pour applications mobiles et desktop.",
    projects: [],
    detailedProjects: [],
    skills: ["SQLite", "SQL", "Database Design", "Mobile Development", "Embedded Systems", "Performance"],
    experience: "4 ans",
    icon: sqliteUrl
  },
  {
    id: "koh-lanta",
    label: "Koh Lanta",
    ring: "frontend",
    angle0: 0,
    color: "#4ade80",
    description: "Projet de simulation d'événements et dynamiques d'une saison de Koh-Lanta.",
    projects: [],
    detailedProjects: [
      {
        name: "Koh Lanta simulator",
        description: "Koh lanta simulator est un projet d'application web Vue.js qui simule les événements et dynamiques d'une saison de Koh-Lanta avec deux équipes (bleue et rouge) de 4 candidats chacune. L'application génère aléatoirement des événements comme des disputes, formations d'alliances, et situations narratives, tout en gérant les statistiques des participants (social, divertissement, survie, stratégie, comportement, sport) et en permettant de suivre l'évolution des alliances et leur solidité au fil du temps.",
        githubUrl: "https://github.com/SneusFR/koh-lanta-simulator",
        technologies: ["Vue.js", "Pinia", "Vuetify"],
        technicalSpecs: {
          architecture: "Architecture Vue.js 3 avec Composition API et gestion d'état centralisée via Pinia",
          performance: "Interface réactive optimisée avec Vuetify et génération d'événements en temps réel",
          security: "Validation des données côté client et gestion sécurisée des états de jeu",
          scalability: "Architecture modulaire permettant l'ajout de nouvelles mécaniques de jeu et événements"
        }
      }
    ],
    skills: ["Vue.js", "Pinia", "Vuetify", "Game Logic", "Event System"],
    experience: "1 projet",
    icon: vuejsUrl
  }
];

export const angularVelocities = {
  software: 0.04,
  frontend: 0.04,
  backend: 0.04,
  database: 0.04,
};
