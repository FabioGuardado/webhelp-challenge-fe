import { GridColDef } from '@mui/x-data-grid';
import DataGridActionsButton from '../components/Dashboard/DataGrid/DataGridActionsButton';

export const getDataGridColumns = (): GridColDef[] => [
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 200,
  },
  { field: 'lastNames', headerName: 'Last Names', width: 200 },
  {
    field: 'documentType',
    headerName: 'Document Type',
    width: 150,
    valueGetter: params => params.value.name,
  },
  { field: 'documentNumber', headerName: 'Document Number', width: 150 },
  { field: 'hiringDate', headerName: 'Hiring Date', width: 150 },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    valueGetter: params => params.value.name,
  },
  {
    field: 'area',
    headerName: 'Area',
    width: 150,
    valueGetter: params => params.value.name,
  },
  {
    field: 'subArea',
    headerName: 'Sub Area',
    width: 200,
    valueGetter: params => params.value.name,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 90,
    renderCell: params => <DataGridActionsButton employee={params.row} />,
  },
];

export const PAGE_SIZE_OPTIONS = [5, 10, 25];
