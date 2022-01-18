/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {getHotelId, getImage} from '../../redux/requiredForFetchSlice';

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
  CardAmenities,
  Button,
} from '../../components';
import {Rating} from 'react-native-ratings';
import {colors, useGetDetails} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const DetailHotel = () => {
  const dispatch = useDispatch();
  const {checkIn, checkOut, hotelId, guest, image} = useSelector(
    state => state.requiredForFetch,
  );
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const params = {
    adults_number: guest,
    checkin_date: checkIn,
    hotel_id: hotelId,
    checkout_date: checkOut,
  };

  const {detail} = useGetDetails(params);

  const filteredReviews = detail?.groupReview[0];
  console.log('detail', filteredReviews);
  console.log(image);
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
          <Text style={[styles.title, styles.textShadow('#000')]}>
            {detail?.name}
          </Text>
          <View style={styles.subContent}>
            <View>
              <Text style={[styles.location, styles.textShadow('#000')]}>
                {detail?.address?.cityName},{detail?.address?.countryName}
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
              <Text style={styles.textPrice}>
                {detail?.featuredPrice?.currentPrice?.formatted}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <SubTitle title="Overview" iya />
            <Text style={styles.overview}>
              {detail?.tagline[0].slice(3, -4)}
            </Text>
          </View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <SubTitle title="Amenities" />
            {detail?.amenities?.map(item => (
              <CardAmenities item={item} key={item.heading} />
            ))}
          </View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <SubTitle title="Room Types" />
            <ListRoomTypes room={detail?.roomTypeNames} />
          </View>
        </View>
        <View style={styles.review}>
          <SubTitle title="Review" />
          {filteredReviews?.reviews?.slice(0, 5).map(item => (
            <CardReview item={item} key={item.heading} />
          ))}
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 20}}>
        <Button
          title="Book Hotel"
          onPress={() => {
            navigation.navigate('Booking');
            dispatch(getHotelId(detail?.header?.hotelId));
            dispatch(getImage(image));
          }}
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
    fontSize: 22,
    // lineHeight: 70,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
  },
  textShadow: color => ({
    textShadowColor: color,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6.27,

    elevation: 10,
  }),
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
    width: 100,
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
