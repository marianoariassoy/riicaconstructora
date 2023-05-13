import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <>
      <div style={{ display: isLoading ? "inline" : "none" }}>
        <Blurhash hash="LEHLk~WB2yk8pyo0adR*.7kCMdnj" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />
      </div>

      <img src={src} alt={alt} style={{ display: isLoading ? "none" : "inline" }} />
    </>
  );
};

export default ImageComponent;
