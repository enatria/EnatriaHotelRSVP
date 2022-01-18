/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinationId, getHotelId, setSearch } from '../../../redux/requiredForFetchSlice';
import { formValidation } from '../../../utils';
import { TopDestination, TopDestinationWithBg } from '../../molecules';

const SlideTopDestination = ({label, item, bg}) => {
  const styles = StyleSheet.create({
    margin: {
      marginTop: 12,
    },
    label: {
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      marginTop: 12,
      marginHorizontal: 12,
    },
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {query, checkIn, checkOut, guest} = useSelector(state => state.requiredForFetch);

  const onPressHandler = (destinationId) => {
    try {
      formValidation(query, checkIn, checkOut, guest);
      dispatch(getDestinationId(destinationId));
      dispatch(setSearch(1));
    } catch (e) {
      ToastAndroid.show(e.message, ToastAndroid.LONG);
    }
  };

  const onPressHotelGroupHandler = (hotelId) => {
    dispatch(getHotelId(hotelId));
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView>
      <Text style={styles.label}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.margin}>
        {item.map(i => (
          <TouchableOpacity onPress={() => {
            if (label === 'HOTEL GROUP') {
              onPressHotelGroupHandler(i.destinationId);
            } else {
              onPressHandler(i.destinationId);
            }
          }} key={i.destinationId}>
            {bg ?
            <TopDestinationWithBg
              slide
              name={i.name}
              image={i.image} />
            :
            <TopDestination
              slide
              name={i.name} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlideTopDestination;
