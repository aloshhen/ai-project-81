export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981',
          light: '#3FC79A',
          dark: '#0C9467'
        },
        secondary: {
          DEFAULT: '#1A1F2E',
          light: '#2D3748'
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)'
      }
    }
  },
  plugins: []
}