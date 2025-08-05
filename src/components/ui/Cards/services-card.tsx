import React from 'react';

// Interface for the service card props
interface ServiceCardProps {
  title: string;
  description: string;
  icons?: React.ReactNode[]; // Array of icon components
  className?: string;
}

/**
 * ServiceCard Component
 * 
 * A reusable card component for displaying services in a grid layout.
 * Designed to match the visual appearance from the provided image with:
 * - Dark background with subtle border
 * - Rounded corners
 * - Icon row at the top
 * - Green title text
 * - Light gray description text
 * - Responsive design for various screen sizes
 * 
 * Usage:
 * <ServiceCard 
 *   title="Mobile App Development"
 *   description="I create captivating mobile apps..."
 *   icons={[<Icon1 />, <Icon2 />]}
 * />
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icons = [],
  className = ''
}) => {
  return (
    <div className={`
      /* Card container with dark theme styling */
      bg-gray-900/50 
      border border-gray-700/50 
      rounded-2xl 
      p-6 
      sm:p-8 
      
      /* Hover effects for interactivity */
      hover:bg-gray-900/70 
      hover:border-gray-600/50 
      transition-all 
      duration-300 
      ease-in-out
      
      /* Responsive spacing and sizing */
      w-full 
      h-full 
      min-h-[280px] 
      sm:min-h-[320px]
      
      /* Flex layout for content organization */
      flex 
      flex-col 
      gap-6
      
      ${className}
    `}>
      
      {/* Icons row - displayed at the top of the card */}
      {icons.length > 0 && (
        <div className="
          flex 
          items-center 
          gap-3 
          sm:gap-4 
          flex-wrap
        ">
          {icons.map((icon, index) => (
            <div 
              key={index}
              className="
                w-10 
                h-10 
                sm:w-12 
                sm:h-12 
                flex 
                items-center 
                justify-center 
                rounded-full 
                bg-gray-800/50 
                border 
                border-gray-600/30
                text-gray-300
                hover:bg-gray-700/50
                transition-colors
                duration-200
              "
            >
              {icon}
            </div>
          ))}
        </div>
      )}
      
      {/* Service title - prominent green text */}
      <h3 className="
        text-xl 
        sm:text-2xl 
        lg:text-3xl 
        font-bold 
        text-emerald-400 
        leading-tight
        mb-2
      ">
        {title}
      </h3>
      
      {/* Service description - readable gray text */}
      <p className="
        text-gray-300 
        text-sm 
        sm:text-base 
        lg:text-lg 
        leading-relaxed 
        flex-grow
      ">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

/**
 * Example usage with icon suggestions:
 * 
 * For icons, you can use popular libraries like:
 * 
 * 1. Heroicons (recommended for Next.js):
 *    npm install @heroicons/react
 *    import { DevicePhoneIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
 * 
 * 2. React Icons:
 *    npm install react-icons
 *    import { FaMobile, FaCode, FaReact } from 'react-icons/fa'
 * 
 * 3. Lucide React:
 *    npm install lucide-react
 *    import { Smartphone, Code, Zap } from 'lucide-react'
 * 
 * Example implementation:
 * 
 * import { DevicePhoneIcon, CodeBracketIcon, CpuChipIcon } from '@heroicons/react/24/outline'
 * 
 * <ServiceCard 
 *   title="Mobile App Development"
 *   description="I create captivating mobile apps from concept to deployment for iOS and Android. Using cutting-edge technologies, I ensure seamless performance, intuitive interfaces, and robust functionality that align with your business goals. Enjoy a flawless user experience and outstanding results."
 *   icons={[
 *     <DevicePhoneIcon className="w-6 h-6" />,
 *     <CodeBracketIcon className="w-6 h-6" />,
 *     <CpuChipIcon className="w-6 h-6" />
 *   ]}
 * />
 * 
 * Grid Layout Example:
 * 
 * <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 *   {services.map((service, index) => (
 *     <ServiceCard key={index} {...service} />
 *   ))}
 * </div>
 */

