import { leathers } from "../data/products";
import { Reveal } from "./Reveal";

const swatches: Record<string, string> = {
  "Himalayan Crocodile":
    "linear-gradient(135deg,#f3ede2,#d8cdbb 45%,#8a8174)",
  "Glazed Alligator": "linear-gradient(135deg,#3a2420,#120b0a 60%,#5e1b1b)",
  "Natural Python":
    "linear-gradient(135deg,#5a6b6e,#2a2f33 40%,#8a7f6a 70%,#3b3340)",
  "Ostrich & Exotics": "linear-gradient(135deg,#c8a877,#8a6a40 60%,#4a3826)",
  "Box & French Calf": "linear-gradient(135deg,#e6cf94,#c9a14e 55%,#6e5526)",
  "Hair-On Hide": "linear-gradient(135deg,#efe9df,#7a5c44 55%,#241a14)",
};

export default function Materials() {
  return (
    <section id="leathers" className="relative carbon py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      <div className="relative mx-auto max-w-site px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Skin Library</span>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.04] text-bone">
            Six leathers.
            <span className="italic text-gold-gradient"> Infinite character.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-[14px] font-300 leading-relaxed text-bone/60">
            We keep an ever-changing cellar of fine and exotic hides. Choose a
            skin below, or ask — if it can be tanned, we can very likely source it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/8 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {leathers.map((l, i) => (
            <Reveal
              key={l.name}
              delay={(i % 3) * 90}
              className="group relative bg-coal p-8 transition-colors duration-500 hover:bg-graphite"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
