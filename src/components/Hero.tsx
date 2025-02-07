import "../styles/global.css";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-content-title">Filling </h1>
        <span>several containers every year</span>
        <WhatsAppButton text="" />
      </div>
    </section>
  );
};

export default Hero;
