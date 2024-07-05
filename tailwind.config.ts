// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
  ],
  plugins: [
    nextui({
      themes: {
        "dark": {
          extend: "dark",
          colors: {
            background: "#0A131C",
            colorTitle: "#FFF",
            colorBgField: "#284057",
            buttonColor: "#E17900",
            buttonText: "#FFF",
            buttonBg: "#E17900",
            buttonBgHover: "#284057",
            colorTb: "#FFF",
            colorTp: "#284057",
            primary: "#E17900",
            subtTitle: "#E8EAEB",
            error: "#E41A1A",
            success: "#47cb18",
            outline: "#C9CBCC",
            input: "#33526F",
          },
            borderColor: {
                primary: '#E17900',
            },
            screens: {
                "max-h-640": { "raw": "(max-height: 640px)" },
                "max-h-768": { "raw": "(max-height: 768px)" },
                "max-h-1024": { "raw": "(max-height: 1024px)" },
                "max-h-1280": { "raw": "(max-height: 1280px)" },
                "max-h-1536": { "raw": "(max-height: 1536px)" },
            }
        },
        "light": {
          extend: "light",
          colors: {
            background: "#FFF",
            colorTitle: "#0A131C",
            colorBgField: "#FFF",
            buttonColor: "#E17900",
            buttonText: "#FFF",
            buttonBg: "#E17900",
            buttonBgHover: "#1A2F43",
            colorTb: "#284057",
            colorTp: "#284057",
            primary: "#E17900",
            subtTitle: "#33526F",
            error: "#E41A1A",
            success: "#47cb18",
            outline: "#C9CBCC",
            input: "#33526F",
          },
            borderColor: {
                primary: '#E17900',
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
    }),
  ],
};