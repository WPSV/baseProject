import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E17900",
        dark: "#1A2F43",
        darkPlus: "#0A131C",
        darkMinus: "#284057",
        light: "#FFFFFF",
        lightPlus: "#E8EAEB",
        lightMinus: "#EFF4F2",
        error: "#E41A1A",
        success: "#47cb18",
        outline: "#C9CBCC"
      },
      borderColor: {
        primary: "#E17900",
      },
      borderRadius: {
        'btn': '42px !important',
      },
      width: {
        'btn': '142px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
