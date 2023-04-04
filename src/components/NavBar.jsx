import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center p-10">
      <NavMenu />

      <a href="#home" className="logo scroll hover:opacity-60">
        <img src="./assets/logo.svg" alt="Riica Constructora Logo" />
      </a>

      <nav>
        <ul>
          <li>
            <a href="#home" className="text-white font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#desarrollo" className="text-white">
              Desarrollos
            </a>
          </li>
          <li>
            <a href="#proyectos" className="text-white">
              Proyectos Terminados
            </a>
          </li>
          <li>
            <a href="#nosotros" className="text-white">
              Somos Riica
            </a>
          </li>
          <li>
            <a href="#novedades" className="text-white">
              Novedades
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-white">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;