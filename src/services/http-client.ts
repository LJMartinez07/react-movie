import axios from 'axios';
const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
http.defaults.params = {};
http.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;
export default http;
