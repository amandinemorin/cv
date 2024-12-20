import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const EducationSection = () => {
  const { language } = useLanguage();
  const { degrees } = translations[language].education;
  
  return (
    <div className="max-w-4xl space-y-6 px-8 md:px-8">
      {degrees.map((education, index) => (
        <div 
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
        >
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">{education.degree}</h3>
          <p className="text-lg md:text-2xl lg:text-3xl mb-1 md:mb-2">{education.school}</p>
          <p className="text-base md:text-xl lg:text-2xl mb-4 md:mb-6 opacity-75">{education.year}</p>
          <ul className="space-y-2 md:space-y-3">
            {education.achievements.map((achievement, idx) => (
              <li key={idx} className="text-base md:text-xl lg:text-2xl flex">
                <span className="mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;