/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../..';

const LoginFirst = () => {
  const styles = StyleSheet.create({
    loginFirst: {
      margin: 16,
    },
    loginFirstText: {
      fontFamily: 'Poppons',
      fontSize: 18,
      alignSelf: 'center',
      marginBottom: 12,
    },
  });

  const navigation = useNavigation();

  return (
    <View style={styles.loginFirst}>
      <Text style={styles.loginFirstText}>Login terlebih dahulu</Text>
      <Button title={'Login'} onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default LoginFirst;
