/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        coal: "#101013",
        charcoal: "#16161b",
        graphite: "#1d1d23",
        smoke: "#9a958c",
        bone: "#f3ede2",
        parchment: "#cabfa9",
        gold: "#c9a14e",
        goldlight: "#e6cf94",
        oxblood: "#5e1b1b",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Jost'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
        wide2: "0.18em",
      },
      maxWidth: {
        site: "1280px",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-2%, 1%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        grain: "grain 8s steps(6) infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
