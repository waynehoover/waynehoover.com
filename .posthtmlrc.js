module.exports = {
  plugins: {
    'posthtml-include': {
      root: './includes'
    },
    'posthtml-md': {
      root: __dirname
    },
    'posthtml-extend': {
      root: './layouts'
    }
  }
};
