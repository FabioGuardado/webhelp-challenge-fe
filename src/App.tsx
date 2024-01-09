import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ROUTES from './constants/routes';

import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';

import { CreateEditModalProvider } from './context/CreateEditModalContext';

const { HOMEPAGE, DASHBOARD } = ROUTES;

const App = () => {
  return (
    <CreateEditModalProvider>
      <Router>
        <Routes>
          <Route path={DASHBOARD} element={<Dashboard />}></Route>
          <Route path={HOMEPAGE} element={<HomePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </CreateEditModalProvider>
  );
};

export default App;
