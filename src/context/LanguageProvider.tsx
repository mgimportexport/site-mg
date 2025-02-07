import React, { useState, useEffect } from "react";
import { translations } from "../translations";
import { LanguageContext } from "./LanguageContext";
import { Language, getSavedLanguage, saveLanguage } from "./languageUtils";

// Componente que fornece o contexto de idioma
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getSavedLanguage());

  useEffect(() => {
    setLanguage(getSavedLanguage());
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    saveLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
