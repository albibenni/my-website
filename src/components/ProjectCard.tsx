'use client';
import React from 'react';
import { Project } from '@/constants/recap';
import { Tilt } from 'react-tilt';
import { github } from '@/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface ProjectCardProps {
  index: number;
  project: Project;
}

export default function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex cursor-pointer items-center justify-center"
            >
              <Image
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
}
