/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { AppBar } from '../../components';

const Booking = () => {
  return (
    <View>
      <AppBar backArrow label={'Book Now'} />
      <Text>Ini Booking</Text>
    </View>
  );
};

export default Booking;
