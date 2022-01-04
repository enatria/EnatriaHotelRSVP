/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  AppBar,
  Gap,
  ListRoomTypes,
  CardReview,
  SubTitle,
  CardAmenities,
  Button,
} from '../../components';
import {Rating} from 'react-native-ratings';
import {colors, useGetDetails} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const image = {
  uri: 'https://exp.cdn-hotels.com/hotels/1000000/530000/523700/523615/fc6a3e32_z.jpg',
};

const DetailHotel = () => {
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const params = {
    adults_number: '1',
    checkin_date: '2022-03-26',
    hotel_id: '363464',
    checkout_date: '2022-03-27',
  };

  const {detail} = useGetDetails(params);

  console.log('detail', detail);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <AppBar
          backArrow
          hiddenStatusBar
          label={'Hotel Detail'}
          bg="transparent"
        />
        <Gap height={70} />
        <View style={styles.content}>
          <Text style={styles.title}>{detail?.name}</Text>
          <View style={styles.subContent}>
            <View>
              <Text style={styles.location}>
                {detail?.address?.fullAddress}
              </Text>

              <View style={styles.rating}>
                <Rating
                  type="custom"
                  fractions={1}
                  startingValue={detail?.starRating}
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
      <ScrollView>
        <View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <SubTitle title="Overview" iya />
            <Text style={styles.overview}>{detail?.tagline[0]}</Text>
          </View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <SubTitle title="Amenities" />
            <CardAmenities />
            <CardAmenities />
          </View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <SubTitle title="Room Types" />
            <ListRoomTypes room={detail?.roomTypeNames} />
          </View>
        </View>
        <View style={styles.review}>
          <SubTitle title="Review" />
          <CardReview />
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 20}}>
        <Button
          title="Book Hotel"
          onPress={() => navigation.navigate('Booking')}
        />
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
    fontSize: 18,
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
