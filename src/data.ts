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
  ring: "passion" | "frontend" | "backend" | "database";
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
  passion: 3.0,
  frontend: 5.0,
  backend: 7.0,
  database: 9.0,
} as const;

import reactLogoUrl from './assets/reactlogo.png';
import jeuxvideoUrl from './assets/jeuxvideo.png';
import FootballUrl from './assets/foot.png';
import PianoUrl from './assets/piano.png';
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












export const moons: Moon[] = [
  {
    id: "Jeux-vidéo",
    label: "Jeux-vidéo",
    ring: "passion",
    angle0: 0,
    color: "#60a5fa",
    description: "Passionné de jeux vidéo depuis l'enfance, j'explore les mécaniques de jeu et l'industrie du gaming.",
    projects: ["Portfolio 3D", "E-commerce App", "Dashboard Analytics"],
    detailedProjects: [
      {
        name: "Game Analytics Dashboard",
        description: "Tableau de bord pour analyser les performances des joueurs",
        githubUrl: "https://github.com/username/game-analytics",
        technologies: ["React", "D3.js", "Node.js"]
      },
      {
        name: "Indie Game Showcase",
        description: "Plateforme de présentation de jeux indépendants",
        githubUrl: "https://github.com/username/indie-showcase",
        technologies: ["Vue.js", "Firebase", "WebGL"]
      }
    ],
    skills: ["Game Design", "Unity", "C#", "Gameplay Programming", "Level Design"],
    experience: "8 ans",
    icon: jeuxvideoUrl 
  },
  {
    id: "Football",
    label: "Football",
    ring: "passion",
    angle0: Math.PI / 3,
    color: "#f9a8d4",
    description: "Pratique du football depuis l'adolescence, comprend l'esprit d'équipe et la stratégie.",
    projects: ["API REST", "Application Mobile", "Système de gestion"],
    detailedProjects: [
      {
        name: "Football Stats Tracker",
        description: "Application de suivi des statistiques de match",
        githubUrl: "https://github.com/username/football-stats",
        technologies: ["React Native", "Express", "MongoDB"]
      },
      {
        name: "Team Management App",
        description: "Gestion d'équipe et planification d'entraînements",
        githubUrl: "https://github.com/username/team-manager",
        technologies: ["Flutter", "Firebase", "Dart"]
      }
    ],
    skills: ["Esprit d'équipe", "Leadership", "Stratégie", "Persévérance", "Communication"],
    experience: "12 ans",
    icon: FootballUrl
  },
  {
    id: "Piano",
    label: "Piano",
    ring: "passion",
    angle0: (2 * Math.PI) / 3,
    color: "#fcd34d",
    description: "Musicien amateur, le piano m'apporte créativité et discipline dans mon approche du développement.",
    projects: ["Visualiseur 3D", "Jeu WebGL", "Configurateur produit"],
    detailedProjects: [
      {
        name: "Music Visualizer",
        description: "Visualiseur audio interactif en temps réel",
        githubUrl: "https://github.com/username/music-visualizer",
        technologies: ["Three.js", "Web Audio API", "GLSL"]
      },
      {
        name: "Piano Learning App",
        description: "Application d'apprentissage du piano",
        githubUrl: "https://github.com/username/piano-learn",
        technologies: ["React", "Tone.js", "MIDI"]
      }
    ],
    skills: ["Créativité", "Discipline", "Patience", "Théorie musicale", "Composition"],
    experience: "6 ans",
    icon: PianoUrl
  },
  {
    id: "nodejs",
    label: "Node.js",
    ring: "passion",
    angle0: Math.PI,
    color: "#6ee7b7",
    description: "Runtime JavaScript côté serveur pour créer des applications backend performantes.",
    projects: ["API GraphQL", "Microservices", "Bot Discord"],
    detailedProjects: [
      {
        name: "E-commerce API",
        description: "API REST complète pour plateforme e-commerce",
        githubUrl: "https://github.com/username/ecommerce-api",
        technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
        technicalSpecs: {
          architecture: "Architecture REST avec middleware de validation et gestion d'erreurs centralisée",
          performance: "Cache Redis pour 95% des requêtes, temps de réponse < 50ms",
          security: "JWT avec refresh tokens, rate limiting et validation des entrées",
          scalability: "Load balancing horizontal avec clustering Node.js"
        }
      },
      {
        name: "Real-time Chat",
        description: "Application de chat en temps réel",
        githubUrl: "https://github.com/username/realtime-chat",
        technologies: ["Socket.io", "Node.js", "MongoDB", "JWT"]
      }
    ],
    skills: ["Express.js", "API REST", "GraphQL", "Microservices", "WebSockets", "Authentication"],
    experience: "4 ans",
    icon: javaUrl
  },
  {
    id: "design",
    label: "UI/UX",
    ring: "passion",
    angle0: (4 * Math.PI) / 3,
    color: "#a78bfa",
    description: "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur optimales.",
    projects: ["Design System", "App Mobile", "Site E-commerce"],
    detailedProjects: [
      {
        name: "Design System Library",
        description: "Bibliothèque de composants réutilisables",
        githubUrl: "https://github.com/username/design-system",
        technologies: ["Storybook", "React", "Styled Components"]
      },
      {
        name: "UX Research Platform",
        description: "Plateforme d'analyse d'expérience utilisateur",
        githubUrl: "https://github.com/username/ux-research",
        technologies: ["React", "D3.js", "Analytics"]
      }
    ],
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Design Systems"],
    experience: "3 ans",
    icon: reactLogoUrl
  },
  {
    id: "animation",
    label: "Animation",
    ring: "passion",
    angle0: (5 * Math.PI) / 3,
    color: "#fb7185",
    description: "Création d'animations fluides et engageantes pour améliorer l'expérience utilisateur.",
    projects: ["Portfolio Animé", "Landing Page", "Présentation Interactive"],
    detailedProjects: [
      {
        name: "Interactive Portfolio",
        description: "Portfolio avec animations 3D immersives",
        githubUrl: "https://github.com/username/portfolio-3d",
        technologies: ["Three.js", "GSAP", "React", "Framer Motion"]
      },
      {
        name: "Motion Graphics Library",
        description: "Bibliothèque d'animations réutilisables",
        githubUrl: "https://github.com/username/motion-lib",
        technologies: ["Framer Motion", "Lottie", "CSS Animations"]
      }
    ],
    skills: ["Framer Motion", "GSAP", "Three.js", "CSS Animations", "Lottie", "After Effects"],
    experience: "2 ans",
    icon: reactLogoUrl
  },
  {
    id: "vue",
    label: "Vue.js",
    ring: "frontend",
    angle0: 0,
    color: "#4ade80",
    description: "Framework JavaScript progressif pour construire des interfaces utilisateur modernes.",
    projects: ["SPA Vue", "Dashboard Admin", "E-commerce Vue"],
    detailedProjects: [
      {
        name: "Vue Admin Dashboard",
        description: "Tableau de bord administrateur complet",
        githubUrl: "https://github.com/username/vue-admin",
        technologies: ["Vue 3", "Vuex", "Vue Router", "Quasar"]
      },
      {
        name: "Vue E-commerce",
        description: "Boutique en ligne avec Vue.js",
        githubUrl: "https://github.com/username/vue-shop",
        technologies: ["Vue.js", "Nuxt.js", "Strapi", "Stripe"]
      }
    ],
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
    projects: ["App Enterprise", "CRM Angular", "Dashboard Analytics"],
    detailedProjects: [
      {
        name: "Enterprise CRM",
        description: "Système de gestion de relation client",
        githubUrl: "https://github.com/username/angular-crm",
        technologies: ["Angular", "TypeScript", "RxJS", "Angular Material"]
      },
      {
        name: "Analytics Dashboard",
        description: "Tableau de bord d'analyse de données",
        githubUrl: "https://github.com/username/analytics-ng",
        technologies: ["Angular", "Chart.js", "NgRx", "PrimeNG"]
      }
    ],
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
    projects: ["App Svelte", "Widget Interactif", "Landing Page"],
    detailedProjects: [
      {
        name: "Svelte Widget Kit",
        description: "Collection de widgets interactifs",
        githubUrl: "https://github.com/username/svelte-widgets",
        technologies: ["Svelte", "SvelteKit", "Tailwind CSS"]
      },
      {
        name: "Fast Landing Page",
        description: "Landing page ultra-rapide avec Svelte",
        githubUrl: "https://github.com/username/svelte-landing",
        technologies: ["SvelteKit", "Vite", "PostCSS"]
      }
    ],
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
    projects: ["Site SSR", "Blog Next.js", "E-commerce SSG"],
    detailedProjects: [
      {
        name: "Next.js Blog Platform",
        description: "Plateforme de blog avec SSG et CMS",
        githubUrl: "https://github.com/username/nextjs-blog",
        technologies: ["Next.js", "MDX", "Contentful", "Vercel"]
      },
      {
        name: "E-commerce SSR",
        description: "Boutique avec rendu côté serveur",
        githubUrl: "https://github.com/username/nextjs-shop",
        technologies: ["Next.js", "Prisma", "NextAuth", "Stripe"]
      }
    ],
    skills: ["Next.js", "SSR", "SSG", "API Routes", "NextAuth", "Vercel", "Prisma"],
    experience: "1 an",
    icon: nextUrl
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    ring: "frontend",
    angle0: Math.PI / 3,
    color: "#06b6d4",
    description: "Framework CSS utilitaire pour créer rapidement des interfaces personnalisées.",
    projects: ["Design System", "Landing Page", "Dashboard UI"],
    detailedProjects: [
      {
        name: "Tailwind Component Library",
        description: "Bibliothèque de composants avec Tailwind",
        githubUrl: "https://github.com/username/tailwind-components",
        technologies: ["Tailwind CSS", "React", "Storybook", "PostCSS"]
      },
      {
        name: "Responsive Dashboard",
        description: "Interface d'administration responsive",
        githubUrl: "https://github.com/username/tailwind-dashboard",
        technologies: ["Tailwind CSS", "Vue.js", "Headless UI"]
      }
    ],
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
    projects: ["Portfolio SPA", "Dashboard Temps Réel", "App E‑commerce"],
    detailedProjects: [
      {
        name: "Portfolio Interactif",
        description: "Application monopage animée (SPA) avec routing, lazy loading et composants réutilisables.",
        githubUrl: "https://github.com/SneusFR/Portfolio",
        technologies: ["React", "TypeScript", "Vite", "Framer Motion", "CSS Modules"],
        demoUrl: "https://portfolio-sneus.vercel.app",
        technicalSpecs: {
          architecture: "Architecture SPA avec React Router et code splitting automatique",
          performance: "Temps de chargement < 2s avec lazy loading et optimisation Vite",
          security: "Validation TypeScript stricte et sanitisation des données",
          scalability: "Composants modulaires et système de design réutilisable"
        }
      },
      {
        name: "Dashboard IoT Temps Réel",
        description: "Dashboard de monitoring avec WebSocket, graphes dynamiques et filtrage côté client.",
        githubUrl: "https://github.com/SneusFR/react-realtime-dashboard",
        technologies: ["React", "TypeScript", "WebSocket", "Zustand", "Recharts"]
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
    projects: ["API Django", "Scripts Automation", "ML Pipeline"],
    detailedProjects: [
      {
        name: "Django REST API",
        description: "API REST complète avec Django et PostgreSQL",
        githubUrl: "https://github.com/username/django-api",
        technologies: ["Django", "Django REST", "PostgreSQL", "Celery"]
      },
      {
        name: "Data Processing Pipeline",
        description: "Pipeline de traitement de données avec Python",
        githubUrl: "https://github.com/username/data-pipeline",
        technologies: ["Python", "Pandas", "Apache Airflow", "Redis"]
      }
    ],
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
    projects: ["Spring Boot API", "Microservices", "Enterprise App"],
    detailedProjects: [
      {
        name: "Spring Boot Microservices",
        description: "Architecture microservices avec Spring Boot",
        githubUrl: "https://github.com/username/spring-microservices",
        technologies: ["Spring Boot", "Spring Cloud", "MySQL", "Docker"]
      },
      {
        name: "Enterprise Management System",
        description: "Système de gestion d'entreprise",
        githubUrl: "https://github.com/username/enterprise-system",
        technologies: ["Java", "Spring Framework", "Hibernate", "Oracle"]
      }
    ],
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
    projects: [".NET Core API", "Desktop App", "Web Services"],
    detailedProjects: [
      {
        name: ".NET Core Web API",
        description: "API REST avec .NET Core et Entity Framework",
        githubUrl: "https://github.com/username/dotnet-api",
        technologies: [".NET Core", "Entity Framework", "SQL Server", "Azure"]
      },
      {
        name: "WPF Desktop Application",
        description: "Application desktop avec WPF",
        githubUrl: "https://github.com/username/wpf-app",
        technologies: ["C#", "WPF", "MVVM", "SQL Server"]
      }
    ],
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
    projects: ["Laravel API", "WordPress Plugin", "E-commerce"],
    detailedProjects: [
      {
        name: "Laravel E-commerce API",
        description: "API e-commerce complète avec Laravel",
        githubUrl: "https://github.com/username/laravel-ecommerce",
        technologies: ["Laravel", "MySQL", "Redis", "Stripe API"]
      },
      {
        name: "Custom WordPress CMS",
        description: "CMS personnalisé basé sur WordPress",
        githubUrl: "https://github.com/username/wp-custom-cms",
        technologies: ["PHP", "WordPress", "MySQL", "jQuery"]
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
    projects: ["Microservices Go", "CLI Tools", "Web Server"],
    detailedProjects: [
      {
        name: "Go Microservices Architecture",
        description: "Architecture microservices performante en Go",
        githubUrl: "https://github.com/username/go-microservices",
        technologies: ["Go", "Gin", "gRPC", "PostgreSQL", "Docker"]
      },
      {
        name: "CLI Development Tools",
        description: "Outils en ligne de commande pour développeurs",
        githubUrl: "https://github.com/username/go-cli-tools",
        technologies: ["Go", "Cobra", "Viper", "SQLite"]
      }
    ],
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
    projects: ["Web Server Rust", "CLI Apps", "System Tools"],
    detailedProjects: [
      {
        name: "High-Performance Web Server",
        description: "Serveur web haute performance en Rust",
        githubUrl: "https://github.com/username/rust-web-server",
        technologies: ["Rust", "Actix-web", "Tokio", "PostgreSQL"]
      },
      {
        name: "System Monitoring Tools",
        description: "Outils de monitoring système en Rust",
        githubUrl: "https://github.com/username/rust-monitoring",
        technologies: ["Rust", "Clap", "Serde", "Tokio"]
      }
    ],
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
    projects: ["E-commerce DB", "Analytics Platform", "Multi-tenant App"],
    detailedProjects: [
      {
        name: "E-commerce Database Design",
        description: "Architecture de base de données pour plateforme e-commerce",
        githubUrl: "https://github.com/username/postgres-ecommerce",
        technologies: ["PostgreSQL", "PL/pgSQL", "Prisma", "Docker"]
      },
      {
        name: "Analytics Data Warehouse",
        description: "Entrepôt de données pour analytics en temps réel",
        githubUrl: "https://github.com/username/postgres-analytics",
        technologies: ["PostgreSQL", "TimescaleDB", "Apache Airflow", "dbt"]
      }
    ],
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
    projects: ["Web App DB", "CMS Database", "API Backend"],
    detailedProjects: [
      {
        name: "High-Traffic Web Application",
        description: "Base de données optimisée pour forte charge",
        githubUrl: "https://github.com/username/mysql-webapp",
        technologies: ["MySQL", "ProxySQL", "Percona", "Redis"]
      },
      {
        name: "Content Management System",
        description: "CMS avec base de données MySQL optimisée",
        githubUrl: "https://github.com/username/mysql-cms",
        technologies: ["MySQL", "PHP", "Laravel", "Memcached"]
      }
    ],
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
    projects: ["Real-time App", "Content Platform", "IoT Data Storage"],
    detailedProjects: [
      {
        name: "Real-time Chat Application",
        description: "Application de chat avec MongoDB et Socket.io",
        githubUrl: "https://github.com/username/mongodb-chat",
        technologies: ["MongoDB", "Node.js", "Socket.io", "Mongoose"]
      },
      {
        name: "IoT Data Collection Platform",
        description: "Plateforme de collecte de données IoT",
        githubUrl: "https://github.com/username/mongodb-iot",
        technologies: ["MongoDB", "Express", "Time Series", "Aggregation Pipeline"]
      }
    ],
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
    projects: ["Cache System", "Session Store", "Real-time Analytics"],
    detailedProjects: [
      {
        name: "High-Performance Caching Layer",
        description: "Système de cache distribué avec Redis",
        githubUrl: "https://github.com/username/redis-cache",
        technologies: ["Redis", "Redis Cluster", "Node.js", "Docker"]
      },
      {
        name: "Real-time Leaderboard",
        description: "Système de classement en temps réel",
        githubUrl: "https://github.com/username/redis-leaderboard",
        technologies: ["Redis", "Sorted Sets", "Pub/Sub", "WebSockets"]
      }
    ],
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
    projects: ["Search Engine", "Log Analytics", "Monitoring Platform"],
    detailedProjects: [
      {
        name: "E-commerce Search Engine",
        description: "Moteur de recherche avancé pour e-commerce",
        githubUrl: "https://github.com/username/elasticsearch-search",
        technologies: ["Elasticsearch", "Kibana", "Logstash", "Node.js"]
      },
      {
        name: "Application Monitoring Platform",
        description: "Plateforme de monitoring avec ELK Stack",
        githubUrl: "https://github.com/username/elk-monitoring",
        technologies: ["Elasticsearch", "Logstash", "Kibana", "Beats"]
      }
    ],
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
    projects: ["Mobile App DB", "Desktop App", "Prototype Development"],
    detailedProjects: [
      {
        name: "Mobile Application Database",
        description: "Base de données locale pour application mobile",
        githubUrl: "https://github.com/username/sqlite-mobile",
        technologies: ["SQLite", "React Native", "Expo", "SQL.js"]
      },
      {
        name: "Desktop Application Storage",
        description: "Stockage local pour application Electron",
        githubUrl: "https://github.com/username/sqlite-desktop",
        technologies: ["SQLite", "Electron", "Better-sqlite3", "TypeScript"]
      }
    ],
    skills: ["SQLite", "SQL", "Database Design", "Mobile Development", "Embedded Systems", "Performance"],
    experience: "4 ans",
    icon: sqliteUrl
  }
];

export const angularVelocities = {
  passion: 0.04,
  frontend: 0.04,
  backend: 0.04,
  database: 0.04,
};
