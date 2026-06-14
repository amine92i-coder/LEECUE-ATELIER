import { useState } from "react";
import { processSteps } from "../data/products";
import { Reveal } from "./Reveal";

export default function Process() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="process" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-site gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Image */}
        <Reveal className="relative lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
            <img
              src={imgOk ? "/generated/cockpit.jpg" : "/products/rolls-royce-tiffany-croc.jpg"}
              alt="A bespoke leather key case resting in a luxury car cockpit"
              onError={() => setImgOk(false)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="eyebrow !text-bone/60">Made to Order</span>
              <p className="mt-2 font-serif text-2xl italic text-bone">
                Two to four weeks, from bench to your door.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 border-r border-t border-gold/40" />
          <div className="pointer-events-none absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-gold/40" />
        </Reveal>

        {/* Steps */}
        <div>
          <Reveal>
            <span className="eyebrow">The Bespoke Process</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] text-bone">
              From your key
              <br />
              <span className="italic text-gold-gradient">to your hands.</span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-[14px] font-300 leading-relaxed text-bone/60">
              Anything can be customised — and the process could not be simpler.
              Send us a photo of your car and your key, and we take it from there.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col">
            {processSteps.map((s, i) => (
              <Reveal key={s.index} delay={i * 80}>
                <div className="group flex gap-7 border-t border-white/8 py-8 transition-colors duration-500 hover:border-gold/30">
                  <span className="font-serif text-3xl text-gold/50 transition-colors duration-500 group-hover:text-gold">
                    {s.index}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-bone">{s.title}</h3>
                    <p className="mt-2 max-w-md font-sans text-[14px] font-300 leading-relaxed text-bone/60">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <a href="#commission" className="btn-solid mt-10">
              <span>Begin Your Commission</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
