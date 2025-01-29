import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkDesaturatedCyan: "hsl(167, 40%, 24%)",
        darkBlue : "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
      },
      fontFamily: {
        barlowReg: ["barlow-regular", "sans-serif"],
        barlowRBold: ["barlow-bold", "sans-serif"],
        barlowLight: ["barlow-light", "sans-serif"],
        frauncesReg: ["fraunces-regular", "sans-serif"],
        frauncesBold: ["fraunces-bold", "sans-serif"],
        frauncesLight: ["fraunces-light", "sans-serif"],
        frauncesSoftBold: ["fraunces-soft-bold", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
