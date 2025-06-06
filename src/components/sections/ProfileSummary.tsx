import Image from 'next/image';
import { User, Mail, Phone, Linkedin, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { ResumeDownloadButton } from '@/components/shared/ResumeDownloadButton';

const profileData = {
  name: "Alex Johnson",
  title: "Senior Software Engineer",
  avatarUrl: "https://placehold.co/200x200.png",
  avatarHint: "professional portrait",
  bio: "A highly skilled and motivated Senior Software Engineer with over 8 years of experience in developing scalable web applications and leading engineering teams. Passionate about leveraging cutting-edge technologies to solve complex problems and deliver exceptional user experiences. Adept at full-stack development with a focus on robust backend systems and intuitive front-end interfaces.",
  contact: {
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://www.linkedin.com/in/alexjohnsondev", // Example, replace with actual
    location: "San Francisco, CA"
  }
};

export function ProfileSummary() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      <div className="flex-shrink-0 text-center">
        <Image
          src={profileData.avatarUrl}
          alt={profileData.name}
          width={200}
          height={200}
          className="rounded-full shadow-xl border-4 border-accent/80 object-cover mx-auto transition-transform duration-300 hover:scale-105"
          data-ai-hint={profileData.avatarHint}
          priority
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-1">{profileData.name}</h1>
        <p className="font-headline text-xl text-accent mb-4">{profileData.title}</p>
        <p className="text-md text-foreground/80 mb-6 leading-relaxed">{profileData.bio}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 text-sm">
          <div className="flex items-center justify-center md:justify-start gap-3 text-foreground/90">
            <Mail className="w-5 h-5 text-accent flex-shrink-0" />
            <a href={`mailto:${profileData.contact.email}`} className="hover:text-accent transition-colors break-all">{profileData.contact.email}</a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-foreground/90">
            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="break-all">{profileData.contact.phone}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-foreground/90">
            <Linkedin className="w-5 h-5 text-accent flex-shrink-0" />
            <Link href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors break-all">
              LinkedIn Profile
            </Link>
          </div>
           <div className="flex items-center justify-center md:justify-start gap-3 text-foreground/90">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="break-all">{profileData.contact.location}</span>
          </div>
        </div>
        <ResumeDownloadButton />
      </div>
    </div>
  );
}
