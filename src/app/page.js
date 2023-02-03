import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/hero';
import Title from '@/components/title';
import Project from '@/components/project';
import ProjectList from '@/components/projectList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="contenedor">
        <Title styles={'text-primary'}>Proyectos</Title>
        <div className="">
          <ProjectList />
        </div>
      </section>
    </main>
  );
}
