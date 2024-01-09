import { removeEmployee } from '../api/employees';

const useDeleteEmployee = () => {
  const deleteEmployee = async (employeeId: number) => {
    try {
      const response = await removeEmployee(employeeId);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return { deleteEmployee };
};

export default useDeleteEmployee;
