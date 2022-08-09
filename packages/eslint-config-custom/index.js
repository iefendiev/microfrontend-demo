module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'prettier'],
  rules: {
    semi: 0,
    'no-param-reassign': 0,
    'global-require': 'off',
  },
};
