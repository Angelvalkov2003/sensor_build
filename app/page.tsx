'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  return (
    <div className={lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>
            {t.title}
          </h1>
          <h2 className={`text-xl md:text-2xl mb-8 ${lang === 'en' ? 'text-white' : 'text-gray-700'}`}>
            {t.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-[#22c55e] font-semibold mb-12">
            {t.tagline}
          </p>
          
          <div className={`max-w-4xl mx-auto text-left space-y-6 leading-relaxed ${lang === 'en' ? 'text-white' : 'text-gray-700'}`}>
            <p>{t.description1}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-16 md:py-24 ${lang === 'en' ? 'bg-[#1a2342]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>
            {t.whyChooseUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`p-6 rounded-lg shadow-md border-l-4 border-[#22c55e] ${lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>
                {t.why1}
              </h3>
              <p className={lang === 'en' ? 'text-white' : 'text-gray-600'}>
                {t.why1Desc}
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-md border-l-4 border-[#22c55e] ${lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>
                {t.why2}
              </h3>
              <p className={lang === 'en' ? 'text-white' : 'text-gray-600'}>
                {t.why2Desc}
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-md border-l-4 border-[#22c55e] ${lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>
                {t.why3}
              </h3>
              <p className={lang === 'en' ? 'text-white' : 'text-gray-600'}>
                {t.why3Desc}
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-md border-l-4 border-[#22c55e] ${lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>
                {t.why4}
              </h3>
              <p className={lang === 'en' ? 'text-white' : 'text-gray-600'}>
                {t.why4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="tel:+359888888888"
            className="w-full sm:w-auto px-8 py-4 bg-[#22c55e] text-white text-lg font-semibold rounded-lg hover:bg-[#16a34a] transition-colors text-center"
          >
            {t.callNow}
          </a>
          <a
            href="/contacts"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#22c55e] text-lg font-semibold rounded-lg border-2 border-[#22c55e] hover:bg-[#22c55e] hover:text-white transition-colors text-center"
          >
            {t.sendMessage}
          </a>
        </div>
        <p className={`text-center max-w-2xl mx-auto ${lang === 'en' ? 'text-white' : 'text-gray-600'}`}>
          {t.footerText}
        </p>
      </section>
    </div>
  );
}
