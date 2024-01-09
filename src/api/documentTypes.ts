import baseClient from './baseClient';

import ENDPOINTS from '../constants/endpoints';

const { getDocumentTypes } = ENDPOINTS;

export const getAllDocumentTypes = async () => {
  const response = await baseClient.get(getDocumentTypes);
  return response;
};
