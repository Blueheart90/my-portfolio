import { use } from 'react';
import Skill from './skill';
import styles from '@/styles/aboutme.module.css';
import ButtonCustom from './buttonCustom';

export const getAboutMe = async () => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  const aboutmeUrl = `${process.env.API_URL}/about-me`;
  const skillsUrl = `${process.env.API_URL}/skill?populate[0]=tecnologies&populate[1]=tecnologies.icon`;

  const [resAboutme, resSkill] = await Promise.all([
    fetch(aboutmeUrl, requestOptions),
    fetch(skillsUrl, requestOptions),
  ]);

  const [{ data: aboutme }, { data: skills }] = await Promise.all([
    resAboutme.json(),
    resSkill.json(),
  ]);

  return {
    aboutme,
    skills: skills.attributes.tecnologies,
  };
};

function AboutMe() {
  const { aboutme, skills } = use(getAboutMe());
  const cvPdf = aboutme.attributes.curriculum;

  return (
    <div className="grid grid-cols-2 gap-10 text-2xl text-light">
      <div className="grid gap-14">
        <div dangerouslySetInnerHTML={{ __html: aboutme.attributes.content }} />
        <ButtonCustom>
          <a href={cvPdf} target="_blank" rel="noopener noreferrer">
            Descargar CV
          </a>
        </ButtonCustom>
      </div>
      <div>
        <h3 className="mb-4 text-3xl">Mis habilidades</h3>
        <div className="flex flex-wrap gap-2">
          {skills.data.map((skill) => (
            <Skill skill={skill} key={skill.id} />
          ))}
        </div>
        <h3 className="mt-8 mb-4 text-3xl">Habilidades blandas</h3>
        <ul className={`${styles.softskill} text-2xl`}>
          <li className={`${styles.softskill__item}`}>Trabajo en equipo</li>
          <li className={`${styles.softskill__item}`}>Resiliencia</li>
          <li className={`${styles.softskill__item}`}>Tolerancia al cambio</li>
          <li className={`${styles.softskill__item}`}>Sociable y empatico</li>
          <li className={`${styles.softskill__item}`}>Responsablilidad</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
