/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Pressable, Text, StyleSheet, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {CardResultHotel} from '../..';
import { getHotelId, getImage } from '../../../redux/requiredForFetchSlice';
import { formValidation } from '../../../utils/globalFunc';

const HotelWishlist = ({navigation}) => {
  const data = useSelector(state => state.hotel.favourites);
  const {query, checkIn, checkOut, guest} = useSelector(state => state.requiredForFetch);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => {
        try {
          formValidation(query, checkIn, checkOut, guest);
          navigation.navigate('Details');
          dispatch(getHotelId(item.id));
          dispatch(getImage(item.image));
        } catch (e) {
          ToastAndroid.show(e.message, ToastAndroid.LONG);
        }
      }}>
        <CardResultHotel
          name={item.name}
          rating={item.starRating}
          address={item.address}
          price={item.price}
          isFavourite={item.isFavourite}
          navigation={navigation}
          image={item.image}
          id={item.id}
        />
      </Pressable>
    );
  };

  const styles = StyleSheet.create({
    noDataFav: {
      alignSelf: 'center',
      margin: 10,
      fontSize: 16,
      fontFamily: 'Poppins',
    },
  });

  return (
    <SafeAreaView>
      {data === undefined || data.length < 1  ?
        <Text style={styles.noDataFav}>Data masih kosong</Text> :
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> }
    </SafeAreaView>
  );
};

export default HotelWishlist;
