import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

type Props = {
  isAuth?: boolean;
};

const Layout = ({ isAuth }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header isAuth={isAuth} />

      <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center px-6 py-6 md:px-8 lg:px-10">
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
