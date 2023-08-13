'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { styles } from '@/app/styles';
import { ParsedUrlQuery } from 'querystring';

interface SectionWrapperProps {
  children: ReactNode;
  id: ParsedUrlQuery;
}

export default function SectionWrapper({
  children,
  id,
}: SectionWrapperProps): JSX.Element {
  // const path = usePathname();
  console.log(id);

  return (
    <motion.section
      variants={staggerContainer(children, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span">&nbsp;</span>
      {children}
    </motion.section>
  );
}
