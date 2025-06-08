import { ProjectCard } from '@/components/shared/ProjectCard';
import { getProjects } from '@/lib/contentManager';

// Get projects data from content manager
const projectsData = getProjects();

export function ProjectsPortfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to 2 columns for larger cards */}
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
