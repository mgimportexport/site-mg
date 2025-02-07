import "../styles/global.css";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "../context/useLanguage";

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-content-title">{translations.hero_title}</h1>
        <span>{translations.hero_subtitle}</span>
       <div className="whatsapp-button-container">
       <WhatsAppButton  text="" />
       </div>
      </div>
    </section>
  );
};

export default Hero;
