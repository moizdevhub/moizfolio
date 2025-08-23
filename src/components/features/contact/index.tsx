// src/components/sections/Contact/index.tsx

'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';

// Import data and types from their new locations
import { contactsData } from './contact-data';
import { type ContactProps } from './contact-types';

// Import the ContactLink component from its new location
import ContactLink from '@/components/ui/contact-link';

/**
 * Contact Section Component
 * Renders a modern contact section with social links and call to action
 */
const Contact: React.FC<ContactProps> = ({ 
  contacts = contactsData,
  className 
}) => {
  return (
    <section 
      className={`w-full bg-gray-900 px-4 py-16 md:px-8 md:py-24 ${className || ''}`}
    >
      {/* Container with max width and centering */}
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let&apos;s Connect & Collaborate
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Ready to bring your ideas to life? Reach out through any of these channels and let&apos;s start building something amazing together.
          </p>
        </div>

        {/* Contact Links Grid - Responsive 2-column layout */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {contacts.map((contact) => (
            <ContactLink 
              key={contact.id} 
              contact={contact}
              className="h-full"
            />
          ))}
        </div>

        {/* Call to Action Section - Enhanced with gradient and status indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-6 py-3 backdrop-blur-sm border border-teal-500/20">
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <Badge 
                variant="secondary" 
                className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border-emerald-500/30"
              >
                Available
              </Badge>
            </div>
            
            {/* Call to Action Text */}
            <span className="text-lg font-medium text-white">
              Open for new opportunities and exciting projects
            </span>
          </div>
          
          {/* Additional Information */}
          <p className="mt-4 text-sm text-gray-400">
            Currently accepting freelance projects • Remote collaboration welcome
          </p>
        </div>

        {/* Optional: Response Time Indicator */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ⚡ Typically responds within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;