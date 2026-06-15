import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { type ElementType, type ReactNode } from "react";

/** Signature "silk" easing used across the atelier. */
export const EASE_SILK = [0.22, 1, 0.36, 1] as const;

/** Shared viewport config — animate once, a touch before the element is centred. */
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

type Tag = keyof typeof motion;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds (kept for API compatibility with the previous Reveal). */
  delay?: number;
  as?: ElementType;
  /** Vertical travel distance in px. */
  y?: number;
  duration?: number;
  style?: HTMLMotionProps<"div">["style"];
}

/**
 * Single-element scroll reveal. Fades and rises into view once, on scroll.
 * Honours prefers-reduced-motion by snapping straight to the resting state.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  y = 32,
  duration = 0.95,
  style,
}: RevealProps) {
  const reduce = useReducedMotion();
  const M = motion[(as as Tag) ?? "div"] as ElementType;
  return (
    <M
      className={className}
      style={style}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: reduce ? 0.4 : duration,
        ease: EASE_SILK,
        delay: delay / 1000,
      }}
    >
      {children}
    </M>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Seconds between each child's entrance. */
  stagger?: number;
  /** Seconds before the first child begins. */
  delayChildren?: number;
}

/**
 * Container that orchestrates a staggered entrance for its <StaggerItem> children.
 */
export function StaggerGroup({
  children,
  className = "",
  as = "div",
  stagger = 0.1,
  delayChildren = 0.05,
}: StaggerGroupProps) {
  const reduce = useReducedMotion();
  const M = motion[(as as Tag) ?? "div"] as ElementType;
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };
  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </M>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  y?: number;
  duration?: number;
  style?: HTMLMotionProps<"div">["style"];
}

/** A single child within a <StaggerGroup>. */
export function StaggerItem({
  children,
  className = "",
  as = "div",
  y = 30,
  duration = 0.85,
  style,
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const M = motion[(as as Tag) ?? "div"] as ElementType;
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.4 : duration, ease: EASE_SILK },
    },
  };
  return (
    <M className={className} variants={variants} style={style}>
      {children}
    </M>
  );
}
