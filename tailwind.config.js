module.exports = {
  // purge: ["./src/pages/**/*.{js, html}"],
  // mode: "jit",
  darkMode: "media", // 'media' or 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          btnPrimary: "#eab308",
        },
        textColor: {
          textGray: "#4b5563",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
