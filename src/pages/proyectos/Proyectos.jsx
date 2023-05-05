import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

const Proyectos = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`/proyectos/${id}`);
  const { data: gallery, loading: galleryLoading, error: galleryError } = useFetch(`/imagenes/${id}`);

  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(false);

  useEffect(() => {
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

    window.scrollTo(0, 0);
  }, [data]);

  const handelCLick = (item, index) => {
    setCurrentImage(item.image);
    setcurrentIndex(index);
  };

  const handelNext = () => {
    if (currentIndex === gallery.length - 1) {
      setCurrentImage(gallery[0].image);
      setcurrentIndex(0);
    } else {
      setCurrentImage(gallery[currentIndex + 1].image);
      setcurrentIndex(currentIndex + 1);
    }
  };
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(gallery[gallery.length - 1].image);
      setcurrentIndex(gallery.length - 1);
    } else {
      setCurrentImage(gallery[currentIndex - 1].image);
      setcurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Helmet>
            <title>Riica Construcora - {data[0].title}</title>
            <meta name="description" content={data[0].text_short} />
            <meta property="og:title" content={data[0].title} />
            <meta property="og:url" content={`https://riica.com.ar/proyectos/${id}`} />
            <meta property="og:description" content={data[0].text_shor} />
            <meta property="og:image" content="https://riica.com.ar/assets/riica.jpg" />
            <meta property="og:image:alt" content="Riica Constructora" />
            <link rel="canonical" href={`https://riica.com.ar/proyectos/${id}`} />
          </Helmet>

          <section className="bg-black">
            <div className="main-title absolute z-30 bottom-14 p-10 text-white max-w-3xl">
              <h1 className="font-bold text-8xl bg-icon">{data[0].title}</h1>
              <p className="lg:text-xl mb-4">{data[0].text_short}</p>
            </div>
            <div style={{ backgroundImage: `url(${data[0].bgimage})` }} className="h-screen bg-cover bg-center opacity-60"></div>
          </section>

          <section className="data-dark-header gs_reveal">
            <div className="container mx-auto max-w-5xl p-10 lg:pt-24 lg:flex">
              <div className="lg:w-8/12 lg:pr-8">
                <p className="mb-8">{data[0].text}</p>
              </div>
              <div className="lg:w-2/6">
                <h2 className="text-2xl text-primary mb-4 font-bold">Caracteristicas</h2>
                <div className="text-primary">
                  {data[0].pool ? (
                    <div className="flex gap-4 items-center mb-4">
                      <div>
                        <img src="../assets/icon10.svg" />
                      </div>
                      <div>Piscina</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {data[0].rooftop ? (
                    <div className="flex gap-4 items-center mb-4">
                      <div>
                        <img src="../assets/icon11.svg" />
                      </div>
                      <div>Rooftop</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="data-dark-header w-full gs_reveal">
            <div className="container mx-auto max-w-5xl lg:flex p-10 pt-0">
              <div className="lg:w-8/12">
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition mr-4 mb-4">
                  Descargar Brochure
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition mr-4 mb-4">
                  Ubicación
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition mb-4">
                  Compartir
                </a>
              </div>
              <div>
                <Link to="/contacto" className="font-bold bg-black text-sm text-white inline-block btn hover:shadow-xl transition">
                  Contacto
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {galleryLoading ? (
        <Loader />
      ) : galleryError ? (
        <Error />
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="gallery">
          {gallery.map((item, index) => (
            <div className="relative cursor-pointer wrapper-images" key={index}>
              <img src={item.image} className="aspect-square object-cover w-full" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 text-white p-4 grid place-items-center opacity-0 hover:opacity-100 transition-all" onClick={() => handelCLick(item, index)}>
                <h3 className="text-2xl w-10 h-10 font-bold bg-primary grid place-items-center">+</h3>
              </div>
            </div>
          ))}
        </section>
      )}

      {currentImage && <Modal currentImage={currentImage} setCurrentImage={setCurrentImage} handelNext={handelNext} handelPrev={handelPrev} />}
    </Layout>
  );
};

export default Proyectos;
