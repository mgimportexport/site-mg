import "../styles/global.css";

const commoditiesData = [
  { name: "Soybeans", description: "Today there is no other protein of vegetable origin with better cost benefit for the production of meats", image: "/public/soybeans.jpg" },
  { name: "Brazilian Sugar", description: "Known today as white sugar is one of the most sought after by sugar importers worldwide.", image: "/public/sugar.jpg" },
  { name: "Chicken Paw", description: "Chicken paws have a richer and deeper flavour profile.", image: "/public/chicken-paw.jpg" },
  { name: "Aluminum", description: "It has properties such as lightness, resistance and durability.", image: "/public/aluminum.jpg" },
  { name: "Wheat", description: "Grass widely cultivated for its seed, a cereal grain that is a staple food around the world.", image: "/public/wheat.jpg" },
];

const Commodities = () => {
  return (
    <section id="commodities" className="commodities">
      <h2 className="commodities-title">Commodities</h2>
      <div className="commodities-container">
        <button className="carousel-btn left-btn">{"<"}</button>
        <div className="commodities-grid">
          {commoditiesData.map((item, index) => (
            <div key={index} className="commodity-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn right-btn">{">"}</button>
      </div>
    </section>
  );
};

export default Commodities;
