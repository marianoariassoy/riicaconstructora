import { useEffect, useState } from "react";
import Loader from "./Loader";

const SliderItem = ({ src, alt, opacity }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={opacity ? "opacity-60" : ""}>
          <img src={src} alt={alt} className="fade-in h-screen w-full object-cover " />
        </div>
      )}
    </div>
  );
};

export default SliderItem;
