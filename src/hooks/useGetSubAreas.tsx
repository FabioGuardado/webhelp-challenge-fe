import { useEffect, useState, useCallback } from 'react';
import { getSubAreas } from '../api/subAreas';
import SubAreaDto from '../types/SubAreaDto';

const useGetSubAreas = (areaId: number) => {
  const [subAreas, setSubAreas] = useState<SubAreaDto[] | undefined>(undefined);

  const getData = useCallback(async () => {
    const { data } = await getSubAreas(areaId);
    setSubAreas(data);
  }, [areaId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return subAreas;
};

export default useGetSubAreas;
