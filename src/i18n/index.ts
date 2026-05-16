import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import es from "@/locales/es.json";

export const LANGUAGE_STORAGE_KEY = "gravity-lang";

function readStoredLanguage(): string | null {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === "en" || stored === "es" ? stored : null;
  } catch {
    return null;
  }
}

function applyDocumentLanguage(lng: string) {
  document.documentElement.lang = lng;
}

const initialLanguage = readStoredLanguage() ?? "es";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

applyDocumentLanguage(i18n.language);

i18n.on("languageChanged", (lng) => {
  applyDocumentLanguage(lng);
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  } catch {
    /* ignore quota / private mode */
  }
});

export default i18n;
