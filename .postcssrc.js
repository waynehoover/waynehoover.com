module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('lost'),
    require('postcss-nested')
  ]
};
