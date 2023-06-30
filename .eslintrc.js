module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb', 'plugin:jsdoc/recommended'],
  rules: {
    'linebreak-style': ['error', 'windows'],

    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
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
