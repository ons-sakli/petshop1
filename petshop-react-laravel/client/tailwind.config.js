module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary pink color (adjust to your preference)
        primary: "#C39BD3", // Light pink
        // Secondary pink color (adjust to your preference)
        secondary: {
          100: "#C39BD3", // Lighter pink
          200: "#C39BD3", // Primary pink
          300: "#C39BD3", // Darker pink
        },
      },
      textColor: {
        // Text color to contrast with pink background (optional)
        primary: "#333333", // Dark gray
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};

