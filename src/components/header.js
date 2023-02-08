'use client';
import Image from 'next/image';
import { useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="fixed z-10 w-screen px-4 py-2 border-b sm:px-10 bg-primary text-light border-accent ">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <Image
            src="img/code.svg"
            alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
            width={40}
            height={40}
          />
          <nav className="items-center hidden md:flex ">
            <ul className="flex gap-4">
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Habilidades</a>
              </li>
              <li>
                <a href="#">Sobre mí</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="items-center hidden gap-4 md:flex">
          <button className="flex items-center gap-1">
            <Image
              src="/img/language-icon.svg"
              alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
              width={20}
              height={20}
            />
            Es
          </button>
          <button>
            <Image
              src="/img/dark-mode.svg"
              alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
              width={20}
              height={20}
            />
          </button>
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
      <nav className={openMenu ? '' : 'hidden'}>
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
