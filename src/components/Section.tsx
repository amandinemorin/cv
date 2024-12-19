import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="snap-start min-h-screen w-full flex items-center justify-center py-16 md:py-8 text-white backdrop-blur-sm bg-white/5"
    >
      {children}
    </section>
  );
}

export default Section;