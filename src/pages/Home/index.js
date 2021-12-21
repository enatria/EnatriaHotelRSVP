/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { AppBar } from '../../components';

const Home = () => {
  return (
    <View>
      <AppBar label={'Home'} />
      <Text>Ini Home</Text>
    </View>
  );
};

export default Home;
