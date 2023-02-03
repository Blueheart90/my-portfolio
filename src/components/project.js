import Image from 'next/image';
import TechList from './techList';
import styles from '@/styles/project.module.css';

function Project({ info }) {
  const { title, description, img, tecnologies } = info.attributes;

  return (
    <div className="snap-start">
      <div className={styles['project-item']}>
        <article className="grid grid-cols-5 gap-10 pl-10 text-2xl ">
          <div className="col-span-3 ">
            <div className="flex gap-4">
              <p>{'"title": '}</p>
              <h2 className="font-extrabold ">{`"${title}"`}</h2>
            </div>
            <div className="flex gap-4">
              <p>{'"description": '}</p>
              <div
                className={styles['after__description']}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
          <figure className="col-span-2 shadow-[-10px_10px_0px_0px_#33CCCC] border border-primary h-fit ">
            <Image
              src={img.data[0].attributes.formats.small.url}
              width={580}
              height={360}
              alt={`Captura de pantalla del proyecto ${title}`}
            />
            <footer className=" bg-primary">
              <TechList list={tecnologies.data} />
            </footer>
          </figure>
        </article>
      </div>
      <div className="flex justify-end gap-2">
        <Image
          src="/img/icon-github.svg"
          width={50}
          height={50}
          alt={`Icono de github`}
        />
        <Image
          src="/img/icon-external-link.svg"
          width={50}
          height={50}
          alt={`Icono de link externo`}
        />
      </div>
    </div>
  );
}

export default Project;
