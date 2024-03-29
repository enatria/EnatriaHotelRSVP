/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import ava from '../../../assets/icon/avatar.png';
import {colors} from '../../../utils';
import {useSelector} from 'react-redux';
const Profile = () => {
  const user = useSelector(state => state.hotel.user);
  const {favourites, booked} = useSelector(state => state.hotel);
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.imageContainer}>
          <Image source={ava} style={styles.image} />
        </View>
        <View style={styles.user}>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.userSocial}>@{user?.username}</Text>
        </View>
      </View>
      <View style={styles.recap}>
        <View>
          <Text style={styles.title}>Bookings</Text>
          <Text style={styles.num}>{booked.length}</Text>
        </View>
        <View>
          <Text style={styles.title}>Reviews</Text>
          <Text style={styles.num}>20</Text>
        </View>
        <View>
          <Text style={styles.title}>Favorites</Text>
          <Text style={styles.num}>{favourites.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    backgroundColor: colors.primary,
    width: 90,
    height: 90,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    alignSelf: 'center',
    width: 60,
    height: 60,
  },
  user: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userName: {
    textAlign: 'center',
    fontSize: 22,
    color: colors.dark,
    fontFamily: 'Poppins-SemiBold',
  },
  userSocial: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.secondary,
    fontFamily: 'Poppins-Medium',
  },

  recap: {
    padding: 20,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: colors.dark,
  },
  num: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: colors.secondary,
  },
});
