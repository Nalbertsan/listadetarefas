import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'regal-blue': '#243c5a',
        'orange-one': '#fff3ea',
        'orange-two': '#ff8729',
        'gray-one': '#f3f4fb',
        'gray-two': '#dbdce2',
        'green-one': '#e8f9f6',
        'green-two': '#18c3a5',
      },
      
    },
    
  },
  plugins: [],
};
export default config;
