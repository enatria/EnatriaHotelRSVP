/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {AppBar} from '../../components';

const DetailHotel = () => {
  return (
    <View>
      <AppBar label={'Hotel Detail'} bg="transparent" />
      <Text>Ini Detail Hotel</Text>
    </View>
  );
};

export default DetailHotel;
