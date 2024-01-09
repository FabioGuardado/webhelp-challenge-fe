import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, Button, Container, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import useGetEmployees from '../hooks/useGetEmployees';

import DashboardDataGrid from '../components/Dashboard/DataGrid/DashboardDataGrid';
import DashboardDataGridPagination from '../components/Dashboard/DataGrid/DashboardDataGridPagination';

import CreateEditModal from '../components/Dashboard/CreateEditModal/CreateEditModal';
import useCreateEditModalContext from '../hooks/useCreateEditModalContext';
import SearchBar from '../components/Dashboard/SearchBar/SearchBar';
import Layout from '../components/UI/Layout/Layout';

export const Dashboard = () => {
  const [searchParams] = useSearchParams();

  const [pageSize] = useState<number>(
    Number(searchParams.get('pageSize')) || 5,
  );

  const [page] = useState<number>(Number(searchParams.get('page')) || 1);

  const [searchString] = useState<string | undefined>(
    searchParams.get('searchString') || undefined,
  );

  const { employeesData } = useGetEmployees(page, pageSize, searchString);
  const { openModal } = useCreateEditModalContext();

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    e?.preventDefault();

    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('page');
    currentSearchParams.append('page', `${newPage + 1}`);
    window.location = `/dashboard?${currentSearchParams.toString()}` as
      | Location
      | (string & Location);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete('pageSize');
    currentSearchParams.append('pageSize', event.target.value);
    window.location = `/dashboard?${currentSearchParams.toString()}` as
      | Location
      | (string & Location);
  };

  const handleNewEmployeeClick = () => openModal('create');

  return (
    <Layout>
      <>
        <Container sx={{ marginTop: '120px' }}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h4" sx={{ fontWeight: '600' }}>
              List of employees
            </Typography>
            <Button
              variant="contained"
              onClick={handleNewEmployeeClick}
              sx={{
                boxShadow: 'none',
                borderRadius: '25px',
                fontWeight: '600',
              }}
            >
              <AddIcon sx={{ marginRight: '0.5rem' }} />
              Add Employee
            </Button>
          </Stack>
          <Card
            sx={{
              marginTop: '2rem',
              bgcolor: '#f9f9f9',
              padding: '1rem 2rem',
            }}
          >
            <SearchBar />
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

        <CreateEditModal />
      </>
    </Layout>
  );
};
