// https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  // https://github.com/zeit/next.js/blob/canary/examples/with-universal-configuration-runtime/next.config.js
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV
  }
})
