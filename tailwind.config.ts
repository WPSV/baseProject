/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/theme";

module.exports = {
  darkMode: "class",
  important: true,
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
  ],
  plugins: [nextui()],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FF971E",
          200: "#E17900",
        },
        secondary: {
          100: "#33526F",
          200: "#284057",
          300: "#1A2F43",
          400: "#0A131C",
        },
        light: {
          100: "#FFFFFF",
          200: "#EFF4F2",
          300: "#E8EAEB",
        },
        error: '#E41A1A',
        success: '#47cb18',
        outline: '#C9CBCC',
      },
      screens: {
        "max-h-640": { "raw": "(max-height: 640px)" },
        "max-h-768": { "raw": "(max-height: 768px)" },
        "max-h-1024": { "raw": "(max-height: 1024px)" },
        "max-h-1280": { "raw": "(max-height: 1280px)" },
        "max-h-1536": { "raw": "(max-height: 1536px)" },
      }
    },
  },
}