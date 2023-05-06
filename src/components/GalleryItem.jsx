import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const GalleryLoader = () => {
  return (
    <div className="h-full w-full bg-secondary z-40 flex items-center justify-center">
      <BeatLoader />
    </div>
  );
};

const GalleryItem = ({ src, alt, index, handelCLick }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative cursor-pointer wrapper-images aspect-square flex items-center justify-center">
      {isLoading ? <GalleryLoader /> : <img src={src} alt={alt} className="aspect-square object-cover w-full fade-in" />}

      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 text-white p-4 grid place-items-center opacity-0 hover:opacity-100 transition-all" onClick={() => handelCLick(src, index)}>
        <h3 className="text-2xl w-10 h-10 font-bold bg-primary grid place-items-center">+</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
