import "../styles/global.css";

const Propose = () => {
  return (
    <section id="propose" className="propose">
      <h2>Our Propose</h2>
      <div className="propose-grid">
        <div className="propose-card">
          <h3>Eco-Friendly Design</h3>
          <p>We are constantly working to improve our offerings and expand upon our capabilities.</p>
        </div>
        <div className="propose-card">
          <h3>24/7 Support</h3>
          <p>Our customers deserve the highest level of support.</p>
        </div>
        <div className="propose-card">
          <h3>Multilingual Functionality</h3>
          <p>We interact with people from more than just one country.</p>
        </div>
        <div className="propose-card">
          <h3>Advanced Tech</h3>
          <p>We are constantly improving our offerings and expanding our technological capabilities.</p>
        </div>
      </div>
    </section>
  );
};

export default Propose;
