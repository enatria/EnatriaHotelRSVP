import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = authRes => {
  AsyncStorage.setItem('token', JSON.stringify(authRes.token));
};

export const removeTokens = () => {
  AsyncStorage.removeItem('token');
};
export const getUser = () => AsyncStorage.getItem('user');
