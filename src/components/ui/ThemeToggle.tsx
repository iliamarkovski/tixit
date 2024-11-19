import { DropdownMenuItem } from '@/components/ui/DropdownMenu';
import { useTheme } from '@/contexts/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenuItem onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'dark' ? <Sun /> : null}
      {theme === 'light' ? <Moon /> : null}
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </DropdownMenuItem>
  );
};

export { ThemeToggle };
