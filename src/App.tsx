import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Propose from "./components/Propose";
import Commodities from "./components/Commodities";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="about" style={{ paddingTop: "100px" }}>
        <About />
      </section>
      <section id="propose" style={{ paddingTop: "100px" }}>
        <Propose />
      </section>
      <section id="commodities" style={{ paddingTop: "100px" }}>
        <Commodities />
      </section>
      <section id="contact" style={{ paddingTop: "100px" }}>
        <Contact />
      </section>


    </>
  );
};

export default App;
