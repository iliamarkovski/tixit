import { UserMenu } from '@/components';

type Props = {
  isAuth?: boolean;
};

const Header = ({ isAuth }: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
        <span className="text-2xl">TIXIT</span>
        {isAuth ? <UserMenu /> : null}
      </div>
    </header>
  );
};

export { Header };
