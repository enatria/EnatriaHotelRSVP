import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {Gap} from '../..';
import ava from '../../../assets/icon/avatar.png';
import {colors} from '../../../utils';

const CardBookHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={ava} style={styles.image} />
      </View>

      <View style={styles.summary}>
        <Text style={styles.hotel}>Garden Hotel</Text>
        <Text style={styles.location}>San, Bruno</Text>

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
      <Gap width={80} />
      <View>
        <View>
          <Text style={styles.price}>$200</Text>
        </View>
      </View>
    </View>
  );
};

export default CardBookHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 15,
    border: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#0001',
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 60,
    height: 60,
  },
  summary: {
    marginHorizontal: 20,
  },
  hotel: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: colors.dark,
  },
  location: {
    fontSize: 15,
    lineHeight: 30,
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
