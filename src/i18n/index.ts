import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import de from "./locales/de";
import fr from "./locales/fr";
import it from "./locales/it";
import ja from "./locales/ja";

/**
 * Languages offered in the UI switcher. English is intentionally absent —
 * it stays a silent technical fallback (see `fallbackLng`) so nothing ever
 * renders blank while a translation is missing.
 */
export const SUPPORTED = [
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
    supportedLngs: ["de", "fr", "it", "ja"],
    // German is the brand fallback; English stays a silent last resort so a
    // missing key never renders blank. A visitor whose browser language isn't
    // one of the four supported locales therefore opens in German.
    fallbackLng: ["de", "en"],
    load: "languageOnly",
    detection: {
      // Honour a persisted switcher choice first, then the visitor's browser
      // language (de/fr/it/ja), then the <html lang> attribute.
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
document.documentElement.lang = i18n.resolvedLanguage ?? "de";

export default i18n;
