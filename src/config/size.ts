import {Dimensions} from 'react-native';

export const Base = 16;

export const Sizes = Object.freeze({
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window'),
  Card: {
    BorderRadius: 4,
    BorderWidth: 0.8,
  },
  Base,
  Button: {
    height: 45,
  },
  Text: {
    H1: Base * 1.875, //30
    H2: Base * 1.5, //24
    H3: Base * 1.3125, //21
    H4: Base * 1.125, //18
    H5: Base, //16
    H6: Base / 1.125, //14
    Body: Base / 1.3125,
    Small: Base / 1.5,
  },
  Icon: {
    Base: Base,
    Medium: Base * 1.5,
    Large: Base * 2,
  },
});
