/* eslint-disable prettier/prettier */
import {StackActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('HomeScreen'));
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>enatria.</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
  },
});
