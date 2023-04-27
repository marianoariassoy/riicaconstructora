import { Link } from "react-router-dom";

const Novedades = () => {
  return (
    <section className="bg-secondary pt-24 lg:pb-24" id="novedades">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-7xl font-bold mb-16 text-primary">Novedades</h1>

        <Link to="/novedades/3" className="novedades-item text-white mb-12 lg:flex justify-between gap-8 cursor-pointer hover:shadow-xl transition gs_reveal">
          <div className="novedades-item-img lg:w-1/3">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" className="aspect-saquare object-cover" />
          </div>
          <div className="novedades-item-txt lg:w-8/12 pt-4 lg:pr-8">
            <h2 className="font-bold text-2xl mb-4 pb-4 border-b">Lanzamiento Italo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            </p>
          </div>
        </Link>
        <Link to="/novedades/4" className="novedades-item text-white mb-12 lg:flex justify-between gap-8 cursor-pointer hover:shadow-xl transition gs_reveal">
          <div className="novedades-item-img lg:w-1/3">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" className="aspect-saquare object-cover" />
          </div>
          <div className="novedades-item-txt lg:w-8/12 pt-4 lg:pr-8">
            <h2 className="font-bold text-2xl mb-4 pb-4 border-b">Lanzamiento Italo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            </p>
          </div>
        </Link>

        <a href="#" className="font-bold bg-white text-sm text-primary inline-block btn hover:shadow-xl transition">
          ANTERIORES
        </a>
      </div>
    </section>
  );
};

export default Novedades;
