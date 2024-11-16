import { ReactNode } from 'react';
import { Logo } from '@/components/ui/Logo';

type Props = {
  children?: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      {children}
      <Logo />
    </header>
  );
};

export { Header };
