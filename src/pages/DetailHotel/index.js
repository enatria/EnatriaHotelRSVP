/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  AppBar,
  Gap,
  ListRoomTypes,
  CardReview,
  SubTitle,
} from '../../components';
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

              <View style={styles.rating}>
                <Rating
                  type="custom"
                  fractions={1}
                  startingValue={3.6}
                  readonly
                  imageSize={15}
                  tintColor="black"
                  // onFinishRating={ratingCompleted}
                />
              </View>
            </View>
            <View style={styles.price}>
              <Text style={styles.textPrice}>$250</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <SubTitle title="Overview" iya />
          <Text style={styles.overview}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit unde beatae, praesentium tenetur eaque, sint accusantium
            impedit expedita necessitatibus quos minus nisi voluptatibus dicta
            repellendus ea voluptatum sunt nihil!
          </Text>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <SubTitle title="Room Types" />
          <ListRoomTypes />
        </View>
      </View>
      <View style={styles.review}>
        <SubTitle title="Review" />
        <CardReview />
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    color: colors.text.info,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  rating: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  price: {
    padding: 9,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textPrice: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  overview: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
    letterSpacing: 1,
  },
  review: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
