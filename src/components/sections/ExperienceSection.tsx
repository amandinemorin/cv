import React from 'react';
import { sectionContent } from '../../utils/sectionContent';

interface ExperienceProps {
  id: 'experience1' | 'experience2' | 'experience3';
}

const ExperienceSection: React.FC<ExperienceProps> = ({ id }) => {
  const { content } = sectionContent[id];
  
  return (
    <div className="max-w-4xl px-6 md:px-8">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{content.company}</h3>
      <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-75">{content.period}</p>
      <ul className="space-y-3">
        {content.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-lg md:text-xl lg:text-2xl flex">
            <span className="mr-2">•</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;