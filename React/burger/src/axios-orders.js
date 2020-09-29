import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-a5832.firebaseio.com/',
});

export default instance;
