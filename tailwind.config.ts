import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        bg: { DEFAULT: "#0A0A0F", 2: "#0E0E14", 3: "#12131A" },
        surface: { DEFAULT: "#16171F", 2: "#1A1B24" },
        accent: { DEFAULT: "#1E3A5F", hover: "#2A4F7F" },
        gold: { DEFAULT: "#B8943E" },
      },
    },
  },
  plugins: [],
};
export default config;
