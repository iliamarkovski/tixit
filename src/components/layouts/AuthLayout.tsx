import { Header } from '@/components/groups/Header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export { AuthLayout };
