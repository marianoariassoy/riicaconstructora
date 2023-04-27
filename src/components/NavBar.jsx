import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import NavMenu from "./NavMenu";

const NavBar = ({ section }) => {
  useEffect(() => {
    gsap.to("#header", { opacity: 1, duration: 1, ease: "none" });
  }, []);
  return (
    <div className="w-full flex justify-between items-center p-10 pb-6 opacity-0" id="header">
      <a href="#home" className="logo scroll hover:opacity-60">
        <img src="../assets/logo.svg" alt="Riica Constructora Logo" id="logo" />
      </a>
      <NavMenu />
      <nav>
        {section ? (
          <ul>
            <li>
              <a href="#home" className="text-white nav-a">
                Home
              </a>
            </li>
            <li>
              <a href="#desarrollos" className="text-white nav-a">
                Desarrollos
              </a>
            </li>
            <li>
              <a href="#proyectos" className="text-white nav-a">
                Proyectos Terminados
              </a>
            </li>
            <li>
              <a href="#nosotros" className="text-white nav-a">
                Somos Riica
              </a>
            </li>
            <li>
              <a href="#novedades" className="text-white nav-a">
                Novedades
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-white nav-a">
                Contacto
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/desarrollos" className="text-white">
                Desarrollos
              </Link>
            </li>
            <li>
              <Link to="/proyectos" className="text-white">
                Proyectos Terminados
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="text-white">
                Somos Riica
              </Link>
            </li>
            <li>
              <Link to="/novedades" className="text-white">
                Novedades
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-white">
                Contacto
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
