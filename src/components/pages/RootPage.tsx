import { Layout } from '..';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export { RootPage };
