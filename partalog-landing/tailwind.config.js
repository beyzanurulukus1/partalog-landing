/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 1. Başlıklar: UBUNTU (Kalın ve modern)
        heading: ['"Ubuntu"', 'sans-serif'],
        
        // 2. Metinler: UBUNTU (Okunaklı ve karakteristik)
        body: ['"Ubuntu"', 'sans-serif'],
        
        // 3. Kodlar/Numaralar: Fira Code (Aynen kalsın)
        technical: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}