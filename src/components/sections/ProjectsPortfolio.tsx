
import { getProjects } from '@/lib/contentManager';
import { ProjectCard } from '@/components/shared/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsPortfolio() {
  const projectsData = getProjects();
  
  if (!projectsData || projectsData.length === 0) {
    return <p>No projects to display.</p>;
  }

  const [featuredProject, ...otherProjects] = projectsData;

  return (
    <div className="space-y-16">
      {/* Featured Project */}
      <div className="glass-card rounded-xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="relative aspect-video">
            <Image
              src={featuredProject.imageUrl}
              alt={featuredProject.title}
              fill
              className="object-cover"
              data-ai-hint={featuredProject.imageHint}
            />
          </div>
          <div className="p-6 md:p-8">
            <h3 className="font-headline text-2xl md:text-3xl text-accent font-bold mb-2">
              {featuredProject.title}
            </h3>
            <p className="text-foreground/80 mb-4">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {featuredProject.liveLink && (
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                  <Link href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {featuredProject.repoLink && (
                <Button asChild variant="ghost" className="text-foreground/70 hover:text-accent hover:bg-transparent transition-colors duration-300">
                  <Link href={featuredProject.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-8 text-center text-primary/90">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
