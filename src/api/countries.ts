import baseClient from './baseClient';

import ENDPOINTS from '../constants/endpoints';

const { getCountries } = ENDPOINTS;

export const getAllCountries = async () => {
  const response = await baseClient.get(getCountries);
  return response;
};
