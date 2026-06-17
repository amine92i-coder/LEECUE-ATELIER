import { useState } from "react";
import { leathers, leatherColours } from "../data/products";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const swatches: Record<string, string> = {
  "Sully Goatskin": "linear-gradient(135deg,#e7d4a6,#c79a52 55%,#6e5026)",
  "Pomari Calfskin": "linear-gradient(135deg,#c98a4e,#8a5226 55%,#3a2410)",
  "Bonaudo Suede Calf": "linear-gradient(135deg,#9c9182,#665b4e 55%,#2c241c)",
  "Bonaudo Deerskin": "linear-gradient(135deg,#dcc7a2,#a8865c 55%,#5c4128)",
  "HCP Lizard": "linear-gradient(135deg,#4f7f6b,#1d3a33 45%,#86924c 80%,#243b34)",
  "ILW Python":
    "linear-gradient(135deg,#5a6b6e,#2a2f33 40%,#8a7f6a 70%,#3b3340)",
  "HCP Crocodile": "linear-gradient(135deg,#3a2420,#120b0a 60%,#5e1b1b)",
  "Klein Karoo Ostrich": "linear-gradient(135deg,#c8a877,#8a6a40 60%,#4a3826)",
};

export default function Materials() {
  const [colourImgOk, setColourImgOk] = useState(true);

  return (
    <section id="leathers" className="relative carbon py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      <div className="relative mx-auto max-w-site px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Skin Library</span>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.04] text-bone">
            Eight leathers.
            <span className="italic text-gold-gradient"> Infinite character.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-[14px] font-300 leading-relaxed text-bone/60">
            We work only with the European houses that supply the great maisons
            — the same tanneries behind Hermès, Louis Vuitton, Gucci and Celine.
            Choose a skin below, or ask: if it can be tanned, we can very likely
            source it.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/8 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {leathers.map((l, i) => (
            <StaggerItem
              key={l.name}
              className="group relative bg-coal p-7 transition-colors duration-500 hover:bg-graphite"
            >
              <div className="flex items-center justify-between">
                <span
                  className="h-12 w-12 rounded-full border border-white/15 shadow-inner"
                  style={{ background: swatches[l.name] }}
                />
                <span className="font-serif text-4xl text-white/8 transition-colors duration-500 group-hover:text-gold/20">
                  0{i + 1}
                </span>
              </div>
              <span className="eyebrow mt-7 block">{l.origin}</span>
              <h3 className="mt-2 font-serif text-2xl text-bone">{l.name}</h3>
              <p className="mt-3 font-sans text-[13px] font-300 leading-relaxed text-bone/55">
                {l.blurb}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* About colour — the standing palette */}
        <Reveal className="mt-24 lg:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">About Colour</span>
            <h3 className="mt-5 font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.08] text-bone">
              One skin,
              <span className="italic text-gold-gradient"> a hundred colours.</span>
            </h3>
            <p className="mx-auto mt-5 max-w-md font-sans text-[14px] font-300 leading-relaxed text-bone/60">
              A standing palette of over one hundred dyes — from Sakura Rose and
              Tiffany to Bordeaux and Noir — each one matched, mixed or
              paint-matched to your car.
            </p>
          </div>

          {colourImgOk && (
            <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden border border-white/8">
              <img
                src="/generated/leather-colours.jpg"
                alt="A fanned spectrum of exotic leather colour swatches"
                onError={() => setColourImgOk(false)}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-transparent" />
            </div>
          )}

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-7">
            {leatherColours.map((c) => (
              <div
                key={c.name}
                className="group flex w-[4.5rem] flex-col items-center gap-2.5"
              >
                <span
                  className="h-11 w-11 rounded-full border border-white/15 shadow-inner transition-transform duration-500 ease-silk group-hover:scale-110"
                  style={{ background: c.hex }}
                />
                <span className="text-center font-sans text-[10px] font-300 leading-tight tracking-wide text-bone/55 transition-colors duration-300 group-hover:text-bone/85">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
