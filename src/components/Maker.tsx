import { useState } from "react";
import { Reveal } from "./Reveal";

export default function Maker() {
  const [atelierOk, setAtelierOk] = useState(true);

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
            <span className="eyebrow">Meet the Maker</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] text-bone">
              One bench. One craftsman.
              <br />
              <span className="italic text-gold-gradient">Every single piece.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 space-y-5 font-sans text-[15px] font-300 leading-relaxed text-bone/65">
              <p>
                LEECUE began at a single workbench, with a craftsman who could not
                find a key case worthy of the cars he loved — so he made his own.
                Word travelled. Friends asked. Then strangers.
              </p>
              <p>
                Today, that same pair of hands still cuts, skives, saddle-stitches
                and burnishes every commission that leaves the atelier. There are
                no machines here pretending to be people — only leather, waxed
                linen thread, patience, and a refusal to ship anything short of
                perfect.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex items-center gap-5">
              <div className="hairline w-16" />
              <span className="font-serif text-2xl italic text-gold-gradient">
                LEECUE Atelier
              </span>
            </div>
          </Reveal>

          <Reveal delay={260} className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["2–4", "Weeks per piece"],
              ["20+", "Marques crafted"],
              ["1", "Artisan, start to finish"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/30 pl-4">
                <div className="font-serif text-3xl text-bone">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wide2 text-smoke">
                  {l}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
