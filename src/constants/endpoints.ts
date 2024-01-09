const ENDPOINTS = {
  getAllEmployees: (page: number, pageSize: number, searchString?: string) =>
    `/Employees?PageNumber=${page}&PageSize=${pageSize}${
      searchString ? `&SearchString=${searchString}` : ''
    }`,
  postEmployee: '/Employees',
  putEmployee: (employeeId: number) => `/Employees/${employeeId}`,
  deleteEmployee: (employeeId: number) => `/Employees/${employeeId}`,
  getCountries: '/Countries',
  getDocumentTypes: '/DocumentTypes',
  getAreasByCountryId: (countryId: number) => `/Areas?CountryId=${countryId}`,
  getSubAreasByAreaId: (areaId: number) => `/SubAreas?AreaId=${areaId}`,
};

export default ENDPOINTS;
