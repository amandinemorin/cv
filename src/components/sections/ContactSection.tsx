import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const content = {
    email: "amandine.morin64@gmail.com",
    phone: "+33 6 03 98 06 79",
    linkedin: "https://linkedin.com/in/johndoe"
  };
  
  return (
    <div className="max-w-3xl">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="font-semibold min-w-24 text-lg md:text-xl lg:text-2xl">{t.email}</span>
            <span className="text-lg md:text-xl lg:text-2xl">{content.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-semibold min-w-24 text-lg md:text-xl lg:text-2xl">{t.phone}</span>
            <span className="text-lg md:text-xl lg:text-2xl">{content.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-semibold min-w-24 text-lg md:text-xl lg:text-2xl">{t.linkedin}</span>
            <a 
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl lg:text-2xl text-blue-300 hover:text-blue-400 transition-colors underline"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;