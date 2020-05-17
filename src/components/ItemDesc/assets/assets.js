import React,{ useState,useEffect} from 'react'
import './assets.css';

//Btn For Quantity Raising
export function QtyBtn({callback}) {
    const [qty,setQty]=useState(0);
    const increment=()=>{
        setQty(qty+1);
    }
    const decrement=()=>{
        setQty(()=>qty===0?0:qty-1);
    }
    useEffect(()=>{
        callback(qty)
    },[qty]);
    
    return (
        <div className="btn-qty" >
            <button onClick={increment} className="operator" >+</button>
            <button className="qty">{qty}</button>
            <button onClick={decrement} className="operator" >-</button>
        </div>
    )
}

 
