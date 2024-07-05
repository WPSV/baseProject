import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
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
        primary: '#E17900',
        lightPrimary: '#FF971E',
        dark: '#1A2F43',
        darkPlus: '#0A131C',
        darkMinus: '#284057',
        light: '#FFFFFF',
        lightPlus: '#E8EAEB',
        lightMinus: '#EFF4F2',
        error: '#E41A1A',
        success: '#47cb18',
        outline: '#C9CBCC',
        input: '#33526F',
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
  darkMode: "class",
  plugins: [nextui()],
}
export default config
