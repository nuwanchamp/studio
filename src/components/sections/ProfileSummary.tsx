import Image from 'next/image';
import { User, Mail, Phone, Linkedin, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { ResumeDownloadButton } from '@/components/shared/ResumeDownloadButton';
import { getProfile } from '@/lib/contentManager';

// Get profile data from content manager
const profileData = getProfile();

export function ProfileSummary() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-4 md:py-8">
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center items-center p-6 md:p-8">
        <Image
          src={profileData.avatarUrl}
          alt={profileData.name}
          width={220}
          height={220}
          className="rounded-full shadow-xl border-4 border-accent/80 object-cover mx-auto transition-transform duration-300 hover:scale-105"
          data-ai-hint={profileData.avatarHint}
          priority
        />
      </div>
      <div className="flex-1 text-center md:text-left px-4 md:px-6">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-2">{profileData.name}</h1>
        <p className="font-headline text-xl text-accent mb-5">{profileData.title}</p>
        <p className="text-md text-foreground/80 mb-8 leading-relaxed">{profileData.bio}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-sm">
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
