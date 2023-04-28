import React from "react";

const Modal = ({ currentImage, setCurrentImage, handelNext, handelPrev }) => {
  const handelClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setCurrentImage(null);
    }
  };
  return (
    <div className="fade-in-2 fixed bg-black bg-opacity-60 h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50" onClick={handelClick}>
      <img src={currentImage} alt="Bigger picture" className="h-4/5" />
      <span className="absolute top-8 right-8 text-white font-bold text-3xl cursor-pointer hover:text-black dismiss" onClick={handelClick}>
        X
      </span>
      <span className="absolute top-1/2 left-8 text-white font-bold text-3xl cursor-pointer hover:text-black svg-hover z-50" onClick={handelPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </span>
      <span className="absolute top-1/2 right-8 text-white font-bold text-3xl cursor-pointer hover:text-black svg-hover z-50" onClick={handelNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </span>
    </div>
  );
};

export default Modal;
