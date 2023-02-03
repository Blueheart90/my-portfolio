import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/hero';
import Title from '@/components/title';
import Project from '@/components/project';
import ProjectList from '@/components/projectList';
import SvgWave from '@/components/svgWave';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Hero />
      <section className=" bg-light">
        <div className="contenedor">
          <Title styles={'text-primary'}>Proyectos</Title>
          <ProjectList />
        </div>
      </section>
      <SvgWave className={`svg-shadow fill-primary rotate-180`} />
      <section className=" bg-primary">
        <div className="contenedor">
          <Title styles={'text-light'}>Sobre mí</Title>
        </div>
      </section>
    </main>
  );
}
