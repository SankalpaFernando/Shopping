import React,{Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';



function Header(props) {
  const history = useHistory();
    return (
      <div className="header">
          <h1>Online Shopping</h1>
       
          <div className="bar">
                <input onChange={props.onClick} className="search-input" type="text" />
                <button className="cart" onClick={()=>history.push('/cart')} >View Cart</button>
          </div>
         
      </div>
    )
}

export default Header
