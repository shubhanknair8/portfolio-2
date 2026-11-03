import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EA",
        hero: "#E9E4D8",
        ink: "#1C1B19",
        gray: "#625D55",
        line: "#D9D3C5",
        todo: "#9E4520",
      },
      fontFamily: {
        display: ["\"Helvetica Neue\"", "Helvetica", "Arial", "sans-serif"],
        sans: ["\"Helvetica Neue\"", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: { page: "75rem" },
    },
  },
  plugins: [],
};
export default config;
