import { useCursorGlow } from '@/hooks/useCursorGlow';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TechStrip } from '@/components/TechStrip';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  useCursorGlow();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStrip />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
