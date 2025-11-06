/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Poppins"', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#E7F5FF',
          100: '#D0EBFF',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8'
        },
        neon: {
          pink: '#FF1CF7',
          blue: '#00F0FF',
          purple: '#8B5CF6'
        }
      },
      backgroundImage: {
        'grid-radial': 'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)',
        'glow-gradient': 'linear-gradient(135deg,#0f172a,#1e1b4b,#020617)'
      },
      boxShadow: {
        'neon-sm': '0 0 4px rgba(0,240,255,0.6),0 0 8px rgba(139,92,246,0.4)',
        'neon': '0 0 6px rgba(0,240,255,0.65),0 0 16px rgba(139,92,246,0.55)',
        'neon-strong': '0 0 12px rgba(0,240,255,0.75),0 0 28px rgba(255,28,247,0.6)'
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(6px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
