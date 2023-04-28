import { useState } from "react";

const Modal = () => {
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
};

export default [Modal, handelCLick, handelNext, handelPrev];
