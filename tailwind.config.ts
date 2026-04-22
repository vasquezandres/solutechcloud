import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#ff1748", 600: "#ff1748" } },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
} satisfies Config
