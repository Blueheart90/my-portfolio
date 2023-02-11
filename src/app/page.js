import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/hero';
import Title from '@/components/title';
import Project from '@/components/project';
import ProjectList from '@/components/projectList';
import SvgWave from '@/components/svgWave';
import AboutMe from '@/components/aboutMe';
import ContactForm from '@/components/contactForm';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="proyectos" className="bg-white dark:bg-light">
        <article className="container mx-auto">
          <Title styles={'text-primary'}>Proyectos</Title>
          <ProjectList />
        </article>
      </section>
      <div className="bg-white dark:bg-light">
        <SvgWave
          className={`svg-shadow dark:fill-primary fill-light rotate-180`}
        />
      </div>
      <section id="sobre-mi" className="-mt-1 dark:bg-primary bg-light">
        <article className="container mx-auto">
          <Title styles={'dark:text-light text-primary'}>Sobre mí</Title>
          <AboutMe />
        </article>
      </section>
      <div className="bg-white dark:bg-light">
        <SvgWave className={`svg-shadow dark:fill-primary fill-light`} />
      </div>
      <section id="contacto" className="bg-white dark:bg-light">
        <article className="container mx-auto">
          <Title styles={'text-primary'}>Contactame</Title>
          <div className="w-3/4 mx-auto mb-10 ">
            <p className="text-2xl">
              No dudes en enviarme un mensaje con el formulario de abajo o por
              el canal que prefieras, te responderé tan pronto como sea posible.
            </p>
          </div>
          <ContactForm />
        </article>
      </section>
      <Footer />
      <div className="fixed bottom-10 bg-primary shadow-[5px_5px_0px_0px_#33CCCC] py-2 px-1 flex flex-col gap-2">
        <figure className="cursor-pointer ">
          <Image
            src="/img/icon-github2.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </figure>
        <figure className="cursor-pointer ">
          <Image
            src="/img/icon-twitter.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </figure>
        <figure className="cursor-pointer ">
          <Image
            src="/img/icon-mail.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </figure>
        <figure className="cursor-pointer ">
          <Image
            src="/img/icon-linkedln.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </figure>
      </div>
    </main>
  );
}
