import AsyncStorage from '@react-native-async-storage/async-storage';
const api = `http://145.239.135.178:8000/api/1/`;
// const api1 = `https://digitalfleet.eu/api/2/`;
const token = AsyncStorage.getItem('@storage_Key');

const config = {
  apiUrl: {
    register: `${api}user/register/`,
    login: `${api}oauth/token/`,
    profile: `${api}user/`,
    avatar: `${api}user/edit/user/avatar/`,
    edit: `${api}user/edit/me/`,
    forgetPassword: `${api}users/sendForgottenPasswordEmail/`,
    passwordChnage: `${api}users/update-password/`,
  },
  blog: {
    blog_list: `${api}blog/`,
    user_blog_list: `${api}user/blog/`,
  },

  head: {
    method: 'GET',
    headers: {
      //"X-Frame-Options": "SAMEORIGIN",
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  },
};

export default config;
