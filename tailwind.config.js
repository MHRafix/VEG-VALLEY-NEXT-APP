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
      screens: {
        xxxs: "320px",
        xxs: "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        tab: "992px",
        laptop: "1024px",
        pc: "1349px",
        tv: "1500px",
      },
      colors: {
        button: {
          btnPrimary: "#eab308",
        },
        textColor: {
          textGray: "#4b5563",
          textGreen: "#14532d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
