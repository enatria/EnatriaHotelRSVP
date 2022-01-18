/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ToastAndroid, View } from 'react-native';
import { Button, CardBox, InputDatePicker, InputFields } from '../..';
import {useDispatch} from 'react-redux';
import { getCheckIn, getCheckOut, getGuest, getQuery, setSearch } from '../../../redux/requiredForFetchSlice';
import { addDataDestinations } from '../../../redux/destinationsSlice';
import {formValidation, getDestinations} from '../../../utils';
import axios from 'axios';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col05: {
    flex: 0.5,
  },
  mt10: {
    marginTop: 10,
  },
  margin: {
    marginTop: 12,
    marginHorizontal: 12,
  },
});

const SearchCard = ({action}) => {
  const dispatch = useDispatch();
  const [query, onChangeQuery] = useState('');
  const [guest, onChangeGuest] = useState('');
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  const onChangeCheckIn = value => {
    dispatch(getCheckIn(value));
    setCheckIn(value);
  };
  const onChangeCheckOut = value => {
    dispatch(getCheckOut(value));
    setCheckOut(value);
  };

  console.log(query);

  const searchHandle = () => {
    try {
      formValidation(query, checkIn, checkOut, guest);
      action.setLabel('Search Result');
      dispatch(setSearch(undefined));

      const options = getDestinations(query);
      axios.request(options).then(res => {
        const destinations = res.data.suggestions;
        dispatch(addDataDestinations(destinations));
      });
      dispatch(getGuest(guest));
      dispatch(getQuery(query));
    } catch (e) {
      ToastAndroid.show(e.message, ToastAndroid.LONG);
    }
  };

  return (
    <SafeAreaView style={styles.margin}>
      <CardBox shadow padding>
        <InputFields
          placeHolder={'Where do you want to go?'}
          inlineIcon={'ic_magnifying_glass'}
          value={query}
          onChangeText={onChangeQuery}
        />
        <SafeAreaView style={styles.row}>
          <View style={styles.col05}>
            <InputDatePicker
              placeHolder={'Check-in Date'}
              action={onChangeCheckIn}
            />
          </View>
          <View style={styles.col05}>
            <InputDatePicker
              placeHolder={'Check-out Date'}
              action={onChangeCheckOut}
            />
          </View>
        </SafeAreaView>
        <InputFields
          placeHolder={'Guest'}
          number
          inlineIcon={'ic_avatar'}
          value={guest}
          onChangeText={onChangeGuest}
        />
        <SafeAreaView style={styles.mt10}>
          <Button title="Search" onPress={() => searchHandle()} />
        </SafeAreaView>
      </CardBox>
    </SafeAreaView>
  );
};

export default SearchCard;
