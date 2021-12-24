/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ScrollView} from 'react-native';
import {AppBar, HotelWishlist} from '../../components';

const Favourites = ({navigation}) => {
  return (
    <ScrollView>
      <AppBar label={'Favourites'} />
      <ScrollView>
        <HotelWishlist navigation={navigation} />
      </ScrollView>
    </ScrollView>
  );
};

export default Favourites;
