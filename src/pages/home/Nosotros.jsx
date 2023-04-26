import { useEffect } from "react";
import { gsap } from "gsap";

const Nosotros = () => {
  useEffect(() => {
    gsap.utils.toArray("article").forEach(function (elem) {
      gsap.fromTo(
        elem,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
        },
        "-=0.5"
      );
    });
  }, []);

  return (
    <section className="pt-20 lg:pt-32 lg:pb-16 data-dark-header" id="nosotros">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-2xl text-secondary">Somos</h1>
        <h2 className="text-7xl text-secondary font-bold mb-8">Riica</h2>
        <p className="mb-12">
          En Riica llevamos más de 35 proyectos entregados en tiempo y forma, eligiendo cuidadosamente las mejores ubicaciones de la Ciudad de Salta. Tenemos como misión construir proyectos de calidad para nuestros clientes, generando seguridad y
          confianza en su inversión.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <article className="nosotros-item hover:shadow-xl transition cursor-pointer opacity-0">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="w-full aspect-square object-cover" />
            <div className="txt bg-primary p-4 text-white h-36">
              <p className="mb-4">
                Lucio <span className="font-bold">Mármol</span>
              </p>
              <p>Arquitecto</p>
            </div>
          </article>
          <article className="nosotros-item hover:shadow-xl transition cursor-pointer opacity-0">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="w-full aspect-square object-cover grayscale-0" />
            <div className="bg-secondary p-4 text-white h-36">
              <p className="mb-4">
                Nestor <span className="font-bold">Riise</span>
              </p>
              <p>Ingeniero</p>
            </div>
          </article>
          <article className="nosotros-item hover:shadow-xl transition cursor-pointer opacity-0">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="w-full aspect-square object-cover grayscale-0" />
            <div className="bg-primary p-4 text-white h-36">
              <p className="mb-4">
                Grabriel <span className="font-bold">Layún</span>
              </p>
              <p>Arquitecto</p>
            </div>
          </article>
          <article className="nosotros-item hover:shadow-xl transition cursor-pointer opacity-0">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="w-full aspect-square object-cover" />
            <div className="bg-secondary p-4 text-white h-36">
              <p className="mb-4">
                Baltazar <span className="font-bold">Caso Riise</span>
              </p>
              <p>Abogado</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
