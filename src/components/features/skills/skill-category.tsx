'use client';

import React from 'react';
import clsx from 'clsx';
import SkillItem from './skill-item';
import { SkillCategoryProps } from './skills-types';

/**
 * Skill Category Component
 * Renders a category card containing multiple skill items
 */
const SkillCategory: React.FC<SkillCategoryProps> = ({ category, className }) => {
  return (
    <div 
      className={clsx(
        // Base card styles matching the design
        'rounded-lg border border-teal-500/30 bg-gray-800/50 p-6',
        // Backdrop blur effect for modern look
        'backdrop-blur-sm',
        // Hover effects
        'transition-all duration-300 hover:border-teal-400/50 hover:bg-gray-800/70',
        // Custom className override
        className
      )}
    >
      {/* Category Title */}
      <h3 className="mb-6 text-center text-lg font-semibold text-white">
        {category.title}
      </h3>

      {/* Skills Grid */}
      <div 
        className={clsx(
          // Responsive grid layout
          'grid gap-4',
          // Dynamic grid columns based on number of skills
          category.skills.length <= 3 
            ? 'grid-cols-3' 
            : category.skills.length <= 4 
            ? 'grid-cols-2' 
            : 'grid-cols-3',
          // Responsive adjustments
          'sm:grid-cols-3'
        )}
      >
        {category.skills.map((skill) => (
          <SkillItem 
            key={skill.id} 
            skill={skill}
            className="min-h-[80px]" // Ensure consistent height
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
