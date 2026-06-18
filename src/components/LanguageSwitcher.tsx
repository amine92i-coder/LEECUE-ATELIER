import { useTranslation } from "react-i18next";
import { SUPPORTED } from "../i18n";

/** DE / FR / IT / JA toggle. English stays a silent fallback. */
export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={`flex items-center gap-2 ${className}`}
    >
      {SUPPORTED.map(({ code, name }, idx) => {
        const active = current === code;
        return (
          <span key={code} className="flex items-center gap-2">
            {idx > 0 && (
              <span aria-hidden className="text-bone/20">
                /
              </span>
            )}
            <button
              type="button"
              onClick={() => i18n.changeLanguage(code)}
              aria-current={active ? "true" : undefined}
              aria-label={name}
              className={`cursor-pointer font-sans text-[11px] uppercase tracking-wide2 transition-colors duration-300 ${
                active ? "text-gold" : "text-bone/45 hover:text-bone"
              }`}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}
