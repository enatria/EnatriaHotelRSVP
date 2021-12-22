/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.00,

    elevation: 5,
    padding: 16,
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

const CardBox = ({children}) => {

  return (
    <SafeAreaView>
      <View style={styles.card}>{children}</View>
    </SafeAreaView>
  );
};

export default CardBox;
