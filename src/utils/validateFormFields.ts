import EmployeeCreationDto from '../types/EmployeeCreationDto';

export const areFormFieldsValid = (formData: EmployeeCreationDto): boolean => {
  if (
    formData.firstName.replace(' ', '').length &&
    formData.lastNames.replace(' ', '').length &&
    formData.documentTypeId &&
    formData.documentNumber.replace(' ', '').length &&
    formData.hiringDate.replace(' ', '').length &&
    formData.countryId &&
    formData.areaId &&
    formData.subAreaId
  ) {
    return true;
  }

  return false;
};
