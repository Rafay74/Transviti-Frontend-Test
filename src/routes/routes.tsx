import { Routes, Route } from 'react-router-dom';
import { ROUTE_CONSTANTS } from './route-constants';
import AppLayout from '../layout/app-layout';
import HomePage from '../pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes
