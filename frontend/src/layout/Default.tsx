import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="grid grid-cols-12 gap-4">
        <div className="col-span-10 col-start-2 py-4 pb-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
