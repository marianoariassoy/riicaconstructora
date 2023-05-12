import axios from "axios";
import { useState } from "react";
import Form from "./Form";

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
      .then(() => {
        setSended(true);
      })
      .catch(() => {
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
            <Form />
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacto;
