const ENDPOINTS = {
  getAllEmployees: (page: number, pageSize: number, searchString?: string) =>
    `/Employees?PageNumber=${page}&PageSize=${pageSize}${
      searchString ? `&SearchString=${searchString}` : ''
    }`,
};

export default ENDPOINTS;
