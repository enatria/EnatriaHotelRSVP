import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List} from '../..';
import {colors} from '../../../utils';

const CardAmenities = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>In The Hotel</Text>
        <View style={styles.list}>
          <List color="default" label="Food and drink" />
          <List color="default" label="Accesability" />
          <List color="default" label="Facilities" />
        </View>
      </View>
    </View>
  );
};

export default CardAmenities;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    border: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#0001',
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    marginVertical: 5,
    color: colors.dark,
    fontFamily: 'Poppins-Medium',
  },
  list: {
    flex: 1,
  },
});
