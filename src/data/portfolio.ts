import type { Person, NavLink, Tech, Project, SkillCategory, EducationItem } from '@/types';

export const person: Person = {
  name: 'Boris Dhaene',
  title: 'Développeur Web Full Stack Junior',
  tagline: "Passionné par la création d'expériences web modernes, performantes et accessibles.",
  status: 'Disponible — Présentiel / Remote',
  email: 'dhaene62590@gmail.com',
  linkedin: 'https://linkedin.com/in/borisdhaene',
  github: 'https://github.com/DHBoris',
  cv: '#',
};

export const navLinks: NavLink[] = [
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Formations', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const techs: Tech[] = [
  { name: 'React', icon: '⚛' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'Node.js', icon: '⬡' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '⑂' },
  { name: 'REST API', icon: '⌁' },
];

export const projects: Project[] = [
  {
    title: 'Police de Konoha',
    desc: 'Web app full stack de gestion interne pour le serveur FSC roleplay Naruto, casiers judiciaires, mandats d\'arrêt, carnet d\'amendes, organigramme et système de rôles hiérarchisés.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    color: 'from-red-950/60 to-neutral-950/40',
    accent: '#cc1a1a',
    status: 'Live',
    demo: 'https://konoha-police.vercel.app/#accueil',
    repo: '#',
    images: [
      '/images/konoha-police-login.png',
      { src: '/images/konoha-police-dashboard.png', contain: true },
    ],
    server: {
      name: 'FSC | Ninja RP',
      game: 'Garry\'s Mod',
      online: 3915,
      members: 20389,
    },
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Application full stack avec panier, paiement Stripe, dashboard admin et gestion des stocks en temps réel.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: 'from-blue-900/40 to-cyan-900/20',
    accent: '#64CEFB',
    status: 'Live',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Social Dashboard',
    desc: 'Dashboard analytics avec visualisation de données, authentification JWT et API RESTful.',
    tags: ['React', 'Express', 'MongoDB', 'Chart.js'],
    color: 'from-purple-900/40 to-pink-900/20',
    accent: '#a78bfa',
    status: 'Live',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'Application de gestion de tâches collaborative avec WebSockets, drag & drop et notifications push.',
    tags: ['React', 'Socket.io', 'Node.js', 'Redis'],
    color: 'from-emerald-900/40 to-teal-900/20',
    accent: '#34d399',
    status: 'En cours',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio API',
    desc: 'API REST documentée (OpenAPI) avec cache, rate limiting, CI/CD automatisé via GitHub Actions.',
    tags: ['Node.js', 'TypeScript', 'Docker', 'GitHub Actions'],
    color: 'from-orange-900/40 to-red-900/20',
    accent: '#fb923c',
    status: 'Live',
    demo: '#',
    repo: '#',
  },
];

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React / Next.js', 'Vue.js / Redux', 'TypeScript / JS ES6+', 'Tailwind CSS / CSS3', 'Responsive Design / Figma'],
  },
  {
    title: 'Backend',
    items: ['Node.js / Express.js', 'Symfony / PHP', 'API REST / JWT Auth', 'MongoDB / MySQL', 'PostgreSQL / SQL'],
  },
  {
    title: 'Outils & Méthodes',
    items: ['Git / GitHub / GitLab', 'Vercel / Render', 'Vite / Webpack / Postman', 'Agile / Scrum', 'Code review / Tests unitaires'],
  },
];

export const education: EducationItem[] = [
  {
    year: 'Juil. 2023 – Jan. 2024',
    title: 'Développeur Web Full Stack',
    org: 'Incubateur Euratechnologies — Lille',
    desc: 'Développement d\'une plateforme e-commerce en environnement startup. Frontend React, Backend Node.js / Express. Gestion de backlog en Agile, revue de code et déploiement en recette.',
  },
  {
    year: '2022 – 2023',
    title: 'Concepteur Développeur d\'Applications (Alternance)',
    org: 'AFPA Euratechnologies — Lille',
    desc: 'En alternance chez Curioo, Tourcoing. Développement de sites vitrines et web apps pour clients variés (Vue.js, Next.js, Node.js). Réunions client, recueil des besoins et recette fonctionnelle.',
  },
  {
    year: '2021 – 2022',
    title: 'Développeur Web et Web Mobile',
    org: 'AFPA Euratechnologies — Lille',
    desc: 'Formation aux fondamentaux du web, JavaScript, React et Node.js. Stage chez Curioo — prise en main de Symfony, mise en place d\'architecture applicative et création de maquettes Figma.',
  },
  {
    year: '2020 – 2021',
    title: 'Licence 3 Électronique et Télécommunications',
    org: 'UPHF — Valenciennes',
    desc: 'Base solide en logique numérique, algorithmes et systèmes. Reconversion vers le développement web à l\'issue de cette année.',
  },
  {
    year: '2017 – 2019',
    title: 'BTS Systèmes Numériques',
    org: 'Lycée Ozanam — Lille',
    desc: 'Formation technique en systèmes, réseaux et électronique numérique. Solide culture technique à la base de mon approche du développement.',
  },
  {
    year: '2014',
    title: 'Baccalauréat Scientifique',
    org: 'Lycée Diderot — Carvin',
    desc: 'Spécialité Mathématiques. Base analytique et logique appliquée à la résolution de problèmes.',
  },
];
