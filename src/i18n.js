import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import rawTranslations from './locales/translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: rawTranslations.en },
      ru: { translation: rawTranslations.ru },
      he: { translation: rawTranslations.he },
    },
    fallbackLng: 'ru',
    supportedLngs: ['en', 'ru', 'he'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
