import { Layout } from '@/components';
import { useAuth } from '@/contexts';
import { LoginPage } from '@/pages';
import { ProtectedRoute } from '@/routes';
import { createBrowserRouter, Link, Navigate, RouterProvider } from 'react-router-dom';

const AppRouter = () => {
  const { user } = useAuth();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/login',
          element: user ? <Navigate to="/" replace /> : <LoginPage />,
        },
      ],
    },
    {
      element: (
        <ProtectedRoute>
          <Layout isAuth />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Link to="/about">About</Link>,
        },
        {
          path: '/about',
          element: <h2>About page</h2>,
        },
        {
          path: '*',
          element: <p>404 Error - Nothing here...</p>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { AppRouter };
