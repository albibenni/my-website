import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  StarsCanvas,
  Tech,
  Works,
} from '@/components';

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
