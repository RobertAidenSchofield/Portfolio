import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },

  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'IT Manager',
    location: 'Pembroke Pines, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2012 - Current',
  },
  {
    title: 'Graduated ED-X Miami bootcamp',
    location: 'Miami, FL',
    description: 'Graduated after 6 months of studying',
    icon: React.createElement(LuGraduationCap),
    date: '2017',
  },

  {
    title: ' B.S in Computer Science ',
    location: 'Salt Lake City, Utah',
    description: 'Graduated from Western Governors University',
    icon: React.createElement(LuGraduationCap),
    date: '2024',
  },
] as const;

export const projectsData = [
  {
    title: 'RockPaper Scissors',
    description:
      'RockPaperScissors is a game where you can play against the computer.',
    tags: ['Python'],
    //imageUrl: corpcommentImg,
  },
  {
    title: 'Tv Show Search',
    description:
      'Website that searches list of tv shows. Utilizes a MySql Data base, PHP search functions, And light javascript.',
    tags: ['PHP', 'HTML', 'MySql', 'Javascript', 'CSS'],
    //imageUrl: rmtdevImg,
  },
  {
    title: 'Sort Program',
    description: 'Small CLI program that sorts a list of numbers.',
    tags: ['C++'],
    //imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'Java',
  'C',
  'PHP',
  'C++',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'mySQL',
  'PostgreSQL',
  'Python',
  'Framer Motion',
] as const;

