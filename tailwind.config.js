/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
        roboto: ['"Roboto Slab"', "serif"],
        inter: ["Inter", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        lora: ["Lora", "serif"],
        permanentMarker: ["Permanent Marker", "cursive"],
        playwriteCU: ["Playwrite CU", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        greatVibes: ['"Great Vibes"', "cursive"],
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
