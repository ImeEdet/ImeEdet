/**
 * Central content file for the portfolio.
 * Edit the values below to update the whole site — no component changes needed.
 */

export const profile = {
  name: "Ime Akanimo Edet",
  roles: "Software Engineering Graduate | IT Support | Customer Service | Creative Developer",
  intro:
    "I'm a Software Engineering graduate with experience in IT support, customer service, technical instruction, and team leadership. I enjoy solving problems, helping people, and exploring creative ways to use technology. My interests include front-end development, artificial intelligence, machine learning, and building practical digital experiences.",
};

export const aboutParagraphs = [
  "I'm a Software Engineering graduate who enjoys exploring the intersection of technology, creativity, and communication.",
  "My professional experience spans IT support, customer service, and technical instruction, while my personal projects allow me to experiment with application development and digital experiences.",
  "Outside technology, I enjoy creative writing, worldbuilding, reading, and learning languages.",
];

export const aboutBeyondWork =
  "Creative writing, worldbuilding, reading, and language learning keep me experimenting — they sharpen the same skills I bring to building useful software.";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Niger Delta Development Commission (NDDC)",
    role: "Corps Member — IT Department",
    period: "February 2026 – Present",
    location: "Port Harcourt, Nigeria",
    current: true,
    bullets: [
      "Provide tier-one and tier-two IT support to staff.",
      "Troubleshoot hardware, software, and network issues.",
      "Assist with daily IT operations and equipment maintenance.",
      "Supervise NYSC and industrial training interns.",
      "Support internal reporting procedures.",
    ],
  },
  {
    company: "Start Innovation Hub",
    role: "Team Lead — Developer Interns",
    period: "August 2025 – November 2025",
    location: "Uyo, Nigeria",
    bullets: [
      "Mentored junior developer interns in Python and software engineering fundamentals.",
      "Conducted code reviews and technical problem-solving sessions.",
      "Provided feedback and guidance to support skill development.",
    ],
  },
  {
    company: "National Identity Management Commission (NIMC)",
    role: "Customer Service Intern",
    period: "March 2024 – August 2024",
    location: "Akwa Ibom State, Nigeria",
    bullets: [
      "Assisted hundreds of applicants with NIN registration, verification, and data updates.",
      "Responded to inquiries and explained documentation requirements.",
      "Handled customer complaints professionally.",
      "Maintained accuracy during data capture and verification.",
    ],
  },
  {
    company: "Start Innovation Hub",
    role: "Customer Service & Instructor Intern",
    period: "August 2023 – December 2023",
    location: "Uyo, Nigeria",
    bullets: [
      "Taught introductory HTML and CSS.",
      "Handled customer inquiries and front-facing communications.",
      "Conducted follow-up calls with prospective customers.",
    ],
  },
];

export const education = {
  school: "Topfaith University",
  degree: "Bachelor of Science in Software Engineering",
  years: "November 2021 – July 2025",
  areas: [
    "Software Engineering",
    "Machine Learning",
    "Data Structures and Algorithms",
    "Computer Networks",
    "Software Architecture",
    "Project Management",
  ],
};

export type Project = {
  title: string;
  category: string;
  description: string;
  demoUrl: string;
  tags: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    title: "XYZ Foods",
    category: "Restaurant Application Demo",
    description:
      "Originally developed for a friend's project concept, XYZ Foods has become an ongoing personal development project. I continue to refine its design, explore new ideas, and improve the overall user experience.",
    demoUrl: "https://xyzfoods.lovable.app",
    tags: ["Front-end Web Development", "AI"],
    image: "/images/xyz-foods/Screenshot_2026-10-24_215443.png",
  },
  {
    title: "Drift Connect",
    category: "Logistics Application Prototype",
    description:
      "A logistics application demo developed from a friend's project concept, translating an initial idea into a published digital prototype.",
    demoUrl: "https://driftlogistics.lovable.app",
    tags: ["Front-end Web Development", "AI"],
    image: "/images/drift-logistics/Screenshot_2026-10-24_215530.png",
  },
  {
    title: "Story Muse Magic",
    category: "Creative Writing Application",
    description:
      "A creative writing application exploring storytelling, brainstorming, and idea generation. Inspired by my interest in fiction writing and worldbuilding.",
    demoUrl: "https://story-muse-magic.lovable.app",
    tags: ["Front-end Web Development", "AI"],
    image: "/images/story-muse/Screenshot_2026-10-24_215955.png",
  },
];

export const skillCategories: { title: string; blurb: string; skills: string[] }[] = [
  {
    title: "Customer Service & Communication",
    blurb: "Making every interaction count",
    skills: [
      "Customer Support",
      "Customer Inquiries",
      "Prospect Follow-Up Calls",
      "Complaint Resolution",
      "Communication",
    ],
  },
  {
    title: "IT & Technical Support",
    blurb: "Building and keeping things running",
    skills: [
      "Hardware and Software Troubleshooting",
      "Network Support",
      "IT Operations",
      "Data Capture and Verification",
      "Microsoft Office",
    ],
  },
  {
    title: "Development",
    blurb: "Bringing ideas to life",
    skills: [
      "Python",
      "HTML",
      "CSS",
      "Front-End Development",
      "AI-Assisted Application Prototyping",
    ],
  },
  {
    title: "Leadership",
    blurb: "Helping others do their best work",
    skills: ["Team Mentorship", "Technical Instruction", "Collaboration", "Problem-Solving"],
  },
];

export const contact = {
  heading: "Let's Connect",
  message:
    "I'm always open to connecting, collaborating, and exploring opportunities where I can contribute my skills and continue learning.",
  email: "menobltd@gmail.com",
  linkedin: "https://www.linkedin.com/in/ime-edet-960926223/",
  github: "https://github.com/ImeEdet",
  cvPath: "/EDET_IME_AKANIMO_CV_3.docx",
  pdfPath: "/Ime-Akanimo-Edet-CV.pdf",
};
