/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  important: true,
  content: [
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FF971E",
          200: "#E17900",
        },
        secondary: {
          100: "#284057",
          200: "#1A2F43",
          300: "#0A131C",
        },
        light: {
          100: "#FFFFFF",
          200: "#EFF4F2",
          300: "#E8EAEB",
        },
        error: '#E41A1A',
        success: '#47cb18',
        outline: '#C9CBCC',
        input: '#33526F',
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