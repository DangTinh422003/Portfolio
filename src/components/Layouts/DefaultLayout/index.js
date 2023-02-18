import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default DefaultLayout;
