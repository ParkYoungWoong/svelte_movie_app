const production = process.env.NODE_ENV === 'production';

function babelOptions() {
  return { plugins: ['transform-remove-console'] };
}

module.exports = {
  preprocess: require('svelte-preprocess')({
    scss: {
      prependData: '@import "./src/scss/main.scss";',
    },
    postcss: {
      plugins: [require('autoprefixer')()],
    },
    babel: babelOptions(),
  }),
};
