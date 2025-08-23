// src/components/ui/ContactLink/index.tsx

'use client';

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Card, CardContent } from '../cards/Card'
import { Button } from '@/components/ui/button';
import type { IconType } from 'react-icons';
import { type ContactItem } from '@/components/features/contact/contact-types';

interface ContactLinkProps {
  contact: ContactItem;
  className?: string;
}

/**
 * ContactLink Component
 * Renders an individual contact link with icon and text
 */
const ContactLink: React.FC<ContactLinkProps> = ({ contact, className }) => {
  // Dynamically get the icon component from react-icons/fa
  const IconComponent = (FaIcons as Record<string, IconType>)[contact.icon];

  return (
    <Card className={`group transition-all duration-300 hover:scale-105 hover:shadow-lg border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-teal-500/50 hover:bg-gray-800/70 ${className || ''}`}>
      <CardContent className="p-0">
        <Button
          variant="ghost"
          className="h-full w-full justify-start gap-4 p-6 text-left hover:bg-transparent"
          asChild
        >
          <a
            href={contact.href}
            target={contact.external ? '_blank' : '_self'}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-4"
          >
            {/* Contact Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700/50 transition-colors duration-300 group-hover:bg-teal-500/20">
              {IconComponent ? (
                <IconComponent
                  className="h-5 w-5 text-gray-300 transition-colors duration-300 group-hover:text-teal-400"
                  aria-label={`${contact.label} icon`}
                />
              ) : (
                // Fallback icon if specific icon is not found
                <div className="flex h-5 w-5 items-center justify-center rounded bg-teal-500 text-xs font-bold text-white">
                  {contact.label.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-teal-300">
                {contact.label}
              </p>
              <p className="text-base font-semibold text-white truncate transition-colors duration-300 group-hover:text-teal-100">
                {contact.value}
              </p>
            </div>

            {/* External Link Indicator */}
            {contact.external && (
              <div className="flex h-4 w-4 items-center justify-center">
                <svg
                  className="h-3 w-3 text-gray-500 transition-colors duration-300 group-hover:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            )}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactLink;