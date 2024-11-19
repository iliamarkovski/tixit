import { useAuth } from '@/contexts/AuthProvider';
import { AddPage } from '@/pages/AddPage';
import { LoginPage } from '@/pages/LoginPage';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Dashboard } from '@/components/layouts/Dashboard';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { HomePage } from '@/pages/HomePage';

const AppRouter = () => {
  const { user } = useAuth();

  const router = createBrowserRouter(
    [
      {
        element: <AuthLayout />,
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
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/add',
            element: <AddPage />,
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
    ],
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export { AppRouter };
