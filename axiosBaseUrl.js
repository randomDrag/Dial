import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { env } from './env';
var headers = {}
const axiosBaseUrl = axios.create({
  baseURL: env.baseUrl,
  // baseURL: 'https://nifty-gagarin.50-21-189-128.plesk.page/',
  headers
})
// Add a request interceptor
axiosBaseUrl.interceptors.request.use(async function (config) {
  // Do something before request is sent
  Object.assign(config.headers, { testHeader: 'This is the tes header' })
  try {
    const user = await AsyncStorage.getItem('userToken');
    if (user !== null) {
      console.log('HERE IN AXIOS BASE URL: ', user)
      Object.assign(config.headers, { Authorization: 'Bearer ' + user })
    }
  }
  catch (err) {
    // error reading value
    console.log('Err while fetching: ', err)
  }
  // console.log(config.headers)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// Add a response interceptor
axiosBaseUrl.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export default axiosBaseUrl