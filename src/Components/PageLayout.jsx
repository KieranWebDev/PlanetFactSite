import Navbar from './Navbar/NavbarComponent';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
