/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBar, Button, LoginFirst} from '../../components';
import CardInformation from '../../components/molecules/CardInformation';
import CardPriceSummary from '../../components/molecules/CardPriceSummary';
import {bookingHotel} from '../../redux/hotelSlice';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {useGetDetails} from '../../utils';

const Booking = () => {
  const dispatch = useDispatch();
  const {checkIn, checkOut, hotelId, guest, image} = useSelector(
    state => state.requiredForFetch,
  );

  const user = useSelector(state => state.hotel.user);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const params = {
    adults_number: guest,
    checkin_date: checkIn,
    hotel_id: hotelId,
    checkout_date: checkOut,
  };

  const {details} = useGetDetails(params);

  const totalPrice = details?.featuredPrice?.currentPrice?.plain * guest;

  const handleCheckout = detail => {
    if (user !== null) {
      console.log(detail);
      dispatch(
        bookingHotel({
          id: hotelId,
          hotel: detail?.name,
          location: detail?.address?.addressLine1,
          photo: image,
          price: detail?.featuredPrice?.currentPrice?.formatted,
          rating: detail?.starRating,
        }),
      );
      navigation.navigate('Profile');
    } else {
      navigation.navigate('SignIn');
    }
  };
  return (
    <View>
      <AppBar backArrow label={'Book Now'} />
      {user !== null ? (
        <View style={styles.section}>
          <View>
            <CardInformation />
            <CardPriceSummary
              detail={details}
              guest={guest}
              totalPrice={totalPrice}
            />
          </View>
          <View style={styles.button}>
            <Button title={'Checkout'} onPress={() => handleCheckout(details)} />
          </View>
        </View>
      ) : (
        <LoginFirst />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Booking;
