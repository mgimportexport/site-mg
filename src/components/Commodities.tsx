import "../styles/global.css";

const commoditiesData = [
  { name: "Soybeans", description: "A vegetable protein with cost benefits for meat production.", image: "/public/soybeans.jpg" },
  { name: "Brazilian Sugar", description: "One of the most sought-after sugar products worldwide.", image: "/public/sugar.jpg" },
  { name: "Chicken Paw", description: "Chicken paws have a rich and deep flavor profile.", image: "/public/chicken-paw.jpg" },
  { name: "Aluminum", description: "Has properties such as lightness, resistance, and durability.", image: "/public/aluminum.jpg" },
  { name: "Wheat", description: "A cereal grain cultivated worldwide.", image: "/public/wheat.jpg" },
];

const Commodities = () => {
  return (
    <section id="commodities" className="commodities">
      <h2>Commodities</h2>
      <div className="commodities-grid">
        {commoditiesData.map((item, index) => (
          <div key={index} className="commodity-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commodities;
