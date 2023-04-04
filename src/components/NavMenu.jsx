//Dependencies
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let menuOpen = false;

const NavMenu = () => {
  useEffect(() => {
    let windowsWidth = screen.width;

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let links = gsap.utils.toArray("header nav a");

    links.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive(a),
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
      });
    });

    let linksOthers = gsap.utils.toArray(".scroll");
    linksOthers.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
      });
    });

    function setActive(link) {
      links.forEach((el) => {
        el.classList.remove("font-bold");
      });

      link.classList.add("font-bold");
      if (windowsWidth < 980 && menuOpen) {
        const menu = document.querySelector("nav");
        const navMenu = document.querySelector("#nav-menu");
        menu.classList.toggle("block");
        navMenu.classList.toggle("active");
        menuOpen = false;
      }
    }
  }, []);

  const OpenMenu = () => {
    menuOpen ? (menuOpen = false) : (menuOpen = true);
    const menu = document.querySelector("nav");
    const navMenu = document.querySelector("#nav-menu");
    menu.classList.toggle("block");
    navMenu.classList.toggle("active");
  };

  return (
    <div id="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavMenu;
