/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--color-primary)",
          inverted: "var(--color-inverted)",
        },
      },
      textColor: {
        skin: {
          base: "var(--color-primary)",
          inverted: "var(--color-inverted)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-primary)",
          inverted: "var(--color-inverted)",
        },
      },
      fill: {
        skin: {
          base: "var(--color-primary)",
          inverted: "var(--color-inverted)",
        },
      },
      fontFamily: {
        Kanit: ['"Kanit"'],
        OpenSans: ['"Open Sans"'],
       },
    },
    screens: {
      'xxs': '240px', // min-width
      'xs': '340px', // min-width

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } 
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
  plugins: [],
};
