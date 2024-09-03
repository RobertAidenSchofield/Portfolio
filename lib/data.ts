import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import imsIMG from '@/public/IMS.png';
import appointImg from '@/public/Appoint.png';

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
      'Worked in various IT roles, including software development, project management, and infrastructure management',
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
    title: 'Inventory Managment System',
    description: 'Inventory Managment System built with java and javaFX',
    tags: ['Java,JavaFX'],
    imageUrl: imsIMG,
  },
  {
    title: 'Appointment Scheduler',
    description:
      'Java application that manages appointments, customers, and contacts using a MySQL database.',
    tags: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    imageUrl: appointImg,
  },
  {
    title: 'Tv Show Search',
    description:
      'Website that searches list of tv shows. Utilizes a MySql Data base, PHP search functions, And light javascript.',
    tags: ['PHP', 'HTML', 'MySql', 'Javascript', 'CSS'],
    imageUrl: corpcommentImg,
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

