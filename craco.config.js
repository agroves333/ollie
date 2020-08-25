const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@ollie/components': './src/components',
          '@ollie/theme': './src/theme.js',
        },
      },
    },
  ],
}
