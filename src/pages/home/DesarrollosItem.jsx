import { Link } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";

const DesarrollosItem = ({ data }) => {
  return (
    <article className="desarrollos-item lg:flex h-screen">
      <div className="desarrollos-item-col1 p-10 pt-28 lg:pb-20 lg:w-1/2">
        <div className="desarrollos-item-col1-row1 h-3/5">
          <h1 className="text-7xl font-bold mb-2">{data.title}</h1>
          <p className="mb-8 text-2xl">{data.address}</p>
          <div className="barra-progreso w-4/5 h-8 bg-gray-700 relative">
            <div className="barra-progreso-avance bg-primary h-full" style={{ width: `${data.porcent}%` }}></div>
            <div className="absolute top-0 text-sm pl-4 h-full flex items-center">
              CONSTRUCCIÓN &nbsp;<span className="font-bold">{data.porcent}%</span>
            </div>
          </div>
        </div>
        <div className="desarrollos-data-col1-row2 text-2xl border-t-2 mt-4 pt-4 w-4/5 relative">
          <Link to={`/desarrollos/${data.id}`} className="font-bold bg-white text-sm text-primary absolute top-0 right-0 btn inline-block hover:shadow-xl transition">
            +info
          </Link>
          <span className="font-bold">{data.anticipo}%</span> Anticipo
          <br />
          <span className="font-bold">+{data.cuotas}</span> Cuotas
        </div>
      </div>
      <div className="desarrollos-data-col2 lg:w-1/2">
        <div className="w-full lg:h-3/5 aspect-video object-cover overflow-hidden">
          <ImageComponent src={data.image} alt={data.title} />
        </div>
        <div className="w-1/2 h-2/5 hidden lg:inline-block">
          <ImageComponent src={data.image2} alt={data.title} />
        </div>
        <div className="w-1/2 h-2/5 hidden lg:inline-block">
          <ImageComponent src={data.image3} alt={data.title} />
        </div>
      </div>
    </article>
  );
};

export default DesarrollosItem;
