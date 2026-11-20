export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  year: string;
  role: string;
  url: string;
  metrics: string[];
  description: string;
  techStack: string[];
  gradient: string;
  accentColor: string;
  has3dModel?: boolean;
  modelPath?: string;
  screenshots: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  level?: string;
  category: 'Sangfor' | 'Industry' | 'Cloud';
  badgeColor: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}