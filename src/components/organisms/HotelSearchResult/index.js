/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FlatList, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import {CardResultHotel} from '../..';
import { getHotels } from '../../../utils/apiService';

const HotelSearchResult = ({navigation}) => {
  const [hotels, setHotels] = useState();
  const {destinationId, checkIn, checkOut, guest} = useSelector(state => state.requiredForFetch);

  const exampleApiResponse = {
    address: {
      streetAddress: 'Sadovnicheskaya 20 str. 1',
      locality: 'Moscow',
    },
    ratePlan: {
      price: {
        current: '$279',
      },
    },
  };

  useEffect(() => {
    const params = {
      checkin_date: checkIn,
      checkout_date: checkOut,
      destination_id: destinationId,
      adults_number: guest,
    };
    // const response = getHotels(params);
    // setHotels(response);
    const options = getHotels(params);

    axios
    .request(options)
    .then(function (response) {
      console.log(response.data.searchResults.results);
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
      setHotels(hotel);
    })
    .catch(function (error) {
      console.error(error);
    });
  }, [checkIn, checkOut, destinationId, guest]);

  console.log('destinationId :', destinationId);
  console.log('data hotels :', hotels);


  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate('Details')}>
        <CardResultHotel
          name={item.name}
          rating={item.starRating}
          address={item.address}
          price={item.price}
          navigation={navigation}
          isFavourites={item.isFavourite}
          image={item.image}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={hotels}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HotelSearchResult;
