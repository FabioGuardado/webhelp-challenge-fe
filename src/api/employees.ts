import baseClient from './baseClient';

import ENDPOINTS from '../constants/endpoints';

import EmployeeCreationDto from '../types/EmployeeCreationDto';

const { getAllEmployees, postEmployee, putEmployee, deleteEmployee } =
  ENDPOINTS;

export const getEmployees = async (
  page: number = 1,
  pageSize: number = 5,
  searchString?: string,
) => {
  const employeesUrl = getAllEmployees(page, pageSize, searchString);
  const response = await baseClient.get(employeesUrl);

  return response.data;
};

export const createEmployee = async (employee: EmployeeCreationDto) => {
  const formattedData = JSON.stringify({ incomingEmployee: employee });
  const response = await baseClient.post(postEmployee, formattedData);

  return response;
};

export const editEmployee = async (employee: EmployeeCreationDto) => {
  if (employee.id) {
    const putEmployeeUrl = putEmployee(employee.id);
    const formattedData = JSON.stringify({ incomingEmployee: employee });
    const response = await baseClient.put(putEmployeeUrl, formattedData);

    return response;
  }
};

export const removeEmployee = async (employeeId: number) => {
  const deleteEmployeeUrl = deleteEmployee(employeeId);
  const response = await baseClient.delete(deleteEmployeeUrl);

  return response;
};
