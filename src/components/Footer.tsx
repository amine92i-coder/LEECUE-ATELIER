import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";
import { ArrowRight, Spark } from "./Icons";
import { useSectionNav } from "../lib/useSectionNav";
import { company } from "../data/legal";

const legalLinks = [
  { key: "impressum", to: "/impressum" },
  { key: "datenschutz", to: "/datenschutz" },
  { key: "agb", to: "/agb" },
  { key: "widerruf", to: "/widerruf" },
] as const;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const onSection = useSectionNav();
  const { t } = useTranslation();

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setDone(true);
  };

  return (
    <footer className="relative carbon">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* CTA band */}
      <Reveal className="mx-auto max-w-site px-6 py-20 text-center lg:px-10">
        <span className="eyebrow">{t("footer.ctaEyebrow")}</span>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.06] text-bone text-balance">
          {t("footer.ctaTitleLead")}{" "}
          <span className="italic text-gold-gradient">
            {t("footer.ctaTitleEmph")}
          </span>
        </h2>
        <a
          href="/#commission"
          onClick={(e) => onSection(e, "#commission")}
          className="btn-solid mt-9"
        >
          <span>{t("footer.ctaButton")}</span>
        </a>
      </Reveal>

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
            {t("footer.tagline")}
          </p>
          <div className="mt-5 space-y-1.5 font-sans text-[12px] font-300 text-bone/45">
            <p>No. 7 Baocheng Road, Jiang'an District, Wuhan</p>
            <p>
              WeChat <span className="text-bone/70">LEECUE</span> · Douyin{" "}
              <span className="text-bone/70">勤艺笃造</span> · 小红书{" "}
              <span className="text-bone/70">勤艺笃造</span>
            </p>
          </div>
        </div>

        <FooterCol
          title={t("footer.exploreTitle")}
          links={[
            [t("footer.explore.collection"), "#collection"],
            [t("footer.explore.process"), "#process"],
            [t("footer.explore.leathers"), "#leathers"],
            [t("footer.explore.pricing"), "#pricing"],
            [t("footer.explore.maker"), "#maker"],
          ]}
        />
        <FooterCol
          title={t("footer.atelierTitle")}
          links={[
            [t("footer.atelier.commission"), "#commission"],
            [t("footer.atelier.questions"), "#faq"],
            [t("footer.atelier.instagram"), "https://instagram.com/leecueleather"],
            [t("footer.atelier.email"), "mailto:lee.q.cool@gmail.com"],
          ]}
        />

        <div>
          <h4 className="text-[10px] uppercase tracking-luxe text-smoke">
            {t("footer.listTitle")}
          </h4>
          <p className="mt-4 font-sans text-[13px] font-300 leading-relaxed text-bone/50">
            {t("footer.listCopy")}
          </p>
          {done ? (
            <p className="mt-4 flex items-center gap-2 font-serif text-lg italic text-gold-gradient">
              {t("footer.subscribed")}
              <Spark className="h-3.5 w-3.5 text-gold" />
            </p>
          ) : (
            <form onSubmit={subscribe} className="mt-4 flex border border-white/12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.emailPlaceholder")}
                className="w-full bg-transparent px-4 py-3 font-sans text-[13px] text-bone placeholder:text-smoke/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid place-items-center px-5 text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-site px-6 py-7 lg:px-10">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:justify-start">
            {legalLinks.map(({ key, to }) => (
              <Link
                key={to}
                to={to}
                className="font-sans text-[11px] uppercase tracking-wide2 text-bone/55 transition-colors duration-300 hover:text-gold"
              >
                {t(`footer.legal.${key}`)}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-5 text-center sm:flex-row sm:text-left">
            <span className="text-[11px] tracking-wide2 text-smoke">
              {t("footer.copyright", {
                year: new Date().getFullYear(),
                name: company.legalName,
              })}
            </span>
            <span className="text-[11px] tracking-wide2 text-smoke">
              {t("footer.madeline")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  const onSection = useSectionNav();

  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-luxe text-smoke">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => {
          const cls =
            "font-sans text-[13px] text-bone/60 transition-colors duration-300 hover:text-gold";

          let node;
          if (href.startsWith("http") || href.startsWith("mailto:")) {
            const external = href.startsWith("http");
            node = (
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={cls}
              >
                {label}
              </a>
            );
          } else if (href.startsWith("#")) {
            node = (
              <a
                href={`/${href}`}
                onClick={(e) => onSection(e, href)}
                className={cls}
              >
                {label}
              </a>
            );
          } else {
            node = (
              <Link to={href} className={cls}>
                {label}
              </Link>
            );
          }

          return <li key={href}>{node}</li>;
        })}
      </ul>
    </div>
  );
}
