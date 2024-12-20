import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darksilver: "var(--darksilver)",
        bluedrawer: "var(--bluedrawer)",
        grayclean: "var(--grayclean)",
        vividskyblue: "var(--vividskyblue)",
        pictonblue: "var(--pictonblue)",
        lightbluegray: "var(--lightbluegray)",
        darkblue: "var(--darkblue)",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
