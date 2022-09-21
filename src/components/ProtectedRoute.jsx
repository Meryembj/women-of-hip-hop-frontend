import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './Navbar';

import {AuthContext} from '../context/auth.context';

function ProtectedRoute(props) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading)
    return (<div>Loading</div>);
  if (!isLoggedIn)
    return (<Navigate to="/" />);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
