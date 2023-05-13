import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const GsapHeader = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".data-dark-header");
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top-=-80",
      end: "bottom top-=-80",
      toggleClass: {
        targets: "header",
        className: "header-dark",
      },
      onEnter: () => {
        const logo = document.querySelector("#logo");
        logo.src = "../assets/logo-dark.svg";
      },
      onLeave: () => {
        const logo = document.querySelector("#logo");
        logo.src = "../assets/logo.svg";
      },
      onEnterBack: () => {
        const logo = document.querySelector("#logo");
        logo.src = "../assets/logo-dark.svg";
      },
      onLeaveBack: () => {
        const logo = document.querySelector("#logo");
        logo.src = "../assets/logo.svg";
      },
      markers: false,
    });
  });
};

export default GsapHeader;
