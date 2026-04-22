import {
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  promptix,
  ngo,
} from '../assets';
import sklearn from '../assets/tech/sklearn.png';
import express from '../assets/tech/express.png';
import nextjs from '../assets/tech/nextjs.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-Stack Development',
    icon: '💻',
    subtitle: 'MERN · Next.js',
    description:
      'Building end-to-end web apps with React, Next.js, Node.js, Express, and MongoDB.',
  },
  {
    title: 'AI / ML Exploration',
    icon: '🧠',
    subtitle: 'Models · APIs',
    description:
      'Integrating intelligent systems, ML models, and AI APIs into real-world applications.',
  },
  {
    title: 'Data Science',
    icon: '📊',
    subtitle: 'Python · Analytics',
    description:
      'Performing EDA, data analysis, and visualization using Python, Pandas, and NumPy.',
  },
  {
    title: 'Problem Solving',
    icon: '⚙️',
    subtitle: 'DSA · LeetCode',
    description:
      'Sharpening algorithmic thinking through data structures, patterns, and coding challenges.',
  },
];

const technologies = [
  // Languages
  {
    name: 'Python',
    icon: 'https://img.icons8.com/color/96/python--v1.png',
  },
  {
    name: 'Java',
    icon: 'https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png',
  },
  // Frontend
  {
    name: 'React.js',
    icon: 'https://img.icons8.com/plasticine/100/react.png',
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/color/96/tailwindcss.png',
  },
  // Backend
  {
    name: 'Node.js',
    icon: 'https://img.icons8.com/color/96/nodejs.png',
  },
  {
    name: 'Express.js',
    icon: 'https://img.icons8.com/ios/100/ffffff/express-js.png',
  },
  // Databases
  {
    name: 'MongoDB',
    icon: 'https://img.icons8.com/color/96/mongodb.png',
  },
  {
    name: 'SQL',
    icon: 'https://img.icons8.com/color/96/mysql-logo.png',
  },
  // AI/ML & Data
  {
    name: 'NumPy',
    icon: 'https://img.icons8.com/color/96/numpy.png',
  },
  {
    name: 'Pandas',
    icon: 'https://img.icons8.com/color/96/pandas.png',
  },
  {
    name: 'Scikit-Learn',
    icon: sklearn,
  },
  // Tools & Platforms
  {
    name: 'Git',
    icon: 'https://img.icons8.com/color/96/git.png',
  },
  {
    name: 'GitHub',
    icon: 'https://img.icons8.com/glyph-neue/96/ffffff/github.png',
  },
  {
    name: 'Docker',
    icon: 'https://img.icons8.com/color/96/docker.png',
  },
  {
    name: 'Figma',
    icon: 'https://img.icons8.com/color/96/figma--v1.png',
  },
  {
    name: 'Vercel',
    icon: 'https://cdn.simpleicons.org/vercel/white',
  },
  {
    name: 'Render',
    icon: 'https://cdn.simpleicons.org/render/white',
  },
  {
    name: 'Netlify',
    icon: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Promptrix AI',
    description: 'Promptrix AI is a text-to-image generation tool that converts user prompts into AI-generated visuals.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
    ],
    image: promptix,
    repo: 'https://github.com/kalviumcommunity/S70_santhosh_Capstone_PromptixAI',
    demo: 'https://promptix-ai.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'NGO Impact Analysis',
    description:
      'Evaluated public health trends using NFHS datasets by cleaning and analyzing data to support data-driven NGO decisions.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'eda',
        color: 'blue-text-gradient',
      },
    ],
    image: ngo,
    repo: 'https://github.com/santhoshjr007/NGO-IMPACT-ANALYSIS',
    demo: 'https://ngo-impact-analysis.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
