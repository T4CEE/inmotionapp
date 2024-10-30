/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using the 'class' strategy
  theme: {
    screens: {
      xs: "350px",
      sm: "400px",
      md: "760px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        fontFamily: {
          NeueMontreal: ["var(--font-NeueMontreal)"],
          NeueMontrealBold: ["var(--font-NeueMontrealBold)"],
          NeueMontrealLight: ["var(--font-NeueMontrealLight)"],
          NeueMontrealItalic: ["var(--font-NeueMontrealItalic)"],
          NeueMontrealMedium: ["var(--font-NeueMontrealMedium)"],
          NeueMontrealRegular: ["var(--font-NeueMontrealRegular)"],
        },
        light: {
          primary: "#F6F6F6",
          secondary: "#ffffff",
          accent: "#1C1C1C",
          neutral: "#5DADEC",
          "base-100": "#ffffff",
          info: "#ffffff",
          success: "#36d399",
          warning: "#ffffff",
          error: "#f87272",
        },
        dark: {
          primary: "#20232a",
          secondary: "#20232a",
          accent: "#ffffff",
          neutral: "#191d24",
          "base-100": "#20232a",
          info: "#1C1C1C",
          success: "#36d399",
          warning: "#20232a",
          error: "#f87272",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
