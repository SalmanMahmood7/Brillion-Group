/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'primary': ['Nunito Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['League Spartan', 'Nunito Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [],
};
