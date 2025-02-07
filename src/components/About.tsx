import "../styles/global.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Us</h2>

      {/* Primeira parte: Imagem e texto sobreposto */}
      <div className="about-top">
        <div className="about-image">
          <img src="/building.jpg" alt="Business Building" />
        </div>
        <div className="about-text">
          <p>
            One of the largest consultants in the purchase of agricultural commodities in Brazil since XXXX.
          </p>
          <p>We can easily connect the buyer with the product owner.</p>
        </div>
      </div>

      {/* Texto intermediário - Correção do alinhamento */}
      <div className="about-divider-container">
        <p className="about-divider-text">
          Responsibly supplying the commodities that are
        </p>
        <p className="about-divider-span">
          fundamental to the building block of life.
        </p>
      </div>

      {/* Segunda parte: Texto e imagem lateral */}
      <div className="about-bottom">
        <p className="about-bottom-text">
          Moving goods out of a country also requires a lot of compliance paperwork. Our enterprise provides a{" "}
          <strong>complete logistics solution</strong> for your global supply chain.
        </p>
        <div className="about-secondary-image">
          <img src="/warehouse.jpg" alt="Logistics Warehouse" />
        </div>
      </div>
    </section>
  );
};

export default About;
