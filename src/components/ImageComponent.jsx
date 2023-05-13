import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const hash = "LcKUJ}-;D%j?_NR+M{WBIARj%Mof";

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
        <Blurhash hash={hash} width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />
      </div>

      <img src={src} alt={alt} className="h-full w-full object-cover" style={{ display: isLoading ? "none" : "block" }} />
    </>
  );
};

export default ImageComponent;
