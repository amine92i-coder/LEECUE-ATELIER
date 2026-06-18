import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import de from "./locales/de";
import fr from "./locales/fr";
import it from "./locales/it";
import ja from "./locales/ja";

/**
 * Languages offered in the UI switcher. English is the primary language and
 * also the technical fallback (see `fallbackLng`), so nothing ever renders
 * blank while a translation is missing.
 */
export const SUPPORTED = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
  { code: "ja", name: "日本語" },
] as const;

export type LangCode = (typeof SUPPORTED)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      it: { translation: it },
      ja: { translation: ja },
    },
    supportedLngs: ["en", "de", "fr", "it", "ja"],
    // English is the primary language and the fallback. A visitor whose browser
    // language is de/fr/it/ja opens in that language; everyone else — including
    // English browsers and any other locale — opens in English.
    fallbackLng: "en",
    load: "languageOnly",
    detection: {
      // Honour a persisted switcher choice first, then the visitor's browser
      // language (en/de/fr/it/ja), then the <html lang> attribute.
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "leecue-lang",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

// Keep <html lang> in sync for SEO + screen readers.
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});
document.documentElement.lang = i18n.resolvedLanguage ?? "en";

export default i18n;
