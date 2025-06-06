import { Award, CalendarDays } from 'lucide-react';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Only using parts, not the full Card for bg

const certificationsData = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    organization: "Amazon Web Services",
    date: "Issued: March 2022",
    icon: Award,
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    organization: "The Linux Foundation",
    date: "Issued: July 2021",
    icon: Award,
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    organization: "Scrum.org",
    date: "Issued: January 2020",
    icon: Award,
  },
];

export function CertificationsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificationsData.map((cert, index) => (
        <div key={index} className="bg-card/15 backdrop-blur-lg border border-border/30 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-lg overflow-hidden">
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
