import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export default function Manifesto() {
  const { t } = useTranslation();
  const [texOk, setTexOk] = useState(true);
  const pillars = t("manifesto.pillars", { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  return (
    <section className="relative overflow-hidden bg-coal py-28 lg:py-36">
      {texOk && (
        <img
          src="/generated/texture.jpg"
          alt=""
          aria-hidden
          onError={() => setTexOk(false)}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.10]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="eyebrow">{t("manifesto.eyebrow")}</span>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(1.6rem,3.6vw,2.9rem)] font-400 leading-[1.25] text-bone">
            {t("manifesto.quoteLead")}
            <span className="italic text-gold-gradient">
              {t("manifesto.quoteEmph")}
            </span>
            {t("manifesto.quoteTail")}
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="relative mx-auto mt-20 grid max-w-site gap-px overflow-hidden border-y border-white/5 px-0 md:grid-cols-3">
        {pillars.map((p, i) => (
          <StaggerItem
            key={p.title}
            className="bg-coal/60 px-8 py-12 text-center md:px-10"
          >
            <span className="font-serif text-5xl text-gold/30">0{i + 1}</span>
            <h3 className="mt-4 font-serif text-2xl text-bone">{p.title}</h3>
            <p className="mx-auto mt-4 max-w-xs font-sans text-[13px] font-300 leading-relaxed text-bone/55">
              {p.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
