export interface SkillItem {
  id: string;
  name: string;
  icon: string; // Icon identifier for react-icons/si
  color?: string; // Optional custom color for the icon
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface SkillsProps {
  categories?: SkillCategory[];
  className?: string;
}

export interface SkillCategoryProps {
  category: SkillCategory;
  className?: string;
}

export interface SkillItemProps {
  skill: SkillItem;
  className?: string;
}