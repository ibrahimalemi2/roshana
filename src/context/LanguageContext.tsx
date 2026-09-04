import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationDictionary } from '../data/translations';

export type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  isRtl: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.en
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('roshna_lang') as Language;
      if (saved === 'en' || saved === 'fa') return saved;
    }
    return 'en';
  });

  const isRtl = language === 'fa';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    localStorage.setItem('roshna_lang', language);
  }, [language, isRtl]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, isRtl, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
