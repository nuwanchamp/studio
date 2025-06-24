
import { getProjects } from '@/lib/contentManager';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectsPortfolio() {
  const projectsData = getProjects();

  return (
    <div className="space-y-16">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className={cn(
            "group grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center",
            "transition-all duration-300"
          )}
        >
          {/* Image container */}
          <div
            className={cn(
              "md:col-span-3 aspect-video relative w-full overflow-hidden rounded-lg shadow-xl glass-card",
              index % 2 !== 0 && "md:order-last" // Alternate image position
            )}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          
          {/* Text content container */}
          <div
            className={cn(
              "md:col-span-2 flex flex-col justify-center",
              index % 2 !== 0 ? "md:text-right md:items-end" : "md:text-left md:items-start" // Alternate text alignment
            )}
          >
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-3">{project.title}</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">{project.description}</p>

            <div className={cn("flex flex-wrap gap-2 mb-6", index % 2 !== 0 ? "md:justify-end" : "md:justify-start")}>
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium">{tag}</span>
              ))}
            </div>

            <div className={cn("flex gap-4 mt-auto", index % 2 !== 0 ? "md:justify-end" : "md:justify-start")}>
              {project.liveLink && (
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.repoLink && (
                <Button asChild variant="ghost" className="text-foreground/70 hover:text-accent hover:bg-transparent transition-colors duration-300">
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
