  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn-primary': {
          '@apply bg-blue-500 rounded-md': {},
        },
      })
    }
  ],