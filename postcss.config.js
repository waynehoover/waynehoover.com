// currently using postcss 7 for compat issues with some npm dependency, when ironed out check out the below url to upgrade out of compat mode
// https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
