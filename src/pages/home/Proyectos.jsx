import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Proyectos = () => {
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

  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1643447727844-1e2e31544237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      caption: "Adolfo Güemes 367",
      id: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      caption: "9 de Julio 1234",
      id: 2,
    },
  ];

  return (
    <section className="relative bg-secondary" id="proyectos">
      <div className="absolute pt-12 lg:pt-0 top-1/3 left-15 w-3/5 z-20 text-white gs_reveal  m-auto">
        <h1 className="text-2xl">Proyectos</h1>
        <h2 className="text-5xl lg:text-7xl font-bold">Terminados</h2>
      </div>
      <Slide className="h-screen" {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <article style={{ backgroundImage: `url(${slideImage.url})` }} className="h-screen bg-cover bg-center">
              <div className="proyectos-container relative h-full w-full bg-black bg-opacity-60">
                <div className="absolute left-15 top-1/2 w-3/5 gs_reveal">
                  <div className="container max-w-5xl m-auto lg:flex items-start justify-between">
                    <h2 className="text-4xl font-bold text-primary mb-8">{slideImage.caption}</h2>
                    <Link to={`/proyectos/${slideImage.id}`} className="font-bold bg-white text-sm text-primary btn hover:shadow-xl transition">
                      VER MÁS
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default Proyectos;
