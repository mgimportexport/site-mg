import { useRef } from "react";
import "../styles/global.css";

const commoditiesData = [
  { name: "Soybeans", description: "Today there is no other protein of vegetable origin with better cost benefit for the production of meats", image: "/soybeans.jpg" },
  { name: "Brazilian Sugar", description: "Known today as white sugar is one of the most sought after by sugar importers worldwide.", image: "/sugar.jpg" },
  { name: "Chicken Paw", description: "Chicken paws have a richer and deeper flavour profile.", image: "/chicken-paw.jpg" },
  { name: "Aluminum", description: "It has properties such as lightness, resistance and durability.", image: "/aluminum.jpg" },
  { name: "Wheat", description: "Grass widely cultivated for its seed, a cereal grain that is a staple food around the world.", image: "/wheat.jpg" },
  // { name: "Soybeans", description: "Today there is no other protein of vegetable origin with better cost benefit for the production of meats", image: "/soybeans.jpg" },
  // { name: "Brazilian Sugar", description: "Known today as white sugar is one of the most sought after by sugar importers worldwide.", image: "/sugar.jpg" },
  // { name: "Chicken Paw", description: "Chicken paws have a richer and deeper flavour profile.", image: "/chicken-paw.jpg" },
  // { name: "Aluminum", description: "It has properties such as lightness, resistance and durability.", image: "/aluminum.jpg" },
  // { name: "Wheat", description: "Grass widely cultivated for its seed, a cereal grain that is a staple food around the world.", image: "/wheat.jpg" },
];

const Commodities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <section id="commodities" className="commodities">
      <h2 className="commodities-title">Commodities</h2>
      <div className="commodities-container">
        <div ref={scrollRef} className="commodities-grid">
          {commoditiesData.map((item, index) => (
            <div key={index} className="commodity-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {/* Botões agora controlam o scroll da grade */}
        <div className="commodities-buttons">
          <button className="carousel-btn" onClick={scrollLeft}>{"<"}</button>
          <button className="carousel-btn" onClick={scrollRight}>{">"}</button>
        </div>
      </div>
    </section>
  );
};

export default Commodities;