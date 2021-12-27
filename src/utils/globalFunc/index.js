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
