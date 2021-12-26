/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CardResultHotel} from '../..';

const HotelWishlist = ({navigation}) => {
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

  const data = [
    {
      id: '676613',
      name: 'Sadovnicheskaya Hotel',
      address: `${exampleApiResponse.address.streetAddress}, ${exampleApiResponse.address.locality}`,
      starRating: 5,
      price: exampleApiResponse.ratePlan.price.current,
    },
    {
      id: '676614',
      name: 'Sadovnicheskaya Hotel 2',
      address: `${exampleApiResponse.address.streetAddress}, ${exampleApiResponse.address.locality}`,
      starRating: 3.5,
      price: exampleApiResponse.ratePlan.price.current,
    },
    {
      id: '676615',
      name: 'Sadovnicheskaya Hotel 3',
      address: `${exampleApiResponse.address.streetAddress}, ${exampleApiResponse.address.locality}`,
      starRating: 3.6,
      price: exampleApiResponse.ratePlan.price.current,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate('Details')}>
        <CardResultHotel
          name={item.name}
          rating={item.starRating}
          address={item.address}
          price={item.price}
          navigation={navigation}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HotelWishlist;
