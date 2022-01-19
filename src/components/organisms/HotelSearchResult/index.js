/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect } from 'react';
import {FlatList, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import {CardResultHotel, Loading} from '../..';
import { getHotels } from '../../../utils/apiService';
import {useDispatch} from 'react-redux';
import {getHotelId, getImage} from '../../../redux/requiredForFetchSlice';
import { addDataHotel } from '../../../redux/hotelSlice';

const HotelSearchResult = ({navigation}) => {
  const hotels = useSelector(state => state.hotel.items);
  const {destinationId, checkIn, checkOut, guest} = useSelector(state => state.requiredForFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      checkin_date: checkIn,
      checkout_date: checkOut,
      destination_id: destinationId,
      adults_number: guest,
    };
    const options = getHotels(params);

    axios
    .request(options)
    .then(function (response) {
      const data = response.data.searchResults.results;
      const hotel = data.map(item => {
        return {
          ...item,
          address: `${item.address.streetAddress}, ${item.address.locality}`,
          price: item.ratePlan.price.current,
          image: {
            uri: item.optimizedThumbUrls.srpDesktop,
          },
        };
      });
      dispatch(addDataHotel(hotel));
    })
    .catch(function (error) {
      console.error(error);
    });
  }, [checkIn, checkOut, destinationId, guest, dispatch]);

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => {
        navigation.navigate('Details');
        dispatch(getHotelId(item.id));
        dispatch(getImage(item.image));
      }}>
        <CardResultHotel
          name={item.name}
          rating={item.starRating}
          address={item.address}
          price={item.price}
          navigation={navigation}
          isFavourite={item.isFavourite}
          image={item.image}
          id={item.id}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      {hotels === null || hotels === undefined || hotels.length < 1 ?
      <Loading /> :
      <FlatList
        data={hotels}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />}
    </SafeAreaView>
  );
};

export default HotelSearchResult;
