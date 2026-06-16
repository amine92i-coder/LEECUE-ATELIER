import { useState } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const pillars = [
  {
    title: "One Pair of Hands",
    body: "Every commission is cut, skived, saddle-stitched and burnished by a single artisan — never a production line.",
  },
  {
    title: "Hermès-Grade Hides",
    body: "French Sully goatskin, Italian Pomari and Bonaudo calf, HCP crocodile and Klein Karoo ostrich — the very tanneries behind the great maisons.",
  },
  {
    title: "Endlessly Yours",
    body: "Your skin, your colour, your stitch, your name, your hardware. Nothing about your piece is fixed but the quality.",
  },
];

export default function Manifesto() {
  const [texOk, setTexOk] = useState(true);

  return (
    <section className="relative overflow-hidden bg-coal py-28 lg:py-36">
      {texOk && (
        <img
          src="/generated/texture.jpg"
          alt=""
          aria-hidden
          onError={() => setTexOk(false)}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.10]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="eyebrow">The Atelier Belief</span>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(1.6rem,3.6vw,2.9rem)] font-400 leading-[1.25] text-bone">
            A key is the first thing you touch each morning and the last thing you
            set down at night. The object that commands a great car should feel
            <span className="italic text-gold-gradient"> every bit as considered </span>
            as the machine itself.
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="relative mx-auto mt-20 grid max-w-site gap-px overflow-hidden border-y border-white/5 px-0 md:grid-cols-3">
        {pillars.map((p, i) => (
          <StaggerItem
            key={p.title}
            className="bg-coal/60 px-8 py-12 text-center md:px-10"
          >
            <span className="font-serif text-5xl text-gold/30">0{i + 1}</span>
            <h3 className="mt-4 font-serif text-2xl text-bone">{p.title}</h3>
            <p className="mx-auto mt-4 max-w-xs font-sans text-[13px] font-300 leading-relaxed text-bone/55">
              {p.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
