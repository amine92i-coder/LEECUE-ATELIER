import {
  tiers,
  limitedEdition,
  oneOfOne,
  collaborations,
  accessories,
} from "../data/products";
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

              <div className="mt-7 border-t border-white/8 pt-6">
                <span className="text-[10px] uppercase tracking-luxe text-smoke">
                  Priced by skin
                </span>
                <ul className="mt-3.5 flex flex-col gap-2.5">
                  {t.prices.map((p) => (
                    <li
                      key={p.skin}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <span className="font-sans text-[12px] font-300 leading-snug text-bone/65">
                        {p.skin}
                      </span>
                      <span className="whitespace-nowrap font-serif text-[16px] text-gold-gradient">
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex-grow" />

              <a
                href="#commission"
                className={`${t.featured ? "btn-solid" : "btn-gold"} w-full`}
              >
                <span>Commission in {t.name}</span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-16 text-center">
          <p className="mx-auto max-w-xl font-serif text-[clamp(1.3rem,2.6vw,1.9rem)] italic leading-snug text-bone/60">
            “Every piece we make is, by its very nature, a limited edition.”
          </p>
        </Reveal>

        {/* Limited Edition + One of One */}
        <StaggerGroup
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
          stagger={0.12}
        >
          <StaggerItem className="group relative flex flex-col border border-white/10 bg-ink/30 p-8 transition-colors duration-500 hover:border-gold/40 lg:flex-row lg:items-center lg:justify-between lg:p-9">
            <div className="max-w-xs">
              <span className="eyebrow !text-bone/50">
                {limitedEdition.origin}
              </span>
              <h3 className="mt-2 font-serif text-[1.8rem] leading-tight text-bone">
                {limitedEdition.name}
              </h3>
              <p className="mt-4 font-sans text-[13px] font-300 leading-relaxed text-bone/60">
                {limitedEdition.blurb}
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-2.5 lg:mt-0 lg:min-w-[12rem] lg:pl-8">
              {limitedEdition.prices?.map((p) => (
                <li
                  key={p.skin}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span className="font-sans text-[12px] font-300 leading-snug text-bone/65">
                    {p.skin}
                  </span>
                  <span className="whitespace-nowrap font-serif text-[16px] text-gold-gradient">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="group relative flex flex-col justify-between overflow-hidden border border-gold/30 bg-graphite/40 p-8 transition-colors duration-500 hover:border-gold/55 lg:p-9">
            <img
              src="/generated/oneofone-showpiece.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] transition-opacity duration-700 group-hover:opacity-30"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite via-graphite/85 to-graphite/55" />
            <div className="relative">
              <span className="eyebrow !text-gold/70">{oneOfOne.origin}</span>
              <h3 className="mt-2 font-serif text-[1.8rem] leading-tight text-bone">
                {oneOfOne.name}
              </h3>
              <p className="mt-4 max-w-sm font-sans text-[13px] font-300 leading-relaxed text-bone/60">
                {oneOfOne.blurb}
              </p>
              <div className="mt-6 border-t border-white/8 pt-5">
                <span className="text-[10px] uppercase tracking-luxe text-smoke">
                  Star Commissions
                </span>
                <ul className="mt-3 flex flex-col gap-2">
                  {collaborations.map((c) => (
                    <li
                      key={c.name}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <span className="font-sans text-[12px] font-300 leading-snug text-bone/70">
                        {c.name}
                      </span>
                      <span className="whitespace-nowrap text-[10px] uppercase tracking-wide2 text-smoke">
                        {c.marque}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative mt-7 flex items-baseline gap-2">
              <span className="text-[11px] uppercase tracking-wide2 text-smoke">
                from
              </span>
              <span className="font-serif text-[2.6rem] leading-none text-gold-gradient">
                {oneOfOne.from}
              </span>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Accessories */}
        <Reveal
          delay={80}
          className="mt-6 border border-white/8 bg-coal/40 p-8 lg:p-9"
        >
          <span className="eyebrow !text-bone/50">Beyond the Key</span>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
            {accessories.map((a) => (
              <div
                key={a.name}
                className="flex items-baseline justify-between gap-4 border-b border-white/6 py-4"
              >
                <div>
                  <p className="font-sans text-[13px] text-bone/80">{a.name}</p>
                  {a.note && (
                    <p className="mt-0.5 font-sans text-[11px] font-300 leading-snug text-bone/45">
                      {a.note}
                    </p>
                  )}
                </div>
                <span className="whitespace-nowrap font-serif text-[16px] text-gold-gradient">
                  {a.price}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="font-sans text-[13px] font-300 tracking-wide text-bone/50">
            Made to order, booking required · a{" "}
            <span className="text-bone/80">rush service</span> is available for
            +30% · matched sets &amp; full interiors quoted on request.
          </p>
          <p className="max-w-md font-serif text-lg italic text-bone/60">
            No deposit is taken until you have approved your design and quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
