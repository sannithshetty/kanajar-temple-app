// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome": "Welcome to Kanajar Temple",
      "LatestNews": "Latest News",
      "Location": "Temple Location",
      "Home": "Home",
      "Brahmalingeshwara": "Brahmalingeshwara",
      "MelbantaDeva": "Melbanta Deva",
      "Pooja": "Shashwatha Pooje",
      "Gallery": "Gallery",
      "ContactUs": "Contact Us"
    }
  },
  kn: {
    translation: {
      "Welcome": "ಕಣಜಾರ್ ದೇವಾಲಯಕ್ಕೆ ಸುಸ್ವಾಗತ",
      "LatestNews": "ಇತ್ತೀಚಿನ ಸುದ್ದಿ",
      "Location": "ದೇವಾಲಯದ ಸ್ಥಳ",
      "Home": "ಮುಖಪುಟ",
      "Brahmalingeshwara": "ಬ್ರಹ್ಮಲಿಂಗೇಶ್ವರ",
      "MelbantaDeva": "ಮೆಲ್ಬಂಟಾ ದೇವ",
      "Pooja": "ಶಾಶ್ವತ ಪೂಜೆ",
      "Gallery": "ಗ್ಯಾಲರಿ",
      "ContactUs": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
