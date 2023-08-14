'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/motion';
import { styles } from '@/app/styles';
import { projects } from '@/constants/recap';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const description = `Following projects showcase my love to build applications and test our my skills with new technologies.
   Each project is briefly described with links to code repositories.`;
  return (
    <>
      <span className="hash-span" id={'projects'}>
        &nbsp;
      </span>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {description}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
