import React from "react";
import "./Filter.css";

//Importing Assets Components
import { Btn, Range } from "./assets/assets";

function Filter(props) {
  const makeReq = (e) => {
    props.onClick(e);
  };
  return (
    <div className="filter-panel">
      <h2>Filter</h2>

      <h3>Categories</h3>
      <div className="categories">
        <Btn onClick={makeReq} value="All" type="Category" />
        <Btn onClick={makeReq} value="Men" type="Category" />
        <Btn onClick={makeReq} value="Women" type="Category" />
        <Btn onClick={makeReq} value="Kids" type="Category" />
      </div>

      <Range onChange={makeReq} />
      <h3>Brands</h3>
      <div className="brands">
        <Btn onClick={makeReq} value="Addidas" type="Brand" />
        <Btn onClick={makeReq} value="Panda" type="Brand" />
        <Btn onClick={makeReq} value="Reebok" type="Brand" />
      </div>
      <h3>Colors</h3>
      <div className="colors">
        <Btn onClick={makeReq} value="#000" special={true} type="Color" />
        <Btn onClick={makeReq} value="#0f0" special={true} type="Color" />
        <Btn onClick={makeReq} value="#00f" special={true} type="Color" />
      </div>
      <h3>Sizes</h3>
      <div className="sizes">
        <Btn onClick={makeReq} value="XL" type="Size" />
        <Btn onClick={makeReq} value="L" type="Size" />
        <Btn onClick={makeReq} value="M" type="Size" />
      </div>
    </div>
  );
}

export default Filter;
