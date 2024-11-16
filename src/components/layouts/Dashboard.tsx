import { AppSidebar } from '@/components/groups/AppSidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/Sidebar';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/groups/Header';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header>
          <SidebarTrigger className="-ml-1" />
        </Header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export { Dashboard };
