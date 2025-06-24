
import { getProjects } from '@/lib/contentManager';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectCard } from '@/components/shared/ProjectCard';

export function ProjectsPortfolio() {
  const projectsData = getProjects();
  const [featuredProject, ...otherProjects] = projectsData; // Destructure the first project

  if (!featuredProject) {
    return null; 
  }

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Featured Project Section */}
      <div className="glass-card rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-accent/20">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 relative aspect-video">
            <Image
              src={featuredProject.imageUrl}
              alt={featuredProject.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              data-ai-hint={featuredProject.imageHint}
            />
          </div>
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-2">{featuredProject.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed flex-grow mb-6">{featuredProject.description}</p>
            <div className="flex gap-4 justify-start mt-auto">
              {featuredProject.liveLink && (
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                  <Link href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {featuredProject.repoLink && (
                <Button asChild variant="ghost" className="text-foreground/70 hover:text-accent hover:bg-transparent transition-colors duration-300">
                  <Link href={featuredProject.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of other projects */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-8 text-center text-primary/80">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
