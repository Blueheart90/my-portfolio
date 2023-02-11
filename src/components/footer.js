import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-10 text-xl text-center footer bg-primary text-light">
      <p>
        Diseñado y construido por{' '}
        <span className="font-bold braces">Jesús David</span>
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <Image
          src="/img/icon-nextjs.svg"
          height={50}
          width={50}
          alt="Icono de Nextjs"
        />
        <Image
          src="/img/icon-tailwind.svg"
          height={50}
          width={50}
          alt="Icono de Tailwind"
        />
        <Image
          src="/img/icon-strapi.svg"
          height={50}
          width={50}
          alt="Icono de Strapi"
        />
      </div>
    </footer>
  );
};

export default Footer;
