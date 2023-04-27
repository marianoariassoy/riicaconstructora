import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, section }) => {
  return (
    <>
      <header>
        <NavBar section={section} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer section={section} />
      </footer>
    </>
  );
};

export default Layout;
