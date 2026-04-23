export interface NavLink {
  label: string;
  href: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export interface ProjectServer {
  name: string;
  game: string;
  online: number;
  members: number;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  accent: string;
  status: 'Live' | 'En cours';
  demo: string;
  repo: string;
  images?: Array<string | { src: string; contain?: boolean }>;
  server?: ProjectServer;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  org: string;
  desc: string;
}

export interface Person {
  name: string;
  title: string;
  tagline: string;
  status: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
