import Image from 'next/image';

const SocialsMedia = () => {
  return (
    <div className="fixed bottom-10 bg-primary shadow-[5px_5px_0px_0px_#33CCCC] py-2 px-1 flex flex-col gap-2">
      <figure>
        <a
          href="https://github.com/Blueheart90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/icon-github2.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </a>
      </figure>
      <figure>
        <a
          href="https://twitter.com/JesusDavidB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/icon-twitter.svg"
            height={30}
            width={30}
            alt="Icono de twitter"
          />
        </a>
      </figure>
      <figure>
        <a href="mailto:jbernalme@gmail.com">
          <Image
            src="/img/icon-mail.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </a>
      </figure>
      <figure>
        <a
          href="https://www.linkedin.com/in/jbernalme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/icon-linkedln.svg"
            height={30}
            width={30}
            alt="Icono de github"
          />
        </a>
      </figure>
    </div>
  );
};

export default SocialsMedia;
