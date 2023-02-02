import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/hero';
import Title from '@/components/title';
import Project from '@/components/project';
import ProjectList from '@/components/projectList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const description =
    'Aplicación creada con Laravel, para llevar el control series y  películas. Este proyecto permite al usuario la creación de listas de  películas/series de tal modo que pueda darles una calificación, un  estado e incluso una reseña que otros usuarios pueden consultar';
  const img = '/img/project-sample.png';
  const tecnologies = [
    { id: 1, name: 'Laravel', img: '/img/icon-laravel.svg' },
    { id: 2, name: 'Livewire', img: '/img/icon-livewire.svg' },
    { id: 3, name: 'Alpine', img: '/img/icon-alpine.svg' },
    { id: 4, name: 'Tailwind', img: '/img/icon-tailwind.svg' },
  ];
  return (
    <main>
      <Hero />
      <section className="contenedor">
        <Title styles={'text-primary'}>Proyectos</Title>
        <ProjectList />
      </section>
    </main>
  );
}
