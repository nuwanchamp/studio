import { Timeline, type TimelineItemProps } from '@/components/shared/Timeline';
import { Briefcase } from 'lucide-react';

const workExperienceData: TimelineItemProps[] = [
  {
    icon: Briefcase,
    date: "Jan 2021 - Present",
    title: "Senior Software Engineer",
    subtitle: "Tech Solutions Inc.",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Led development of a new cloud-based SaaS platform, resulting in a 30% increase in user engagement.</li>
        <li>Mentored junior engineers, improving team productivity by 15%.</li>
        <li>Architected and implemented microservices using Node.js, Docker, and Kubernetes.</li>
        <li>Collaborated with product managers to define feature requirements and project roadmaps.</li>
      </ul>
    ),
    tags: ["Node.js", "React", "Kubernetes", "AWS", "Agile"]
  },
  {
    icon: Briefcase,
    date: "Jun 2018 - Dec 2020",
    title: "Software Engineer",
    subtitle: "Innovatech Ltd.",
    description: (
       <ul className="list-disc pl-5 space-y-1">
        <li>Developed and maintained full-stack web applications using Python (Django) and JavaScript (Vue.js).</li>
        <li>Contributed to database design and optimization (PostgreSQL).</li>
        <li>Participated in code reviews and enforced coding standards.</li>
      </ul>
    ),
    tags: ["Python", "Django", "Vue.js", "PostgreSQL"]
  },
  {
    icon: Briefcase,
    date: "Sep 2016 - May 2018",
    title: "Junior Developer",
    subtitle: "Web Wizards Co.",
    description: "Assisted senior developers in building responsive websites and e-commerce platforms. Gained experience with HTML, CSS, JavaScript, and PHP.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
  },
];

export function WorkExperience() {
  return <Timeline items={workExperienceData} />;
}
