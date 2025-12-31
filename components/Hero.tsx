import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden shadow-lg">
      <img
        src="/hero-bg.jpeg"
        alt="Happy New Year"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;