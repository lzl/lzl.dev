const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
