import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return <div className="w-full h-full flex items-center justify-center">{isLoading ? <BeatLoader /> : <img src={src} alt={alt} className="h-full w-full object-cover fade-in" />}</div>;
};

export default ImageComponent;
