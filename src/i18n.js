import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enData } from './data/en';
import { viData } from './data/vi';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enData },
      vi: { translation: viData }
    },
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
