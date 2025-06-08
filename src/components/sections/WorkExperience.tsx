import { Timeline, type TimelineItemProps } from '@/components/shared/Timeline';
import { getWorkExperience } from '@/lib/contentManager';
import { ReactNode } from 'react';

// Helper function to convert description array to JSX list
const createDescriptionList = (description: string[]): ReactNode => {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Process the work experience data to handle description arrays
const workExperienceData = getWorkExperience().map(item => ({
  ...item,
  description: Array.isArray(item.description) 
    ? createDescriptionList(item.description as string[]) 
    : item.description
}));

export function WorkExperience() {
  return <Timeline items={workExperienceData} />;
}
