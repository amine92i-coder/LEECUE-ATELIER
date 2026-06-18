import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

interface StageData {
  n: string;
  src: string;
  alt: string;
  /** object-position for the cover crop (e.g. to frame past a watermark). */
  pos?: string;
  /** Image opacity keyframes — input progress points → opacity. */
  opIn: number[];
  opOut: number[];
  /** [start, end] scroll window for this beat's slow zoom + tilt. */
  zoom: [number, number];
}

/** The text for each beat (eyebrow/line/sub) is localised — see `forge.beats`. */
interface BeatText {
  eyebrow: string;
  line: string;
  sub: string;
}

/**
 * The three beats of the film. Tonally sequenced — a gold crocodile hide,
 * the warm tan of the bench, then a finished cognac crocodile piece — so the
 * raw skin appears to *become* the object as you scroll. Copy lives in the
 * translation dictionary (`forge.beats`), keyed positionally to this array.
 */
const STAGES: StageData[] = [
  {
    n: "I",
    src: "/generated/texture.jpg",
    alt: "A rare crocodile hide, raw and unworked",
    opIn: [0, 0.3, 0.4],
    opOut: [1, 1, 0],
    zoom: [0, 0.4],
  },
  {
    n: "II",
    src: "/generated/atelier.jpg",
    alt: "A craftsman saddle-stitching a leather case by hand at the workbench",
    opIn: [0.3, 0.4, 0.62, 0.72],
    opOut: [0, 1, 1, 0],
    zoom: [0.3, 0.72],
  },
  {
    n: "III",
    src: "/products/audi-cognac-croc.jpg",
    alt: "The finished cognac crocodile key case, hand-stitched and complete",
    pos: "50% 30%",
    opIn: [0.64, 0.74, 1],
    opOut: [0, 1, 1],
    zoom: [0.64, 1],
  },
];

export default function Forge() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Reduced motion: no scroll-jacking — present the three beats statically.
  if (reduce) return <ForgeStatic />;

  return (
    <section
      id="forge"
      ref={ref}
      className="relative h-[300vh] bg-ink"
      aria-label="From hide to heirloom — how each piece is made"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Cross-fading, slowly-tilting image beats */}
        {STAGES.map((s, i) => (
          <Stage key={s.n} data={s} index={i} progress={scrollYProgress} />
        ))}

        {/* Legibility wash, top and bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/10 to-ink/95" />

        {/* Quiet inset frame */}
        <div className="pointer-events-none absolute inset-5 border border-white/10 sm:inset-8" />

        {/* Vertical section label, balancing the rail */}
        <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 sm:block lg:left-9">
          <span className="block -rotate-90 whitespace-nowrap text-[10px] uppercase tracking-luxe text-bone/40">
            {t("forge.label")}
          </span>
        </div>

        {/* Crossfading captions */}
        {STAGES.map((s, i) => (
          <Caption key={s.n} data={s} index={i} progress={scrollYProgress} />
        ))}

        {/* Scroll-progress rail */}
        <Rail progress={scrollYProgress} />
      </div>
    </section>
  );
}

function Stage({
  data,
  index,
  progress,
}: {
  data: StageData;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, data.opIn, data.opOut);
  // Slow Ken-Burns zoom; the middle (bench) beat sits a touch tighter.
  const scale = useTransform(progress, data.zoom, index === 1 ? [1.14, 1.03] : [1.17, 1.05]);
  // Subtle scroll-driven camera pitch for dimensional depth.
  const rotateX = useTransform(progress, data.zoom, [3.5, -3.5]);

  return (
    <motion.div className="absolute inset-0 will-change-[opacity]" style={{ opacity }}>
      <motion.img
        src={data.src}
        alt={data.alt}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover"
        style={{ scale, rotateX, transformPerspective: 1300, objectPosition: data.pos ?? "50% 50%" }}
      />
    </motion.div>
  );
}

function Caption({
  data,
  index,
  progress,
}: {
  data: StageData;
  index: number;
  progress: MotionValue<number>;
}) {
  const { t } = useTranslation();
  const txt = (t("forge.beats", { returnObjects: true }) as BeatText[])[index];
  const [a, b] = data.zoom;
  const span = b - a;
  // Text settles inside the beat, after the image arrives and before it leaves.
  const opacity = useTransform(
    progress,
    [a + span * 0.08, a + span * 0.22, b - span * 0.18, b - span * 0.04],
    [0, 1, 1, index === 2 ? 1 : 0],
  );
  const y = useTransform(progress, [a, b], [40, -24]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-8 bottom-[15vh] sm:inset-x-16 lg:inset-x-20"
    >
      <div className="flex items-center gap-4">
        <span className="font-serif text-sm text-gold">{data.n}</span>
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
function ForgeStatic() {
  const { t } = useTranslation();
  const beats = t("forge.beats", { returnObjects: true }) as BeatText[];
  return (
    <section id="forge" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t("forge.staticEyebrow")}</span>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.04] text-bone text-balance">
            {t("forge.staticTitleLead")}
            <span className="italic text-gold-gradient">
              {" "}
              {t("forge.staticTitleEmph")}
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/8 bg-white/5 sm:grid-cols-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} className="flex flex-col bg-coal">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: s.pos ?? "50% 50%" }}
                />
              </div>
              <div className="p-7">
                <span className="eyebrow !text-gold/90">
                  {s.n} — {beats[i].eyebrow}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-bone">
                  {beats[i].line}
                </h3>
                <p className="mt-2 font-sans text-[13px] font-300 leading-relaxed text-bone/60">
                  {beats[i].sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
