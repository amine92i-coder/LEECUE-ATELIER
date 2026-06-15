import { tiers } from "../data/products";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { Check } from "./Icons";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-coal py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Investment</span>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.04] text-bone text-balance">
            Priced by the skin,
            <span className="italic text-gold-gradient"> made by the hand.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-[14px] font-300 leading-relaxed text-bone/60">
            Every commission is quoted individually — the figures below are
            starting points for a standard key case, before your chosen
            personalisation.
          </p>
        </Reveal>

        <StaggerGroup
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch"
          stagger={0.12}
        >
          {tiers.map((t) => (
            <StaggerItem
              key={t.name}
              className={`group relative flex flex-col border p-8 transition-[transform,border-color,box-shadow] duration-500 ease-silk hover:-translate-y-1.5 lg:p-9 ${
                t.featured
                  ? "border-gold/55 bg-graphite/50 shadow-[0_30px_80px_-40px_rgba(201,161,78,0.5)] lg:-translate-y-4 lg:hover:-translate-y-6"
                  : "border-white/10 bg-ink/30 hover:border-gold/40"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gold/50 bg-coal px-4 py-1.5 text-[9px] uppercase tracking-luxe text-gold">
                  {t.origin}
                </span>
              )}

              {!t.featured && (
                <span className="eyebrow !text-bone/50">{t.origin}</span>
              )}

              <h3
                className={`font-serif text-[1.8rem] leading-tight text-bone ${
                  t.featured ? "mt-2" : "mt-3"
                }`}
              >
                {t.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-[11px] uppercase tracking-wide2 text-smoke">
                  from
                </span>
                <span className="font-serif text-5xl text-gold-gradient">
                  {t.from}
                </span>
              </div>

              <p className="mt-5 font-sans text-[13px] font-300 leading-relaxed text-bone/60">
                {t.blurb}
              </p>

              <div className="my-7 h-px w-full bg-white/8" />

              <ul className="flex flex-col gap-3.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    <span className="font-sans text-[13px] font-300 leading-snug text-bone/75">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#commission"
                className={`mt-9 ${
                  t.featured ? "btn-solid" : "btn-gold"
                } w-full`}
              >
                <span>Commission in {t.name}</span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal
          delay={120}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="font-sans text-[13px] font-300 tracking-wide text-bone/50">
            Phone cases from{" "}
            <span className="text-bone/80">$160</span> · Charms &amp; lanyards from{" "}
            <span className="text-bone/80">$90</span> · Matched sets &amp; full
            interiors quoted on request.
          </p>
          <p className="max-w-md font-serif text-lg italic text-bone/60">
            No deposit is taken until you have approved your design and quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
