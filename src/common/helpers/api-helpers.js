const axios = require('axios');

import { encodeParams } from './helpers';

export const baseURL = 'https://staging.spot2.mx';

export const headers = { 'Authorization': `Bearer 19|zmderMoyx4O4BHN9wHq8Cbc5rgswjROl0TUHaQav`};

const instance = axios.create({
  baseURL,
  headers
});


const getSpots = () => instance.get(`/api/spots`);

export {
  getSpots
};