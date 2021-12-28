import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = authRes => {
  AsyncStorage.setItem('token', JSON.stringify(authRes.token));
};

export const removeTokens = () => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('admin');
};
export const getAccessToken = () => AsyncStorage.getItem('token')?.slice(1, -1);
export const getUser = () => AsyncStorage.getItem('user');
export const setUser = user =>
  AsyncStorage.setItem('user', JSON.stringify(user));
