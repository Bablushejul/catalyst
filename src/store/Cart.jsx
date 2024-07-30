import React, { useContext } from "react";
import Image1 from "../assets/Frame 157.jpg";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { colors, materials, cartItems, removeFromCart } =
    useContext(CartContext);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {cartItems.map((item, idx) => (
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  height: "150px",
                  width: "431px",
                  margin: "20px",
                  display: "flex",
                }}
                key={idx}
              >
                <img
                  src={Image1}
                  alt="img"
                  style={{ height: "100%", width: "150px" }}
                />
                <div className="product-details" style={{ marginLeft: "20px" }}>
                  <p>{item.name}</p>
                  <div className="product-info">
                    {colors.map((color, index) => (
                      <span key={index} className="product-color">
                        {item.colorId === color.id
                          ? color.name.toUpperCase()
                          : ""}
                      </span>
                    ))}
                    {materials.map((material, index) => (
                      <span key={index} className="product-material">
                        {item.materialId === material.id ? material.name : ""}
                      </span>
                    ))}
                    <span className="product-material">
                      Quantity {item.quantity}
                    </span>{" "}
                    <span className="product-material">Price {item.price}</span>
                    <button type="button" onClick={() => removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
