import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex justify-between px-10 py-2 bg-primary text-light shadow-[0px_1px_4px_0px_#000]">
      <div className="flex gap-14">
        <Image
          src="img/code.svg"
          alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
          width={40}
          height={40}
        />
        <nav className="flex items-center">
          <ul className="flex gap-10">
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
      <div className="flex gap-10 items-center">
        <button className="flex gap-1 items-center">
          <Image
            src="img/language-icon.svg"
            alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
            width={20}
            height={20}
          />
          Es
        </button>
        <button>
          <Image
            src="img/dark-mode.svg"
            alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
            width={20}
            height={20}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
