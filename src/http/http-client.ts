import axios from 'axios';
const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    
});
http.interceptors.request.use(config => {
    config.params = {
     // add your default ones
     "api_key": process.env.REACT_APP_API_KEY,
     // spread the request's params
      ...config.params,
    };
    return config;
  });
export default http;
