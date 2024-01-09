import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useDeleteEmployee from '../../../hooks/useDeleteEmployee';

type Props = {
  isModalOpen: boolean;
  employeeId: number;
  handleClose: () => void;
};

const DeleteConfirmationModal = ({
  isModalOpen,
  employeeId,
  handleClose,
}: Props) => {
  const navigate = useNavigate();
  const { deleteEmployee } = useDeleteEmployee();

  const handleClick = async () => {
    await deleteEmployee(employeeId);
    navigate(0);
  };

  return (
    <Dialog open={isModalOpen} onClose={handleClose}>
      <DialogTitle>Delete Employee</DialogTitle>
      <DialogContent>
        <Stack>
          <Typography>
            Are you sure you want to delete this employee?
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ marginTop: '1rem' }}
        >
          <Button
            variant="outlined"
            sx={{ width: '150px', borderRadius: '25px', fontWeight: '600' }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ width: '150px', borderRadius: '25px', fontWeight: '600' }}
            onClick={handleClick}
          >
            Confirm
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
