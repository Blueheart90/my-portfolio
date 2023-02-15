import { use } from 'react';
import Project from './project';
import Title from '@/components/title';
import { headers } from 'next/headers';

export const getProjects = async () => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      cache: 'no-store',
    },
  };
  const response = await fetch(
    `${process.env.API_URL}/projects?populate[0]=tecnologies&populate[1]=tecnologies.icon&populate=img`,
    requestOptions
  );
  const { data } = await response.json();
  return data;
};

function Projects() {
  const projects = use(getProjects());

  return (
    <section id="proyectos" className="pt-10 bg-white dark:bg-light">
      <article className="container mx-auto">
        <Title styles={'text-primary'}>Proyectos</Title>
        <div className="flex flex-col h-screen gap-4 px-4 overflow-y-scroll snap-y ">
          {projects.map((project) => (
            <Project key={project.id} info={project} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Projects;
