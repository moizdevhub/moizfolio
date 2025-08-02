// This code belongs in a JSX/TSX file, like app/page.tsx or a component
import React from 'react';
import AboutMe from '@/components/sections/About';



const Home = () => {
  return (
   
    <div className="bg-[url('/grid_bg.png')] bg-cover bg-center h-96 w-full">
      <AboutMe />
    </div>
  );
};


export default Home;