import { GoogleOutlined } from '@ant-design/icons';
import styles from './LoginPage.module.scss';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { app } from '../../../firebaseConfig';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };
  const handleLogout = () => {
    setUser(null);
    auth.signOut();
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className={styles.container}>
      {!user ? (
        <Button
          type='primary'
          size='large'
          icon={<GoogleOutlined />}
          loading={loading}
          onClick={() => handleLogin()}
        >
          Login with Google
        </Button>
      ) : null}

      {user ? (
        <Button
          type='primary'
          size='large'
          loading={loading}
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      ) : null}
    </div>
  );
};

export { LoginPage };
