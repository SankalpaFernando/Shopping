import React,{ useState} from "react";
import "./ItemDesc.css";
import { ShoppingData } from "../../Data.js";

//Importing FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

//Import UseHistory for programatically navigation
import {useHistory} from 'react-router-dom';
//Import Custom Component from Quantity Increment and Deincrement
import { QtyBtn } from "./assets/assets";

function ItemDesc(props) {
  //Set a State for quantity because we couldn't use ref inside a functional component
  const [quantity,setQuantity]=useState(0);
  //Assign the useHistory custom hook
  const history =useHistory();
    //Filter the Record according to the url
    const Data = ShoppingData.filter(
      (record) => record.id === props.location.state.id
    )[0];

  const colors = Data.availablecolors.map((color) => (
    <div className="c-option" style={{ backgroundColor: color }}></div>
  ));
  const sizes = Data.availablesizes.map((size) => (
    <div className="s-option">{size}</div>
  ));

  console.log(props);


  //Made the Callback because of ref 
  const callbackQty=(qty)=>{
      setQuantity(qty)
  }
  const addtoCart = () => {

    //Retrieving and Storing Cart Data in the Local Storage
    const cart = localStorage.getItem("Cart") || "[]";
    const cartArr = JSON.parse(cart);
    (!cartArr.includes(Data.id))  && cartArr.push(Data.id)
    localStorage.setItem("Cart", JSON.stringify(cartArr));
    alert('Item Added to The Cart,Press OK to View Cart');
    //Programmatically Navigation
    history.push('/cart');
  };

  return (
    <div className="item-card">
      <img src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />

      <div className="item-option">
        <p className="title">{Data.name}</p>
        <div className="rating">
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
        </div>
        <p className="description">{Data.description}</p>
        <p>Size</p>
        <div className="size-option">{sizes}</div>
        <p>Color</p>
        <div className="color-option">{colors}</div>
        <div className="btn-holder">
          <QtyBtn callback={callbackQty}  />

          <button className="add-cart" onClick={addtoCart}>
            <FontAwesomeIcon className="shop-cart" icon={faShoppingCart} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDesc;
