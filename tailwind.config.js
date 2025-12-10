/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Estos colores se mantienen como fallback
        // Los colores principales se definen en src/colores.css
        primary: {
          50: '#FDFCFB',
          100: '#FAF8F6',
          200: '#F5F0EB',
          300: '#E8DDD0',
          400: '#D4C4B0',
          500: '#A68B6B',
          600: '#8B7355',
          700: '#6B5344',
          800: '#5A4538',
          900: '#4A3728',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFCFB',
          200: '#FAF8F6',
          300: '#F5F0EB',
          400: '#EDE5DC',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Poppins', 'system-ui', 'sans-serif'],
        'accent': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(107, 83, 68, 0.08)',
        'soft-lg': '0 10px 40px -10px rgba(107, 83, 68, 0.15)',
        'glow': '0 0 40px -10px rgba(107, 83, 68, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
