const production = process.env.NODE_ENV === 'production';

function babelOptions() {
  return { plugins: ['transform-remove-console'] };
}

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    ['@snowpack/plugin-babel', { transformOptions: babelOptions() }],
    '@snowpack/plugin-optimize',
  ],
  alias: {
    '~': './src',
  },
};
