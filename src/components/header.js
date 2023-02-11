'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Switcher from './switcher';
import LanguageSvg from './languageSvg';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed z-10 w-screen px-4 py-2 transition-all duration-500 border-b sm:px-10 dark:bg-primary bg-light text-primary dark:text-light border-accent">
      <div className="flex justify-between">
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
        <div className="items-center hidden gap-4 md:flex">
          <button className="flex items-center gap-1">
            <LanguageSvg className=" dark:fill-light fill-accent" />
            Es
          </button>
          <Switcher />
        </div>
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className=" md:hidden"
        >
          <Image
            src="/img/burger-menu.svg"
            alt="Icono con tres rayas horizontales"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`${
          openMenu ? '' : 'hidden'
        } transition-all duration-500 overflow-hidden`}
      >
        <ul className="flex flex-col items-center">
          <li className="py-4 ">
            <a href="#">Proyectos</a>
          </li>
          <li className="py-4 ">
            <a href="#">Habilidades</a>
          </li>
          <li className="py-4 ">
            <a href="#">Sobre mí</a>
          </li>
          <li className="py-4 ">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
