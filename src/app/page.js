import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/hero';
import Title from '@/components/title';
import Project from '@/components/project';
import ProjectList from '@/components/projectList';
import SvgWave from '@/components/svgWave';
import AboutMe from '@/components/aboutMe';
import ContactForm from '@/components/contactForm';

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
      <section>
        <article className="contenedor">
          <Title styles={'text-primary'}>Contactame</Title>
          <div className="px-56">
            <p className="text-2xl">
              No dudes en enviarme un mensaje con el formulario de abajo o por
              el canal que prefieras, te responderé tan pronto como sea posible.
            </p>
          </div>
          <ContactForm />
          <p>fdsfsdfasdfsd</p>
        </article>
      </section>
    </main>
  );
}
