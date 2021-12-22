/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { AppBar, SearchCard } from '../../components';

const Home = () => {
  return (
    <View>
      <AppBar label={'Home'} />
      <SearchCard />
    </View>
  );
};

export default Home;
