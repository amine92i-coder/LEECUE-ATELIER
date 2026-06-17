import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useSectionNav } from "../lib/useSectionNav";
import { EASE_SILK } from "./Reveal";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Bespoke", href: "#process" },
  { label: "Leathers", href: "#leathers" },
  { label: "Investment", href: "#pricing" },
  { label: "The Maker", href: "#maker" },
  { label: "Journal", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onSection = useSectionNav();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-gradient-to-r from-gold via-goldlight to-gold"
      />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_SILK, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-7"
        }`}
      >
        <nav className="mx-auto flex max-w-site items-center justify-between px-6 lg:px-10">
          <a
            href="/"
            onClick={(e) => onSection(e, "#top")}
            className="group flex items-center gap-3"
          >
            <span className="grid h-9 w-9 place-items-center border border-gold/40 text-gold font-serif text-xl leading-none transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
              L
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg tracking-[0.2em] text-bone">
                LEECUE
              </span>
              <span className="text-[9px] tracking-luxe text-smoke">ATELIER</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={`/${l.href}`}
                  onClick={(e) => onSection(e, l.href)}
                  className="group relative font-sans text-[12px] uppercase tracking-wide2 text-bone/75 transition-colors duration-300 hover:text-bone"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-silk group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="/#commission"
              onClick={(e) => onSection(e, "#commission")}
              className="hidden btn-gold !px-6 !py-3 sm:inline-flex"
            >
              <span>Commission a Piece</span>
            </a>
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span
                className={`h-px w-6 bg-bone transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-bone transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-bone transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-md transition-all duration-500 ease-silk lg:hidden ${
            open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {[...links, { label: "Commission a Piece", href: "#commission" }].map(
              (l) => (
                <li key={l.href}>
                  <a
                    href={`/${l.href}`}
                    onClick={(e) => {
                      onSection(e, l.href);
                      setOpen(false);
                    }}
                    className="block py-3 font-sans text-sm uppercase tracking-wide2 text-bone/80"
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </motion.header>
    </>
  );
}
