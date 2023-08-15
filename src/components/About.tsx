'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { services } from '@/constants/recap';
import ServiceCard from '@/components/ServiceCard';

export default function About() {
  const blockOfText =
    "I'm a software engineer with experience in TypeScript,\n" +
    '          JavaScript and Java and expertise in frameworks like React, Node.js, and\n' +
    "          Spring. I'm a quick learner and I enjoy learning new thing to improve my abilities.";
  const workTogether = `Let's work together to bring your ideas to life!`;
  return (
    <div>
      <span className="hash-span" id={'about'}>
        &nbsp;
      </span>
      {/*<motion.div variants={textVariant(0)}>*/}
      <p className={styles.sectionSubText}>Introduction</p>
      <p className={styles.sectionHeadText}>Overview</p>
      {/*</motion.div>*/}
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {blockOfText}
      </motion.p>
      <motion.p className="font-bold text-white text-[18px] max-w-3xl leading-[30px]">
        {workTogether}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
