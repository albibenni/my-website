'use client';
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '@/app/styles';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/constants/recap';
import { textVariant } from '@/utils/motion';

export default function Experience() {
  const subText = "What I've done so far";

  return (
    <>
      <span className="hash-span" id={'work'}>
        &nbsp;
      </span>
      <motion.div initial="hidden" animate="visible" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>{subText}</p>
        <h3 className={styles.sectionHeadText}>Work experience</h3>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
