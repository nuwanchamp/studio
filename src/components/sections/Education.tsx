import { Timeline, type TimelineItemProps } from '@/components/shared/Timeline';
import { getEducation } from '@/lib/contentManager';

// Get education data from content manager
const educationData = getEducation();

export function Education() {
  return <Timeline items={educationData} />;
}
