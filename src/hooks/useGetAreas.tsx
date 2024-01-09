import { useEffect, useState, useCallback } from 'react';
import { getAreas } from '../api/areas';
import AreaDto from '../types/AreaDto';

const useGetAreas = (countryId: number) => {
  const [areas, setCountries] = useState<AreaDto[] | undefined>(undefined);

  const getData = useCallback(async () => {
    const { data } = await getAreas(countryId);
    setCountries(data);
  }, [countryId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return areas;
};

export default useGetAreas;
