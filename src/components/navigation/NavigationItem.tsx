import React from 'react';

interface NavigationItemProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  id,
  title,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
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
};

export default NavigationItem;