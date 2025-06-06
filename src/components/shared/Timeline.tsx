import type { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

export interface TimelineItemProps {
  icon: ElementType;
  date: string;
  title: string;
  subtitle: string;
  description: ReactNode; // Can be string or JSX for bullet points
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItemProps[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border/30 transform -translate-x-1/2" aria-hidden="true" />

      {items.map((item, index) => (
        <div key={index} className="relative flex items-start mb-10 last:mb-0 transition-all duration-300 hover:opacity-100 opacity-90">
          {/* Icon and Dot */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-6 relative z-10 shadow-lg border-2 border-background"> {/* Ensure icon background contrasts with new page bg */}
            <item.icon className="w-5 h-5" />
          </div>
          
          {/* Content */}
          <div className="flex-1 bg-card/15 backdrop-blur-lg border border-border/30 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.date}</p>
            <h3 className="font-headline text-xl font-semibold mt-1.5 text-accent">{item.title}</h3>
            <p className="text-md font-medium text-foreground/80 mt-0.5 mb-2">{item.subtitle}</p>
            <div className={cn("text-sm text-foreground/70 space-y-1", item.description && typeof item.description !== 'string' ? "prose prose-sm prose-invert max-w-none" : "")}>
                {typeof item.description === 'string' ? <p>{item.description}</p> : item.description}
            </div>
            {item.tags && item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
