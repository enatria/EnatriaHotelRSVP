import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const List = ({label, color}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  label: {
    color: colors.medium,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
  },
});
