import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";

const Proyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1660361338462-4d3d5d0ebdcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1660361338462-4d3d5d0ebdcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      image: "https://images.unsplash.com/photo-1660361338462-4d3d5d0ebdcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ];

  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(false);

  const handelCLick = (item, index) => {
    setCurrentImage(item.image);
    setcurrentIndex(index);
  };

  const handelNext = () => {
    if (currentIndex === gallery.length - 1) {
      setCurrentImage(gallery[0].image);
      setcurrentIndex(0);
    } else {
      setCurrentImage(gallery[currentIndex + 1].image);
      setcurrentIndex(currentIndex + 1);
    }
  };
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(gallery[gallery.length - 1].image);
      setcurrentIndex(gallery.length - 1);
    } else {
      setCurrentImage(gallery[currentIndex - 1].image);
      setcurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Layout>
      <section className="bg-black">
        <div className="main-title absolute z-30 bottom-14 p-10 text-white max-w-3xl">
          <h1 className="font-bold text-8xl bg-icon">Adolfo Guemes 367</h1>
          <p className="lg:text-xl mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
        </div>
        <div
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)" }}
          className="h-screen bg-cover bg-center opacity-60"
        ></div>
      </section>

      <section className="data-dark-header gs_reveal">
        <div className="container mx-auto max-w-5xl p-10 lg:pt-24 lg:flex">
          <div className="lg:w-8/12 lg:pr-8">
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit <br />
              <br />
              praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
              ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            </p>
          </div>
          <div className="lg:w-2/6">
            <h2 className="text-2xl text-primary mb-4 font-bold">Caracteristicas</h2>
            <div className="text-primary">
              <div className="flex gap-4 items-center mb-4">
                <div>
                  <img src="../assets/icon10.svg" />
                </div>
                <div>Piscina</div>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <div>
                  <img src="../assets/icon11.svg" />
                </div>
                <div>Rooftop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="data-dark-header w-full gs_reveal">
        <div className="container mx-auto max-w-5xl lg:flex p-10 pt-0">
          <div className="lg:w-8/12">
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition mr-4 mb-4">
              Descargar Brochure
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition mr-4 mb-4">
              Ubicación
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition mb-4">
              Compartir
            </a>
          </div>
          <div>
            <Link to="/contacto" className="font-bold bg-black text-sm text-white inline-block btn hover:shadow-xl transition">
              Contacto
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="gallery">
        {gallery.map((item, index) => (
          <div className="relative cursor-pointer wrapper-images" key={index}>
            <img src={item.image} className="aspect-square object-cover w-full" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 text-white p-4 grid place-items-center opacity-0 hover:opacity-100 transition-all" onClick={() => handelCLick(item, index)}>
              <h3 className="text-2xl w-10 h-10 font-bold bg-primary grid place-items-center">+</h3>
            </div>
          </div>
        ))}
      </section>
      {currentImage && <Modal currentImage={currentImage} setCurrentImage={setCurrentImage} handelNext={handelNext} handelPrev={handelPrev} />}
    </Layout>
  );
};

export default Proyectos;
