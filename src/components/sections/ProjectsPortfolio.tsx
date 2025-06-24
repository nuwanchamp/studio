import { getProjects } from '@/lib/contentManager';
import { ProjectCard } from '@/components/shared/ProjectCard';

export function ProjectsPortfolio() {
  const projectsData = getProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
