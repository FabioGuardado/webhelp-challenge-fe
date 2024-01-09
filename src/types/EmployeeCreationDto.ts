type EmployeeCreationDto = {
  id?: number;
  firstName: string;
  lastNames: string;
  documentTypeId: number;
  documentNumber: string;
  hiringDate: string;
  countryId: number;
  areaId: number;
  subAreaId: number;
};

export default EmployeeCreationDto;
