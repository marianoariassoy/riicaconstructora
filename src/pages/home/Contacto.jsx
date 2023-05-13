import Form from "./Form";

const Contacto = () => {
  return (
    <section className="pt-24 lg:pb-24 data-dark-header" id="contacto">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-7xl font-bold mb-12">Contacto</h1>
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
