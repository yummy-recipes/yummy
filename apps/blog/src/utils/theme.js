export default {
  baseFontSize: '16px',
  bodyFontFamily: [
    '-apple-system', 'BlinkMacSystemFont',
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'sans-serif'
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    img: {
      marginBottom: 0,
    },
    ul: {
      marginBottom: 0,
    },
    'p:last-child': {
      marginBottom: 0,
    }
  })
}
