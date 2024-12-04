import React, { useState } from 'react'

const BeforeAfter = () => {
  const [sliderValue, setSliderValue] = useState(30);  // Initial value set to 50%

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="relative w-full">
      <h2 className="mb-12 mt-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl  font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">See Your Self</h2>
      <div className="w-[700px] mx-auto shadow-md rounded-md bg-zinc-100 p-3">
      <div className="relative">
        {/* Before image (background) */}
        <img 
          src="/image_w_bg.png" 
          alt="Image with background"
          className="w-full h-auto" 
        />
        
        {/* After image (foreground) */}
        <img
          src="/image_wo_bg.png"
          alt="Image without background"
          className="absolute inset-0 h-auto"
          style={{
            clipPath: `inset( 0  0 ${100 - sliderValue}% 0 )`,  // Controls the visible area based on slider value
          }}
        />
      </div>
      </div>

      {/* Slider to control the 'before' and 'after' image view */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="absolute bottom-0 left-0 right-0 mx-auto translate-y-1/3 w-[600px] range range-info range-xs"
      />
    </div>
  );
};

export default BeforeAfter;
