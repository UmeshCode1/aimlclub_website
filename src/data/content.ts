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
  github?: string;
  instagram?: string;
  x?: string; // X (formerly Twitter)
  bio?: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Vishal Kumar', role: 'President', bio: 'Leads club vision, partnerships, and strategic initiatives across campus.', linkedin: '#', x: '#' },
  { name: 'Umesh Patel', role: 'Vice President', bio: 'Operations and growth. Helps plan workshops and inter-college collaborations.', linkedin: '#', github: '#' },
  { name: 'Prakhar Sahu', role: 'Media Relations', bio: 'Owns content, branding, and outreach across platforms.', instagram: '#', linkedin: '#' },
  { name: 'Aarchi Sharma', role: 'Event Head', bio: 'Curates learning tracks and coordinates end-to-end event execution.', linkedin: '#' },
  { name: 'Parul Ajit', role: 'Event Head', bio: 'Logistics and attendee experience for hackathons and meetups.', linkedin: '#' },
  { name: 'Gourav Jain', role: 'Event Head', bio: 'Scheduling, mentors, and talk lineups for club programs.', linkedin: '#' },
  { name: 'Prince Kumar', role: 'Discipline Head', bio: 'Creates a positive, inclusive environment during all activities.', linkedin: '#' },
  { name: 'Kinshuk Verma', role: 'Tech Lead', bio: 'Leads technical roadmap and project scaffolds for student teams.', github: '#', linkedin: '#' },
  { name: 'Khushi Kumari', role: 'Media', bio: 'Designs creatives and helps with visual storytelling.', instagram: '#' },
  { name: 'Arpit Mistrel', role: 'Media', bio: 'Video edits, highlights, and event recaps.', instagram: '#' },
  { name: 'Abhijeet Sarkar', role: 'Editor', bio: 'Writes and reviews guides, posts, and announcements.', x: '#' },
  { name: 'Pritish Mandal', role: 'Editor', bio: 'Proofreads and maintains content quality and tone.', linkedin: '#' },
  { name: 'Heer', role: 'Stage Lead', bio: 'Stage planning and on-ground coordination during events.' },
  { name: 'Anshul Sharma', role: 'Stage Lead', bio: 'Hosts sessions and ensures seamless stage transitions.' }
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
