// src/lib/data/contact.ts

import { type ContactItem } from './contact-types';

export const contactsData: ContactItem[] = [
  {
    id: '1',
    label: 'GitHub',
    value: 'nixrajput',
    href: 'https://github.com/nixrajput',
    icon: 'FaGithub',
    type: 'social',
    external: true
  },
  {
    id: '2',
    label: 'LinkedIn',
    value: 'nixrajput',
    href: 'https://linkedin.com/in/nixrajput',
    icon: 'FaLinkedin',
    type: 'social',
    external: true
  },
  {
    id: '3',
    label: 'Telegram',
    value: 'nixrajput',
    href: 'https://t.me/nixrajput',
    icon: 'FaTelegram',
    type: 'social',
    external: true
  },
  {
    id: '4',
    label: 'Instagram',
    value: 'nixrajput',
    href: 'https://instagram.com/nixrajput',
    icon: 'FaInstagram',
    type: 'social',
    external: true
  },
  {
    id: '5',
    label: 'Twitter',
    value: 'nixrajput07',
    href: 'https://twitter.com/nixrajput07',
    icon: 'FaTwitter',
    type: 'social',
    external: true
  },
  {
    id: '6',
    label: 'Email',
    value: 'nkr.nikhil.nkr@gmail.com',
    href: 'mailto:nkr.nikhil.nkr@gmail.com',
    icon: 'FaEnvelope',
    type: 'email',
    external: false
  },
  {
    id: '7',
    label: 'Buy Me a Coffee',
    value: 'nixrajput',
    href: 'https://buymeacoffee.com/nixrajput',
    icon: 'FaCoffee',
    type: 'other',
    external: true
  },
  {
    id: '8',
    label: 'Discord',
    value: 'nixrajput',
    href: 'https://discord.com/users/nixrajput',
    icon: 'FaDiscord',
    type: 'social',
    external: true
  }
];