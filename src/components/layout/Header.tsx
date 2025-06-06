import Link from 'next/link';

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
        </nav>
      </div>
    </header>
  );
}
