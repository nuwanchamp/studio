import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export function ProjectCard({ title, description, imageUrl, imageHint, tags, liveLink, repoLink }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card/5 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-lg">
      <div className="aspect-video relative w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={imageHint || "project screenshot"} 
        />
      </div>
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="font-headline text-xl text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-0 pb-3">
        <CardDescription className="text-sm text-foreground/70 mb-3 line-clamp-3">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0 pb-4 px-4 justify-end">
        {liveLink && (
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
        {repoLink && (
          <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-accent hover:bg-transparent transition-colors duration-300">
            <Link href={repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" /> Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
