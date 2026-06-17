import { useCallback } from "react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Returns a click handler for in-page section links (e.g. "#commission").
 * On the home page it smooth-scrolls to the section; from any other route it
 * navigates home first and lets <ScrollManager/> finish the scroll.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      const id = href.replace(/^.*#/, "");
      const isTop = id === "" || id === "top";
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (pathname === "/") {
        e.preventDefault();
        if (isTop) {
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
          history.replaceState(null, "", "/");
        } else {
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          history.replaceState(null, "", `#${id}`);
        }
      } else {
        e.preventDefault();
        navigate(isTop ? "/" : `/#${id}`);
      }
    },
    [navigate, pathname]
  );
}
