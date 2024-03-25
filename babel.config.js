module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    'react-native-reanimated/plugin',
    [
      "module-resolver",
      {
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@config": "./src/config",
          "@dummy": "./src/dummy",
        },
      },
    ],
  ],
};
