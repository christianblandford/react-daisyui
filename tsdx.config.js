const alias = require('@rollup/plugin-alias')

module.exports = {
  rollup(config, options) {
    /*
    config.plugins.push(
      alias({
        entries: [{ find: '@/*', replacement: './src/*' }],
      })
    )
    */
    return config
  },
}
