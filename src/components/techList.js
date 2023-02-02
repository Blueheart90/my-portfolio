import Image from 'next/image';
import styles from '@/styles/techlist.module.css';

function TechList({ list }) {
  return (
    <div
      className={`${styles.container} flex justify-center gap-2 py-2 items-center`}
    >
      {list.map((item) => (
        <div
          className={`${styles['tech-item']} flex items-center`}
          key={item.id}
        >
          <Image
            src={item.attributes.icon.data.attributes.url}
            width={50}
            height={50}
            alt={`Imagen de la tecnologia ${item.name}`}
          />
        </div>
      ))}
    </div>
  );
}

export default TechList;
