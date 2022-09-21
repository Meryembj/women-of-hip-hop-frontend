import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// CONTEXT
import {AuthContext} from '../context/auth.context';

// COMPONENTS
import Navbar from './Navbar';

function ProtectedRoute({ loadingGIF }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading)
    return ( <div id="loading"><img alt="loading" src={loadingGIF}/></div> );
  if (!isLoggedIn)
    return (<Navigate to="/" />);
  return (
    <div className="page">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
