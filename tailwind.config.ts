import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        // Raccoon Theme - colori principali dell'app Pedro
        pedro: {
          50: '#FAF8F6',
          100: '#F5F0EB',
          200: '#E8DFD6',
          300: '#D4C5B7',
          400: '#A89078',
          500: '#7B6B5D',
          600: '#6A5A4D',
          700: '#5C4E42',
          800: '#4A3F36',
          900: '#3D3D3D',
          950: '#2D2D2D'
        },
        // CTA / Action colors (FAB gradient)
        accent: {
          50: '#FFF5F3',
          100: '#FFE8E3',
          200: '#FFD4CC',
          300: '#FFB3A6',
          400: '#FF8573',
          500: '#FF6B4A',
          600: '#E84530',
          700: '#C93A28',
          800: '#A53224',
          900: '#882D23'
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669'
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706'
        },
        // Cream background
        cream: {
          50: '#FDFCFB',
          100: '#F5F0EB',
          200: '#EBE3DA'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #7B6B5D 0%, #A89078 50%, #5C5C5C 100%)',
        'hero-gradient-warm': 'linear-gradient(135deg, #F5F0EB 0%, #E8DFD6 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(123, 107, 93, 0.05) 0%, rgba(168, 144, 120, 0.05) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B4A 0%, #E84530 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'gradient-x': 'gradientX 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'pedro': '0 20px 50px -12px rgba(123, 107, 93, 0.25)',
        'pedro-lg': '0 25px 60px -15px rgba(123, 107, 93, 0.35)',
        'accent': '0 20px 50px -12px rgba(255, 107, 74, 0.3)',
        'accent-lg': '0 25px 60px -15px rgba(255, 107, 74, 0.4)',
        'glow': '0 0 40px rgba(123, 107, 93, 0.3)',
        'glow-accent': '0 0 40px rgba(255, 107, 74, 0.3)'
      }
    }
  },
  plugins: []
} satisfies Config
