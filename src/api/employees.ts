import baseClient from './baseClient';

import ENDPOINTS from '../constants/endpoints';

const { getAllEmployees } = ENDPOINTS;

export const getEmployees = async (
  page: number = 1,
  pageSize: number = 5,
  searchString?: string,
) => {
  const employeesUrl = getAllEmployees(page, pageSize, searchString);
  const response = await baseClient.get(employeesUrl);

  return response.data;
};
