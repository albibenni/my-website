'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { slideIn } from '@/utils/motion';

type Form = {
  name: string;
  email: string;
  message: string;
};
export default function Contact() {
  const [form, setForm] = useState<Form>({ name: '', email: '', message: '' });
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <span className="hash-span" id={'about'}>
        &nbsp;
      </span>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
      </motion.div>
    </div>
  );
}
