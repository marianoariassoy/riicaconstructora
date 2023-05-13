import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import DesarrollosItem from "./DesarrollosItem";

const Desarrollos = () => {
  const { data, loading, error } = useFetch(`/desarrollos`);
<<<<<<< HEAD
=======
  const [porcent, setPorcent] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (data) {
      setPorcent(`${data[0].porcent}%`);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#desarrollos",
            start: "top 60%",
            markers: false,
          },
        })
        .to(".barra-progreso-avance", { width: porcent, duration: 2, ease: "inOut" })
        .to(".image-desarrollos-1", { opacity: 1, duration: 1, ease: "inOut" }, "-=1.5")
        .to(".image-desarrollos-2", { opacity: 1, duration: 1, ease: "inOut" }, "-=1")
        .to(".image-desarrollos-3", { opacity: 1, duration: 1, ease: "inOut" }, "-=0.5");
    }
  });
>>>>>>> ad71e7e30a7155a8c9c318c9419e739becc83db5

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
<<<<<<< HEAD
            <DesarrollosItem key={item.id} data={item} />
=======
            <article className="desarrollos-item lg:flex h-screen" key={item.id}>
              <div className="desarrollos-item-col1 p-10 pt-28 lg:pb-20 lg:w-1/2">
                <div className="desarrollos-item-col1-row1 h-3/5">
                  <h1 className="text-7xl font-bold mb-2">{item.title}</h1>
                  <p className="mb-8 text-2xl">{item.address}</p>
                  <div className="barra-progreso w-4/5 h-8 bg-gray-700 relative">
                    <div className="barra-progreso-avance bg-primary h-full w-0"></div>
                    <div className="absolute top-0 text-sm pl-4 h-full flex items-center">
                      CONSTRUCCIÓN &nbsp;<span className="font-bold">{item.porcent}%</span>
                    </div>
                  </div>
                </div>
                <div className="desarrollos-item-col1-row2 text-2xl border-t-2 mt-4 pt-4 w-4/5 relative">
                  <Link to={`/desarrollos/${item.id}`} className="font-bold bg-white text-sm text-primary absolute top-0 right-0 btn inline-block hover:shadow-xl transition">
                    +info
                  </Link>
                  <span className="font-bold">{item.anticipo}%</span> Anticipo
                  <br />
                  <span className="font-bold">+{item.cuotas}</span> Cuotas
                </div>
              </div>
              <div className="desarrollos-item-col2 lg:w-1/2">
                <div className="w-full h-full lg:h-3/5 ">
                  <img src={item.image} alt={item.title} className="w-full h-full aspect-square object-cover image-desarrollos-1 opacity-0" />
                </div>
                <div className="w-1/2 h-2/5 hidden lg:inline-block">
                  <img src={item.image2} alt={item.title} className="w-full h-full aspect-square object-cover image-desarrollos-2 opacity-0" />
                </div>
                <div className="w-1/2 h-2/5 hidden lg:inline-block">
                  <img src={item.image3} alt={item.title} className="w-full h-full aspect-square object-cover image-desarrollos-3 opacity-0" />
                </div>
              </div>
            </article>
>>>>>>> ad71e7e30a7155a8c9c318c9419e739becc83db5
          ))}
        </Slide>
      )}
    </section>
  );
};

export default Desarrollos;
