import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { getCertifications } from '@/lib/contentManager';

const certificationsData = getCertifications();

export function CertificationsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificationsData.map((cert, index) => (
        <Link
          key={index}
          href={cert.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block group" // Add group for hover effects
        >
          <div className="glass-card shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-lg h-full">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Image 
                src={cert.imageUrl}
                alt={`${cert.organization} logo`}
                width={40}
                height={40}
                className="rounded-full object-contain bg-white/10 p-1"
                data-ai-hint={cert.imageHint}
              />
              <CardTitle className="font-headline text-lg text-accent group-hover:underline">{cert.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80 mb-1">{cert.organization}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarDays className="w-3 h-3 mr-1.5" />
                {cert.date}
              </div>
            </CardContent>
          </div>
        </Link>
      ))}
    </div>
  );
}
