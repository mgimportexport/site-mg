import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Integra com React
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our site",
          about: "About Us",
          contact: "Contact Us",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue sur notre site",
          about: "À propos de nous",
          contact: "Contactez-nous",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido a nuestro sitio",
          about: "Sobre nosotros",
          contact: "Contáctanos",
        },
      },
    },
    lng: "en", // Define o idioma inicial como inglês
    fallbackLng: "en", // Se um idioma não for encontrado, volta para inglês
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
