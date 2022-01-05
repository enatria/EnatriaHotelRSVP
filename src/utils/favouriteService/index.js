/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const KEY = 'favourite';

export const getFavourite = async () => {
  // todo
  const value = await AsyncStorage.getItem(KEY);
  return value !== null ? JSON.parse(value) : [];
};
