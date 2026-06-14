import { useState, type FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setDone(true);
  };

  return (
    <footer className="relative carbon">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* CTA band */}
      <div className="mx-auto max-w-site px-6 py-20 text-center lg:px-10">
        <span className="eyebrow">Your car deserves it</span>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.06] text-bone">
          Let's dress your key in something
          <span className="italic text-gold-gradient"> unforgettable.</span>
        </h2>
        <a href="#commission" className="btn-solid mt-9">
          <span>Commission a Piece</span>
        </a>
      </div>

      <div className="hairline mx-auto max-w-site" />

      {/* Main footer */}
      <div className="mx-auto grid max-w-site gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-gold/40 font-serif text-xl text-gold">
              L
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg tracking-[0.2em] text-bone">LEECUE</span>
              <span className="text-[9px] tracking-luxe text-smoke">ATELIER</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs font-sans text-[13px] font-300 leading-relaxed text-bone/50">
            Bespoke hand-stitched leather for the world's finest automobiles.
            Made to order, one piece at a time.
          </p>
        </div>

        <FooterCol
          title="Explore"
          links={[
            ["Collection", "#collection"],
            ["Bespoke Process", "#process"],
            ["Leathers", "#leathers"],
            ["The Maker", "#maker"],
          ]}
        />
        <FooterCol
          title="Atelier"
          links={[
            ["Commission", "#commission"],
            ["Questions", "#faq"],
            ["WhatsApp", "#"],
            ["Instagram", "#"],
          ]}
        />

        <div>
          <h4 className="text-[10px] uppercase tracking-luxe text-smoke">The List</h4>
          <p className="mt-4 font-sans text-[13px] font-300 leading-relaxed text-bone/50">
            New skins, rare hides and atelier stories — occasionally, never often.
          </p>
          {done ? (
            <p className="mt-4 font-serif text-lg italic text-gold-gradient">
              Welcome to the list. ✦
            </p>
          ) : (
            <form onSubmit={subscribe} className="mt-4 flex border border-white/12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 font-sans text-[13px] text-bone placeholder:text-smoke/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-5 text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-3 px-6 py-7 text-center sm:flex-row sm:text-left lg:px-10">
          <span className="text-[11px] tracking-wide2 text-smoke">
            © {new Date().getFullYear()} LEECUE ATELIER — All rights reserved.
          </span>
          <span className="text-[11px] tracking-wide2 text-smoke">
            Handmade · Genuine Leather · Worldwide Shipping
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-luxe text-smoke">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="font-sans text-[13px] text-bone/60 transition-colors duration-300 hover:text-gold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
