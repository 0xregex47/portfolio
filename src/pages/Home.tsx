import React from 'react';
import { Navbar } from '../components/Navbar';
import { QuantumBoot } from '../components/QuantumBoot';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ParticleBackground } from '../components/ParticleBackground';
interface HomeProps {
  mousePosition: {
    x: number;
    y: number;
  };
  scrollY: number;
}
export function Home({
  mousePosition,
  scrollY
}: HomeProps) {
  return <>
      <Navbar />
      <ParticleBackground />
      <div id="home">
        <QuantumBoot />
      </div>
      <About mousePosition={mousePosition} scrollY={scrollY} />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>;
}