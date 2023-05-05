import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Nosotros = () => {
  const { data, loading, error } = useFetch(`/staff`);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (data)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#nosotros",
            start: "top 60%",
            markers: false,
            toggleActions: "play pause play restart",
          },
        })
        .to("#team-1", { opacity: 1, duration: 0.5, ease: "inOut" })
        .to("#team-3", { opacity: 1, duration: 0.5, ease: "inOut" }, "-=0.25")
        .to("#team-2", { opacity: 1, duration: 0.5, ease: "inOut" }, "-=0.25")
        .to("#team-4", { opacity: 1, duration: 0.5, ease: "inOut" }, "-=0.25");
  }, [data]);

  return (
    <section className="pt-20 lg:pt-32 lg:pb-16 data-dark-header" id="nosotros">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-2xl text-secondary">Somos</h1>
        <h2 className="text-7xl text-secondary font-bold mb-8">Riica</h2>
        <p className="mb-12">
          En Riica llevamos más de 35 proyectos entregados en tiempo y forma, eligiendo cuidadosamente las mejores ubicaciones de la Ciudad de Salta. Tenemos como misión construir proyectos de calidad para nuestros clientes, generando seguridad y
          confianza en su inversión.
        </p>
        {loading ? (
          <Loader />
        ) : error ? (
          "Error al cargar los datos"
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {data.map((item, index) => (
              <article className="nosotros-item hover:shadow-xl transition cursor-pointer opacity-10" id={`team-${index + 1}`} key={item.id}>
                <img src={item.image} alt={item.name} className="w-full aspect-square object-cover" />
                <div className="txt bg-primary p-4 text-white h-28">
                  <p className="mb-4">
                    {item.name} <span className="font-bold">{item.lastname}</span>
                  </p>
                  <p>{item.position}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Nosotros;
