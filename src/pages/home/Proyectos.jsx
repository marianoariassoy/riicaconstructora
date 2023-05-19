import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComponent from "../../components/ImageComponent";

const Proyectos = () => {
  const { data, loading, error } = useFetch(`/proyectos`);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (data)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#proyectos",
            start: "top 60%",
            markers: false,
            toggleActions: "play pause play restart",
          },
        })
        .to(".proyectos-title", { opacity: 1, duration: 1, ease: "inOut" })
        .to(".proyectos-article", { opacity: 1, duration: 1, ease: "inOut" }, "-=0.5");
  }, [data]);

  const properties = {
    prevArrow: (
      <button className="left-10 svg-hover nav-slideshow ">
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

  return (
    <section className="relative bg-secondary" id="proyectos">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="absolute pt-12 lg:pt-0 top-1/3 left-15 w-3/5 z-20 text-white m-auto opacity-0 proyectos-title">
            <h1 className="text-2xl">Proyectos</h1>
            <h2 className="text-5xl lg:text-7xl font-bold">Terminados</h2>
          </div>
          <Slide className="h-screen relative" {...properties}>
            {data.map((item, index) => (
              <div key={index}>
                <article className="h-screen opacity-0 proyectos-article relative">
                  <div className="proyectos-container  h-full w-full bg-black bg-opacity-60 absolute top-0 left-0 z-20">
                    <div className="absolute left-15 top-1/2 w-3/5 gs_reveal">
                      <div className="container max-w-5xl m-auto lg:flex items-start justify-between">
                        <h2 className="text-4xl font-bold text-primary mb-8">{item.title}</h2>
                        {item.text && (
                          <Link to={`/proyectos/${item.id}`} className="font-bold bg-white text-sm text-primary btn hover:shadow-xl transition">
                            VER MÁS
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <ImageComponent src={item.image} alt={item.title} className="w-full h-full " />
                </article>
              </div>
            ))}
          </Slide>
        </>
      )}
    </section>
  );
};

export default Proyectos;
