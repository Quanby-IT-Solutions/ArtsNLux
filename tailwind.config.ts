import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        gray: {
          "100": "#858a66",
          "200": "#2b2b2b",
          "300": "#2b271e",
          "400": "rgba(43, 39, 30, 0.7)",
          "500": "rgba(43, 39, 30, 0.3)",
          "600": "rgba(43, 39, 30, 0.5)",
        },
        scrollbar: {
          thumb: '#6A704C',
          hover: '#4B5A38',
        },
        primary: {
          1: '#EDE1D1', // Primary 1
          2: '#2B271E', // Primary 2
        },
        secondary: {
          1: '#7F6044', // Secondary 1
          2: '#5D2410', // Secondary 2
          3: '#412E27', // Secondary 3
          4: '#2C2C2C', // Secondary 4
          5: '#6A704C', // Secondary 4
          6: '#CCB89D', // Secondary 4
          7: '#F4F4F2', // bg-for some page stone color
        },
        'timeless-black': '#000000',
        'timeless-white': '#FFFFFF',
        'accent-brown': '#D2B48C', // A creamy brown color
        'accent-green': '#2E8B57', // A warm green color
        "color-gray-3": "#dfdfdf",
        darkolivegreen: "#6a704c",
        "color-white": "#fff",
        antiquewhite: "#ede1d1",
        "color-gray-4": "#f8f8f8",
        darkgray: "#9a9a9a",
        darkslategray: "#0d2c4a",
        black: "#000",
      },
      
      spacing: {},
      fontFamily: {
        urbanist: "Urbanist",
        lato: "Lato",
        roboto: "Roboto",
      },
    },
    writingMode: {
      'vertical-rl': 'vertical-rl',
    },
    fontSize: {
      'xs': "12px",
      'sm': "14px",
      'smi': "13px",
      'lg': "18px",
      'xl': "20px",
      'base': "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      'lgi': "19px",
      "7xl": "26px",
      "41xl": "60px",
      "17xl": "36px",
      "18xl": "40px",
      "19xl": "44px",
      "29xl": "48px",
      'inherit': "inherit",
    },
      boxShadow: {
        'custom-shadow': '0px 4px 16px 0px #2B271E4D', 
        'custom-sd': '5px 2px 15px 5px #2B271E4D', 
        'custom-shadow-2xl': '0px 4px 20px 0px rgba(106, 112, 76, 0.7)',

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

export default config;
