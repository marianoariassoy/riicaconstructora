import Slider from "./Slider";
import Desarrollos from "./Desarrollos";
import Estadisticas from "./Estadisticas";
import Proyectos from "./Proyectos";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Novedades from "./Novedades";

import Layout from "../../components/Layout";
import { gsap } from "gsap";
import { useEffect } from "react";

const Home = ({ section }) => {
  useEffect(() => {
    gsap.to(window, { duration: 1, scrollTo: `#${section}`, overwrite: "auto" });
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
