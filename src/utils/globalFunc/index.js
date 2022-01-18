/* eslint-disable prettier/prettier */
import axios from 'axios';

export const Login = async (url = '', auth) => {
  try {
    let res = await axios.post(url, {
      username: auth.username,
      password: auth.password,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const formValidation = (query, checkIn, checkOut, guest) => {
  if (!query || !checkIn || !checkOut || !guest) {
    throw new Error('Form doesn\'t complete!');
  }
};
