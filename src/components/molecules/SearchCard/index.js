/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, CardBox, InputDatePicker, InputFields } from '../..';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col05: {
    flex: 0.5,
  },
  mt10 : {
    marginTop: 10,
  },
  margin: {
    marginTop: 12,
    marginHorizontal: 12,
  },
});

const SearchCard = () => {
  return (
    <SafeAreaView style={styles.margin}>
      <CardBox shadow>
        <InputFields placeHolder={'Where do you want to go?'} />
        <SafeAreaView style={styles.row}>
          <View style={styles.col05}>
            <InputDatePicker placeHolder={'Check-in Date'} />
          </View>
          <View style={styles.col05}>
            <InputDatePicker placeHolder={'Check-out Date'} />
          </View>
        </SafeAreaView>
        <InputFields placeHolder={'Guest'} number />
        <SafeAreaView style={styles.mt10}>
          <Button title={'Search'} />
        </SafeAreaView>
      </CardBox>
    </SafeAreaView>
  );
};

export default SearchCard;
