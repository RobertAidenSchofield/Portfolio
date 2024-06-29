'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { RouteHandlerManager } from 'next/dist/server/future/route-handler-managers/route-handler-manager';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/Subject.png'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-200px w-200px xl:w-498px rounded-full relative top-[-30] mix-blend-mode-plus-darker'
              alt={''}
            />
          </motion.div>
          <motion.svg
            className='w-300px xl:w-506px h-500px xl:h-506px absolute bottom-0
            '
            fill='transparent'
            viewBox='0 0 506 506'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.circle
              cx='253'
              cy='253'
              r='250'
              stroke='#AE9F9F'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{ strokeDasharray: '24 10 0 0' }}
              animate={{
                strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.svg>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Robert. I'm </span>
        <span className='font-bold'>
          a passionate and dedicated new graduate entering the exciting world of
          software development.
        </span>{' '}
        <span className='font-bold'></span> I enjoy building{' '}
        <span className='italic'>sites & apps</span>.{''} My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/robert-schofield-897bb0151'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/RobertAidenSchofield'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

