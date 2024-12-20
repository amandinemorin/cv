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
          ? "https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?auto=format&fit=crop&q=80&w=40&h=40"  // UK flag
          : "https://images.unsplash.com/photo-1576438112307-349c8dd683c8?auto=format&fit=crop&q=80&w=40&h=40"   // French flag
        }
        alt={language === 'fr' ? "Switch to English" : "Passer en français"}
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default LanguageSwitch;