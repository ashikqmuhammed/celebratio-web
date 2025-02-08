import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f3f4f6",
          text: "#111827",
          primary: "#2563eb",
          secondary: "#d1d5db",
          border: "#e5e7eb",
          card: "#ffffff",
        },
        dark: {
          background: "#111827",
          text: "#f3f4f6",
          primary: "#60a5fa",
          secondary: "#374151",
          border: "#1f2937",
          card: "#1e1e1e",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
