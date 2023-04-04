//Components
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
