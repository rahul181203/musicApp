import type { Config } from 'tailwindcss'

import {sand, sandDark, ruby, rubyDark, green, greenDark, indigo, indigoDark} from "@radix-ui/colors"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        ...sand,
        ...sandDark,
        ...ruby,
        ...rubyDark,
        ...green,
        ...greenDark,
        ...indigo,
        ...indigoDark
      }
    },
  },
  plugins: [],
}
export default config
