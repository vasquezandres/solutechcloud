import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#e11d48", 600: "#e11d48" } },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
} satisfies Config
