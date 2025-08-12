'use client';

import React from 'react';
import clsx from 'clsx';
import SkillCategory from './skill-category';
import { SkillsProps } from './skills-types';
import { skillsData } from './skills-data';

/**
 * Main Skills Section Component
 * Renders the complete skills section with category grid layout
 */
const Skills: React.FC<SkillsProps> = ({ 
  categories = skillsData,
  className 
}) => {
  return (
    <section 
      className={clsx(
        // Base styles - dark theme with proper spacing
      "w-full bg-[url('/g.png')] bg-cover bg-center px-4 py-16 md:px-8 md:py-24",
    
        className
      )}
    >
      {/* Container with max width and centering */}
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:mb-16 md:text-4xl lg:text-5xl">
          Skills
        </h2>

        {/* Skills Categories Grid */}
        <div 
          className={clsx(
            // Responsive grid layout
            'grid gap-6',
            // Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            // Ensure equal height rows
            'auto-rows-fr'
          )}
        >
          {categories.map((category) => (
            <SkillCategory 
              key={category.id} 
              category={category}
              className="h-full" // Ensure cards fill available height
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// Named exports for flexibility
export { Skills, type SkillsProps };
