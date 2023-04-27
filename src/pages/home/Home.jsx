import Slider from "./Slider";
import Desarrollos from "./Desarrollos";
import Estadisticas from "./Estadisticas";
import Proyectos from "./Proyectos";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Novedades from "./Novedades";
import GsapUtils from "../../utils/GsapUtils";
import Layout from "../../components/Layout";
import { gsap } from "gsap";

const Home = ({ section }) => {
  GsapUtils();

  if (section) gsap.to(window, { duration: 1, scrollTo: `#${section}`, overwrite: "auto" });

  return (
    <>
      <Layout section="home">
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
