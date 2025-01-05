import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

interface ExperienceSubmenuProps {
  isExpanded: boolean;
  onToggle: () => void;
  isActive: boolean;
  activeSection: string;
  experienceSections: Array<{ id: string; title: string }>;
  onSectionClick: (id: string) => void;
}

const ExperienceSubmenu: React.FC<ExperienceSubmenuProps> = ({
  isExpanded,
  onToggle,
  isActive,
  activeSection,
  experienceSections,
  onSectionClick
}) => {
  const { language } = useLanguage();
  const { companies } = translations[language].experience;

  function renderSwitch(id: string): string {
    switch(id) {
      case '1':
        return companies.experience1.timeline;
      case '2':
        return companies.experience2.timeline;
      case '3':
        return companies.experience3.timeline;
      case '4':
        return companies.experience4.timeline;
      case '5':
        return companies.experience5.timeline;
      case '6':
        return companies.experience6.timeline;
      default:
        return 'foo';
    }
  }

  return (
    <div className="space-y-1">
      <button
        onClick={onToggle}
        className={`w-full flex items-center group transition-all duration-500 ${
          isActive ? 'py-4' : 'py-3'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isActive
              ? 'bg-white/10 w-full py-3 px-6'
              : 'hover:bg-white/5 px-4 py-2'
          } rounded-lg`}
        >
          <div className="flex items-center">
            <div 
              className={`w-3 h-3 rounded-full border-2 border-white mr-3 transition-all duration-500 ${
                isActive ? 'bg-white' : 'bg-transparent'
              }`}
            />
            <span
              className={`transition-all duration-500 ${
                isActive
                  ? 'text-lg font-semibold'
                  : 'text-sm text-white/60 group-hover:text-white/90'
              }`}
            >
              {language === 'fr' ? 'Expériences' : 'Experiences'}
            </span>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-white/60" />
          ) : (
            <ChevronRight className="w-4 h-4 text-white/60" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="pl-6 space-y-1">
          {experienceSections.map(({ id, title }) => {
            const isSubActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => onSectionClick(id)}
                className="w-full flex items-center group py-2"
              >
                <div
                  className={`flex items-center transition-all duration-500 ${
                    isSubActive
                      ? 'bg-white/10 w-full py-2 px-4'
                      : 'hover:bg-white/5 px-3 py-1'
                  } rounded-lg`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full border-2 border-white mr-2 transition-all duration-500 ${
                      isSubActive ? 'bg-white' : 'bg-transparent'
                    }`}
                  />
                  <span
                    className={`transition-all duration-500 ${
                      isSubActive
                        ? 'text-base font-semibold'
                        : 'text-sm text-white/60 group-hover:text-white/90'
                    }`}
                  >
                    {renderSwitch(id.slice(-1))}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExperienceSubmenu;