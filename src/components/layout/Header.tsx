import Link from 'next/link';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="py-5 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/20 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="#profile" className="font-headline text-3xl font-bold text-primary hover:text-accent transition-colors duration-300">
          ChronoFolio
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#experience" className="text-foreground/80 hover:text-accent transition-colors duration-300">Experience</Link>
          <Link href="#education" className="text-foreground/80 hover:text-accent transition-colors duration-300">Education</Link>
          <Link href="#skills" className="text-foreground/80 hover:text-accent transition-colors duration-300">Skills</Link>
          <Link href="#projects" className="text-foreground/80 hover:text-accent transition-colors duration-300">Projects</Link>
          <Link href="#certifications" className="text-foreground/80 hover:text-accent transition-colors duration-300">Certs</Link>
          <Link 
            href="https://github.com/nuwanchamp/studio"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent font-medium border border-accent rounded-md px-3 py-1 hover:bg-accent hover:text-background transition-colors duration-300 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span>source code</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
