const env = process.env.NODE_ENV || 'dev';

const production = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-nested'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.pug'],
    })
  ]
}

const dev = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-nested')
  ]
};

const config = {
 production,
 dev
};

module.exports = config[env];
