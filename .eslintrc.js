module.exports = {
  plugins: [
    "vue"
  ],
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:vue/essential",
  ],
  rules: {
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
}