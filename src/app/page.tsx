// This code belongs in a JSX/TSX file, like app/page.tsx or a component
import React from 'react';

const Home = () => {
  return (
    // Correctly applying the background with a string path in a Tailwind class
    // You should remove the `import grid_image from ...` from your .js file if you use this method
    <div className="bg-[url('/grid_bg.png')] bg-cover bg-center h-96 w-full">
      <h1 className="text-primary text-4xl p-10">Welcome to My Portfolio</h1>
    </div>
  );
};

export default Home;