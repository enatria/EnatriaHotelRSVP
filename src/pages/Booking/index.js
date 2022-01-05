/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBar, Button} from '../../components';
import CardInformation from '../../components/molecules/CardInformation';
import CardPriceSummary from '../../components/molecules/CardPriceSummary';

const Booking = () => {
  return (
    <View>
      <AppBar backArrow label={'Book Now'} />
      <View style={styles.section}>
        <View>
          <CardInformation />
          <CardPriceSummary />
        </View>
        <View style={styles.button}>
          <Button title={'Continue'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Booking;
