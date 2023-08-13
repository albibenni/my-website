'use client';
import React, { Component, ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { styles } from '@/app/styles';
import { useParams } from 'next/navigation';

interface SectionWrapperProps {
  children: ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  // const path = usePathname();
  const params = useParams();
  const [anchor, setAnchor] = useState('');

  useEffect(() => {
    setAnchor(window.location.hash);
  }, [params]);

  return (
    <motion.section
      variants={staggerContainer(Component, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={anchor}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
}
