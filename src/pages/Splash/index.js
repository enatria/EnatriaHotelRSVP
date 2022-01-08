/* eslint-disable prettier/prettier */
import {StackActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import { useCallback } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { addDataFavourite, addDataUser } from '../../redux/hotelSlice';
import {colors, getFavourite, getUser} from '../../utils';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const setStateFromLocal = useCallback(() => {
    getFavourite().then(data => {
      dispatch(addDataFavourite(data));
    });
    getUser().then(dataUser => {
      dispatch(addDataUser(dataUser));
    });
  }, [dispatch]);

  useEffect(() => {
    setStateFromLocal();
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('HomeScreen'));
    }, 2000);
  }, [navigation, setStateFromLocal]);

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
