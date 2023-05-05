import axios from "axios";
import { useState } from "react";

const Contacto = () => {
  const [sended, setSended] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      to: "hola@marianoarias.soy",
      subject: "Contacto Riica",
      name: document.querySelector("#name").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#email").value,
      location: document.querySelector("#location").value,
      phone: document.querySelector("#phone").value,
      country: document.querySelector("#country").value,
      message: document.querySelector("#message").value,
    };

    axios
      .post("./assets/send_email.php", data)
      .then((response) => {
        // console.log(response);
        setSended(true);
      })
      .catch((error) => {
        // console.log(error);
        setSended(false);
      });
  };

  return (
    <section className="pt-24 lg:pb-24 data-dark-header" id="contacto">
      <div className="container m-auto max-w-5xl p-10">
        <h1 className="text-7xl font-bold mb-12">Contacto</h1>

        {sended ? (
          <div className="contact-form">
            <p className="mb-12 text-2xl font-bold">
              Gracias por contactarte con nosotros.
              <br /> En breve nos pondremos en contacto.
            </p>
          </div>
        ) : (
          <div className="contact-form">
            <form action="" onSubmit={sendEmail}>
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
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacto;
