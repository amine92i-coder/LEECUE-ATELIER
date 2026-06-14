import { useState } from "react";

export default function Hero() {
  const [heroOk, setHeroOk] = useState(true);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden carbon vignette"
    >
      {/* Fallback real photo */}
      <img
        src="/products/ferrari-rosso-croc.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      {/* Generated cinematic hero */}
      {heroOk && (
        <img
          src="/generated/hero.jpg"
          alt="A hand-stitched crocodile leather car key case on carbon fibre"
          onError={() => setHeroOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-site px-6 lg:px-10">
        <div className="max-w-2xl">
          <div
            className="reveal is-visible mb-7 flex items-center gap-4"
            style={{ transitionDelay: "150ms" }}
          >
            <span className="h-px w-12 bg-gold/70" />
            <span className="eyebrow">Hand-Stitched · Made to Order · Worldwide</span>
          </div>

          <h1 className="font-serif text-[clamp(2.9rem,8vw,6.2rem)] font-500 leading-[0.95] text-bone text-shadow-luxe">
            <span className="block reveal is-visible" style={{ transitionDelay: "250ms" }}>
              Bespoke leather,
            </span>
            <span
              className="block italic text-gold-gradient reveal is-visible"
              style={{ transitionDelay: "420ms" }}
            >
              worthy of the marque.
            </span>
          </h1>

          <p
            className="reveal is-visible mt-8 max-w-xl font-sans text-[15px] font-300 leading-relaxed text-bone/70"
            style={{ transitionDelay: "600ms" }}
          >
            Hand-stitched key cases, phone cases and accessories in Himalayan
            crocodile, python and fine French calf — patterned to your exact key,
            personalised to your taste, and built to order by a single artisan.
          </p>

          <div
            className="reveal is-visible mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ transitionDelay: "760ms" }}
          >
            <a href="#commission" className="btn-solid">
              <span>Commission a Piece</span>
            </a>
            <a href="#collection" className="btn-gold">
              <span>Explore the Collection</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-[10px] uppercase tracking-luxe text-smoke">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-floaty bg-gold" />
        </span>
      </div>

      {/* Vertical side label */}
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-[10px] uppercase tracking-luxe text-smoke">
          LEECUE — Maison du Cuir
        </span>
      </div>
    </section>
  );
}
