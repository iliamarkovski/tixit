import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { useAuth } from '@/contexts/AuthProvider';
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    login()
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button size="lg" onClick={handleClick} disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : null}
        Login with Google
      </Button>
    </div>
  );
};

export { LoginPage };
