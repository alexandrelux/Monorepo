const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) =>
          path.resolve(__dirname, `../../node_modules/${name}`),
      },
    ),
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../app'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
