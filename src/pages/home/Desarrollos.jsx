import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Desarrollos = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#desarrollos",
          markers: false,
          start: "top 60%",
          toggleActions: "play pause play restart",
        },
      })
      .to(".barra-progreso-avance", { width: "80%", duration: 2, ease: "inOut" });
  }, []);

  const properties = {
    prevArrow: (
      <button className="left-10 svg-hover nav-slideshow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="right-10 svg-hover nav-slideshow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </button>
    ),
    transitionDuration: 500,
    autoplay: false,
  };

  const data = [
    {
      id: 1,
      name: "Rii28",
      location: "Pueyrredón 1385",
      image1: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      image2: "https://images.unsplash.com/photo-1595599512948-b9831e5fc11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      image3: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    },
    {
      id: 2,
      name: "Rii28 II",
      location: "9 de Julio 1385",
      image1: "https://images.unsplash.com/photo-1643447727844-1e2e31544237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      image3: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    },
  ];

  return (
    <section className="bg-secondary text-white h-screen" id="desarrollos">
      <Slide {...properties}>
        {data.map((item) => (
          <article className="desarrollos-item lg:flex h-screen" key={item.id}>
            <div className="desarrollos-item-col1 p-10 pt-28 lg:pb-20 lg:w-1/2">
              <div className="desarrollos-item-col1-row1 h-3/5">
                <h1 className="text-7xl font-bold mb-2">{item.name}</h1>
                <p className="mb-8 text-2xl">{item.location}</p>
                <div className="barra-progreso w-4/5 h-8 bg-gray-700 relative">
                  <div className="barra-progreso-avance bg-primary h-full w-0"></div>
                  <div className="absolute top-0 text-sm pl-4 h-full flex items-center">
                    CONSTRUCCIÓN &nbsp;<span className="font-bold">80%</span>
                  </div>
                </div>
              </div>
              <div className="desarrollos-item-col1-row2 text-2xl border-t-2 mt-4 pt-4 w-4/5 relative">
                <Link to="/desarrollos/2" className="font-bold bg-white text-sm text-primary absolute top-0 right-0 btn inline-block hover:shadow-xl transition">
                  +info
                </Link>
                <span className="font-bold">40%</span> Anticipo
                <br />
                <span className="font-bold">+18</span> Cuotas
              </div>
            </div>
            <div className="desarrollos-item-col2 lg:w-1/2">
              <div className="w-full h-full lg:h-3/5 gs_reveal">
                <img src={item.image1} alt="" className="w-full h-full aspect-square object-cover" />
              </div>
              <div className="w-1/2 inline-block h-2/5 gs_reveal">
                <img src={item.image2} alt="" className="w-full h-full aspect-square object-cover" />
              </div>
              <div className="w-1/2 inline-block h-2/5 gs_reveal">
                <img src={item.image3} alt="" className="w-full h-full aspect-square object-cover" />
              </div>
            </div>
          </article>
        ))}
      </Slide>
    </section>
  );
};

export default Desarrollos;
