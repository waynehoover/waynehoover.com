const dev = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-nested')
  ]
};

const production = {
  plugins: [
    ...dev.plugins,
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.pug'],
    })
  ]
}

const config = {
 production,
 dev
};

if(process.env.NODE_ENV === 'production'){
  module.exports = config['production'];
}else{
  module.exports = config['dev'];
}
