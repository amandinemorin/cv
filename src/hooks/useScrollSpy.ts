import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Get the middle point of the viewport
      const viewportMiddle = window.innerHeight / 2;
      
      // Find the section that's closest to the middle of the viewport
      let closestSection = null;
      let closestDistance = Infinity;

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = element;
        }
      });

      if (closestSection && closestSection.id !== activeSection) {
        setActiveSection(closestSection.id);
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [sectionIds, activeSection]);

  return activeSection;
};