// src/types/contact.ts

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string; // Icon identifier for react-icons/fa
  type: 'social' | 'email' | 'phone' | 'other';
  external?: boolean; // Whether link opens in new tab
}

export interface ContactProps {
  contacts?: ContactItem[];
  className?: string;
}