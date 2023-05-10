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
import SliderItem from "../../components/SliderItem";
import GalleryItem from "../../components/GalleryItem";

const Proyectos = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`/proyectos/${id}`);
  const { data: gallery, loading: galleryLoading, error: galleryError } = useFetch(`/imagenes/${id}`);

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

  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(false);

  const handelCLick = (item, index) => {
    setCurrentImage(item);
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
            <SliderItem src={data[0].bgimage} alt={data[0].title} opacity={1} />
          </section>

          <section className="data-dark-header gs_reveal">
            <div className="container mx-auto max-w-5xl p-10 lg:pt-20 lg:flex">
              <div className="lg:w-8/12 lg:pr-8">
                <p className="mb-8">{data[0].text}</p>
              </div>
              <div className="lg:w-2/6">
                <h2 className="text-2xl text-primary mb-6 font-bold">Caracteristicas</h2>
                <div className="text-primary grid grid-cols-2 gap-4 text-sm">
                  {data[0].pool && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon10.svg" />
                      </div>
                      <div className="font-bold">Piscina</div>
                    </div>
                  )}
                  {data[0].rooftop && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon11.svg" />
                      </div>
                      <div className="font-bold">Rooftop</div>
                    </div>
                  )}
                  {data[0].cocheras && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon12.svg" />
                      </div>
                      <div className="font-bold">Cocheras</div>
                    </div>
                  )}
                  {data[0].calefaccion && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon13.svg" />
                      </div>
                      <div className="font-bold">Calefacción central</div>
                    </div>
                  )}
                  {data[0].seguridad && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon14.svg" />
                      </div>
                      <div className="font-bold">Seguridad</div>
                    </div>
                  )}
                  {data[0].quincho && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon15.svg" />
                      </div>
                      <div className="font-bold">Quincho con parrilla</div>
                    </div>
                  )}
                  {data[0].piscina && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon16.svg" />
                      </div>
                      <div className="font-bold">Piscina solarium</div>
                    </div>
                  )}
                  {data[0].verde && (
                    <div className="flex gap-3 items-center">
                      <div className="w-6 flex justify-center">
                        <img src="../assets/icon17.svg" />
                      </div>
                      <div className="font-bold">Espacio Verde</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="data-dark-header w-full gs_reveal">
            <div className="container mx-auto max-w-5xl lg:flex p-10 pt-0 lg:pb-20">
              <div className="lg:w-8/12">
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary bg-black-hover text-sm text-white inline-block btn hover:shadow-xl transition mr-4 mb-4">
                  Descargar Brochure
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary bg-black-hover text-sm text-white inline-block btn hover:shadow-xl transition mr-4 mb-4">
                  Ubicación
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary bg-black-hover text-sm text-white inline-block btn hover:shadow-xl transition mb-4">
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
            <GalleryItem src={item.image} alt="Imagen sobre Riica" key={index} handelCLick={handelCLick} index={index} />
          ))}
        </section>
      )}

      {currentImage && <Modal currentImage={currentImage} setCurrentImage={setCurrentImage} handelNext={handelNext} handelPrev={handelPrev} />}
    </Layout>
  );
};

export default Proyectos;
