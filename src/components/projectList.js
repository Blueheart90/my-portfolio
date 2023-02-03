import { use } from 'react';
import Project from './project';

export const getProjects = async () => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const response = await fetch(
    `${process.env.API_URL}/projects?populate[0]=tecnologies&populate[1]=tecnologies.icon&populate=img`,
    requestOptions
  );
  const { data } = await response.json();
  return data;
};

function ProjectList() {
  const projects = use(getProjects());

  return (
    <div className="flex flex-col h-screen gap-4 px-4 overflow-y-scroll snap-y ">
      {projects.map((project) => (
        <Project key={project.id} info={project} />
      ))}
    </div>
  );
}

export default ProjectList;
