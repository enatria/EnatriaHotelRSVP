/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {colors} from '../../../utils';

const CardBookHistory = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          <View style={styles.image}>
            <Image source={item?.photo} style={styles.image} />
          </View>

          <View style={styles.summary}>
            <Text style={styles.hotel}>{item?.hotel}</Text>
            <Text style={styles.location}>{item?.location}</Text>

            <View style={styles.rating}>
              <Rating
                type="custom"
                fractions={1}
                startingValue={5}
                readonly
                imageSize={12}
                tintColor="white"
                ratingBackgroundColor="#c8c7c8"
                // onFinishRating={ratingCompleted}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.price}>{item?.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardBookHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 15,
    marginHorizontal: 15,
    border: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#0001',
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
    width: 60,
    height: 60,
  },
  summary: {
    marginHorizontal: 12,
  },
  hotel: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.dark,
  },
  location: {
    fontSize: 11,
    // lineHeight: 30,
    fontFamily: 'Poppins-Medium',
  },
  rating: {
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    color: colors.secondary,
  },
});
