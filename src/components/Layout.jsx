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
      <div className="whatsapp z-30">
        <a href="https://wa.me/5493516150000" target="_blank" rel="noreferrer">
          <img src="../assets/whatsapp.svg" alt="Whatsapp" className="drop-shadow-hover drop-shadow" />
        </a>
      </div>
    </>
  );
};

export default Layout;
