/* eslint-disable prettier/prettier */
const mainColors = {
  green1: '#69f0ae',
  green2: '#9fffe0',
  green3: '#2bbd7e',
  green4: '#1a4734',
  grey1: '#7d8797',
  white: 'white',
  black: 'black',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.green3,
  light: mainColors.green2,
  dark: mainColors.green4,
  white: 'white',
  black: 'black',
  text: {
    default: mainColors.green4,
    secondary: mainColors.green3,
    info: mainColors.grey1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.green4,
    },
    secondary: {
      background: mainColors.green4,
      text: mainColors.white,
    },
  },
};
