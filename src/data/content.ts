export type TeamRole =
  | 'President'
  | 'Vice President'
  | 'Media Relations'
  | 'Event Head'
  | 'Discipline Head'
  | 'Tech Lead'
  | 'Media'
  | 'Editor'
  | 'Stage Lead';

export interface TeamMember {
  name: string;
  role: TeamRole;
  image?: string; // optional placeholder
  linkedin?: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Vishal Kumar', role: 'President' },
  { name: 'Umesh Patel', role: 'Vice President' },
  { name: 'Prakhar Sahu', role: 'Media Relations' },
  { name: 'Aarchi Sharma', role: 'Event Head' },
  { name: 'Parul Ajit', role: 'Event Head' },
  { name: 'Gourav Jain', role: 'Event Head' },
  { name: 'Prince Kumar', role: 'Discipline Head' },
  { name: 'Kinshuk Verma', role: 'Tech Lead' },
  { name: 'Khushi Kumari', role: 'Media' },
  { name: 'Arpit Mistrel', role: 'Media' },
  { name: 'Abhijeet Sarkar', role: 'Editor' },
  { name: 'Pritish Mandal', role: 'Editor' },
  { name: 'Heer', role: 'Stage Lead' },
  { name: 'Anshul Sharma', role: 'Stage Lead' }
];

export interface EventItem {
  title: string;
  date: string; // ISO or human string
  poster?: string;
  description: string;
  registerUrl?: string;
  past?: boolean;
}

export const EVENTS: EventItem[] = [
  {
    title: 'AI for Everyone – Intro Workshop',
    date: '2025-11-20',
    description: 'Hands-on intro to AI/ML fundamentals and Python notebooks.',
    registerUrl: '#',
    poster: '/assets/poster-ai-intro.svg'
  },
  {
    title: 'Hack the Future – 24h Hackathon',
    date: '2025-12-15',
    description: 'Collaborative hackathon focused on applied AI for social good.',
    registerUrl: '#',
    poster: '/assets/poster-hack.svg'
  },
  {
    title: 'LLM Study Jam',
    date: '2025-08-12',
    description: 'A completed study jam covering transformers and prompt engineering.',
    past: true,
    poster: '/assets/poster-llm.svg'
  }
];

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  image?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'CampusVision: Smart Attendance',
    description: 'Face-recognition powered attendance system with privacy-first design.',
    tags: ['Vision', 'OpenCV', 'Python'],
    github: 'https://github.com/your-org/campusvision',
    image: '/assets/project-1.svg'
  },
  {
    title: 'MediAssist: HealthBot',
    description: 'LLM-based assistant for preliminary triage and health FAQs.',
    tags: ['LLM', 'Next.js', 'RAG'],
    github: 'https://github.com/your-org/mediassist',
    image: '/assets/project-2.svg'
  },
  {
    title: 'EcoSense: Waste Classifier',
    description: 'Mobile-friendly classifier for sorting recyclables in campus.',
    tags: ['TensorFlow', 'MobileNet'],
    github: 'https://github.com/your-org/ecosense',
    image: '/assets/project-3.svg'
  }
];

export const SOCIALS = {
  email: 'aimlclub.oct@gmail.com',
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
  github: 'https://github.com/'
};

export const JOIN_LINK = {
  label: 'Join Us',
  href: '#', // Replace with Google Form or WhatsApp Community link
};
