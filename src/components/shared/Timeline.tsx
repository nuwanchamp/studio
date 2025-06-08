import type { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

export interface TimelineItemProps {
  icon: ElementType;
  date: string;
  title: string;
  subtitle:string;
  description: ReactNode; // Can be string or JSX for bullet points
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItemProps[];
}

// Helper component for the card content to avoid repetition and manage alignment
const TimelineCardContent = ({ item, isLeftAligned }: { item: TimelineItemProps; isLeftAligned: boolean }) => (
  <div 
    className={cn(
      "glass-card p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full",
      !isLeftAligned && "text-right", // Align text content for right-sided cards
      "md:mx-0"
    )}
  >
    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.date}</p>
    <h3 className="font-headline text-xl font-semibold mt-1.5 text-accent">{item.title}</h3>
    <p className="text-md font-medium text-foreground/80 mt-0.5 mb-2">{item.subtitle}</p>
    <div className={cn(
        "text-sm text-foreground/70 space-y-1", 
        item.description && typeof item.description !== 'string' ? "prose prose-sm prose-invert max-w-none" : "",
        // If item.description is a string and card is on the right, align text right.
        !isLeftAligned && typeof item.description === 'string' && "text-right",
        // If item.description is JSX (like a <ul>) and card is on the right, align the block to the right.
        !isLeftAligned && typeof item.description !== 'string' && "ml-auto text-left" 
    )}>
        {/* Ensure lists within description on the right still have their text left-aligned locally if needed */}
        {item.description}
    </div>
    {item.tags && item.tags.length > 0 && (
      <div className={cn("mt-3 flex flex-wrap gap-2", !isLeftAligned && "justify-end")}>
        {item.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
        ))}
      </div>
    )}
  </div>
);

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative py-4 md:px-0 px-0"> {/* py-4 for top/bottom icon clearance, no horizontal padding */}
      {/* Vertical line in the middle - dashed with rounded endings - hidden on mobile */}
      <div
        className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-border/30 -translate-x-1/2 after:content-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-2 after:bg-border/30 after:rounded-full after:-translate-x-1/2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-2 before:h-2 before:bg-border/30 before:rounded-full before:-translate-x-1/2 hidden md:block"
        aria-hidden="true"
      />

      {items.map((item, index) => {
        const isLeftAligned = index % 2 === 0;
        // Icon is 2.5rem (w-10), gap is 2.5rem (spacing-10). Half icon is 1.25rem (spacing-5).
        // So, padding from center should be half icon + gap = 1.25rem + 2.5rem = 3.75rem
        const sidePadding = "px-10"; // icon_radius (1.25rem) + gap (2.5rem)

        return (
          <div
            key={index}
            // Min height to ensure icon doesn't overlap with very short cards, mb-10 for item separation
            className="mb-8 md:mb-10 relative flex items-center justify-center min-h-[5rem]"
          >
            {/* Icon: Positioned on the central line, vertically centered relative to its card - hidden on mobile */}
            <div
              className={cn(
                "absolute md:left-1/2 left-5 -translate-y-1/2 md:-translate-x-1/2", // Center icon on timeline on md+, left aligned on mobile
                "w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 shadow-lg border-2 border-background",
                "hidden md:flex" // Hide on mobile, show on desktop
              )}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
            </div>

            {/* Mobile: Full width card, Desktop: Left/Right alternating cards */}
            {/* For mobile: Only show this div and make it full width */}
            <div className={cn(
              "w-full px-0 md:hidden" // Full width with no horizontal padding for mobile
            )}>
              <TimelineCardContent item={item} isLeftAligned={true} />
            </div>

            {/* Desktop: Left Slot for Card - hidden on mobile */}
            <div className={cn(
              "md:w-1/2 hidden md:block",
              isLeftAligned ? sidePadding : "pr-5", // Add gap from center line if card is here
              {"md:invisible": !isLeftAligned} // Hide if not the current side on desktop
            )}>
              {isLeftAligned && <TimelineCardContent item={item} isLeftAligned={true} />}
            </div>

            {/* Desktop: Right Slot for Card - hidden on mobile */}
            <div className={cn(
              "md:w-1/2 hidden md:block",
              !isLeftAligned ? sidePadding : "pl-5", // Add gap from center line if card is here
              {"md:invisible": isLeftAligned} // Hide if not the current side on desktop
            )}>
              {!isLeftAligned && <TimelineCardContent item={item} isLeftAligned={false} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
