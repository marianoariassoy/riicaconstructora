import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const GsapReveal = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  function animateFrom(elem, direction) {
    direction = direction || 1;
    let x = 0,
      y = direction * 200;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -200;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 200;
      y = 0;
    } else {
      x = 0;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1,
        delay: 0.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "inOut",
        overwrite: "auto",
        toogleActions: "restart pause reverse pause",
      }
    );
  }

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
};

export default GsapReveal;
