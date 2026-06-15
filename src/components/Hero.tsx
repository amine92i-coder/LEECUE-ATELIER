import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { EASE_SILK } from "./Reveal";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_SILK } },
};

const line: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE_SILK } },
};

export default function Hero() {
  const [heroOk, setHeroOk] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden carbon vignette"
    >
      {/* Parallax image layer */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
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
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-site px-6 lg:px-10"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-4">
            <motion.span
              variants={line}
              style={{ originX: 0 }}
              className="h-px w-12 bg-gold/70"
            />
            <span className="eyebrow">
              Hand-Stitched · Made to Order · Worldwide
            </span>
          </motion.div>

          <h1 className="font-serif text-[clamp(2.9rem,8vw,6.4rem)] font-500 leading-[0.95] text-bone text-shadow-luxe text-balance">
            <motion.span variants={item} className="block">
              Bespoke leather,
            </motion.span>
            <motion.span
              variants={item}
              className="block italic text-gold-gradient"
            >
              worthy of the marque.
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl font-sans text-[15px] font-300 leading-relaxed text-bone/70"
          >
            Hand-stitched key cases, phone cases and accessories in Himalayan
            crocodile, python and fine French calf — patterned to your exact key,
            personalised to your taste, and built to order by a single artisan.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#commission" className="btn-solid">
              <span>Commission a Piece</span>
            </a>
            <a href="#collection" className="btn-gold">
              <span>Explore the Collection</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: EASE_SILK }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe text-smoke">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-floaty bg-gold" />
        </span>
      </motion.div>

      {/* Vertical side label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2, ease: EASE_SILK }}
        className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 lg:block"
      >
        <span className="text-[10px] uppercase tracking-luxe text-smoke">
          LEECUE — Maison du Cuir
        </span>
      </motion.div>
    </section>
  );
}
