'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/app/styles';
import { slideIn } from '@/utils/motion';
import EarthCanvas from '@/components/canvas/EarthCanvas';

type Form = {
  name: string;
  email: string;
  message: string;
};
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<Form>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    // setForm(e.currentTarget.form);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        <form
          ref={formRef}
          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="What's your name?"
            value={form.name}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          ></input>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
          </label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="What's your email?"
            value={form.email}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          ></input>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
          </label>
          <textarea
            rows={7}
            onChange={handleChange}
            name="message"
            placeholder="What do you want to say?"
            value={form.message}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          ></textarea>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-[1] xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}
