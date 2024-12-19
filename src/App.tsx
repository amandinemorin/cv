import React, { useState, useRef, useEffect } from 'react';
import Section from './components/Section';
import Navigation from './components/Navigation';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import { sectionContent } from './utils/sectionContent';

const sections = Object.entries(sectionContent).map(([id, { title }]) => ({
  id,
  title,
}));

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: mainElement,
        threshold: 0.5,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getSectionComponent = (id: string) => {
    switch (id) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection />;
      case 'experience1':
      case 'experience2':
      case 'experience3':
        return <ExperienceSection id={id as 'experience1' | 'experience2' | 'experience3'} />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation sections={sections} activeSection={activeSection} />
      <main 
        ref={mainRef}
        className="flex-1 snap-y snap-mandatory h-screen overflow-y-scroll md:ml-72 pt-16 md:pt-0"
      >
        {sections.map(({ id }) => (
          <Section key={id} id={id}>
            {getSectionComponent(id)}
          </Section>
        ))}
      </main>
    </div>
  );
}

export default App;