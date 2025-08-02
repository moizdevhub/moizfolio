'use client';

import React from 'react';
import { Github, Linkedin, Instagram, Globe, Twitter, Laptop, Settings, Earth } from 'lucide-react';

// TypeScript interfaces for component props
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

interface HeroSectionProps {
  name?: string;
  title?: string;
  socialLinks?: SocialLink[];
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Abdul Moiz",
  title = "Agentic AI Developer",
  ctaText = "Let's Talk",
  ctaLink = "#contact",
  onCtaClick,
  socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/nikhilrajput",
      icon: <Github className="w-[14px] h-[14px] md:w-4 md:h-4  lg:w-6 lg:h-6" />,
      label: "Visit GitHub profile"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/nikhilrajput",
      icon: <Linkedin className="w-[14px] h-[14px] md:w-4 md:h-4  lg:w-6 lg:h-6" />,
      label: "Connect on LinkedIn"
    },
    {
      name: "Blog",
      url: "https://blog.nikhilrajput.com",
      icon: <Globe className="w-[14px] h-[14px] md:w-4 md:h-4  lg:w-6 lg:h-6" />,
      label: "Read my blog"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/nikhilrajput",
      icon: <Instagram className="w-[14px] h-[14px] md:w-4 md:h-4  lg:w-6 lg:h-6" />,
      label: "Follow on Instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nikhilrajput",
      icon: <Twitter className="w-[14px] h-[14px] md:w-4 md:h-4  lg:w-6 lg:h-6" />,
      label: "Follow on Twitter"
    }
  ]
}) => {
  const handleCtaClick = (e: React.MouseEvent) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern - matches the design exactly */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Main Heading - "Hi there, I am [Name]" */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl  font-bold leading-tight mb-6">
          <span className="text-white">Hi there, I am </span>
          <span className="text-primary">{name}.</span>
        </h1>
        
        {/* Subtitle with Developer Title and Icons */}
        {/* <div className="flex items-center justify-center  gap-3 mb-12 text-lg sm:text-xl md:text-2xl text-gray-300">
          <span>{title}</span>
          <Laptop className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
          <span className="text-[13px]  md:text-[1.2rem] lg:text-[1.3rem] xl:text-2xl">SDE</span>
          <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
          <span className="text-[13px] md:text-[1.2rem] lg:text-[1.3rem] xl:text-2xl">Open Source</span>
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
         */}
     
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 text-lg sm:text-xl md:text-2xl text-gray-300 text-center sm:space-x-4 sm:gap-4">
  {/* Title */}
  <div className="flex items-center gap-2">
    <span>{title}</span>
  </div>

  {/* Icons + Labels */}
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2">
      <Laptop className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
      <span className="text-[13px] md:text-[1.2rem] lg:text-[1.3rem] xl:text-2xl">SDE</span>
    </div>

    <div className="flex items-center gap-2">
      <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
      <div className='flex items-center gap-2'>
         <span className="text-[13px] md:text-[1.2rem] lg:text-[1.3rem] xl:text-2xl">
        Open Source
      </span>
       <Earth />
      </div>
      
    </div>
  </div>
</div>





          
        {/* Call-to-Action Button */}
       
   <div className="mb-10 sm:mb-12 md:mb-16">
  <a
    href={ctaLink}
    onClick={handleCtaClick}
    className="inline-block 
               px-6 py-3 
               sm:px-8 sm:py-4 
               md:px-4 md:py-3
               lg:px-8 lg:py-4 
               bg-primary 
               text-white 
               font-semibold 
               text-base sm:text-lg md:text-sm lg:text-xl 
               rounded-lg 
               transition-all duration-300 
               hover:scale-105 
               hover:shadow-lg hover:shadow-emerald-500/25 
               focus:outline-none focus:ring-4 focus:ring-primary/50"
    role="button"
    tabIndex={0}
  >
    {ctaText}
  </a>
</div>



        {/* Social Links Section */}
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl text-gray-300 font-medium">
            Follow me here
          </h2>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative p-2 rounded-full border-2 border-gray-600 hover:border-emerald-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
              >
                <span className=" text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {social.icon}
                </span>
                
                {/* Tooltip on hover */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-600">
                  {social.name}
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;

