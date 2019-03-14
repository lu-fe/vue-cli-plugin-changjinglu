module.exports = (api, options) => {
  if (options.projectType === 'mobile') {
    api.render('./h5');
  } else if (options.projectType === 'pc') {
    api.render('./pc');
  }

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
      "eslint-config-prettier": "4.1.0",
      "prettier": "^1.16.4",
      "prettier-eslint": "^8.8.2",
      "eslint": "^5.8.0",
      "eslint-plugin-vue": "^5.0.0",
      "eslint-config-vue": "^2.0.2"
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