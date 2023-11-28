import Hero from "@/components/Hero";
import About from "@/components/Overview";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      {/* <Tech /> */}
      <Projects />
    </div>
  );
}
