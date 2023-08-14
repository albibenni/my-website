import React from 'react';
import { Project } from '@/constants/recap';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { Tilt } from 'react-tilt';
import Image from 'next/image';
import { github } from '@/assets';

interface ProjectCardProps {
  index: number;
  project: Project;
}
export default function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            //   TODO: if no image present
            <div>{project.description}</div>
          )}
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
      </Tilt>
    </motion.div>
  );
}
