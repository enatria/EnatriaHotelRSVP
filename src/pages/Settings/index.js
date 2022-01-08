/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import { useSelector } from 'react-redux';
import {AppBar, LoginFirst} from '../../components';
import SettingsCard from '../../components/molecules/SettingsCard';

const Settings = () => {
  const user = useSelector(state => state.hotel.user);
  const navigation = useNavigation()
  return (
    <View>
      <AppBar backArrow label={'Settings'} />
      {user ?
        <SettingsCard />
      : <LoginFirst />}
    </View>
  );
};

export default Settings;
