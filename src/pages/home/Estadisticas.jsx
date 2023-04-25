import React from "react";

const Estadisticas = () => {
  return (
    <section className="bg-primary pt-28 pb-28" id="estadisticas">
      <div className="container max-w-4xl m-auto text-white flex items-start justify-between">
        <div className="estadisticas-item flex flex-col gap-5 text-center mb-6">
          <div>
            <img src="./assets/icon1.svg" className="inline h-16" />
          </div>
          <div className="text-7xl font-bold">+35</div>
          <div>
            <div className="w-full bg-secondary p-3">EDIFICIOS</div>
          </div>
        </div>
        <div className="estadisticas-item  flex flex-col gap-5 text-center mb-6">
          <div>
            <img src="./assets/icon2.svg" className="inline h-16" />
          </div>
          <div className="text-7xl font-bold">+700</div>
          <div>
            <div className="w-full bg-secondary p-3">CLIENTES SATISFECHOS</div>
          </div>
        </div>
        <div className="estadisticas-item flex flex-col gap-5 text-center mb-6 ">
          <div>
            <img src="./assets/icon3.svg" className="inline h-16" />
          </div>
          <div className="text-7xl font-bold">+30</div>
          <div>
            <div className="w-full bg-secondary p-3">AÑOS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
