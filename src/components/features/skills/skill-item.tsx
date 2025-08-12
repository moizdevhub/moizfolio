'use client';

import React from 'react';
import * as SiIcons from 'react-icons/si';
import clsx from 'clsx';
import { SkillItemProps } from './skills-types';
/**
 * Individual Skill Item Component
 * Renders a single technology skill with icon and label
 */
const SkillItem: React.FC<SkillItemProps> = ({ skill, className }) => {
  // Dynamically get the icon component from react-icons/si
//   const IconComponent = (SimpleIcons as any)[skill.icon];
      const IconComponent = SiIcons['SiNextdotjs'];

  return (
    <div 
      className={clsx(
        // Base styles for skill item
        'flex flex-col items-center gap-2 p-3',
        // Hover effects
        'transition-transform duration-200 hover:scale-105',
        // Custom className override
        className
      )}
    >
      {/* Technology Icon */}
      <div className="flex h-12 w-12 items-center justify-center">
        {IconComponent ? (
          <IconComponent
            className="h-10 w-10"
            style={{ color: skill.color || '#ffffff' }}
            aria-label={`${skill.name} icon`}
          />
        ) : (
          // Fallback if icon is not found
          <div 
            className="flex h-10 w-10 items-center justify-center rounded bg-gray-600 text-xs font-bold text-white"
            aria-label={`${skill.name} icon`}
          >
            {skill.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Technology Name */}
      <span className="text-center text-sm font-medium text-white">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillItem;
