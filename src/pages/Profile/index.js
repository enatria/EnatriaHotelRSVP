/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Profile as Profil, AppBar, Button, CardBookHistory, LoginFirst} from '../../components';
import {Rating} from 'react-native-ratings';
import {colors} from '../../utils';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const user = useSelector(state => state.hotel.user);
  return (
    <>
      <AppBar backArrow label="Profile" />
      <View style={styles.container}>
        {user !== null ?
          <>
            <Profil />
            <CardBookHistory/>
          </>
        :
        <LoginFirst />
        }
      </View>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    justifyContent: 'center',
  },
  content: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 36,
    lineHeight: 70,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
  },
});
