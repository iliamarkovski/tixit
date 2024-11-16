import { Ticket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="ms-auto flex items-center text-2xl font-bold only:me-auto">
      TI
      <Ticket className="size-10 shrink-0" />
      IT
    </div>
  );
};

Logo.displayName = 'Logo';

export { Logo };
