/* eslint-disable prettier/prettier */
import {StackActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import { useCallback } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { addDataFavourite } from '../../redux/hotelSlice';
import {colors, getFavourite} from '../../utils';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const setFavouriteToLocal = useCallback(() => {
    getFavourite().then(data => {
      dispatch(addDataFavourite(data));
    });
  }, [dispatch]);

  useEffect(() => {
    setFavouriteToLocal();
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('HomeScreen'));
    }, 2000);
  }, [navigation, setFavouriteToLocal]);

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
