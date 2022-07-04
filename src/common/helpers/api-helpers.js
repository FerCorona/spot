const axios = require('axios');

import { encodeParams } from './helpers';

export const baseURL = 'http://staging.spot2.mx';

export const headers = { 'Authorization': `Bearer X|YhrV99YWcDm2UOGYYNM6WDcbbwId8R2mfJf3B9BM`};

const instance = axios.create({
  baseURL,
  headers
});


const getSpots = () => instance.post(`/api/spots`);

export {
  getSpots
};