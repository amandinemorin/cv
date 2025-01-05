import React, { useState, useEffect } from 'react';
import NavigationItem from './navigation/NavigationItem';
import ExperienceSubmenu from './navigation/ExperienceSubmenu';

interface NavigationProps {
  sections: {
    id: string;
    title: string;
    companies: Map;
  }[];
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection }) => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isExperienceSection = (id: string) => id.startsWith('experience');
  const isInExperienceSection = isExperienceSection(activeSection);

  // Update expansion state based on active section
  useEffect(() => {
    setIsExperienceExpanded(isInExperienceSection);
  }, [isInExperienceSection]);

  const experienceSections = sections.filter(({ id }) => isExperienceSection(id));
  
  const renderNavigationItem = (section: { id: string, title: string }) => {
    const { id, title } = section;
    if (isExperienceSection(id)) return null;

    return (
      <NavigationItem
        key={id}
        id={id}
        title={title}
        isActive={activeSection === id}
        onClick={() => scrollToSection(id)}
      />
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-72 hidden md:flex items-center backdrop-blur-sm bg-white/5">
        <div className="w-full space-y-2">
          {sections.map((section, index) => {
            if (index === 2) {
              return (
                <React.Fragment key="experience-section">
                  <ExperienceSubmenu
                    isExpanded={isExperienceExpanded}
                    onToggle={() => setIsExperienceExpanded(!isExperienceExpanded)}
                    isActive={isInExperienceSection}
                    activeSection={activeSection}
                    experienceSections={experienceSections}
                    onSectionClick={scrollToSection}
                  />
                  {renderNavigationItem(section)}
                </React.Fragment>
              );
            }
            if (!isExperienceSection(section.id)) {
              return renderNavigationItem(section);
            }
            return null;
          })}
        </div>
      </nav>

      {/* Mobile Section Title */}
      <div className="fixed top-0 left-0 right-0 md:hidden backdrop-blur-sm bg-white/5 z-50">
        <div className="p-4">
          <h2 className="text-xl font-semibold">
            {sections.find(section => section.id === activeSection)?.title}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navigation;