/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View} from 'react-native';
import {colors} from '../../../utils';

const IconNavBar = ({data, image}) => {
  const {color, focused} = data;
  let colorSelected = focused ? colors.secondary : colors.primary;

  const iconStyle = {
    width: 20,
    height: 20,
    tintColor: colorSelected,
  };

  return (
    <View>
      <Image source={image} style={iconStyle} />
    </View>
  );
};

export default IconNavBar;
