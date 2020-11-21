const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: [...defaultTheme.fontFamily.sans],
      },
      width: {
        350: '350px',
      },
      maxWidth: {
        512: '512px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
