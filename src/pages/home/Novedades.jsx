import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import ImageComponent from "../../components/ImageComponent";

const Novedades = () => {
  const [visible, setVisible] = useState(2);
  const { data, loading, error } = useFetch(`/novedades`);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  return (
    <section className="bg-secondary pt-24 lg:pb-24 h-screen" id="novedades">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-7xl font-bold mb-16 text-primary">Novedades</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          ""
        ) : (
          data.slice(0, visible).map((item, index) => (
            <Link to={`/novedades/${item.id}`} className="novedades-item text-white mb-12 lg:flex justify-between gap-8 hover:shadow-xl transition fade-in" key={item.id}>
              <div className="novedades-item-img lg:w-1/3">
                <ImageComponent src={item.image} alt={item.title} />
              </div>
              <div className="novedades-item-txt lg:w-8/12 pt-4 lg:pr-8 mb-12">
                <h2 className="font-bold text-2xl mb-4 pb-4 border-b">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </Link>
          ))
        )}

        {data && visible >= data.length ? (
          ""
        ) : (
          <button onClick={showMoreItems} className="font-bold bg-white text-sm text-primary inline-block btn hover:shadow-xl transition">
            ANTERIORES
          </button>
        )}
      </div>
    </section>
  );
};

export default Novedades;
