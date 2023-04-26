const Contacto = () => {
  return (
    <section className="pt-24 lg:pb-24 data-dark-header" id="contacto">
      <div className="container m-auto max-w-5xl p-10 gs_reveal">
        <h1 className="text-7xl font-bold mb-12">Contacto</h1>
        <div className="contact-form">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="name" id="name" placeholder="Nombre y apellido*" required />
            <input type="text" name="city" id="city" placeholder="Ciudad" />

            <input type="email" name="email" id="email" placeholder="E-Mail*" required />
            <input type="text" name="location" id="location" placeholder="Localidad" />
            <input type="text" name="phone" id="phone" placeholder="Teléfono*" required />
            <input type="text" name="country" id="country" placeholder="País" />
          </div>
          <textarea name="message" id="message" className="w-full mt-4 block" cols="30" rows="8" placeholder="Mensaje"></textarea>
          <button type="submit" className="font-bold bg-primary text-white hover:shadow-xl transition m-0 border-0">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
