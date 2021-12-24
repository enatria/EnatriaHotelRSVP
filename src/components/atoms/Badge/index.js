import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const Badge = ({label, color}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color === 'default' ? colors.white : colors.light,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowOpacity: color === 'default' ? 1 : 0,
    shadowRadius: 0,
    elevation: color === 'default' ? 2 : 0,
  }),
  label: {
    color: colors.dark,
    fontFamily: 'Poppins-Medium',
  },
});
