
import { getProjects } from '@/lib/contentManager';
import { ProjectCard } from '@/components/shared/ProjectCard';

export function ProjectsPortfolio() {
  const projectsData = getProjects();
  
  if (!projectsData || projectsData.length === 0) {
    return <p>No projects to display.</p>;
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
