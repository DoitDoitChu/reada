import axios from 'axios';

const client = axios.create();

/*
  // Global Settings Example
  // Please Listen Axios intercepter use Example : https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da
  
  // Default Api
  client.defaults.baseURL = 'https://localhost:8080/'

  // Header Settings 
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // Intercepter Settings 
  axios.intercepter.response.use(
    response => {
      // Something Action when request Success
      return resonse;
    },
    error => {
      // Something Action when request Failure
      return Promise.reject(error);
    }
  )

*/

export default client;
