/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { AppBar } from '../../components';

const Settings = () => {
  return (
    <View>
      <AppBar label={'Settings'} />
      <Text>Ini Settings</Text>
    </View>
  );
};

export default Settings;