/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import {AppBar, Gap, Avatar, CardReview} from '../../components';
import {Rating} from 'react-native-ratings';
import {colors} from '../../utils';

const image = {
  uri: 'https://reactjs.org/logo-og.png',
};

const DetailHotel = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <AppBar label={'Hotel Detail'} bg="transparent" />
        <Gap height={90} />
        <View style={styles.content}>
          <Text style={styles.title}>Rose Garden Hotel</Text>
          <View style={styles.subContent}>
            <View>
              <Text style={styles.location}>San, Bruno</Text>

              <Rating
                type="custom"
                fractions={1}
                startingValue={3.6}
                readonly
                imageSize={20}
                tintColor="black"
                // onFinishRating={ratingCompleted}
                style={styles.rating}
              />
            </View>
            <View>
              <Text>$250</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <CardReview />
    </View>
  );
};

export default DetailHotel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  content: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 36,
    lineHeight: 70,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
  },
  subContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  location: {
    color: colors.text.info,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  rating: {
    backgroundColor: 'transparent',
  },
});
