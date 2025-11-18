'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    imageTitle: string;
    content: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { lang } = useLanguage();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto ${lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`sticky top-0 border-b px-6 py-4 flex justify-between items-center ${lang === 'en' ? 'bg-[#13182c] border-[#2d3a5a]' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h2>
          <button
            onClick={onClose}
            className={`text-3xl leading-none ${lang === 'en' ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {project.content.map((paragraph, index) => (
              <p key={index} className={`leading-relaxed ${lang === 'en' ? 'text-white' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

