'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '@/app/styles';

export default function Experience() {
  const subText = "What I've done so far";
  return (
    <>
      <span className="hash-span" id={'work'}>
        &nbsp;
      </span>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>{subText}</p>
        <h2 className={styles.sectionHeadText}>Work experience</h2>
      </motion.div>
    </>
  );
}
