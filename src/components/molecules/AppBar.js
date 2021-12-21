/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import { colors } from '../../utils';

const AppBar = ({label}) => {
  const styles = {
    appBar: {
      height: 60,
      width: '100%',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.white,
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
    },
  };

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
