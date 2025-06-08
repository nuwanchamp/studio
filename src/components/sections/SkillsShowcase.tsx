'use client';
import { getSkills } from '@/lib/contentManager';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

// Get skills data from content manager
const skillsData = getSkills();

// Define types for skill data
interface SkillItem {
  name: string;
  category: string;
  fill: string;
}

export function SkillsShowcase() {
  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const categories: Record<string, SkillItem[]> = {};

    skillsData.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });

    return categories;
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    return Object.keys(skillsByCategory);
  }, [skillsByCategory]);

  return (
    <div className="w-full">
      <div className="p-6 md:p-8 rounded-lg">
        <h3 className="text-2xl font-headline font-semibold mb-6 text-center">Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div 
              key={category}
              className="glass-card p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-headline font-semibold mb-4 text-accent">{category}</h4>

              <div className="flex flex-wrap gap-2">
                {skillsByCategory[category].map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: skill.fill || 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))'
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a small caption or explanation */}
        <p className="text-xs text-center text-muted-foreground mt-6">
          Skills are grouped by category to showcase areas of expertise.
        </p>
      </div>
    </div>
  );
}
