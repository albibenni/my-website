import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import Feedbacks from '@/components/Feedbacks';
import Contact from '@/components/Contact';
import StarsCanvas from '@/components/canvas/StarsCanvas';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
