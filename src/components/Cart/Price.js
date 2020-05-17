import React from "react";
import "./Price.css";

function Price({items}) {
  let total=0;
  items.forEach((item) => {
    total+=parseInt(item.realPrice)
  })
  const prices= items.map((item=>( <div className="row">
  <div className="item">{item.name}</div>
<div className="item">${item.realPrice}</div>
</div>)))

  return (
    <React.Fragment>
       <div className="price">
      <div className="table">
      {prices}
      </div>
    </div>
  <p>Total: ${total}</p>
    </React.Fragment>
   
  );
}

export default Price;
