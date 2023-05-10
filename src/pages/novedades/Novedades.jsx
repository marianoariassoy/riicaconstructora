import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
import SliderItem from "../../components/SliderItem";

const Novedades = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`/novedades/${id}`);
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

  const properties = {
    arrows: false,
    transitionDuration: 500,
    pauseOnHover: false,
  };

  const indicators = () => <div className="indicator"> </div>;

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
            <meta property="og:url" content={`https://riica.com.ar/novedades/${id}`} />
            <meta property="og:description" content={data[0].text_shor} />
            <meta property="og:image" content="https://riica.com.ar/assets/riica.jpg" />
            <meta property="og:image:alt" content="Riica Constructora" />
            <link rel="canonical" href={`https://riica.com.ar/novedades/${id}`} />
          </Helmet>

          <section className="bg-black">
            <div className="main-title absolute z-30 bottom-14 p-10 w-2/3">
              <h1 className="font-bold text-5xl lg:text-8xl text-white ">{data[0].title}</h1>
            </div>
            <SliderItem src={data[0].bgimage} alt={data[0].title} opacity={1} />
          </section>

          <section className="data-dark-header">
            <div className="container mx-auto max-w-5xl p-20">
              <p className="text-primary text-xl mb-4">{data[0].text_short}</p>
              <p className="mb-8">{data[0].text}</p>
              <a href="#" className="font-bold bg-primary text-sm text-white inline-block btn bg-black-hover hover:shadow-xl transition">
                Compartir
              </a>
            </div>
          </section>
        </>
      )}

      {galleryLoading ? (
        <Loader />
      ) : galleryError ? (
        <Error />
      ) : (
        <section className="relative data-dark-header h-screen w-screen">
          <Slide indicators={indicators} {...properties}>
            {gallery.map((item, index) => (
              <SliderItem src={item.image} alt={item.title} opacity={0} key={index} />
            ))}
          </Slide>
        </section>
      )}
    </Layout>
  );
};

export default Novedades;
