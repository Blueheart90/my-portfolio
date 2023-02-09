import Image from 'next/image';
import TechList from './techList';
import styles from '@/styles/project.module.css';

function Project({ info }) {
  const { title, description, img, tecnologies, github, url } = info.attributes;

  return (
    <>
      <div className={styles['project-item']}>
        <article className="grid gap-10 pl-10 text-xl xl:text-2xl xl:grid-cols-5 ">
          <div className="col-span-3 ">
            <div className="flex gap-4">
              <p>{'"title": '}</p>
              <h2 className="font-extrabold ">{`"${title}"`}</h2>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-4">
              <p>{'"description": '}</p>
              <div
                className={`${styles['after__description']}`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
          <figure className="col-span-2 shadow-[-10px_10px_0px_0px_#33CCCC] border border-primary h-fit hidden xl:block">
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
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/icon-github.svg"
            width={40}
            height={40}
            alt={`Icono de github`}
          />
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/icon-external-link.svg"
            width={40}
            height={40}
            alt={`Icono de link externo`}
          />
        </a>
      </div>
    </>
  );
}

export default Project;
