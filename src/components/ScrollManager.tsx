import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Keeps scroll position sensible across client-side navigation:
 *  - navigating to a new page (no hash) jumps to the top
 *  - navigating to "/#section" smoothly scrolls to that section once it mounts
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hash) {
      // Wait a tick so the target section has mounted/painted.
      const id = hash.replace("#", "");
      let tries = 0;
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
            block: "start",
          });
        } else if (tries++ < 10) {
          requestAnimationFrame(scrollToTarget);
        }
      };
      requestAnimationFrame(scrollToTarget);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "auto" });
  }, [pathname, hash]);

  return null;
}
