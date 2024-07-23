# Mobile
Setup the React Native App
```console
    cd packages/
    npx react-native init mobile
    cd mobile/
```

./packages/mobile/android/settings.gradle
- apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
- includeBuild('../node_modules/@react-native/gradle-plugin')
+ apply from: file("../../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
+ includeBuild('../../../node_modules/@react-native/gradle-plugin')

./packages/mobile/android/app/build.gradle
- // reactNativeDir = file("../node_modules/react-native")
- // codegenDir = file("../node_modules/@react-native/codegen")
- // cliFile = file("../node_modules/react-native/cli.js")
+ reactNativeDir = file("../../../../node_modules/react-native")
+ codegenDir = file("../../../../node_modules/@react-native/codegen")
+ cliFile = file("../../../../node_modules/react-native/cli.js")

- apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
+ apply from: file("../../../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)

./packages/mobile/metro.config.js
- const config = {};
+ const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
+ const path = require('path');
+  const config = {
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
    path.resolve(__dirname, '../components'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);


Launch Android app 
```console
    cd monorepo/packages/mobile
    npx react-native run-android
```

Launch iOS app 
```console
    cd monorepo/packages/mobile/ios
    pod install
    cd ../
    npx react-native run-ios
```
