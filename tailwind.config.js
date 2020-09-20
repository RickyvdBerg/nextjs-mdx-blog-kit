module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        inverse: 'var(--color-bg-inverse)',
        accent: 'var(--color-bg-accent)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        inverse: 'var(--color-text-inverse)',
        'inverse-secondary': 'var(--color-text-inverse-secondary)',
        code: {
          background: 'var(--color-code-background)',
          text: 'var(--color-code-text)',
          comment: 'var(--color-code-comment)',
          punctuation: 'var(--color-code-punctuation)',
          const: 'var(--color-code-const)',
          bool: 'var(--color-code-bool)',
          string: 'var(--color-code-string)',
          var: 'var(--color-code-var)',
          func: 'var(--color-code-func)',
          keyword: 'var(--color-code-keyword)',
          regex: 'var(--color-code-regex)',
        },
      },
      colors: {
        code: {},
      },
    },
  },
  variants: {},
  plugins: [],
}
