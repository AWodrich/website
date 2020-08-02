const basePresetsConfig = {};


module.exports = {
  env: {
    development: {
      ...basePresetsConfig,
    },
    production: {
      ...basePresetsConfig,
    },
    test: {
      presets: [
        [
          '@vue/cli-plugin-babel/preset',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
}
