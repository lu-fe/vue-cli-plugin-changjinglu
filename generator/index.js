module.exports = api => {
  api.render('./template');

  api.extendPackage({
    "scripts": {
      "dev": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
    },
    devDependencies: {
      "husky": "^1.3.1",
      "lint-staged": "^8.1.0",
      "node-sass": "^4.9.0",
      "postcss-px-to-viewport": "0.0.3",
      "sass-loader": "^7.0.1",
    },
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "*.js": [
        "vue-cli-service lint",
        "git add"
      ],
      "*.vue": [
        "vue-cli-service lint",
        "git add"
      ]
    }
  })
}