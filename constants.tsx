import React from 'react';
import { Project, Experience, SkillGroup } from './types';

export const PROFILE = {
  name: "ARYAN KAHAR",
  title: "Lead Systems Engineer",
  subtitle: "AI & Full-Stack Architect",
  location: "Mumbai, India",
  email: "aryankahar31@gmail.com",
  github: "github.com/aryankahar31",
  instagram: "instagram.com/aryankahar31",
  twitter: "x.com/aryankahar31",
  linkedin: "linkedin.com/in/aryan-kahar-4b5370246/",
  summary: "Co-Founder of ALIENXCODE and B.Sc. CS researcher focused on high-concurrency systems and AI-driven automation. I specialize in bridging the gap between complex backend logic and immersive frontend experiences, with deep expertise in WebRTC, Flask, and RAG architectures."
};

export const PROJECTS: Project[] = [
  {
    title: "Red Bus: UX Logic",
    link: "https://design-thinking-in-red-bus.vercel.app/",
    description: "Architectural audit and design-thinking overhaul of the Red Bus ecosystem. Focused on reducing cognitive load through optimized user-flow heuristics.",
    highlights: ["UX Heuristics", "Heuristic Evaluation", "Flow Optimization"],
    metric: "+32% task completion"
  },
  {
    title: "DP Algo-Visualizer",
    link: "https://dynamic-programming-visualizer-iota.vercel.app/",
    description: "High-performance interactive engine for visualizing complex recursive state transitions. Built to simplify the mental model of Dynamic Programming.",
    highlights: ["Memoization Viz", "State Tracking", "React Engine"],
    metric: "2K+ sessions explored"
  },
  {
    title: "Arushii V.25",
    link: "https://arushii.vercel.app/",
    description: "A flagship digital experience demonstrating fluid motion design and premium branding for high-stakes production environments.",
    highlights: ["GSAP Animation", "Asset Pipeline", "Brand Logic"],
    metric: "LCP 0.9s"
  },
  {
    title: "AlienXFile V2",
    link: "https://alienxfilev2.pythonanywhere.com/?i=1",
    description: "Cryptographically secure ephemeral file transfer system. Implements 6-digit dynamic keys and automated cleanup protocols on a Flask core.",
    highlights: ["Flask Backend", "Secure Protocol", "Ephemeral Storage"],
    metric: "6-digit dynamic keys"
  },
  {
    title: "Heritage Node",
    link: "https://aryankahar31.vercel.app/#/",
    description: "The original digital archive of experimental web prototypes and early engineering milestones at the inception of AlienXCode.",
    highlights: ["Legacy Code", "Creative Archive", "V1 Terminal"],
    metric: "120+ prototypes"
  }
];

export const SKILLS: SkillGroup[] = [
  { category: "Frontend_Eng", items: ["React 19", "Vue Next", "Tailwind CSS", "Motion Dev", "WebVitals"] },
  { category: "Backend_Core", items: ["Flask / Python", "Node.js", "WebRTC", "PostgreSQL", "REST Architecture"] },
  { category: "System_Logic", items: ["Python Systems", "C++ Logic", "Asynchronous IO", "Design Patterns"] },
  { category: "AI_Automation", items: ["RAG Pipelines", "Whisper ASR", "LLM Integration", "Agentic Workflows"] }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Co-Founder & Lead Engineer",
    company: "ALIENXCODE",
    period: "JAN 2024 – PRESENT",
    points: [
      "Leading cross-functional teams in the development of AI-integrated systems and high-scale full-stack applications.",
      "Architected backend infrastructures for production-ready WebRTC and Flask-based communication platforms.",
      "Spearheaded the integration of autonomous AI agents and voice-processing pipelines (Whisper/GPT) into internal tools.",
      "Orchestrating technical vision and implementing rigorous code quality standards across the organization."
    ]
  },
  {
    role: "Full Stack Researcher",
    company: "CS Academy (Academic Focus)",
    period: "2022 – 2024",
    points: [
      "Explored low-level system optimizations and algorithmic complexity in data processing.",
      "Developed a suite of open-source visualizers for data structures and algorithms.",
      "Focused on the intersection of user experience and computational efficiency."
    ]
  }
];
