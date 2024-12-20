import React, { useState, useRef, useEffect } from 'react';
import Section from './components/Section';
import Navigation from './components/Navigation';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import LanguageSwitch from './components/LanguageSwitch';
import { useLanguage } from './contexts/LanguageContext';
import { translations } from './utils/translations';

const sections = [
  { id: 'about' },
  { id: 'education' },
  { id: 'experience1' },
  { id: 'experience2' },
  { id: 'experience3' },
  { id: 'skills' },
  { id: 'contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language];

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

  const getSectionTitle = (id: string) => {
    if (id.startsWith('experience')) {
      return `${t.experience.title} ${id.slice(-1)}`;
    }
    return t[id].title;
  };

  const sectionsWithTitles = sections.map(({ id }) => ({
    id,
    title: getSectionTitle(id),
  }));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation sections={sectionsWithTitles} activeSection={activeSection} />
      <LanguageSwitch />
      <main 
        ref={mainRef}
        className="flex-1 snap-y snap-mandatory h-screen overflow-y-scroll md:ml-72 pt-16 md:pt-0"
      >
        {sections.map(({ id }) => (
          <Section key={id} id={id}>
            {id === 'about' && <AboutSection />}
            {id === 'education' && <EducationSection />}
            {id.startsWith('experience') && <ExperienceSection id={id as 'experience1' | 'experience2' | 'experience3'} />}
            {id === 'skills' && <SkillsSection />}
            {id === 'contact' && <ContactSection />}
          </Section>
        ))}
      </main>
    </div>
  );
}

export default App;