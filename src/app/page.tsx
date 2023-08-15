import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Contact from '@/components/Contact';
import StarsCanvas from '@/components/canvas/StarsCanvas';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
