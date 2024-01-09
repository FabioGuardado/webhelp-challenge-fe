import baseClient from './baseClient';

import ENDPOINTS from '../constants/endpoints';

const { getSubAreasByAreaId } = ENDPOINTS;

export const getSubAreas = async (AreaId: number) => {
  const response = await baseClient.get(getSubAreasByAreaId(AreaId));
  return response;
};
