module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 0,
    'no-plusplus': 0,
    'object-curly-spacing': 0,
    'func-names': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'prefer-arrow-callback': 0,
    'max-len': 0,
    'no-shadow': 0,
    'no-unused-vars': 1,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
