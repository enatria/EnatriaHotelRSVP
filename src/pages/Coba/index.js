/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, AppBar} from '../../components';

const Coba = () => {
  return (
    <View>
      <AppBar />
      <Text style={styles.title}>Hai</Text>
      <Button title="button" />
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
