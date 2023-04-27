import BeatLoader from "react-spinners/BeatLoader";
const Loader = () => {
  return (
    <section className="h-screen w-screen bg-primary flex items-center justify-center">
      <BeatLoader color="#FFF" />
    </section>
  );
};

export default Loader;
