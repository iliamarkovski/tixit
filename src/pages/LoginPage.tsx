import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthProvider';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const LoginPage = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login()
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Click the button below to log in with Google and access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleLogin}
            disabled={loading}
            isLoading={loading}>
            Login with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { LoginPage };
