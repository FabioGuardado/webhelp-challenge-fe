import { AppBar, Stack, Toolbar, Typography } from '@mui/material';

import ROUTES from '../../../constants/routes';

import NavLink from './NavLink';

import webhelpLogo from '../../../assets/webhelp-logo.png';

const Navbar = () => {
  return (
    <AppBar
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #e9e9e9',
        boxShadow: 'none',
        color: 'black',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack direction="row" alignItems="center">
          <img src={webhelpLogo} alt="webhelp logo" height="60px" />
          <Typography variant="h5">Employees Management</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '200px' }}
        >
          <NavLink to={ROUTES.HOMEPAGE}>Home</NavLink>
          <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
