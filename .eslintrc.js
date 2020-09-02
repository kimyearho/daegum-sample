module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-control-regex': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto'
    //   }
    // ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
