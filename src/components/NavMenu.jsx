import { useEffect } from "react";
import GsapScroll from "../utils/GsapScroll";

const NavMenu = () => {
  let menuOpen = false;

  const OpenMenu = () => {
    menuOpen ? (menuOpen = false) : (menuOpen = true);
    document.querySelector("nav").classList.toggle("fade-in-2");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  GsapScroll();

  return (
    <div id="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavMenu;
