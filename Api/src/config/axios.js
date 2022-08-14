const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com/users/takenet',
});

api.interceptors.response.use((response) => response,
  (error) => Promise.reject(error));

module.exports = api;
