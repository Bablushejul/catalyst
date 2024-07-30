import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Cart from "../store/Cart";

const Navbar = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <p
        style={{
          fontFamily: "Nunito Sans",
          fontSize: "18px",
          fontWeight: 800,
          lineHeight: "24.55px",
          color: "#F8F8F8",
        }}
      >
        RIGHTFIT.COM
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>All Products</p>
        <p>Featured Products</p>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // style={{ marginTop: "20px" ,cursor:"pointer"}}
            data-toggle="modal"
            data-target="#exampleModal"
            aria-label="Cart"
          >
            <path
              d="M16 16C16.5304 16 17.0391 16.2107 17.4142 16.5858C17.7893 16.9609 18 17.4696 18 18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20C15.4696 20 14.9609 19.7893 14.5858 19.4142C14.2107 19.0391 14 18.5304 14 18C14 16.89 14.89 16 16 16ZM0 0H3.27L4.21 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.17 19.95 3.34 19.88 3.5L16.3 9.97C15.96 10.58 15.3 11 14.55 11H7.1L6.2 12.63L6.17 12.75C6.17 12.8163 6.19634 12.8799 6.24322 12.9268C6.29011 12.9737 6.3537 13 6.42 13H18V15H6C5.46957 15 4.96086 14.7893 4.58579 14.4142C4.21071 14.0391 4 13.5304 4 13C4 12.65 4.09 12.32 4.24 12.04L5.6 9.59L2 2H0V0ZM6 16C6.53043 16 7.03914 16.2107 7.41421 16.5858C7.78929 16.9609 8 17.4696 8 18C8 18.5304 7.78929 19.0391 7.41421 19.4142C7.03914 19.7893 6.53043 20 6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18C4 16.89 4.89 16 6 16ZM15 9L17.78 4H5.14L7.5 9H15Z"
              fill="#F8F8F8"
            />
          </svg>
        </button>

        <p>{totalQuantity}</p>
      </div>
      <Cart />
    </div>
  );
};

export default Navbar;
