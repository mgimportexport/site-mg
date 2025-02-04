import "../styles/global.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Us</h2>

      {/* Primeira seção: imagem grande com texto sobreposto */}
      <div className="about-top">
        <div className="about-image">
          <img src="/public/building.jpg" alt="Building" />
        </div>
        <div className="about-text">
          <p>
            One of the largest consultants in the purchase of agricultural
            commodities in Brazil since XXXX.
          </p>
          <p>We can easily connect the buyer with the product owner.</p>
        </div>
      </div>
      {/* Segunda seção: imagem grande com texto sobreposto */}
      <div >
      
        <div >
          <p>
            One of the largest consultants in the purchase of agricultural
           
          </p>
          <p>We can easily connect the buyer with the product owner.</p>
        </div>
      </div>
      {/* Tericeira seção: texto e imagem lado a lado */}
      <div className="about-bottom">
        <p className="about-bottom-text">
          Responsibly supplying the commodities that are{" "}
          <strong>fundamental to the building block of life.</strong>
        </p>
        <div className="about-secondary-image">
          <img src="/public/warehouse.jpg" alt="Warehouse" />
        </div>
      </div>
    </section>
  );
};

export default About;
