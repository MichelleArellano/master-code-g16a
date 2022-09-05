/* eslint-disable strict */
module.exports = {
  env: {
    browser: false, // NODE
    commonjs: true,
    es2021: true
  },
  extends: 'airbnb-base/legacy',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: [1, 'always']
  }

};
