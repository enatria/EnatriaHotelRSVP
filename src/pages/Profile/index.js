/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Profile as Profil,
  AppBar,
  CardBookHistory,
  LoginFirst,
} from '../../components';
import {colors} from '../../utils';
import {useSelector} from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.hotel.user);

  const {hotelId, image} = useSelector(state => state.requiredForFetch);

  const booked = useSelector(state => state.hotel.booked);

  console.log('booked', booked);
  return (
    <>
      <AppBar backArrow label="Profile" />
      <View style={styles.container}>
        {user !== null ? (
          <>
            <Profil />
            {booked?.map(item => {
              console.log(item);
              return <CardBookHistory item={item} />;
            })}
          </>
        ) : (
          <LoginFirst />
        )}
      </View>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
});
