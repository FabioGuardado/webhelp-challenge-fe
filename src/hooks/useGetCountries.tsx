import { useEffect, useState } from 'react';
import { getAllCountries } from '../api/countries';
import CountryDto from '../types/CountryDto';

const useGetCountries = () => {
  const [countries, setCountries] = useState<CountryDto[] | undefined>(
    undefined,
  );

  const getData = async () => {
    const { data } = await getAllCountries();
    setCountries(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return countries;
};

export default useGetCountries;
