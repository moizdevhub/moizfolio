'use client';
import React from 'react';
import ServiceCard from '@/components/ui/cards/ServiceCard';
import { Smartphone, Code, Zap } from 'lucide-react';


const serviceData = [
  {
    title: "Mobile App Development",
    description: "I build high-quality mobile applications for iOS and Android with performance, design, and scalability in mind.",
    icons: [<Smartphone key="1" className="w-6 h-6" />, <Code key="2" className="w-6 h-6" />, <Zap key="3" className="w-6 h-6" />],
  },
  {
    title: "Web Development",
    description: "Modern websites built with performance, accessibility, and responsive design using Next.js and Tailwind CSS.",
    icons: [<Code key="4" className="w-6 h-6" />, <Zap key="5" className="w-6 h-6" />],
  },

   {
    title: "Web Development",
    description: "Modern websites built with performance, accessibility, and responsive design using Next.js and Tailwind CSS.",
    icons: [<Code key="4" className="w-6 h-6" />, <Zap key="5" className="w-6 h-6" />],
  },


   {
    title: "Web Development",
    description: "Modern websites built with performance, accessibility, and responsive design using Next.js and Tailwind CSS.",
    icons: [<Code key="4" className="w-6 h-6" />, <Zap key="5" className="w-6 h-6" />],
  },


   {
    title: "Web Development",
    description: "Modern websites built with performance, accessibility, and responsive design using Next.js and Tailwind CSS.",
    icons: [<Code key="4" className="w-6 h-6" />, <Zap key="5" className="w-6 h-6" />],
  },



   {
    title: "Web Development",
    description: "Modern websites built with performance, accessibility, and responsive design using Next.js and Tailwind CSS.",
    icons: [<Code key="4" className="w-6 h-6" />, <Zap key="5" className="w-6 h-6" />],
  },

];


const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10">Services</h2>

        {/* 👇 Responsive grid layout 👇 */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          gap-6 
          sm:gap-8
        ">
           {/* Step 2: Use the .map() method to render all cards dynamically */}
          {serviceData.map((service, index) => (
            <ServiceCard
              // It's very important to add a unique 'key' prop for each item in a list
              key={index}
              title={service.title}
              description={service.description}
              icons={service.icons}
            />
          ))}


        </div>
      </div>
    </section>
  );
};

export default Services;
