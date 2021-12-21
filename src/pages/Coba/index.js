/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, AppBar} from '../../components';

const Coba = ({navigation}) => {
  return (
    <View>
      <AppBar label={'Coba'} />
      <Text style={styles.title}>Hai</Text>
      <Button title="button" onPress={() => navigation.navigate('Home') } />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Coba;
