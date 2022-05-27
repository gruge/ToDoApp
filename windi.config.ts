export default {
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
    },
    borderWidth: {
      DEFAULT: '1px',
      none: '0',
      sm: '2px',
    },
    theme: {
      divideColor: theme => ({
        ...theme('borderColors'),
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      }),
    },
  },
}