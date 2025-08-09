// src/components/sections/Experiences.tsx
'use client';

import React from 'react';
import clsx from 'clsx';
// Import the separated ExperienceCard component
import ExperienceCard from '../../ui/cards/ExperienceCard';

// Define types here or in a central types file
interface Experience {
  id: string;
  dateRange: string;
  jobTitle: string;
  company: string;
  responsibilities: string[];
  isPresent?: boolean;
}

interface ExperiencesProps {
  experiences?: Experience[];
  className?: string;
}

// Default data matching the design
const defaultExperiences: Experience[] = [
  {
    id: '1',
    dateRange: 'Jul 2024 - Present',
    jobTitle: 'Software Development Engineer',
    company: 'StarApps Studio',
    responsibilities: [
      'Currently working on developing innovative software solutions.',
      'Contributing to large-scale projects with a focus on performance optimization.',
      'Collaborating closely with cross-functional teams to ensure product quality.',
      'Adhering to clean code practices and modern development techniques.'
    ],
    isPresent: true
  },
  {
    id: '2',
    dateRange: 'Feb 2023 - Jul 2024',
    jobTitle: 'Full Stack Developer',
    company: 'Merito',
    responsibilities: [
      'Developed over 5 web applications with seamless backend API integration.',
      'Streamlined workflows by eliminating redundant data-handling efficiency.'
    ]
  },
  {
    id: '3',
    dateRange: 'Feb 2023 - Jul 2024',
    jobTitle: 'Full Stack Developer',
    company: 'Merito',
    responsibilities: [
      'Developed over 5 web applications with seamless backend API integration.',
      'Streamlined workflows by eliminating redundant data-handling efficiency.'
    ]
  },
  {
    id: '4',
    dateRange: 'Feb 2023 - Jul 2024',
    jobTitle: 'Full Stack Developer',
    company: 'Merito',
    responsibilities: [
      'Developed over 5 web applications with seamless backend API integration.',
      'Streamlined workflows by eliminating redundant data-handling efficiency.'
    ]
  }
];

/**
 * Main Experiences Section Component
 * Renders the complete experiences section with timeline layout
 */
const Experiences: React.FC<ExperiencesProps> = ({ 
  experiences = defaultExperiences,
  className 
}) => {
  return (
    <section 
      className={clsx(
        'bg-gray-900  w-full px-4 py-16 md:px-8 md:py-24',
        className
      )}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:mb-16 md:text-4xl lg:text-5xl">
          Experiences
        </h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
export { type ExperiencesProps, type Experience };