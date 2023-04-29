import { useEffect } from "react";
import Layout from "../../components/Layout";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Novedades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const properties = {
    arrows: false,
    transitionDuration: 500,
    pauseOnHover: false,
  };

  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1643447727844-1e2e31544237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const indicators = () => <div className="indicator"> </div>;

  return (
    <Layout>
      <section className="bg-black">
        <div className="main-title absolute z-30 bottom-14 p-10 w-2/3">
          <h1 className="font-bold text-5xl lg:text-8xl text-white ">Italo</h1>
        </div>
        <div
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)" }}
          className="h-screen bg-cover bg-center opacity-60"
        ></div>
      </section>
      <section className="data-dark-header">
        <div className="container mx-auto max-w-5xl p-10">
          <p className="text-primary text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.
            ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.
            ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
            <br />
            <br />
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie con
          </p>
          <a href="#" className="font-bold bg-primary text-sm text-white inline-block btn hover:shadow-xl transition">
            Compartir
          </a>
        </div>
      </section>
      <section className="relative data-dark-header h-screen w-screen">
        <Slide indicators={indicators} {...properties}>
          {slideImages.map((slideImage, index) => (
            <div style={{ backgroundImage: `url(${slideImage.url})` }} className="h-screen w-screen bg-cover bg-center aspect-video" key={index}></div>
          ))}
        </Slide>
      </section>
    </Layout>
  );
};

export default Novedades;
