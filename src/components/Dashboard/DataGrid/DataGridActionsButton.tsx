import { useState } from 'react';

import { Box, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DataGridActionsMenu from './DataGridActionsMenu';
import EmployeeDto from '../../../types/EmployeesDto';

type Props = {
  employee: EmployeeDto;
};

const DataGridActionsButton = ({ employee }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isSubMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button onClick={handleClick}>
        <MoreVertIcon />
      </Button>
      <DataGridActionsMenu
        open={isSubMenuOpen}
        anchorEl={anchorEl}
        employee={employee}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default DataGridActionsButton;
