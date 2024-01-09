import EmployeeCreationDto from '../types/EmployeeCreationDto';

import { createEmployee, editEmployee } from '../api/employees';
import { CreateEditModalAction } from '../types/CreateEditModalAction';

const useCreateEditEmployee = () => {
  const executeRequest = async (
    action: CreateEditModalAction | undefined,
    employee: EmployeeCreationDto,
  ) => {
    try {
      if (action === undefined) {
        return;
      }

      let response;
      if (action === 'create') {
        response = await createEmployee(employee);
      } else {
        response = await editEmployee(employee);
      }

      return response?.status;
    } catch (error) {
      console.error(error);
    }
  };

  return { executeRequest };
};

export default useCreateEditEmployee;
