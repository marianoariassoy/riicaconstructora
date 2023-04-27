import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Estadisticas = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#estadisticas",
          start: "top 60%",
          markers: false,
          toggleActions: "play pause play restart",
        },
      })
      .to("#data-1", { innerText: 35, snap: "innerText", duration: 1, ease: "none" })
      .to("#data-2", { innerText: 700, snap: "innerText", duration: 1, ease: "none" }, "-=0.5")
      .to("#data-3", { innerText: 30, snap: "innerText", duration: 1, ease: "none" }, "-=0.5");
  }, []);

  return (
    <section className="bg-primary pt-8 lg:pt-24 lg:pb-24 data-dark-header" id="estadisticas">
      <div className="container max-w-4xl m-auto text-white grid grid-cols-1 gap-2 md:grid-cols-3 lg:gap-10 p-10 justify-center items-start">
        <div className="estadisticas-item flex flex-col items-center gap-5 text-center mb-6">
          <div>
            <img src="./assets/icon1.svg" className="inline h-16" />
          </div>
          <div className="text-7xl font-bold">
            + <span id="data-1">0</span>
          </div>
          <div>
            <div className="bg-secondary p-3 text-sm">EDIFICIOS</div>
          </div>
        </div>
        <div className="estadisticas-item flex flex-col items-center gap-5 text-center mb-6 ">
          <div>
            <img src="./assets/icon2.svg" className="inline h-16" />
          </div>
          <div className="text-7xl font-bold">
            <span id="data-2">0</span>
          </div>
          <div>
            <div className="bg-secondary p-3 text-sm">CLIENTES SATISFECHOS</div>
          </div>
        </div>
        <div className="estadisticas-item flex flex-col items-center gap-5 text-center mb-6 ">
          <div>
            <img src="./assets/icon3.svg" className="inline h-16" />
          </div>
          <div className="text-7xl font-bold">
            + <span id="data-3">0</span>
          </div>
          <div>
            <div className="bg-secondary p-3 text-sm">AÑOS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
