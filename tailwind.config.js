module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  corePlugins: {
    container: false,
  },
  purge: [],
  important: true,
  theme: {
    screens: {
      'xl': {'min': '1440px'},
      'lg': {'min': '1080px', 'max': '1439px'},
      'md': {'min': '750px', 'max': '1079px'},
      'sm': {'min': '450px', 'max': '749px'},
    },
    fontSize: {
      '13': '13px',
      'xxxs': '0.5rem',
      'xxs': '.625rem',
      'xss': '.6875rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '5.3rem'
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '90': '22.5rem',
        '96': '24rem',
        '100': '25.5rem',
        '104': '27rem',
        '112': '30rem',
        '120': '33rem'
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',

      }
    },
  },
  variants: {},
  plugins: [],
}
