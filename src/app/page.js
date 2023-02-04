import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/hero';
import Title from '@/components/title';
import Project from '@/components/project';
import ProjectList from '@/components/projectList';
import SvgWave from '@/components/svgWave';
import AboutMe from '@/components/aboutMe';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Hero />
      <section className=" bg-light">
        <article className="contenedor">
          <Title styles={'text-primary'}>Proyectos</Title>
          <ProjectList />
        </article>
      </section>
      <SvgWave className={`svg-shadow fill-primary rotate-180`} />
      <section className=" bg-primary">
        <article className="contenedor">
          <Title styles={'text-light'}>Sobre mí</Title>
          <AboutMe />
        </article>
      </section>
      <SvgWave className={`svg-shadow fill-primary`} />
    </main>
  );
}
