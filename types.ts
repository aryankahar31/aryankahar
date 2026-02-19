
export interface Project {
  title: string;
  link: string;
  description: string;
  highlights: string[];
  metric: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
