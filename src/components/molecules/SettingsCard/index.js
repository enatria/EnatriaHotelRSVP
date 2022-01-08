/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import {Button} from '../..';
import { logout } from '../../../redux/hotelSlice';


const SettingsCard = () => {
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      dispatch(logout());
      return await AsyncStorage.removeItem('user');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY ACCOUNT</Text>
      <View style={styles.wrapper}>
        <View style={styles.name}>
          <Text style={styles.detailTitle}>Nama</Text>
          <Text style={styles.detail}>Zainal Abidin</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.detailTitle}>E-mail</Text>
          <Text style={styles.detail}>zainalabidinhsc@gmail.com</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.detailTitle}>Gender</Text>
          <Text style={styles.detail}>Pria</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.detailTitle}>Search History</Text>
          <Text style={styles.detail}> &gt; </Text>
        </View>
      </View>
      <View style={styles.buttonEdit}>
        <Button title="Edit" />
      </View>
      <Button title={'Logout'} onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 30,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: 20,
  },

  buttonEdit: {
    marginBottom: 20,
  },

  name: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#7d8797',
    marginBottom: 10,
  },

  wrapper: {
    marginBottom: 30,
  },

  detailTitle: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },

  detail: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
});

export default SettingsCard;
