
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans" ,...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
