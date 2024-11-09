import { Avatar, AvatarImage, Button, Popover, PopoverContent, PopoverTrigger } from '@/components';
import { useAuth } from '@/contexts';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center gap-4">
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={user?.photoURL ?? ''} />
          </Avatar>
        </PopoverTrigger>

        <PopoverContent>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center text-center">
              <p className="text-m font-medium leading-none">{user?.displayName}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>

            <Button onClick={handleClick}>Logout</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { UserMenu };
