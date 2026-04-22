import type { Config } from "tailwindcss";

const palette = {
  brand: {
    400: "#FBAF85",
    500: "#D87D4A",
  },
  neutral: {
    50: "#FAFAFA",
    100: "#F1F1F1",
    900: "#101010",
  },
  white: "#FFFFFF",
  black: "#000000",
} as const;

export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./composables/**/*.{js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
