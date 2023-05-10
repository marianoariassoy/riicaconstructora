import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Novedades = () => {
  const { data, loading, error } = useFetch(`/novedades`);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (data)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#novedades",
            start: "top 60%",
            markers: false,
            toggleActions: "play pause play restart",
          },
        })
        .to(".novedades-item", { opacity: 1, duration: 1, ease: "inOut" });
  }, [data]);

  return (
    <section className="bg-secondary pt-24 lg:pb-24" id="novedades">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-7xl font-bold mb-16 text-primary">Novedades</h1>

        {loading ? (
          <Loader />
        ) : error ? (
          ""
        ) : (
          data.map((item, index) => (
            <Link to={`/novedades/${item.id}`} className="novedades-item text-white mb-12 lg:flex justify-between gap-8 cursor-pointer hover:shadow-xl transition opacity-0" key={item.id}>
              <div className="novedades-item-img lg:w-1/3">
                <img src={item.image} />
              </div>
              <div className="novedades-item-txt lg:w-8/12 pt-4 lg:pr-8 mb-12">
                <h2 className="font-bold text-2xl mb-4 pb-4 border-b">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </Link>
          ))
        )}
        {data && data.length > 4 && (
          <a href="#" className="font-bold bg-white text-sm text-primary inline-block btn hover:shadow-xl transition">
            ANTERIORES
          </a>
        )}
      </div>
    </section>
  );
};

export default Novedades;
