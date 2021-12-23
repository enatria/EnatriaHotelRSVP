/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Profile as Profil, AppBar} from '../../components';
import {Rating} from 'react-native-ratings';
import {colors} from '../../utils';

const Profile = () => {
  return (
    <>
      <AppBar label="Profile" />
      <View style={styles.container}>
        <Profil />
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
