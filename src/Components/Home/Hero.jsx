import { ArrowUpFromLine } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 rounded-md shadow-md" style={{ backgroundImage: "url('hero.jpg')" }}></div>
      
      <div className="relative z-10 text-white">
        <h2 className="text-4xl font-bold mb-4">Remove the background from images for free.</h2>
        <p className="text-neutral-200 text-lg my-4 mx-auto w-3/4 sm:w-2/3 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum iure, quas mollitia.
        </p>
        <button className="relative inline-flex mx-auto bg-gradient-to-r from-purple-400 to-purple-600 text-white font-medium tracking-wide py-2 px-8 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400">
          <ArrowUpFromLine className='mr-2'/>
          Upload your image
          <input className="opacity-0 absolute inset-0 cursor-pointer" accept='image/*' type="file" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
