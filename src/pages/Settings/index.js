/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {AppBar} from '../../components';
import SettingsCard from '../../components/molecules/SettingsCard';

const Settings = () => {
  return (
    <View>
      <AppBar backArrow label={'Settings'} />
      <SettingsCard />
    </View>
  );
};

export default Settings;
