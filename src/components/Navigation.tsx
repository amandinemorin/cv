import React from 'react';

interface NavigationProps {
  sections: {
    id: string;
    title: string;
  }[];
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-72 hidden md:flex items-center backdrop-blur-sm bg-white/5">
        <div className="w-full space-y-2">
          {sections.map(({ id, title }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-center group transition-all duration-500 ${
                  isActive ? 'py-4' : 'py-3'
                }`}
              >
                <div
                  className={`flex items-center transition-all duration-500 ${
                    isActive
                      ? 'bg-white/10 w-full py-3 px-6'
                      : 'hover:bg-white/5 px-4 py-2'
                  } rounded-lg`}
                >
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
                    {title}
                  </span>
                </div>
              </button>
            );
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