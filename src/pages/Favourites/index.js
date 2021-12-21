/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { AppBar } from '../../components';

const Favourites = () => {
  return (
    <View>
      <AppBar label={'Favourites'} />
      <Text>Ini Favourites</Text>
    </View>
  );
};

export default Favourites;
