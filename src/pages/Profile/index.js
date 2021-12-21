/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { AppBar } from '../../components';

const Profile = () => {
  return (
    <View>
      <AppBar label={'Profile'} />
      <Text>Ini Profile</Text>
    </View>
  );
};

export default Profile;
