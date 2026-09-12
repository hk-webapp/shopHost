import {
  colors,
  radius,
  shadows,
  typography,
} from "@repo/design-system-ui/tokens";
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      shadows,
      radius,
      typography,
    },
  },
  plugins: [],
};

export default config;
