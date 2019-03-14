module.exports = {
  root: true,

  extends: [
    'prettier',
    'vue',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:vue/essential',
  ],

  plugins: ['prettier', 'vue'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'no-unused-vars': ['error', { args: 'none' }],
    'no-useless-escape': 'warn',
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false,
      },
    ],
    'vue/valid-v-else': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },

  globals: {
    OSS: true,
    $: true,
    echarts: true,
    ActiveXObject: true,
  },
};
