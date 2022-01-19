import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Loading = ({center}) => {
  return (
    <View style={center ? [styles.loading, styles.toCenter] : styles.loading}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text>Please Wait!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toCenter: {
    height: '100%',
  },
});

export default Loading;
