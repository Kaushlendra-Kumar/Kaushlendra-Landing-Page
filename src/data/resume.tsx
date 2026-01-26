import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Kaushlendra Kumar',
  initials: 'KK',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kaushlendra.xyz',
  location: 'India',
  description: 'Software Engineer | MERN | Next.js | ML Enthusiast',
  summary:
    'Full-stack developer passionate about clean code, AI tools & scalable systems.',
  avatarUrl: '',

  skills: [
    'ReactJS',
    'Next.js',
    'TypeScript',
    'Redux',
    'Node.js',
    'Golang',
    'C++',
    'SQL',
    'Python',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS',
    'RestAPI',
    'Solidity',
    'TensorFlow',
  ],

  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/logs', icon: NotebookIcon, label: 'Logs' },
  ],

  contact: {
    email: 'kaushlendrakumar081@gmail.com',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Kaushlendra-Kumar',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kaushlendra-kumar-/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/Kaushlendra_000',
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'kaushlendrakumar081@gmail.com',
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Accenture',
      href: 'https://www.accenture.com',
      badges: [],
      location: 'On-Site',
      title: 'Associate Software Engineer',
      logoUrl: '/ACN.png',
      start: 'Apr 2024',
      end: 'Present',
      description:
        'Building and maintaining enterprise-grade backend systems, working with APIs, databases, and cloud infrastructure to deliver scalable solutions.',
    },
    {
      company: 'Freelance',
      href: '',
      badges: [],
      location: 'Remote',
      title: 'Software Engineer',
      logoUrl: '/freelance.jpg',
      start: 'Mar 2023',
      end: 'Apr 2024',
      description:
        'Delivered end-to-end web applications for clients including portfolio sites, a hospital consultation system, and ML-powered tools for data analysis.',
    },
  ],

  education: [
    {
      school: 'National Institute of Technology Calicut',
      href: 'https://nitc.ac.in',
      degree: 'B.Tech | Materials Science & Engineering',
      logoUrl: '/nitc-logo.png',
      start: '2019',
      end: '2023',
      description:
        'Built a strong foundation in engineering principles, problem-solving, and collaborative project work.',
    },
  ],

  projects: [
    {
      title: 'Thought Particles',
      href: 'https://thought-particles-game.vercel.app/',
      dates: '2025',
      active: true,
      description:
        'A vibe-coded experiment where thoughts float like particles—drop emotions and watch them attract or repel using a custom physics engine.',
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'Lucide React',
        'Custom Physics',
      ],
      logoUrl: '/thought-particles.png',
      github: 'https://github.com/Krypt0nite/thought-particles-game',
    },
    {
      title: 'SMSE AI Toolkit',
      href: 'https://github.com/Kaushlendra-Kumar/smse-toolkit-website',
      dates: '2023',
      active: true,
      description:
        'AI-powered toolkit for microstructure classification, steel alloy recognition, and research database lookup with a citation generator.',
      technologies: ['React', 'Python', 'Machine Learning', 'Flask', 'Pandas'],
      logoUrl: '/project.png',
    },
    {
      title: 'Sorting Visualizer',
      href: 'https://sorting-visualizer-seven-zeta.vercel.app/',
      dates: '2024',
      active: true,
      description:
        'Interactive tool that brings sorting algorithms to life—watch Bubble, Merge, and Quick Sort step through arrays in real time.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      logoUrl: '/sorting.png',
    },
  ],

  achievements: [
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      date: '2025',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/KaushlendraKumar-8899/2519D5E2245E5F18?sharingId=E0B47154A0C09F19',
      description:
        'Certified in designing, building, and maintaining cloud applications on Azure',
      logoUrl: '/microsoft.png',
    },
    {
      title: 'Microsoft – GitHub Actions Certification',
      date: '2025',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/KaushlendraKumar-8899/CF9F5CC07F4669D2?sharingId',
      description: 'Certified in GitHub automation and CI/CD workflows',
      logoUrl: '/microsoft.png',
    },
    {
      title: '500+ DSA Problems Solved',
      date: '2021-2025',
      url: 'https://leetcode.com/u/Kaushlendra_8191/',
      description:
        'Consistently solving algorithmic challenges across LeetCode, HackerRank, and other platforms',
    },
  ],
} as const
