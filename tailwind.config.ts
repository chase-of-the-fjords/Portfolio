import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red-vivid": {
          50: "#FFE3E3",
          100: "#FFBDBD",
          200: "#FF9B9B",
          300: "#F86A6A",
          400: "#EF4E4E",
          500: "#E12D39",
          600: "#CF1124",
          700: "#AB091E",
          800: "#8A041A",
          900: "#610316",
        },
        yellow: {
          50: "#FFFAEB",
          100: "#FCEFC7",
          200: "#F8E3A3",
          300: "#F9DA8B",
          400: "#F7D070",
          500: "#E9B949",
          600: "#C99A2E",
          700: "#A27C1A",
          800: "#7C5E10",
          900: "#513C06",
        },
        "cool-grey": {
          50: "#F5F7FA",
          100: "#E4E7EB",
          200: "#CBD2D9",
          300: "#9AA5B1",
          400: "#7B8794",
          500: "#616E7C",
          600: "#52606D",
          700: "#3E4C59",
          800: "#323F4B",
          900: "#1F2933",
        },
      },
      boxShadow: {
        "inner-xl": "inset 0 4px 8px 0 rgb(0 0 0 / 0.40);",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        inter: ["var(--font-inter)"],
        "source-serif": ["var(--font-source-serif)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
