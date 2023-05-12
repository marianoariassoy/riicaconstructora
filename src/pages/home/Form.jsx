import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Error = () => {
  return <div className="text-sm text-primary">*Debe completar este campo</div>;
};

const Form = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    const sender = {
      to: "hola@marianoarias.soy",
      from: "no-reply@riica.com.ar",
      from_name: "Riica Construcciones",
      subject: "Contacto",
    };

    axios
      .post("https://imltenis.com.ar/riicabackend/send-email.php", { ...data, ...sender })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  const text = {
    es: {
      name: "Nombre y apellido*",
      city: "Ciudad*",
      email: "E-Mail*",
      location: "Localidad",
      phone: "Teléfono*",
      country: "País",
      message: "Mensaje",
      send: "Enviar",
      thanks: `¡Su mensaje fue enviado! Gracias por contactarte con nosotros.`,
      error: "Se produjo un error al enviar el mensaje :-(",
    },
  };

  return (
    <>
      {error ? (
        <span className="text-2xl font-bold">{text["es"].error}</span>
      ) : sended ? (
        <span className="text-3xl font-bold">{text["es"].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input className="w-full" placeholder={text["es"].name} {...register("name", { required: true })} />
              {errors.name && <Error />}
            </div>
            <div>
              <input className="w-full" placeholder={text["es"].city} {...register("city")} />
            </div>
            <div>
              <input className="w-full" placeholder={text["es"].email} {...register("email", { required: true })} />
              {errors.email && <Error />}
            </div>
            <div>
              <input className="w-full" placeholder={text["es"].location} {...register("location")} />
            </div>
            <div>
              <input className="w-full" placeholder={text["es"].phone} {...register("phone", { required: true })} />
              {errors.phone && <Error />}
            </div>
            <div>
              <input className="w-full" placeholder={text["es"].country} {...register("country")} />
            </div>
          </div>
          <textarea className="w-full mt-4 block" cols="30" rows="8" placeholder={text["es"].message} {...register("message")} />

          {sending ? (
            <BeatLoader className="mt-6" />
          ) : (
            <button type="submit" className="font-bold bg-primary text-white hover:shadow-xl transition m-0 border-0">
              Enviar
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default Form;
