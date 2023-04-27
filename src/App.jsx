import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Novadeades from "./pages/novedades/Novedades";
import Desarrollos from "./pages/desarrollos/Desarrollos";
import Proyectos from "./pages/proyectos/Proyectos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home section="home" />} />
          <Route path="/desarrollos" element={<Home section="desarrollos" />} />
          <Route path="/proyectos" element={<Home section="proyectos" />} />
          <Route path="/nosotros" element={<Home section="nosotros" />} />
          <Route path="/novedades" element={<Home section="novedades" />} />
          <Route path="/contacto" element={<Home section="contacto" />} />
          <Route path="/novedades/:id" element={<Novadeades />} />
          <Route path="/desarrollos/:id" element={<Desarrollos />} />
          <Route path="/proyectos/:id" element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
