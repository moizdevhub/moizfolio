// This code belongs in a JSX/TSX file, like app/page.tsx or a component
import React from 'react';
import AboutMe from '@/components/sections/About';
import Services from '@/components/sections/Services';



const Home = () => {
  return (
   
    <div className="bg-secondary bg-[url('/grid_bg.png')] bg-cover bg-center min-h-screen w-full">
      <AboutMe />
      <Services />
    </div>
  );
};


export default Home;