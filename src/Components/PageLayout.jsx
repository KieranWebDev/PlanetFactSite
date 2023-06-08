import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
