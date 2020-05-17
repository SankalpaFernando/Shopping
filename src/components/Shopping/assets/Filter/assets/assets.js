import React, { useState, Fragment } from "react";


//Exports A Button Component

export function Btn({ value, onClick, type, special }) {
  //Combine the value with its category for identification purposes
  //It didn't use though
  const returnValue = `${value};${type}`;
  //If the component has the prop of special then render a component without text
  const component = special ? (
    <div
      className="color"
      onClick={onClick}
      style={{
        backgroundColor: value,
        width: "1.8em",
        height: "1.8em",
        borderRadius: "50%",
      }}
    >
      <p style={{ display: "none" }}>{returnValue}</p>
    </div>
  ) : (
    <button onClick={onClick} value={returnValue}>
      {value}
    </button>
  );

  return <Fragment>{component}</Fragment>;
}


//Exports the Range Slider
export function Range(props) {
  //Assigning the Hooks
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);

  return (
    <div className="price">
      <input type="range" className="range" onChange={props.onChange} min={min} max={max} />
      <br />
      <select className="change" name="MinPrice" onChange={(e) => setMin(e.target.value)}>
        <option value="" disabled selected>
          Min
        </option>
        <option>100</option>
        <option>200</option>
        <option>300</option>
        <option>400</option>
      </select>
      <select className="change" name="MaxPrice" onChange={(e) => setMax(e.target.value)}>
        <option value="" disabled selected>
          Max
        </option>
        <option>1000</option>
        <option>2000</option>
        <option>3000</option>
        <option>4000</option>
      </select>
    </div>
  );
}
