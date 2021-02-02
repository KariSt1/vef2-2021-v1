module.exports = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style' : ['error', 'windows'],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'import/extensions': [0, { 'js': 'always'}],
  },
};