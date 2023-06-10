import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const RouteLayout = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default RouteLayout;
