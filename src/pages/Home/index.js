/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {AppBar, Button} from '../../components';

const Home = ({navigation}) => {
  return (
    <View>
      <AppBar label={'Home'} />
      <Text>Ini Home</Text>
      <Button title="detail" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

export default Home;
