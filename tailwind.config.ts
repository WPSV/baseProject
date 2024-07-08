// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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
            primary: "#E17900",
            subtTitle: "#E8EAEB",
            error: "#E41A1A",
            success: "#47cb18",
            outline: "#C9CBCC",
            input: "#33526F", 
          },
        },
        "light": {
          extend: "light",
          colors: {
            background: "#FFF",
            colorTitle: "#0A131C",
            colorBgField: "#FFF",
            buttonColor: "#E17900",
            buttonText: "#FFF",
            primary: "#E17900",
            subtTitle: "#33526F",
            error: "#E41A1A",
            success: "#47cb18",
            outline: "#C9CBCC",
            input: "#33526F",    
          },
        },
      },
    }),
  ],
};