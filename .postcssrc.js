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

if(process.env.NODE_ENV === 'production'){
  module.exports = config['production'];
}else{
  module.exports = config['dev'];
}
