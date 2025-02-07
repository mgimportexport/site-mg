import { useRef } from "react";
import { useLanguage } from "../context/useLanguage";
import "../styles/global.css";

const Commodities = () => {
  const { translations } = useLanguage();
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
      <h2 className="commodities-title">{translations.commodities_title}</h2>
      <div className="commodities-container">
        <div ref={scrollRef} className="commodities-grid">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {translations.commodities_data.map((item: any, index: number) => (
            <div key={index} className="commodity-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="commodities-buttons">
          <button className="carousel-btn" onClick={scrollLeft}>{"<"}</button>
          <button className="carousel-btn" onClick={scrollRight}>{">"}</button>
        </div>
      </div>
    </section>
  );
};

export default Commodities;
