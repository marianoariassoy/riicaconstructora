import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = ({ children, section }) => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      var scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > 100) {
        header.classList.add("bg-secondary");
      } else {
        header.classList.remove("bg-secondary");
      }
    });
  }, []);

  return (
    <>
      <header className="z-50">
        <NavBar section={section} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer section={section} />
      </footer>
      <div className="whatsapp z-30">
        <a href="https://wa.me/5493874685060" target="_blank" rel="noreferrer">
          <img src="../assets/whatsapp.svg" alt="Whatsapp" className="drop-shadow-hover drop-shadow" />
        </a>
      </div>
    </>
  );
};

export default Layout;
