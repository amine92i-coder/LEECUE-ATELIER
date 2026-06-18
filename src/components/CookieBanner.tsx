import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EASE_SILK } from "./Reveal";

const STORAGE_KEY = "leecue-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show banner anyway.
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label={t("cookie.label")}
          aria-live="polite"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_SILK }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl border border-gold/25 bg-ink/95 px-5 py-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:px-7 sm:py-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="font-sans text-[12.5px] font-300 leading-relaxed text-bone/70">
              {t("cookie.text")}{" "}
              <Link
                to="/datenschutz"
                className="whitespace-nowrap text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
              >
                {t("cookie.privacy")}
              </Link>
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => choose("essential")}
                className="cursor-pointer whitespace-nowrap border border-white/15 px-5 py-2.5 font-sans text-[11px] uppercase tracking-wide2 text-bone/70 transition-colors duration-300 hover:border-white/30 hover:text-bone"
              >
                {t("cookie.essential")}
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="btn-gold !px-6 !py-2.5"
              >
                <span>{t("cookie.accept")}</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
