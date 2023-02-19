import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

export default DefaultLayout;
