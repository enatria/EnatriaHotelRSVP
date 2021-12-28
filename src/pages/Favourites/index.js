/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AppBar, Gap, HotelWishlist} from '../../components';

const Favourites = ({navigation}) => {
  return (
    <SafeAreaView>
      <AppBar backArrow label={'Favourites'} />
      <ScrollView>
        <HotelWishlist navigation={navigation} />
        <Gap height={65} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourites;
