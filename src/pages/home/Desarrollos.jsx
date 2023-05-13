import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import DesarrollosItem from "./DesarrollosItem";

const Desarrollos = () => {
  const { data, loading, error } = useFetch(`/desarrollos`);

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

  return (
    <section className="bg-secondary text-white h-screen" id="desarrollos">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Slide {...properties}>
          {data.map((item) => (
            <DesarrollosItem key={item.id} data={item} />
          ))}
        </Slide>
      )}
    </section>
  );
};

export default Desarrollos;
