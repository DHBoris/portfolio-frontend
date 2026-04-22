import type { Person, NavLink, Tech, Project, SkillCategory, EducationItem } from '@/types';

export const person: Person = {
  name: 'Boris Dhaene',
  title: 'Full Stack Web Developer Junior',
  tagline: "Passionné par la création d'expériences web modernes, performantes et accessibles.",
  status: 'Disponible — Présentiel / Remote',
  email: 'boris.dhaene@email.com',
  linkedin: 'https://linkedin.com/in/borisdhaene',
  github: 'https://github.com/borisdhaene',
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
  { name: 'Node.js', icon: '⬡' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '⑂' },
  { name: 'REST API', icon: '⌁' },
];

export const projects: Project[] = [
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
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['Node.js / Express', 'REST APIs', 'PostgreSQL / MySQL', 'MongoDB', 'JWT Auth'],
  },
  {
    title: 'DevOps & Outils',
    items: ['Git / GitHub', 'Docker', 'CI/CD (GitHub Actions)', 'Linux / CLI', 'Figma'],
  },
];

export const education: EducationItem[] = [
  {
    year: '2024 – 2025',
    title: 'Formation Full Stack Web Developer',
    org: 'BeCode — Bruxelles',
    desc: 'Formation intensive de 7 mois — HTML/CSS, JavaScript, React, Node.js, bases de données, méthodes agiles.',
  },
  {
    year: '2023',
    title: 'Autodidacte & Certifications',
    org: 'freeCodeCamp · Udemy · The Odin Project',
    desc: 'JavaScript Algorithms & Data Structures, Responsive Web Design, React & Redux, APIs REST.',
  },
  {
    year: '2022',
    title: 'Baccalauréat',
    org: 'Athénée Royal — Belgique',
    desc: 'Option Mathématiques & Sciences. Bonne base analytique et résolution de problèmes.',
  },
];
