/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {AppBar, Button, CardResultHotel, SearchCard, SlideTopDestination} from '../../components';
const Home = ({navigation}) => {
  return (
    <View>
      <AppBar label={'Home'} />
      {/* <Text>Ini Home</Text>
      <Button title="detail" onPress={() => navigation.navigate('Details')} /> */}
      <SearchCard />
      {/* <SlideTopDestination label={'TOP DESTINATION'} />
      <SlideTopDestination label={'POPULAR DESTINATION'} /> */}
      <CardResultHotel />
    </View>
  );
};

export default Home;
