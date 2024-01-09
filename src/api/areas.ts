import baseClient from './baseClient';

import ENDPOINTS from '../constants/endpoints';

const { getAreasByCountryId } = ENDPOINTS;

export const getAreas = async (countryId: number) => {
  const response = await baseClient.get(getAreasByCountryId(countryId));
  return response;
};
