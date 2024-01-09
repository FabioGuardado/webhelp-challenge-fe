import { DataGrid } from '@mui/x-data-grid';

import { getDataGridColumns } from '../../../constants/dataGrid';

import EmployeeDto from '../../../types/EmployeesDto';

type Props = {
  employeesData: EmployeeDto[] | [];
};

const DashboardDataGrid = ({ employeesData }: Props) => {
  return (
    <DataGrid
      rows={employeesData}
      columns={getDataGridColumns()}
      pagination={undefined}
      hideFooter
      sx={{
        border: 'none',
        boxShadow: 'none',
        '.MuiDataGrid-columnHeaderTitle': { fontWeight: 700 },
      }}
    />
  );
};

export default DashboardDataGrid;
