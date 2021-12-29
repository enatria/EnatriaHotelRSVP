/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '../..';

const SettingsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY ACCOUNT</Text>
      <View style={styles.wrapper}>
        <View style={styles.name}>
          <Text style={styles.detailTitle}>Nama Lengkap</Text>
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
        <Text style={styles.edit}>Edit</Text>
      </View>
      <View style={styles.buttonEdit}>
        <Button title="Edit" />
      </View>
      <Button title={'Logout'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
    padding: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: 30,
  },

  buttonEdit: {
    marginBottom: 20,
  },

  name: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },

  wrapper: {
    marginBottom: 30,
  },

  detailTitle: {
    fontSize: 18,
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
