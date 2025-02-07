import "../styles/global.css";

const Propose = () => {
  return (
    <section id="propose" className="propose">
      <h2 className="propose-title">Our Propose</h2>
      <div className="propose-grid">
        <div className="propose-card">
          <span className="propose-number">01</span>
          <h3 className="propose-number">Eco-Friendly Design</h3>
          <p>
            We would not be who we are without our eco-friendly design, which is at the core of our strategy.
            We are constantly working to improve our offerings and expand upon our capabilities when it comes to 
            design and production. Get in touch to learn more.
          </p>
        </div>
        <div className="propose-card">
          <span className="propose-number">02</span>
          <h3 className="propose-number">24/7 Support</h3>
          <p>
            Our customers deserve the highest level of support, and we work tirelessly to maintain those standards.
            When you choose to work with our team, know that you are consistently choosing quality and excellence. 
            Customer service is at the heart of everything that we do.
          </p>
        </div>
        <div className="propose-card">
          <span className="propose-number">03</span>
          <h3 className="propose-number">Multilingual Functionality</h3>
          <p className="propose-content">
            In today's globalized world, chances are you are interacting with people from more than just one country. 
            This is where our multilingual functionality comes into play. Take advantage of this unique capability to expand your reach.
          </p>
        </div>
        <div className="propose-card">
          <span className="propose-number">04</span>
          <h3 className="propose-number">Advanced Tech</h3>
          <p>
            We are constantly working to improve our offerings and expand upon our technological capabilities.
            Our expert team of professionals is passionate about developing the most advanced tech on the market.
            Ready to experience the future? Get in touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Propose;
