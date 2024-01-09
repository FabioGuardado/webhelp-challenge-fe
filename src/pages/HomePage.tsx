import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import Layout from '../components/UI/Layout/Layout';

import ROUTES from '../constants/routes';

import homePageImage from '../assets/home-page.png';

export const HomePage = () => {
  return (
    <Layout>
      <div
        style={{
          marginTop: '120px',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <img src={homePageImage} alt="home page image" height="400px" />
        </div>
        <div style={{ width: '400px', marginLeft: '5rem' }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: '700', marginBottom: '1rem' }}
          >
            Welcome!
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
            This is my solution for the WebHelp OOP Challenge
          </Typography>
          <Typography sx={{ marginBottom: '2rem' }}>
            The place to manage all the information related to employees, you
            can see, create, edit and also delete elements, search by names or
            document numbers, and more...
          </Typography>

          <Link to={ROUTES.DASHBOARD}>
            <Button
              variant="contained"
              sx={{
                boxShadow: 'none',
                borderRadius: '50px',
                fontWeight: '600',
              }}
            >
              Go to action!
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
