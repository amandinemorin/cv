import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full overflow-hidden shadow-lg hover:opacity-90 transition-opacity"
    >
      <img
        src={language === 'fr' 
          ? "https://github.com/VincentPiumi/cv/blob/master/data/uk.png"  // UK flag
          : "https://github.com/VincentPiumi/cv/blob/master/data/france.png"   // French flag
        }
        alt={language === 'fr' ? "Switch to English" : "Passer en français"}
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default LanguageSwitch;