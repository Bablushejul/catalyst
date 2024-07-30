import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Filter = () => {
  const {
    colors,
    materials,
    filterColorData,
    filterMaterialData,
    filterDependon,
  } = useContext(CartContext);

  return (
    <div className="filter-container">
      <table>
        <thead>
          <tr style={{ color: "#000000" }}>
            <th>Filter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Materials</td>
          </tr>
          {materials.map((item, idx) => (
            <tr
              key={idx}
              onClick={() => {
                filterMaterialData(item.id);
                filterDependon(item.name);
              }}
            >
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Colors</td>
          </tr>
          {colors.map((item, idx) => (
            <tr
              key={idx}
              onClick={() => {
                filterColorData(item.id);
                filterDependon(item.name);
              }}
            >
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
