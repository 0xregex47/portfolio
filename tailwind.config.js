export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      colors: {
        quantum: {
          bg: '#0a0f1f',
          accent: '#00f6ff',
        },
      },
    },
  },
  plugins: [],
}