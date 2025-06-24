
import { getProjects } from '@/lib/contentManager';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectsPortfolio() {
  const projectsData = getProjects();

  return (
    <div className="space-y-20 md:space-y-28"> {/* Increased spacing between projects */}
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="group grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 items-center"
        >
          {/* Image container */}
          <div
            className={cn(
              "md:col-span-3 aspect-video relative w-full overflow-hidden rounded-lg shadow-xl",
              "transition-all duration-500",
              index % 2 === 0 ? "md:col-start-1" : "md:col-start-3" // Alternate start column
            )}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill={true}
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          
          {/* Text content container */}
          <div
            className={cn(
              "md:col-span-3 z-10",
              // Logic for alternating layout
              index % 2 === 0 
                ? "md:col-start-3 md:-ml-12" 
                : "md:col-start-1 md:row-start-1 md:-mr-12"
            )}
          >
            <div
              className={cn(
                "glass-card p-6 rounded-lg shadow-2xl",
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              )}
            >
              <p className={cn("text-xs font-semibold text-primary uppercase tracking-wider mb-2", index % 2 !== 0 && "md:justify-end")}>
                Featured Project
              </p>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-3">{project.title}</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">{project.description}</p>
              <div className={cn("flex flex-wrap gap-2 mb-6", index % 2 !== 0 ? "md:justify-end" : "md:justify-start")}>
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <div className={cn("flex gap-4", index % 2 !== 0 ? "md:justify-end" : "md:justify-start")}>
                {project.liveLink && (
                  <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
                {project.repoLink && (
                  <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-accent hover:bg-transparent transition-colors duration-300">
                    <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
