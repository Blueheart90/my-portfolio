import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Hero from '@/components/hero';
import Title from '@/components/title';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Title styles={'text-primary'}>Proyectos</Title>
    </main>
  );
}
