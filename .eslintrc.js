module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: latest,
  },
  extends: ['airbnb'],
  rules: {
    'linebreak-style': ['error', 'unix'],

    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 10],
    'max-params': ['error', 3],
  },
  overrides: [
    {
      files: ['__tests__/**/*.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-new': 'off',
      },
    },
  ],
};
