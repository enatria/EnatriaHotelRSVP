import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const Badge = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  label: {
    color: colors.dark,
    fontFamily: 'Poppins-Medium',
  },
});
