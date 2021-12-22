/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { colors } from '../../utils';

const AppBar = ({label}) => {
  const styles = StyleSheet.create({
    appBar: {
      height: 60,
      width: '100%',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999999,
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.00,

      elevation: 5,
    },
    text: {
      color: colors.white,
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
    },
  });

  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.primary}/>
      <View style={styles.appBar}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </>
  );
};

AppBar.defaultProps = {
  label: 'Home',
};

export default AppBar;
