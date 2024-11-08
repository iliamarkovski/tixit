import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../..';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export { Layout };
