import React from 'react';
import { sectionContent } from '../../utils/sectionContent';

const AboutSection = () => {
  const { content } = sectionContent.about;
  
  return (
    <div className="max-w-4xl text-center px-6 md:px-8">
      <div className="mb-12 relative">
        <div className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Alexander Mitchell</h2>
      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-justify">{content}</p>
    </div>
  );
};

export default AboutSection;