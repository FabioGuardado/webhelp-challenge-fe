import AreaDto from './AreaDto';
import CountryDto from './CountryDto';
import DocumentTypeDto from './DocumentTypeDto';
import SubAreaDto from './SubAreaDto';

type EmployeeDto = {
  id: number;
  firstName: string;
  lastNames: string;
  documentType: DocumentTypeDto;
  documentNumber: string;
  hiringDate: Date;
  country: CountryDto;
  area: AreaDto;
  subArea: SubAreaDto;
};

export default EmployeeDto;
