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
        theme:{
          darkpurple: '#160F29',
          cream: "#EDCBB1",
          pink: "#9684A1",
          noir: "#4C2E05",
          violet: "#48304D"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        sans:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
