import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Authorization, HOST_API } from "../utils/Config";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalproducts, setTotaProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [filteron, setFilterOn] = useState("");

  console.log(cartItems);

  const addTocart = (item) => {
    const index = cartItems.findIndex((val) => val.id === item.id);
    if (index === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItems = cartItems.map((cartItem, idx) =>
        idx === index
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };
  const removeFromCart = (item) => {
    const index = cartItems.findIndex((val) => val.id === item.id);

    if (index !== -1) {
      const updatedCartItems = cartItems.reduce((acc, cartItem, idx) => {
        if (idx === index) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, []);

      setCartItems(updatedCartItems);
    }
  };

  const filterColorData = (id) => {
    const data = [...totalproducts]; // Assuming totalproducts is the unfiltered list of products
    const filteredItems = data.filter((val) => val.colorId === id);
    setProducts(filteredItems);
  };

  const filterMaterialData = (id) => {
    const data = [...totalproducts]; // Assuming totalproducts is the unfiltered list of products
    const filteredItems = data.filter((val) => val.materialId === id);
    setProducts(filteredItems);
  };

  const filterDependon = (item) => {
    setFilterOn(item);
  };

  const resetFilters = () => {
    setProducts(totalproducts); 
    setFilterOn(""); 
  };

  const fetchColors = async () => {
    try {
      const res = await axios.get(`${HOST_API}/colors`, Authorization);
      console.log(res.data.colors);
      setColors(res.data.colors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    setTotalQuantity(data);
  }, [cartItems]);

  const fetchMaterials = async () => {
    try {
      const res = await axios.get(`${HOST_API}/material`, Authorization);
      console.log(res.data.material);
      setMaterials(res.data.material);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${HOST_API}/products`, Authorization);
      setProducts(res.data.products);
      setTotaProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchColors();
  }, []);
  useEffect(() => {
    fetchMaterials();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        colors,
        materials,
        products,
        addTocart,
        totalQuantity,
        cartItems,
        removeFromCart,
        filterColorData,
        filterMaterialData,
        filterDependon,
        filteron,
        resetFilters,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
