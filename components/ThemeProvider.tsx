'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (lang === 'en') {
      document.documentElement.classList.add('lang-en');
      document.body.classList.add('lang-en');
    } else {
      document.documentElement.classList.remove('lang-en');
      document.body.classList.remove('lang-en');
    }
  }, [lang]);

  return <>{children}</>;
}

