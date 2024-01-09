import { useState, useEffect, useCallback } from 'react';

import { getEmployees } from '../api/employees';
import PaginatedResponse from '../types/PaginatedResponse';
import EmployeeDto from '../types/EmployeesDto';

const useGetEmployees = (
  page: number,
  pageSize: number,
  searchString?: string | undefined,
) => {
  const [employeesData, setEmployeesData] = useState<
    PaginatedResponse<EmployeeDto> | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getEmployees(page, pageSize, searchString);
      setEmployeesData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { employeesData, isLoading };
};

export default useGetEmployees;
