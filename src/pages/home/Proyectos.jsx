const Proyectos = () => {
  return (
    <section className="h-screen relative bg-secondary" id="proyectos">
      <a href="#" className="absolute top-1/2 left-10 svg-hover">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </a>
      <a href="#" className="absolute top-1/2 right-10 svg-hover">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="40">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </a>

      <article
        className="proyectos-item h-full bg-cover bg-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1643447727844-1e2e31544237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")` }}
      >
        <div className="proyectos-container text-white h-full w-full flex lg:items-center justify-center bg-opacity-60 bg-black p-10">
          <div className="container max-w-4xl gs_reveal pt-24 pb-24">
            <h1 className="text-2xl">Proyectos</h1>
            <h2 className="text-7xl font-bold mb-8 lg:mb-20">Terminados</h2>
            <div className="w-full lg:flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Adolfo Güemes 367</h2>
              </div>
              <div className="lg:flex justify-end">
                <a href="#" className="font-bold bg-white text-sm text-primary btn hover:shadow-xl transition">
                  VER MÁS
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Proyectos;
