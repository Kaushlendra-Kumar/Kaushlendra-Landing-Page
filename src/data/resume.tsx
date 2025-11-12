import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kaushlendra Kumar",
  initials: "KK",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kaushlendra.xyz",
  location: "India",
  description: "Software Engineer | MERN | Next.js | ML Enthusiast",
  summary: "Full-stack developer passionate about clean code, AI tools & scalable systems.",
  avatarUrl: "",
  
  skills: [
    "ReactJS", "Next.js", "TypeScript", "Redux", "Node.js", "Golang",
    "C++", "SQL", "Python", "PostgreSQL", "Redis", "Docker",
    "AWS", "RestAPI", "Solidity", "TensorFlow"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/logs", icon: NotebookIcon, label: "Logs" },
  ],

  contact: {
    email: "kaushlendrakumar081@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kaushlendra-Kumar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kaushlendra-kumar-/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Kaushlendra_000",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "",
      badges: [],
      location: "On-Site",
      title: "Associate Software Engineer",
      logoUrl: "/ACN.png",
      start: "Apr 2024",
      end: "Present",
      description: "Working on scalable enterprise applications & full-stack systems."
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/freelance.jpg",
      start: "Mar 2023",
      end: "Apr 2024",
      description: `Software Engineer & Freelancer — built scalable web apps, portfolio sites, 
hospital consultation systems, and ML-powered tools.`
    }
  ],

  education: [
    {
      school: "National Institute of Technology Calicut",
      href: "#",
      degree: "B.Tech | Materials Science & Engineering",
      logoUrl: "/nitc-logo.png",
      start: "2019",
      end: "2023",
      description: "Learned engineering fundamentals, teamwork & leadership."
    }
  ],

  projects: [
    {
      title: "SMSE AI Toolkit",
      href: "https://github.com/Kaushlendra-Kumar/smse-toolkit-website",
      dates: "2023",
      active: true,
      description:
        "An AI-powered toolkit for Microstructure Classification, Steel Alloy Recognition, Database Lookup, Citation Generator & UI/UX interface.",
      technologies: ["React", "Python", "Machine Learning", "Flask", "Pandas"],
       logoUrl: "/project.png", 
    },
    {
      title: "Sorting Visualizer",
      href: "https://sorting-visualizer-seven-zeta.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Interactive visualization tool for sorting algorithms including Bubble, Merge & Quick Sort using React + Tailwind.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
  ],

  achievements: [
    {
      title: "Microsoft – GitHub Actions Certification",
      date: "2025",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/KaushlendraKumar-8899/CF9F5CC07F4669D2?sharingId",
      description: "Certified in GitHub automation & CI/CD workflows"
      
    },
    {
      title: "500+ DSA Problems Solved",
      date: "2021-2025",
      url: "https://leetcode.com/u/Kaushlendra_8191/",
      description:
        "Solved 500+ DSA questions across LeetCode, HackerRank & other platforms"
        
    }
  ]
} as const;
