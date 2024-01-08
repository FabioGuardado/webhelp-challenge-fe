import { DataGrid } from '@mui/x-data-grid';

import { DASHBOARD_DATA_GRID_COLUMNS } from '../../../constants/dataGrid';
import EmployeeDto from '../../../types/EmployeesDto';

type Props = {
  employeesData: EmployeeDto[] | [];
};

const DashboardDataGrid = ({ employeesData }: Props) => {
  return (
    <DataGrid
      rows={employeesData}
      columns={DASHBOARD_DATA_GRID_COLUMNS}
      pagination={undefined}
      hideFooter
      sx={{ border: 'none' }}
    />
  );
};

export default DashboardDataGrid;
