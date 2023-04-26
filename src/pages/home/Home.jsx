import { Suspense } from "react";
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
      <Suspense fallback={<Loading />}>
        <Layout>
          <Slider />
          <Estadisticas />
          <Desarrollos />
          <Proyectos />
          <Nosotros />
          <Novedades />
          <Contacto />
        </Layout>
      </Suspense>
    </>
  );
};

function Loading() {
  return <section className="h-screen w-screen grid place-content-center bg-primary ">Loading...</section>;
}
export default Home;
