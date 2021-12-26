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

const SearchCard = ({navigation, action}) => {
  return (
    <SafeAreaView style={styles.margin}>
      <CardBox shadow padding>
        <InputFields placeHolder={'Where do you want to go?'} inlineIcon={'ic_magnifying_glass'} />
        <SafeAreaView style={styles.row}>
          <View style={styles.col05}>
            <InputDatePicker placeHolder={'Check-in Date'} />
          </View>
          <View style={styles.col05}>
            <InputDatePicker placeHolder={'Check-out Date'} />
          </View>
        </SafeAreaView>
        <InputFields placeHolder={'Guest'} number inlineIcon={'ic_avatar'} />
        <SafeAreaView style={styles.mt10}>
          <Button title="Search" onPress={() => {
            action.setSearch(1);
            action.setLabel('Search Result');
          }} />
        </SafeAreaView>
      </CardBox>
    </SafeAreaView>
  );
};

export default SearchCard;
