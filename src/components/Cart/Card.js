import React from "react";
import "./Card.css";
import {useHistory} from 'react-router-dom';

function Card({name,id}) {
  const history = useHistory();
  const remove=()=>{
    const cart = localStorage.getItem("Cart") || "[]";
    const cartArr = JSON.parse(cart);
    (cartArr.includes(id))  && cartArr.pop(id)
    localStorage.setItem("Cart", JSON.stringify(cartArr));
    alert('Removed');
    history.push('/cart');
  }
  return (
    <div className="item-detail-card">
      <img src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div className="details">
  <p className="card-title">{name}</p>

        <div className="slider" style={{ display: "flex" }}>
          <p>Size</p>
          <input className="card-range" type="range" />
          <p>XL</p>
        </div>

        <div  className="slider" style={{ display: "flex" }}>
          <p>Quantity</p>
          <select className="quantity-option">
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="btn-holder">
        <button className="btn-remove" onClick={remove} >Remove</button>
        <button className="btn-remove">Add Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
