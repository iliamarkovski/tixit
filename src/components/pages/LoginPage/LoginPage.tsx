import { GoogleOutlined } from '@ant-design/icons';
import styles from './LoginPage.module.scss';
import { Button } from 'antd';
import { useState } from 'react';

const LoginPage = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div className={styles.container}>
      <Button
        type='primary'
        size='large'
        icon={<GoogleOutlined />}
        loading={loadings[1]}
        onClick={() => enterLoading(1)}
      >
        Login with Google
      </Button>
    </div>
  );
};

export { LoginPage };
