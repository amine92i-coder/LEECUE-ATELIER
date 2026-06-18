import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

/** Scroll-scrubbed cinematic film: a Higgsfield-generated clip in which a sheet
 *  of crocodile leather lifts, wraps and stitches itself onto a car key. The
 *  video's playhead is driven by scroll position, so the transformation plays
 *  forward as you scroll down and rewinds as you scroll back up. */
const SRC = "/generated/film-wrap.mp4";
const POSTER = "/generated/film-wrap-poster.webp";
const FINAL = "/generated/film-wrap-final.webp";

interface Beat {
  n: string;
  /** Opacity keyframe windows across scroll progress: [fadeInStart, full, holdEnd, fadeOutEnd]. */
  at: [number, number, number, number];
  /** The last beat holds to the end rather than fading out. */
  last?: boolean;
}

/** Localised copy per beat (eyebrow/line/sub) — see `film.beats`, keyed positionally. */
interface BeatText {
  eyebrow: string;
  line: string;
  sub: string;
}

const BEATS: Beat[] = [
  {
    n: "I",
    at: [0.02, 0.12, 0.26, 0.34],
  },
  {
    n: "II",
    at: [0.4, 0.5, 0.62, 0.7],
  },
  {
    n: "III",
    at: [0.76, 0.86, 1, 1],
    last: true,
  },
];

export default function Film() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eased = useRef(0); // smoothed playhead we actually seek to (seconds)
  const lastSeek = useRef(-1); // last seeked time, to skip redundant seeks
  const loop = useRef(0); // rAF id for the easing loop

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Safari/iOS won't paint a *seeked* frame until the element has played once;
  // play-then-pause primes it so scrubbing renders from the very first scroll.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    const prime = () => {
      v.play()
        .then(() => v.pause())
        .catch(() => {});
    };
    if (v.readyState >= 1) prime();
    else v.addEventListener("loadedmetadata", prime, { once: true });
    return () => v.removeEventListener("loadedmetadata", prime);
  }, [reduce]);

  // Ease the video playhead toward the scroll position on a continuous rAF loop.
  // Reading scrollYProgress every frame (rather than seeking on each scroll
  // event) lets the playhead glide and gives the decoder room to keep up, so the
  // wrap reads as fluid motion instead of stepped seeks. This pairs with an
  // all-intra encode (every frame a keyframe) so each seek lands instantly —
  // which is what removes the lag toward the end of the clip.
  useEffect(() => {
    if (reduce) return;
    const tick = () => {
      const v = videoRef.current;
      const d = v?.duration;
      if (v && d && !Number.isNaN(d)) {
        const tgt = Math.min(d - 0.05, Math.max(0, scrollYProgress.get() * d));
        // Critically-damped glide toward the target (≈0.22 of the gap per frame).
        eased.current += (tgt - eased.current) * 0.22;
        // Re-seek only once we've moved enough to matter, to avoid redundant decodes.
        if (Math.abs(eased.current - lastSeek.current) > 0.01) {
          lastSeek.current = eased.current;
          v.currentTime = eased.current;
        }
      }
      loop.current = requestAnimationFrame(tick);
    };
    loop.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(loop.current);
  }, [reduce, scrollYProgress]);

  // Reduced motion: no scroll-jacking — present the piece and its story statically.
  if (reduce) return <FilmStatic />;

  return (
    <section
      id="film"
      ref={sectionRef}
      className="relative h-[340vh] bg-ink"
      aria-label="A film — a sheet of leather wrapping a car key, from hide to finished piece"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={SRC}
          poster={POSTER}
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Legibility wash, top and bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink/95" />

        {/* Quiet inset frame */}
        <div className="pointer-events-none absolute inset-5 border border-white/10 sm:inset-8" />

        {/* Vertical section label, balancing the rail */}
        <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 sm:block lg:left-9">
          <span className="block -rotate-90 whitespace-nowrap text-[10px] uppercase tracking-luxe text-bone/40">
            {t("film.label")}
          </span>
        </div>

        {/* Crossfading captions */}
        {BEATS.map((b, i) => (
          <Caption key={b.n} beat={b} index={i} progress={scrollYProgress} />
        ))}

        {/* Scroll cue, fades on first movement */}
        <ScrollCue progress={scrollYProgress} />

        {/* Scroll-progress rail */}
        <Rail progress={scrollYProgress} />
      </div>
    </section>
  );
}

function Caption({
  beat,
  index,
  progress,
}: {
  beat: Beat;
  index: number;
  progress: MotionValue<number>;
}) {
  const { t } = useTranslation();
  const txt = (t("film.beats", { returnObjects: true }) as BeatText[])[index];
  const [a, b, c, d] = beat.at;
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, beat.last ? 1 : 0]);
  const y = useTransform(progress, [a, d], [36, -22]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-8 bottom-[15vh] sm:inset-x-16 lg:inset-x-20"
    >
      <div className="flex items-center gap-4">
        <span className="font-serif text-sm text-gold">{beat.n}</span>
        <span className="h-px w-10 bg-gold/50" />
        <span className="eyebrow !text-gold/90">{txt.eyebrow}</span>
      </div>
      <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-bone text-balance">
        {txt.line}
      </h2>
      <p className="mt-4 max-w-md font-sans text-[14px] font-300 leading-relaxed text-bone/70">
        {txt.sub}
      </p>
    </motion.div>
  );
}

function ScrollCue({ progress }: { progress: MotionValue<number> }) {
  const { t } = useTranslation();
  const opacity = useTransform(progress, [0, 0.05], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-x-0 bottom-7 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-luxe text-bone/50">
        {t("film.scroll")}
      </span>
      <span className="h-8 w-px bg-gradient-to-b from-gold/70 to-transparent" />
    </motion.div>
  );
}

function Rail({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-9 sm:flex lg:right-11">
      {/* Track + gold fill that climbs with scroll */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/12" />
      <motion.div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-gold to-gold/30"
        style={{ scaleY: progress }}
      />
      {["I", "II", "III"].map((n) => (
        <span
          key={n}
          className="relative z-10 bg-ink px-1 py-1 font-serif text-xs tracking-[0.3em] text-bone/60"
        >
          {n}
        </span>
      ))}
    </div>
  );
}

/** Static, non-pinned fallback honouring prefers-reduced-motion. */
function FilmStatic() {
  const { t } = useTranslation();
  const beats = t("film.beats", { returnObjects: true }) as BeatText[];
  return (
    <section id="film" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t("film.staticEyebrow")}</span>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.04] text-bone text-balance">
            {t("film.staticTitleLead")}
            <span className="italic text-gold-gradient">
              {" "}
              {t("film.staticTitleEmph")}
            </span>
          </h2>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden border border-white/8" delay={80}>
          <img
            src={FINAL}
            alt="The finished crocodile leather car-key case, hand-stitched and complete"
            loading="lazy"
            className="aspect-[16/9] h-full w-full object-cover"
          />
        </Reveal>

        <div className="mt-px grid gap-px overflow-hidden border-x border-b border-white/8 bg-white/5 sm:grid-cols-3">
          {BEATS.map((b, i) => (
            <Reveal key={b.n} className="bg-coal p-7">
              <span className="eyebrow !text-gold/90">
                {b.n} — {beats[i].eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-bone">
                {beats[i].line}
              </h3>
              <p className="mt-2 font-sans text-[13px] font-300 leading-relaxed text-bone/60">
                {beats[i].sub}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
