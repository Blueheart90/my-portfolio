import Image from 'next/image';

function Skill({ skill }) {
  const { name, icon } = skill.attributes;

  return (
    <figure className="flex flex-col items-center justify-center p-2 border border-accent ">
      <Image
        src={icon.data.attributes.url}
        width={50}
        height={50}
        alt={`Icono de la tecnología ${name}`}
      />
      <footer>
        <span className="text-xl ">{name}</span>
      </footer>
    </figure>
  );
}

export default Skill;
