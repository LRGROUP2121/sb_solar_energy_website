import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  requiredRole: 'customer' | 'admin';
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const isAuth = localStorage.getItem('sb_auth_token');
  const userRole = localStorage.getItem('sb_user_role');

  if (!isAuth) {
    return <Navigate to={`/portal/login?role=${requiredRole}`} replace />;
  }

  // If role is required as admin, ensure role is admin
  if (requiredRole === 'admin' && userRole !== 'admin') {
    return <Navigate to="/portal/login?role=admin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
