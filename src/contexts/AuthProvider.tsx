import { firebaseAuth, firebaseProvider } from '@/config';
import { signInWithPopup, User, signOut, onAuthStateChanged, UserCredential } from 'firebase/auth';
import { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react';

type Props = {
  login: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<Props | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Props['user']>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(() => {
    setLoading(true);
    return signInWithPopup(firebaseAuth, firebaseProvider);
  }, []);

  const logout = useCallback(() => {
    setLoading(true);
    return signOut(firebaseAuth);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        localStorage.setItem('isAuth', 'true');
      } else {
        localStorage.removeItem('isAuth');
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): Props => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
