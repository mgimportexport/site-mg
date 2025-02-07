import { createContext } from "react";
import { Language, TranslationsType } from "./languageUtils";

// Tipagem do contexto
export interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  translations: TranslationsType;
}

// Criando o contexto (inicialmente indefinido)
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
