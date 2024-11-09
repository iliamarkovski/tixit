import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAuth = localStorage.getItem('isAuth');

  if (isAuth) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export { ProtectedRoute };
