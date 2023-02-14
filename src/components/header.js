'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Switcher from './switcher';
import { Turn as Hamburger } from 'hamburger-react';

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed z-10 w-screen px-4 py-2 transition-all duration-500 border-b sm:px-10 dark:bg-primary bg-light text-primary dark:text-light border-accent">
      <div className="flex items-center justify-between h-12 ">
        <div className="flex gap-10">
          <Link className="cursor-pointer select-none " smooth spy to="top">
            <Image
              src="img/code.svg"
              alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
              width={40}
              height={40}
            />
          </Link>
          <nav className="items-center hidden md:flex">
            <ul className="flex gap-2">
              <li className="inline-block w-24 text-center ">
                <Link
                  className="py-4 transition-all duration-100 cursor-pointer select-none "
                  activeClass=" text-accent font-medium"
                  smooth
                  spy
                  to="proyectos"
                >
                  Proyectos
                </Link>
              </li>
              <li className="inline-block w-24 text-center ">
                <Link
                  className="py-4 transition-all duration-100 cursor-pointer select-none "
                  activeClass=" text-accent font-medium"
                  smooth
                  spy
                  to="sobre-mi"
                >
                  Sobre mí
                </Link>
              </li>
              <li className="inline-block w-24 text-center ">
                <Link
                  className="py-4 transition-all duration-100 cursor-pointer select-none "
                  activeClass=" text-accent font-medium"
                  smooth
                  spy
                  to="contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Switcher />
          <div className="md:hidden">
            <Hamburger
              color="#33CCCC"
              toggled={isOpen}
              toggle={setOpen}
              size="20"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`${
          isOpen ? 'left-0' : '-left-full'
        } transition-all duration-500  absolute top-16  w-screen dark:bg-primary border-y border-accent bg-light md:hidden`}
      >
        <ul className="flex flex-col items-center">
          <li className="py-4 ">
            <Link
              className="py-4 cursor-pointer select-none "
              activeClass=" text-accent font-medium"
              smooth
              spy
              to="proyectos"
            >
              Proyectos
            </Link>
          </li>

          <li className="py-4 ">
            <Link
              className="py-4 cursor-pointer select-none "
              activeClass=" text-accent font-medium"
              smooth
              spy
              to="sobre-mi"
            >
              Sobre mí
            </Link>
          </li>
          <li className="py-4 ">
            <Link
              className="py-4 cursor-pointer select-none "
              activeClass=" text-accent font-medium"
              smooth
              spy
              to="contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
