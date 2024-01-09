import Box from '@mui/material/Box';
import { Theme, SxProps } from '@mui/material/styles';
import TablePagination, {
  TablePaginationProps,
} from '@mui/material/TablePagination';

import { PAGE_SIZE_OPTIONS } from '../../../constants/dataGrid';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
  disableNextButton: boolean;
  disablePrevButton: boolean;
};
const PartidasDataGridPagination = ({
  sx,
  disableNextButton,
  disablePrevButton,
  ...other
}: Props & TablePaginationProps) => {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <TablePagination
        rowsPerPageOptions={PAGE_SIZE_OPTIONS}
        component="div"
        {...other}
        sx={{
          borderTopColor: 'transparent',
        }}
        nextIconButtonProps={{ disabled: disableNextButton }}
        backIconButtonProps={{ disabled: disablePrevButton }}
      />
    </Box>
  );
};

export default PartidasDataGridPagination;
