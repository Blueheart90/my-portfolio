import Image from 'next/image';

function Header() {
  return (
    <header className="fixed z-10 flex justify-between w-screen px-10 py-2 bg-primary text-light">
      <div className="flex gap-10">
        <Image
          src="img/code.svg"
          alt="Icono con el simbolo menor que seguido de una barra y el simbolo de mayor que"
          width={40}
          height={40}
        />
        <nav className="flex items-center">
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
      <div className="flex items-center gap-4">
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
    </header>
  );
}

export default Header;
