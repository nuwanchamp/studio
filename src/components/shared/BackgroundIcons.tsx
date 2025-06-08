'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  Code, 
  GraduationCap, 
  Briefcase, 
  User, 
  Award, 
  FolderGit2
} from 'lucide-react';

// Define icon types for each section
const sectionIcons = {
  profile: [User],
  experience: [Briefcase],
  education: [GraduationCap],
  skills: [Code],
  projects: [FolderGit2],
  certifications: [Award]
};

// Define interface for a floating icon
interface FloatingIcon {
  id: number;
  icon: React.ElementType;
  size: number;
  x: number;
  y: number;
  opacity: number;
  rotation: number;
  animationDuration: number;
  animationDelay: number;
  animationType: string;
  direction: number; // 1 or -1 for animation direction
}

export function BackgroundIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate icons with better distribution
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      const allIcons = Object.values(sectionIcons).flat();

      // Create 15-25 icons
      const iconCount = Math.floor(Math.random() * 11) + 15;

      // Create a grid system for better distribution
      const gridSize = Math.ceil(Math.sqrt(iconCount));
      const cellWidth = 100 / gridSize;
      const cellHeight = 100 / gridSize;

      // Track occupied cells to prevent overlap
      const occupiedCells: Set<string> = new Set();

      // Animation types
      const animationTypes = ['float-vertical', 'float-horizontal', 'float-diagonal', 'float-circular'];

      for (let i = 0; i < iconCount; i++) {
        const randomIconIndex = Math.floor(Math.random() * allIcons.length);
        const icon = allIcons[randomIconIndex];

        // Find an unoccupied cell
        let cellX, cellY, x, y;
        let attempts = 0;
        const maxAttempts = 20; // Prevent infinite loops

        do {
          // Choose a random grid cell
          cellX = Math.floor(Math.random() * gridSize);
          cellY = Math.floor(Math.random() * gridSize);

          // Add some randomness within the cell (20-80% of cell size)
          const offsetX = cellWidth * (0.2 + Math.random() * 0.6);
          const offsetY = cellHeight * (0.2 + Math.random() * 0.6);

          // Calculate final position
          x = cellX * cellWidth + offsetX;
          y = cellY * cellHeight + offsetY;

          attempts++;
        } while (occupiedCells.has(`${cellX},${cellY}`) && attempts < maxAttempts);

        // Mark cell as occupied
        occupiedCells.add(`${cellX},${cellY}`);

        // Random animation properties
        const animationType = animationTypes[Math.floor(Math.random() * animationTypes.length)];
        const animationDuration = Math.random() * 12 + 8; // 8-20 seconds
        const animationDelay = Math.random() * 5; // 0-5 seconds delay
        const direction = Math.random() > 0.5 ? 1 : -1; // Random direction

        newIcons.push({
          id: i,
          icon,
          size: Math.floor(Math.random() * 30) + 20, // Random size between 20-50px
          x,
          y,
          opacity: Math.random() * 0.15 + 0.05, // Random opacity between 0.05-0.2
          rotation: Math.random() * 360, // Random rotation 0-360 degrees
          animationDuration,
          animationDelay,
          animationType,
          direction
        });
      }

      setIcons(newIcons);
    };

    generateIcons();

    // Regenerate icons on window resize
    const handleResize = () => {
      generateIcons();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="background-icons" ref={containerRef}>
      {icons.map((iconData) => {
        const IconComponent = iconData.icon;
        return (
          <div
            key={iconData.id}
            className={`background-icon ${iconData.animationType}`}
            style={{
              position: 'fixed',
              left: `${iconData.x}%`,
              top: `${iconData.y}%`,
              zIndex: -1,
              pointerEvents: 'none',
              animationDuration: `${iconData.animationDuration}s`,
              animationDelay: `${iconData.animationDelay}s`,
              animationDirection: iconData.direction > 0 ? 'normal' : 'reverse',
              animationIterationCount: 'infinite',
              animationFillMode: 'both'
            }}
          >
            <div 
              className={iconData.id % 3 === 0 ? 'icon-spin' : ''}
              style={{ 
                transform: `rotate(${iconData.rotation}deg)`,
                animationDuration: iconData.id % 3 === 0 ? `${(iconData.id % 5 + 3) * 10}s` : '0s'
              }}
            >
              <IconComponent 
                size={iconData.size} 
                color="currentColor"
                className="text-blue-500/30"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
