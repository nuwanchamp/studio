import { Award, CalendarDays } from 'lucide-react';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Only using parts, not the full Card for bg
import { getCertifications } from '@/lib/contentManager';

// Get certifications data from content manager and add icon
const certificationsData = getCertifications().map(cert => ({
  ...cert,
  icon: Award,
}));

export function CertificationsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificationsData.map((cert, index) => (
        <div key={index} className="glass-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-lg">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <cert.icon className="w-8 h-8 text-accent flex-shrink-0" />
            <CardTitle className="font-headline text-lg text-accent">{cert.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-foreground/80 mb-1">{cert.organization}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarDays className="w-3 h-3 mr-1.5" />
              {cert.date}
            </div>
          </CardContent>
        </div>
      ))}
    </div>
  );
}
