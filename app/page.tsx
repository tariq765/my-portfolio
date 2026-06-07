import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Experience from '@/app/components/Experience';
import Services from '@/app/components/Services';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
