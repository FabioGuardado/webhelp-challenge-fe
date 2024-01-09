import { Container, Stack, Typography } from '@mui/material';
import Layout from '../components/UI/Layout/Layout';

import NotFoundImage from '../assets/404.png';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';

export const NotFound = () => {
  return (
    <Layout>
      <Container
        sx={{
          marginTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={NotFoundImage} alt="404" height="200px" />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: '2rem' }}
        >
          <Typography variant="h4">Oops!</Typography>
          <Typography>
            The page you were looking for is not available
          </Typography>
          <Link to={ROUTES.HOMEPAGE}>Go to Home</Link>
        </Stack>
      </Container>
    </Layout>
  );
};
