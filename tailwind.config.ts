import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary-color))",
        secondary: "rgba(var(--secondary-color))",
        foreground: "rgba(var(--fg-color))",
        background: "rgba(var(--bg-color))",
        border: "rgba(var(--border-color))",
        cardBg: "rgba(var(--card-bg-color))",
        hover: "rgba(var(--hover-color))",
        focus: "rgba(var(--focus-color))",
        active: "rgba(var(--active-color))",
        selected: "rgba(var(--selected-color))",
        error: "rgba(var(--error-color))",
        success: "rgba(var(--success-color))",
        warning: "rgba(var(--warning-color))",
        info: "rgba(var(--info-color))",
        link: "rgba(var(--link-color))",
        visitedLink: "rgba(var(--visited-link-color))",
        icon: "rgba(var(--icon-color))",
        disabledText: "rgba(var(--disabled-text-color))",
        disabledIcon: "rgba(var(--disabled-icon-color))",
        overlay: "rgba(var(--overlay-color))",
        shadow: "rgba(var(--shadow-color))",
      },
    },
  },
  plugins: [],
} satisfies Config;
