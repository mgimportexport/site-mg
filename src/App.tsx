import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Propose from "./components/Propose";
import Commodities from "./components/Commodities";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      {/* Define o título e o ícone da aba */}
      <Helmet>
        <title>MG</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Helmet>

      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="propose">
        <Propose />
      </section>
      <section id="commodities">
        <Commodities />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
