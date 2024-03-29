/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import {CardBox} from '../..';
import {icons} from '../../../assets';
import { favouriteHotelToggle } from '../../../redux/hotelSlice';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  container: {marginHorizontal: 12, marginTop: 12},
  hotelImg: {borderRadius: 10, height: 160},
  favBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    position: 'absolute',
    top: -160,
  },
  detailBar: {backgroundColor: 'white', padding: 12, borderRadius: 10},
});

// const image = {
//   uri: 'https://exp.cdn-hotels.com/hotels/1000000/530000/523700/523615/fc6a3e32_z.jpg',
// };

const CardResultHotel = ({id, name, rating, address, price, isFavourite, image}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <CardBox shadow>
        <Image source={image} style={styles.hotelImg} />
        <View style={{flexDirection: 'row-reverse'}}>
          <TouchableOpacity style={styles.favBtn} onPress={
            () => {
              console.log('fav ditekan');
              dispatch(favouriteHotelToggle({id, isFavourite}));
            }
          }>
            <Image source={isFavourite ? icons.HEART_RED : icons.HEART} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailBar}>
          <Text style={styles.title}>{name}</Text>
          <Rating
            type="custom"
            fractions={1}
            startingValue={rating}
            readonly
            imageSize={12}
            style={{alignSelf: 'flex-start', marginBottom: 3}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={icons.PLACE} style={{height: 10, width: 10}} />
            <Text style={{fontSize: 10}}>{address}</Text>
          </View>
          <View style={{position: 'absolute', width: '100%'}}>
            <View
              style={{alignSelf: 'flex-end', alignItems: 'center', top: 15}}>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 20,
                  fontFamily: 'Poppins-Bold',
                  fontWeight: 'bold',
                }}>
                {price}
              </Text>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>
                /per night
              </Text>
            </View>
          </View>
        </View>
      </CardBox>
    </SafeAreaView>
  );
};

export default CardResultHotel;

CardResultHotel.defaultProps = {
  name: 'Test',
  rating: 3.6,
  address: 'Address',
  price: '$ 250',
};
