import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Shared icon set for the atelier.
 * Stroke icons sit on a 24×24 grid with a hairline 1.5 stroke and inherit
 * their colour from `currentColor`, so a single `text-gold` / `text-bone`
 * class controls them. Sizing is supplied by the caller via `className`
 * (e.g. `h-4 w-4`). All are decorative and marked `aria-hidden`.
 */
function Icon({ strokeWidth = 1.5, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Confirmation tick — used in pricing features, reassurance and success states. */
export function Check(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4.5 12.75 6 6 9-13.5" />
    </Icon>
  );
}

/** Forward chevron-arrow — newsletter submit, inline links. */
export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14m0 0-6-6m6 6-6 6" />
    </Icon>
  );
}

/** Dismiss cross — remove an uploaded reference photo. */
export function Close(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6 18 18M18 6 6 18" />
    </Icon>
  );
}

/** Upload tray with rising arrow — the photo drop-zone. */
export function Upload(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5" />
      <path d="M16.5 7.5 12 3 7.5 7.5M12 3v13.5" />
    </Icon>
  );
}

/**
 * Four-point jewel sparkle — a purely decorative flourish.
 * Filled (not stroked) so it reads as a solid gold accent at small sizes.
 */
export function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2c.8 6 4 9.2 10 10-6 .8-9.2 4-10 10-.8-6-4-9.2-10-10 6-.8 9.2-4 10-10Z" />
    </svg>
  );
}
