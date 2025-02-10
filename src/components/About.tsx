import "../styles/global.css";
import { useLanguage } from "../context/useLanguage";

const About = () => {
  const { translations } = useLanguage();

  return (
    <section id="about" className="about">
      <h2 className="about-title">{translations.about_title}</h2>

      {/* Primeira parte: Imagem e texto abaixo */}
      <div className="about-top">
        <div className="about-image">
          <img src="/building.jpg" alt={translations.about_building_alt} />
        </div>
        <div className="about-text">
          <p>{translations.about_description_1}</p>
          <div className="about-text-2">
            <p>{translations.about_description_2}</p>
          </div>
        </div>
      </div>

      {/* Texto intermediário - Correção do alinhamento */}
      <div className="about-divider-container">
        <p className="about-divider-text">
          {translations.about_divider_1}
        </p>
        <p className="about-divider-text">
          <span className="about-divider-bold">{translations.about_divider_2}</span>
        </p>
      </div>

      {/* Segunda parte: Texto e imagem lateral */}
      <div className="about-bottom">
        <p className="about-bottom-text">
          {translations.about_bottom}
        </p>
        <div className="about-secondary-image">
          <img src="/warehouse-2.jpg" alt={translations.about_warehouse_alt} />
        </div>
      </div>
    </section>
  );
};

export default About;