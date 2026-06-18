import { useState } from "react";
import { useTranslation } from "react-i18next";
import { products, categories, type Category } from "../data/products";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const catKey: Record<string, string> = {
  All: "all",
  "Key Cases": "keyCases",
  "Phone Cases": "phoneCases",
  "Charms & Lanyards": "charms",
};

export default function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Category | "All">("All");
  const shown =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="collection" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-xl">
            <span className="eyebrow">{t("gallery.eyebrow")}</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] text-bone">
              {t("gallery.titleLead")}
              <br />
              <span className="italic text-gold-gradient">
                {t("gallery.titleEmph")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm md:text-right">
            <p className="font-sans text-[14px] font-300 leading-relaxed text-bone/60">
              {t("gallery.subcopy")}
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={150} className="mt-12 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`border px-5 py-2.5 font-sans text-[11px] uppercase tracking-wide2 transition-all duration-400 ease-silk ${
                filter === c
                  ? "border-gold bg-gold text-ink"
                  : "border-white/10 text-bone/60 hover:border-gold/50 hover:text-bone"
              }`}
            >
              {t(`gallery.filters.${catKey[c]}`)}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <StaggerGroup
          key={filter}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {shown.map((p) => (
            <StaggerItem
              key={p.id}
              className="group relative overflow-hidden bg-charcoal"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.marque} — ${p.name} in ${p.leather}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-silk group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />

                {p.bespoke && (
                  <span className="absolute left-4 top-4 border border-gold/60 bg-ink/60 px-3 py-1 text-[9px] uppercase tracking-luxe text-gold backdrop-blur-sm">
                    {t("gallery.personalised")}
                  </span>
                )}

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow !text-bone/55">{p.marque}</span>
                  <h3 className="mt-1 font-serif text-2xl text-bone">{p.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-gold/80">
                    <span className="h-px w-5 bg-gold/50" />
                    {p.leather}
                  </div>
                  <p className="mt-3 max-h-0 overflow-hidden font-sans text-[13px] font-300 leading-relaxed text-bone/0 transition-all duration-500 ease-silk group-hover:max-h-24 group-hover:text-bone/70">
                    {t(`gallery.notes.${p.id}`)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={120} className="mt-16 flex flex-col items-center gap-6 text-center">
          <div className="hairline w-40" />
          <p className="max-w-md font-serif text-xl italic text-bone/70">
            {t("gallery.closing")}
          </p>
          <a href="#commission" className="btn-gold">
            <span>{t("gallery.cta")}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
