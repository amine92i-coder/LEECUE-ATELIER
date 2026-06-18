import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

interface Credential {
  label: string;
  detail: string;
}

export default function Maker() {
  const { t } = useTranslation();
  const [atelierOk, setAtelierOk] = useState(true);
  const stats = t("maker.stats", { returnObjects: true }) as {
    n: string;
    label: string;
  }[];
  const credentials = t("maker.credentials", { returnObjects: true }) as Credential[];
  const practice = t("maker.practice", { returnObjects: true }) as string[];

  return (
    <section id="maker" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
            <img
              src="/products/maker.jpg"
              alt="The artisan at his workbench, finishing a leather case by hand"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          {/* Inset atelier detail */}
          {atelierOk && (
            <div className="absolute -bottom-10 -right-6 hidden w-44 overflow-hidden border border-gold/30 shadow-2xl sm:block lg:w-56">
              <img
                src="/generated/atelier.jpg"
                alt="Hand-stitching fine leather"
                onError={() => setAtelierOk(false)}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          )}
          <div className="pointer-events-none absolute -left-3 -top-3 h-20 w-20 border-l border-t border-gold/40" />
        </Reveal>

        {/* Story */}
        <div>
          <Reveal>
            <span className="eyebrow">{t("maker.eyebrow")}</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] text-bone">
              {t("maker.titleLead")}
              <br />
              <span className="italic text-gold-gradient">
                {t("maker.titleEmph")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 space-y-5 font-sans text-[15px] font-300 leading-relaxed text-bone/65">
              <p>{t("maker.bio1")}</p>
              <p>{t("maker.bio2")}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex items-center gap-5">
              <div className="hairline w-16" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl italic text-gold-gradient">
                  Leon · 李勤
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-wide2 text-smoke">
                  {t("maker.role")}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260} className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-gold/30 pl-4">
                <div className="font-serif text-3xl text-bone">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wide2 text-smoke">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={320} className="mt-10 border-t border-white/8 pt-9">
            <span className="text-[10px] uppercase tracking-luxe text-smoke">
              {t("maker.honoursTitle")}
            </span>
            <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {credentials.map((c) => (
                <li key={c.label} className="border-l border-gold/30 pl-4">
                  <p className="font-serif text-[15px] leading-snug text-bone">
                    {c.label}
                  </p>
                  <p className="mt-1 font-sans text-[11px] font-300 leading-snug text-bone/45">
                    {c.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={360} className="mt-9">
            <span className="text-[10px] uppercase tracking-luxe text-smoke">
              {t("maker.offersTitle")}
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {practice.map((p) => (
                <span
                  key={p}
                  className="border border-white/12 px-3.5 py-1.5 font-sans text-[11px] font-300 tracking-wide text-bone/60"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
