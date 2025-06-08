import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ title, children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-20 scroll-mt-20', className)}> {/* scroll-mt for sticky header offset */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-center text-primary">{title}</h2>
        <div className="glass-card rounded-xl p-6 md:p-10 shadow-2xl">
          {children}
        </div>
      </div>
    </section>
  );
}
