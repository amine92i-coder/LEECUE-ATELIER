import { useTranslation } from "react-i18next";
import { jointCreation } from "../data/products";
import { Reveal } from "./Reveal";
import { Spark } from "./Icons";

export default function JointCreations() {
  const { t } = useTranslation();
  const pieces = t("joint.pieces", { returnObjects: true }) as {
    name: string;
    note: string;
  }[];

  return (
    <section id="joint-creations" className="relative bg-ink py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Story */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow">{t("joint.eyebrowLead")} · 联名创作</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] text-bone">
              {t("joint.title")}
              <br />
              <span className="italic text-gold-gradient">
                {t("joint.emphasis")}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 max-w-md font-sans text-[15px] font-300 leading-relaxed text-bone/65">
              {t("joint.body")}
            </p>
            <div className="mt-7 inline-flex items-center gap-3 border border-gold/30 bg-graphite/40 px-4 py-2.5">
              <Spark className="h-3.5 w-3.5 flex-shrink-0 text-gold" />
              <span className="font-sans text-[11px] uppercase tracking-wide2 text-bone/70">
                {t("joint.certificationLead")} · 国家级非物质文化遗产
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-9 flex flex-col">
              {jointCreation.pieces.map((p, i) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 border-t border-white/8 py-4"
                >
                  <div>
                    <p className="font-sans text-[14px] text-bone/85">
                      {pieces[i].name}
                    </p>
                    {pieces[i].note && (
                      <p className="mt-0.5 font-sans text-[11px] font-300 leading-snug text-bone/45">
                        {pieces[i].note}
                      </p>
                    )}
                  </div>
                  <span className="whitespace-nowrap font-serif text-[18px] text-gold-gradient">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Imagery */}
        <Reveal className="relative order-1 lg:order-2">
          <div
            className="relative aspect-[4/5] overflow-hidden border border-white/8"
            style={{
              background:
                "linear-gradient(145deg,#5e1b1b,#1a0a0a 58%,#3a0f0f)",
            }}
          >
            <img
              src="/generated/joint-creations.jpg"
              alt="A traditional Chinese lacquer amulet beside a co-branded lacquer car emblem"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 border-r border-t border-gold/40" />
        </Reveal>
      </div>
    </section>
  );
}
