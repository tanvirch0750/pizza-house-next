import CtaNavbar from './CtaNavbar';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <CtaNavbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
