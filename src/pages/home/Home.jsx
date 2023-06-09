import { gsap } from "gsap";
import { useEffect } from "react";
import Slider from "./Slider";
import Desarrollos from "./Desarrollos";
import Estadisticas from "./Estadisticas";
import Proyectos from "./Proyectos";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Novedades from "./Novedades";
import Layout from "../../components/Layout";
import GsapReveal from "../../utils/GsapReveal";

const Home = ({ section }) => {
  useEffect(() => {
    gsap.to(window, { duration: 1, scrollTo: `#${section}`, overwrite: "auto" });
    GsapReveal();
  }, []);

  return (
    <>
      <Layout section={section}>
        <Slider />
        <Estadisticas />
        <Desarrollos />
        <Proyectos />
        <Nosotros />
        <Novedades />
        <Contacto />
      </Layout>
    </>
  );
};

export default Home;
