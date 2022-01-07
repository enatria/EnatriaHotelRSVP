import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = authRes => {
  AsyncStorage.setItem('token', JSON.stringify(authRes.token));
};

export const removeUser = () => {
  AsyncStorage.removeItem('user');
};
export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user;
  } catch (e) {
    console.log(e);
  }
};
