import axios from 'axios';

export const CancelToken = axios.CancelToken;
const http = axios.create({
  baseURL: process.env.NEXT_APP_API_BASE_URL
  // timeout: 30000,  // 30 detik
  // timeoutErrorMessage: 'Request Timeout'
});

http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
http.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

// request middleware
http.interceptors.request.use(
  config => {
    // console.log(
    //   '%cinterceptor.request.config: ',
    //   'background-color: gold; color: black; font-weight: bold',
    //   config)
    // taruh global validation disini
    return config
  },
  error => {
    // console.log(
    //   '%cinterceptor.request.error: ',
    //   'background-color: gold; color: black; font-weight: bold',
    //   error)
    return Promise.reject(error)
  }
)

// response middleware
http.interceptors.response.use(
  response => {
    // console.log(
    //   '%cinterceptor.response.response: ',
    //   'background-color: fuchsia; color: white; font-weight: bold',
    //   response)
    return response
  },
  error => {
    console.log(
      '%cinterceptor.response.error: ',
      'background-color: fuchsia; color: white; font-weight: bold',
      error)
    return Promise.reject(error)
  })

export default http;