// vue.config.js
module.exports = {
  devServer: {
    open: true, // Tells dev-server to open the browser after server had been started. Disabled by default
    host: '0.0.0.0',
    port: 3000, // CHANGE YOUR PORT HERE!
    https: false,
    // hot: true, // Enable webpack's Hot Module Replacement feature:
    // hotOnly: false, // Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
  },
}