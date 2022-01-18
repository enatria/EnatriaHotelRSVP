/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CardPriceSummary = ({detail, guest, totalPrice}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRICE SUMMARY</Text>
      <View style={styles.box}>
        <View style={styles.titlepenginapan}>
          <Text style={styles.ket1}>3 days,</Text>
          <Text style={styles.ket1}> 1 Room,</Text>
          <Text style={styles.ket1}> {guest} Guest</Text>
        </View>
        <View style={styles.titleharga}>
          <Text style={styles.ket1}>Total</Text>
          <Text style={styles.ket1}>$ {totalPrice}</Text>
        </View>
        <View style={styles.titleharga}>
          <Text style={styles.ket1}>Payable Now</Text>
          <Text style={styles.ket1}>$ 345</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  titleharga: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ket1: {
    color: '#000',
  },

  title: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },

  titlepenginapan: {
    flexDirection: 'row',
  },

  box: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.15,

    elevation: 2,
  },
});

export default CardPriceSummary;
