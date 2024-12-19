import React from 'react';
import { sectionContent } from '../../utils/sectionContent';

const SkillsSection = () => {
  const { content } = sectionContent.skills;
  
  return (
    <div className="max-w-5xl w-full px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {Object.entries(content).map(([category, skills]) => (
          <div key={category} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-8">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 capitalize">{category}</h3>
            <ul className="space-y-2 md:space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="text-base md:text-xl lg:text-2xl flex">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;