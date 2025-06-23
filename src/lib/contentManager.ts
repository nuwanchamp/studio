import content from '@/content/content.json';
import { Briefcase, GraduationCap } from 'lucide-react';

// Type definitions for the content structure
interface ContentData {
  profile: ProfileData;
  skills: SkillItem[];
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
}

interface ProfileData {
  name: string;
  title: string;
  avatarUrl: string;
  avatarHint: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
}

interface SkillItem {
  name: string;
  category: string;
  fill: string;
  expertise: number;
}

interface WorkExperienceItem {
  date: string;
  title: string;
  subtitle: string;
  description: string | string[];
  tags: string[];
}

interface EducationItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

interface CertificationItem {
  name: string;
  organization: string;
  date: string;
}

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

// Get work experience data
export const getWorkExperience = () => {
  return (content as ContentData).workExperience.map(item => ({
    icon: Briefcase,
    date: item.date,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description, // Components will handle conversion to JSX
    tags: item.tags
  }));
};

// Get education data
export const getEducation = () => {
  return (content as ContentData).education.map(item => ({
    icon: GraduationCap,
    date: item.date,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    tags: item.tags
  }));
};

// Get projects data
export const getProjects = () => {
  return (content as ContentData).projects;
};

// Get certifications data
export const getCertifications = () => {
  return (content as ContentData).certifications;
};

// Get profile data
export const getProfile = () => {
  return (content as ContentData).profile;
};

// Get skills data
export const getSkills = () => {
  return (content as ContentData).skills;
};

// Get any content by key
export const getContent = <T,>(key: keyof ContentData): T => {
  return (content as ContentData)[key] as unknown as T;
};
