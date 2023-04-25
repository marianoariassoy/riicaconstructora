import Layout from "../../components/Layout";
import Slider from "./Slider";
import Desarrollos from "./Desarrollos";
import Estadisticas from "./Estadisticas";
import Proyectos from "./Proyectos";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Novedades from "./Novedades";

const Home = () => {
  return (
    <>
      <Layout>
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
