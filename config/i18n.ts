import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_es from "translations/es.json";
import translation_en from "translations/en.json";
import { languages } from "utils/CONSTANTS";


const languagesCode = languages.map( lng => lng.code)

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translation_es
      },
      en: {
        translation: translation_en
      }
    },
    lng: localStorage.getItem("lang") || languagesCode.shift(),
    fallbackLng: languagesCode.shift(),

    interpolation: {
      escapeValue: false
    }
});