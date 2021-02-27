module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  rules: {
    "no-console": 0,
    "no-debugger": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
