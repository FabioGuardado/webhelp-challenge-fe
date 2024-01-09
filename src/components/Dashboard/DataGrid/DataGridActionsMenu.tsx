import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import useCreateEditModalContext from '../../../hooks/useCreateEditModalContext';

import EmployeeDto from '../../../types/EmployeesDto';

import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

type Props = {
  open: boolean;
  anchorEl: null | HTMLElement;
  employee: EmployeeDto;
  handleClose: () => void;
};

const DataGridActionsMenu = ({
  open,
  employee,
  handleClose,
  ...props
}: Props) => {
  const { openModal } = useCreateEditModalContext();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    openModal('edit', employee);
    handleClose();
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <Menu
      open={open}
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleClose}
      {...props}
    >
      <MenuItem onClick={handleEditClick} disableRipple>
        <EditIcon sx={{ marginRight: '0.5rem' }} />
        Edit
      </MenuItem>

      <MenuItem onClick={handleDeleteClick} disableRipple>
        <DeleteIcon sx={{ marginRight: '0.5rem' }} />
        Delete
      </MenuItem>

      <DeleteConfirmationModal
        isModalOpen={isDeleteModalOpen}
        handleClose={handleDeleteClick}
        employeeId={employee.id}
      />
    </Menu>
  );
};

export default DataGridActionsMenu;
