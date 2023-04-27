import { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import Layout from "../../components/Layout";

const Novedades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = ["https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"];

  const indicators = () => <div className="indicator"> </div>;
  return (
    <Layout>
      <section className="bg-black">
        <Slide indicators={indicators} arrows={false} id="slide-home">
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }} className="h-screen bg-cover bg-center"></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }} className="h-screen bg-cover bg-center"></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }} className="h-screen bg-cover bg-center"></div>
          </div>
        </Slide>
      </section>
    </Layout>
  );
};

export default Novedades;
