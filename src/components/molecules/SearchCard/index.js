/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, CardBox, InputDatePicker, InputFields} from '../..';
import {useDispatch} from 'react-redux';
import {
  getCheckIn,
  getCheckOut,
  getGuest,
  setSearch,
} from '../../../redux/requiredForFetchSlice';
import {addDataDestinations} from '../../../redux/destinationsSlice';
import {getDestinations} from '../../../utils';
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

  const onChangeCheckIn = value => {
    dispatch(getCheckIn(value));
  };
  const onChangeCheckOut = value => {
    dispatch(getCheckOut(value));
  };

  console.log(query);

  const searchHandle = async () => {
    action.setLabel('Search Result');
    dispatch(setSearch(undefined));

    const options = getDestinations(query);
    try {
      await axios.request(options).then(res => {
        console.log('res', res);
        const destinations = res.data.suggestions;
        console.log('des', destinations);
        dispatch(addDataDestinations(destinations));
      });
    } catch (e) {
      console.log('error', e);
    }
    dispatch(getGuest(guest));
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
