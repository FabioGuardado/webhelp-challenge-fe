import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ROUTES from './constants/routes';

import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';

const { HOMEPAGE, DASHBOARD } = ROUTES;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={DASHBOARD} element={<Dashboard />}></Route>
        <Route path={HOMEPAGE} element={<HomePage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
