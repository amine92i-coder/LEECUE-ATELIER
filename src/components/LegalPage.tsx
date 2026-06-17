import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "./Icons";
import { legalLastUpdated } from "../data/legal";

/** Shared prose styling for all legal pages (no Tailwind typography plugin needed). */
const prose = [
  "font-sans text-[14px] font-300 leading-relaxed text-bone/70",
  "[&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:font-serif [&_h2]:text-[1.6rem] [&_h2]:leading-tight [&_h2]:text-bone",
  "[&_h2]:scroll-mt-28",
  "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-sans [&_h3]:text-[11px] [&_h3]:uppercase [&_h3]:tracking-wide2 [&_h3]:text-gold",
  "[&_p]:mt-4 [&_p]:max-w-2xl",
  "[&_ul]:mt-4 [&_ul]:max-w-2xl [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2",
  "[&_li]:relative [&_li]:pl-5",
  "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em] [&_li]:before:h-1 [&_li]:before:w-1 [&_li]:before:bg-gold/60 [&_li]:before:content-['']",
  "[&_a]:text-gold [&_a]:underline [&_a]:decoration-gold/40 [&_a]:underline-offset-2 hover:[&_a]:decoration-gold",
  "[&_strong]:font-400 [&_strong]:text-bone",
  "[&_address]:not-italic [&_address]:mt-3 [&_address]:leading-relaxed [&_address]:text-bone/80",
  "[&_table]:mt-5 [&_table]:w-full [&_table]:max-w-2xl [&_table]:border-collapse",
  "[&_td]:border-b [&_td]:border-white/8 [&_td]:py-2.5 [&_td]:pr-6 [&_td]:align-top",
  "[&_.callout]:mt-6 [&_.callout]:max-w-2xl [&_.callout]:border-l-2 [&_.callout]:border-gold/50 [&_.callout]:bg-graphite/40 [&_.callout]:px-5 [&_.callout]:py-4 [&_.callout]:text-bone/80",
].join(" ");

interface LegalPageProps {
  /** Tab/title, e.g. "Impressum" */
  docTitle: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}

export default function LegalPage({
  docTitle,
  eyebrow,
  title,
  intro,
  children,
}: LegalPageProps) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${docTitle} · LEECUE ATELIER`;
    return () => {
      document.title = prev;
    };
  }, [docTitle]);

  return (
    <main className="relative min-h-screen bg-coal pb-28 pt-36 lg:pt-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-wide2 text-bone/50 transition-colors hover:text-gold"
        >
          <ArrowRight className="h-3.5 w-3.5 -scale-x-100" />
          <span>Zurück zur Startseite · Back to home</span>
        </Link>

        <header className="mt-8 border-b border-white/8 pb-9">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-bone">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl font-sans text-[14px] font-300 leading-relaxed text-bone/60">
              {intro}
            </p>
          )}
          <p className="mt-5 font-sans text-[11px] uppercase tracking-wide2 text-smoke">
            Stand · Last updated: {legalLastUpdated}
          </p>
        </header>

        <div className={`mt-10 ${prose}`}>{children}</div>
      </div>
    </main>
  );
}
