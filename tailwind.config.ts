import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#054553",
        secondary: "#054553",
        defaultText: "#222222",
        textSecondary: "#5B6873",
        placeholder: "#A7B6C5",
        error: "#FF0004",
        grayBackground: "#F1F2F3",
        grayBorder: "#C2CCDA",
        footer: "#1E1E1E",
        background: "#ffffff",
      },
    },
    fontSize: {
      sm: ['11px', '24px'],
      link: ['12px', '14px'],
      base: ['15px', '16px'],
      lg: ['18px', '22px'],
      xl: ['36px', '44px'],
    }
  },
  plugins: [],
};
export default config;
