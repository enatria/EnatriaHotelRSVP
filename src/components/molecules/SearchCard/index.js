/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, CardBox, InputDatePicker, InputFields } from '../..';
import {useDispatch} from 'react-redux';
import { getAllState, getCheckIn, getCheckOut, getDestinationId, getGuest } from '../../../redux/requiredForFetchSlice';

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
  const dispatch = useDispatch();
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
            const payload = {
              destinationId: '1721646',
              hotelId: null,
              checkIn: '2022-01-26',
              checkOut: '2022-01-27',
              guest: '1',
            };
            dispatch(getAllState(payload));
          }} />
        </SafeAreaView>
      </CardBox>
    </SafeAreaView>
  );
};

export default SearchCard;
