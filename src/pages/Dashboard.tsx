import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, Button, Container, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import useGetEmployees from '../hooks/useGetEmployees';

import DashboardDataGrid from '../components/Dashboard/DataGrid/DashboardDataGrid';
import DashboardDataGridPagination from '../components/Dashboard/DataGrid/DashboardDataGridPagination';

export const Dashboard = () => {
  const [searchParams] = useSearchParams();

  const [pageSize, setPageSize] = useState<number>(5);

  const [page] = useState<number>(Number(searchParams.get('page')) || 1);

  const { employeesData } = useGetEmployees(page, pageSize);

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    e?.preventDefault();

    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('page');
    window.location = `/dashboard?page=${
      newPage + 1
    }${currentSearchParams.toString()}` as Location | (string & Location);
  };

  const handleRowsPerPageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => setPageSize(Number(e.target.value));

  return (
    <Container sx={{ marginTop: '5rem' }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: '500' }}>
          List of employees
        </Typography>
        <Button variant="contained">
          <AddIcon sx={{ marginRight: '0.5rem' }} />
          Add Employee
        </Button>
      </Stack>
      <Card sx={{ marginTop: '3rem', bgcolor: '#f9f9f9' }}>
        <DashboardDataGrid employeesData={employeesData?.items || []} />
        <DashboardDataGridPagination
          count={employeesData?.totalCount || 0}
          page={page - 1}
          rowsPerPage={pageSize}
          disableNextButton={!employeesData?.hasNextPage}
          disablePrevButton={!employeesData?.hasPreviousPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Card>
    </Container>
  );
};
