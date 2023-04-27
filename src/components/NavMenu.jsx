import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const NavMenu = () => {
  let menuOpen = false;

  const OpenMenu = () => {
    menuOpen ? (menuOpen = false) : (menuOpen = true);
    document.querySelector("nav").classList.toggle("fade-in-2");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  useEffect(() => {
    let windowsWidth = screen.width;
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let links = gsap.utils.toArray(".nav-a");
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
        el.classList.remove("active-nav");
      });
      link.classList.add("active-nav");
      if (windowsWidth < 980 && menuOpen) {
        document.querySelector("nav").classList.toggle("fade-in-2");
        document.querySelector("#nav-menu").classList.toggle("active");
        menuOpen = false;
      }
    }
  }, []);

  return (
    <div id="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavMenu;
