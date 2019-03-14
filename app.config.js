module.exports = {
  server: {
    host: 'localhost',
    port: 3000,
  },
  static: {
    spa: true,
    path: './dist',
    favicon: './dist/favicon.png'
  },
  proxyTable: {
    '/UCM': {
      target: 'http://54.169.159.192',
      secure: false,
      changeOrigin: true
    },
    '/API': {
      target: 'http://54.169.159.192:8080',
      secure: false,
      changeOrigin: true
    },
    '/test': {
      target: 'http://localhost:8080/',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '/test$': '/test-dev-server'
      }
    }
  }
}
