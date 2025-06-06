import { Timeline, type TimelineItemProps } from '@/components/shared/Timeline';
import { GraduationCap } from 'lucide-react';

const educationData: TimelineItemProps[] = [
  {
    icon: GraduationCap,
    date: "2012 - 2016",
    title: "Master of Science in Computer Science",
    subtitle: "Stanford University",
    description: "Focused on Artificial Intelligence and Machine Learning. Thesis on Natural Language Processing.",
    tags: ["AI", "Machine Learning", "NLP", "Thesis"]
  },
  {
    icon: GraduationCap,
    date: "2008 - 2012",
    title: "Bachelor of Science in Software Engineering",
    subtitle: "Massachusetts Institute of Technology (MIT)",
    description: "Graduated with Honors. Member of the Coding Club and ACM chapter.",
    tags: ["Software Engineering", "Data Structures", "Algorithms"]
  },
];

export function Education() {
  return <Timeline items={educationData} />;
}
