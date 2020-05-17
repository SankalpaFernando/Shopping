import React from "react";
import "./Cart.css";
import Card from "./Card";
import {ShoppingData} from '../../Data.js';
import Price from "./Price.js"
function Cart() {

    const cartItem =JSON.parse (localStorage.getItem('Cart')) || [];
  const items= ShoppingData.filter(record=>cartItem.includes(record.id))
  const CardComponents =items.map(item=><Card name={item.name} id={item.id} />)


  return (
    <div className="cart">
      <div className="items">
       {CardComponents}
      </div>
      <div className="price-details">
        Prices
        <Price items={items} />
       
      </div>
    </div>
  );
}

export default Cart;
