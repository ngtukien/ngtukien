import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Use Vite's import.meta.glob to dynamically import all data files
const modules = import.meta.glob('./data/*/*.js', { eager: true });

const resources = {};
export const availableRoles = [];

for (const path in modules) {
  // path is like './data/vi/devops-intern.js'
  const match = path.match(/\.\/data\/(en|vi)\/([^/]+)\.js$/);
  if (match) {
    const lang = match[1];
    const role = match[2];
    
    if (!availableRoles.includes(role)) {
      availableRoles.push(role);
    }

    const langKey = `${lang}-${role}`; // e.g., 'vi-devops-intern'
    const module = modules[path];
    
    // Support either named exports (enData/viData) or default export
    const data = module.enData || module.viData || module.default || Object.values(module)[0];

    resources[langKey] = { translation: data };
  }
}


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi-student', // default fallback
    fallbackLng: 'en-student',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
