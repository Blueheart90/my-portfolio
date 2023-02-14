import Hero from '@/components/hero';
import Projects from '@/components/projects';
import SvgWave from '@/components/svgWave';
import AboutMe from '@/components/aboutMe';
import Footer from '@/components/footer';
import SocialsMedia from '@/components/socialsMedia';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <div className="bg-white dark:bg-light">
        <SvgWave
          className={`svg-shadow dark:fill-primary fill-light rotate-180`}
        />
      </div>
      <AboutMe />
      <div className="bg-white dark:bg-light">
        <SvgWave className={`svg-shadow dark:fill-primary fill-light`} />
      </div>
      <Contact />
      <SocialsMedia />
      <Footer />
    </main>
  );
}
