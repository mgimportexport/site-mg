import "../styles/global.css";
import { useLanguage } from "../context/useLanguage";

const Propose = () => {
  const { translations } = useLanguage();

  return (
    <section id="propose" className="propose">
      <h2 className="propose-title">{translations.propose_title}</h2>
      <div className="propose-grid">
        <div className="propose-card">
          <span className="propose-number">01</span>
          <h3 className="propose-number">{translations.propose_1_title}</h3>
          <p>{translations.propose_1_desc}</p>
        </div>
        <div className="propose-card">
          <span className="propose-number">02</span>
          <h3 className="propose-number">{translations.propose_2_title}</h3>
          <p>{translations.propose_2_desc}</p>
        </div>
        <div className="propose-card">
          <span className="propose-number">03</span>
          <h3 className="propose-number">{translations.propose_3_title}</h3>
          <p>{translations.propose_3_desc}</p>
        </div>
        <div className="propose-card">
          <span className="propose-number">04</span>
          <h3 className="propose-number">{translations.propose_4_title}</h3>
          <p>{translations.propose_4_desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Propose;
