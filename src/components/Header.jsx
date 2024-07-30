import React, { useContext } from "react";
import Image1 from "../assets/Frame 157.jpg";
import Filter from "./Filter";
import { CartContext } from "../store/CartContext";

const Header = () => {
  const { products, colors, materials, addTocart, filteron, resetFilters } =
    useContext(CartContext);

  return (
    <div className="header-container">
      <Filter />
      {filteron}
      {filteron && (
        <button
          type="button"
          style={{ height: "30px" }}
          onClick={() => resetFilters()}
        >
          X
        </button>
      )}

      <div className="products-container">
        {products.map((item, idx) => (
          <div className="product-card" key={idx}>
            <div className="product-image">
              <img src={Image1} alt="img" />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <div className="product-info">
                {colors.map((color, index) => (
                  <span key={index} className="product-color">
                    {item.colorId === color.id ? color.name.toUpperCase() : ""}
                  </span>
                ))}
                {materials.map((material, index) => (
                  <span key={index} className="product-material">
                    {item.materialId === material.id ? material.name : ""}
                  </span>
                ))}
                <p className="product-price">
                  {item.price}
                  <button type="button" onClick={() => addTocart(item)}>
                    Add to cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
