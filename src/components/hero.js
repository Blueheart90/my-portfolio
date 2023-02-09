import Image from 'next/image';
import SvgWave from './svgWave';

function Hero() {
  return (
    <div className="xl:min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 px-10 py-20 xl:px-40 xl:gap-40 xl:pt-60 bg-primary xl:flex-row">
        <figure className="inline-block overflow-hidden border-8 rounded-full w-52 xl:w-72 border-accent bg-accent">
          <Image
            src="/img/profile-photo.png"
            alt="Image frontal de persona"
            width={300}
            height={300}
          />
        </figure>
        <div className="flex flex-col items-center xl:items-start">
          <p className="mb-4 text-5xl text-center xl:text-7xl xl:text-left text-light">
            Hola, mi nombre es {''}
            <span
              className={`block font-extrabold braces text-center xl:text-left`}
            >
              Jesús David
            </span>
          </p>
          <p className="text-4xl text-center xl:text-left text-secondary">
            Soy{' '}
            <span className="font-extrabold text-light">
              Ingeniero de sistemas
            </span>{' '}
            y{' '}
            <span className="font-extrabold text-light">desarollador web</span>{' '}
            Colombiano
          </p>
        </div>
      </div>
      <div className="relative">
        <SvgWave className={`svg-shadow fill-primary`} />
        <button className="hidden lg:block">
          <svg
            className="absolute bottom-10 left-1/2 animate-bounce"
            width="78"
            height="79"
            viewBox="0 0 78 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.575 49.3141L41.275 76.7227C40.95 77.0481 40.5979 77.2779 40.2188 77.4124C39.8396 77.5491 39.4334 77.6174 39 77.6174C38.5667 77.6174 38.1604 77.5491 37.7813 77.4124C37.4021 77.2779 37.05 77.0481 36.725 76.7227L9.34375 49.3141C8.58542 48.555 8.20625 47.6061 8.20625 46.4675C8.20625 45.3288 8.6125 44.3528 9.425 43.5395C10.2375 42.7262 11.1854 42.3196 12.2688 42.3196C13.3521 42.3196 14.3 42.7262 15.1125 43.5395L39 67.451L62.8875 43.5395C63.6459 42.7804 64.5797 42.4009 65.689 42.4009C66.8005 42.4009 67.7625 42.8075 68.575 43.6209C69.3875 44.4342 69.7938 45.383 69.7938 46.4675C69.7938 47.5519 69.3875 48.5007 68.575 49.3141Z"
              fill="#2C3E50"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
