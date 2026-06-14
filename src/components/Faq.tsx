import { useState } from "react";
import { faqs } from "../data/products";
import { Reveal } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-site gap-14 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="eyebrow">The Journal</span>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04] text-bone">
            Questions,
            <br />
            <span className="italic text-gold-gradient">answered.</span>
          </h2>
          <p className="mt-6 max-w-xs font-sans text-[14px] font-300 leading-relaxed text-bone/55">
            Anything we have not covered, simply ask — the atelier replies
            personally to every message.
          </p>
        </Reveal>

        <div className="border-t border-white/8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 4) * 60}>
                <div className="border-b border-white/8">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className={`font-serif text-xl transition-colors duration-300 sm:text-2xl ${
                        isOpen ? "text-gold-gradient" : "text-bone group-hover:text-bone/80"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`relative grid h-8 w-8 flex-shrink-0 place-items-center border transition-all duration-500 ${
                        isOpen ? "rotate-45 border-gold text-gold" : "border-white/20 text-bone/60"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-silk ${
                      isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl font-sans text-[14px] font-300 leading-relaxed text-bone/60">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
