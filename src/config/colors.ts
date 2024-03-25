//?? This file contains UseCase dependent ColorTokens.
//?? instead of just using Color Name.
//?? this will help in future for implementing dark mode etc.
//?? References:
//?? https://design.gs.com/foundation/color-system/color-tokens
//?? https://callstack.github.io/react-native-paper/docs/guides/theming/

export const Colors = Object.freeze({
  primary: '#12111A',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(188, 233, 255)',
  onPrimaryContainer: 'rgb(0, 31, 41)',

  secondary: 'rgb(0, 101, 140)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(197, 231, 255)',
  onSecondaryContainer: 'rgb(0, 30, 45)',

  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',

  background: 'rgb(247, 247, 250)',
  onBackground: 'rgb(25, 28, 30)',

  surface: 'rgb(251, 252, 254)',
  onSurface: 'rgb(25, 28, 30)',

  surfaceVariant: 'rgb(220, 228, 233)',
  onSurfaceVariant: 'rgb(64, 72, 76)',

  outline: 'rgb(112, 120, 125)',
  outlineVariant: 'rgb(192, 200, 204)',

  shadow: 'rgb(0, 0, 0)',

  scrim: 'rgb(0, 0, 0)',

  inverseSurface: 'rgb(46, 49, 50)',
  inverseOnSurface: 'rgb(239, 241, 243)',

  inversePrimary: 'rgb(97, 212, 255)',

  surfaceDisabled: 'rgba(25, 28, 30, 0.12)',
  onSurfaceDisabled: 'rgba(25, 28, 30, 0.38)',

  backdrop: 'rgba(42, 50, 53, 0.4)',
});
