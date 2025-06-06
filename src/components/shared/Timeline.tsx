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
      "bg-card/15 backdrop-blur-lg border border-border/30 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full",
      !isLeftAligned && "text-right" // Align text content for right-sided cards
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
    <div className="relative py-4"> {/* py-4 for top/bottom icon clearance */}
      {/* Vertical line in the middle */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border/30 transform -translate-x-1/2" 
        aria-hidden="true" 
      />

      {items.map((item, index) => {
        const isLeftAligned = index % 2 === 0;
        // Icon is 2.5rem (w-10), gap is 1.5rem (spacing-6). Half icon is 1.25rem (spacing-5).
        // So, padding from center should be half icon + gap = 1.25rem + 1.5rem = 2.75rem (spacing-11)
        const sidePadding = "px-[calc(theme(spacing.5)_+_theme(spacing.6))]"; // icon_radius (1.25rem) + gap (1.5rem)
        
        return (
          <div 
            key={index} 
            // Min height to ensure icon doesn't overlap with very short cards, mb-10 for item separation
            className="mb-10 relative flex items-start justify-center min-h-[5rem]" 
          >
            {/* Icon: Positioned on the central line, vertically aligned with the start of card content (approximated by top-5) */}
            <div 
              className={cn(
                "absolute left-1/2 top-5 transform -translate-x-1/2", // Position icon 1.25rem from top of item row
                "w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 shadow-lg border-2 border-background"
              )}
            >
              <item.icon className="w-5 h-5" />
            </div>

            {/* Left Slot for Card */}
            <div className={cn(
              "w-1/2",
              isLeftAligned ? sidePadding.replace("px","pr") : "pr-5", // Add gap from center line if card is here
              {"invisible": !isLeftAligned} // Hide if not the current side
            )}>
              {isLeftAligned && <TimelineCardContent item={item} isLeftAligned={true} />}
            </div>

            {/* Right Slot for Card */}
            <div className={cn(
              "w-1/2",
              !isLeftAligned ? sidePadding.replace("px","pl") : "pl-5", // Add gap from center line if card is here
              {"invisible": isLeftAligned} // Hide if not the current side
            )}>
              {!isLeftAligned && <TimelineCardContent item={item} isLeftAligned={false} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
