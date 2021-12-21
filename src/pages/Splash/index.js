import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
const Splash = () => {
  return (
    <View>
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
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    fontFamily: 'Poppins-Bold',
    backgroundColor: colors.primary,
  },
});
