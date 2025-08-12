// components/sections/Skills.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Skills from './SkillsSection';
import { SkillCategory } from './skills-types';

const meta: Meta<typeof Skills> = {
  title: 'Sections/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive skills section component that displays technology skills organized by categories. Features a grid layout with branded technology icons.',
      },
    },
  },
  argTypes: {
    categories: {
      description: 'Array of skill categories to display',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS classes to apply to the component',
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with all skills
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default Skills component with all technology categories as shown in the original design.',
      },
    },
  },
};

// Minimal skills example
const minimalSkills: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      {
        id: 'react',
        name: 'React',
        icon: 'SiReact',
        color: '#61DAFB'
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: 'SiTypescript',
        color: '#3178C6'
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        icon: 'SiNextdotjs',
        color: '#000000'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: 'SiNodedotjs',
        color: '#339933'
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        icon: 'SiMongodb',
        color: '#47A248'
      }
    ]
  }
];

export const Minimal: Story = {
  args: {
    categories: minimalSkills,
  },
  parameters: {
    docs: {
      description: {
        story: 'A minimal version with fewer categories and skills, useful for portfolios with limited technology stack.',
      },
    },
  },
};

// Single category example
const singleCategory: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: [
      {
        id: 'javascript',
        name: 'JavaScript',
        icon: 'SiJavascript',
        color: '#F7DF1E'
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: 'SiTypescript',
        color: '#3178C6'
      },
      {
        id: 'python',
        name: 'Python',
        icon: 'SiPython',
        color: '#3776AB'
      },
      {
        id: 'java',
        name: 'Java',
        icon: 'SiOpenjdk',
        color: '#ED8B00'
      }
    ]
  }
];

export const SingleCategory: Story = {
  args: {
    categories: singleCategory,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a single category containing multiple skills. Useful for testing layout with different numbers of items.',
      },
    },
  },
};

// Custom styling example
export const CustomStyling: Story = {
  args: {
    className: 'bg-slate-800',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom background styling applied via className prop.',
      },
    },
  },
};

// Large skills set example
const largeSkillsSet: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { id: 'react', name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { id: 'vue', name: 'Vue.js', icon: 'SiVuedotjs', color: '#4FC08D' },
      { id: 'angular', name: 'Angular', icon: 'SiAngular', color: '#DD0031' },
      { id: 'svelte', name: 'Svelte', icon: 'SiSvelte', color: '#FF3E00' },
      { id: 'nextjs', name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
      { id: 'nuxtjs', name: 'Nuxt.js', icon: 'SiNuxtdotjs', color: '#00DC82' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { id: 'express', name: 'Express', icon: 'SiExpress', color: '#000000' },
      { id: 'fastify', name: 'Fastify', icon: 'SiFastify', color: '#000000' },
      { id: 'nestjs', name: 'NestJS', icon: 'SiNestjs', color: '#E0234E' },
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { id: 'mongodb', name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { id: 'postgresql', name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
      { id: 'mysql', name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { id: 'redis', name: 'Redis', icon: 'SiRedis', color: '#DC382D' },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      { id: 'aws', name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900' },
      { id: 'gcp', name: 'Google Cloud', icon: 'SiGooglecloud', color: '#4285F4' },
      { id: 'azure', name: 'Azure', icon: 'SiMicrosoftazure', color: '#0078D4' },
      { id: 'docker', name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { id: 'kubernetes', name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
    ]
  }
];

export const LargeSkillsSet: Story = {
  args: {
    categories: largeSkillsSet,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a larger set of skills across multiple categories. Demonstrates how the component handles more content.',
      },
    },
  },
};

// Empty state (edge case)
export const EmptyState: Story = {
  args: {
    categories: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Edge case showing the component behavior when no categories are provided.',
      },
    },
  },
};

