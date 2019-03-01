const withAssetRelocator = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      const { isServer } = options

      if (isServer) {
        config.node = Object.assign({}, config.node, {
          __dirname: false,
          __filename: false
        })

        config.module.rules.unshift({
          test: /\.(m?js|node)$/,
          parser: { amd: false },
          use: {
            loader: '@zeit/webpack-asset-relocator-loader',
            options: {
              outputAssetBase: 'assets',
              existingAssetNames: [],
              wrapperCompatibility: true,
              escapeNonAnalyzableRequires: true
            }
          }
        })
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    }
  })
}

module.exports = withAssetRelocator({
  target: 'serverless',
  // https://github.com/zeit/next.js/blob/canary/examples/with-universal-configuration-runtime/next.config.js
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
})
