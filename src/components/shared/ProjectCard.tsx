
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { getImagePath } from '@/lib/imageUtils';

// Define the type for a single project based on your content structure
interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export function ProjectCard(project: ProjectItem) {
  return (
    <div className="flex flex-col h-full glass-card shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg group break-inside-avoid mb-8">
      {/* Image container with aspect ratio */}
      <div className="aspect-video relative w-full overflow-hidden">
        <Image
          src={getImagePath(project.imageUrl)}
          alt={project.title}
          fill={true}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.imageHint}
        />
      </div>

      {/* Card header for title */}
      <div className="p-4 pb-2">
        <h3 className="font-headline text-xl text-accent">{project.title}</h3>
      </div>

      {/* Card content for description and tags */}
      <div className="flex-grow px-4 pt-0 pb-3">
        <p className="text-sm text-foreground/70 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card footer for actions */}
      <div className="flex gap-2 pt-0 pb-4 px-4 justify-end mt-auto">
        {project.liveLink && (
           <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
             <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
        {project.repoLink && (
           <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-accent hover:bg-transparent transition-colors duration-300">
            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" /> Code
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
