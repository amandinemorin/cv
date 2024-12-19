import React from 'react';
import { sectionContent } from '../../utils/sectionContent';

const ContactSection = () => {
  const { content } = sectionContent.contact;
  
  return (
    <div className="max-w-3xl">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="font-semibold min-w-24 text-lg md:text-xl lg:text-2xl">Email:</span>
            <span className="text-lg md:text-xl lg:text-2xl">{content.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-semibold min-w-24 text-lg md:text-xl lg:text-2xl">Phone:</span>
            <span className="text-lg md:text-xl lg:text-2xl">{content.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-semibold min-w-24 text-lg md:text-xl lg:text-2xl">LinkedIn:</span>
            <a 
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl lg:text-2xl text-blue-300 hover:text-blue-400 transition-colors underline"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;