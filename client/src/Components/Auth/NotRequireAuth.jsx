import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// TODO: home does not need login thing
const NotRequireAuth = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to={'/'} replace /> : <Outlet />;
};

export default NotRequireAuth;
