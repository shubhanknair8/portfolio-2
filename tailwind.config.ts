import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFA",
        hero: "#EBEBEB",
        ink: "#050505",
        gray: "#808080",
        line: "#DBDBDB",
        todo: "#B4532A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "75rem" },
    },
  },
  plugins: [],
};
export default config;
