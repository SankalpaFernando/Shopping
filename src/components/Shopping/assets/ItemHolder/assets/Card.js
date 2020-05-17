import React from 'react'
import './Card.css';


import { useHistory } from "react-router-dom";

function Card({data}) {
    
    const colors= data.availablecolors.map((color)=>
        <div className="code" style={{backgroundColor:color}}></div>
            )
            
    const history=useHistory();
    const nav= ()=>{
       history.push('/item',{id:data.id})
    }
    return (

        <div className="card" onClick={nav} >
            <h3>{data.name}</h3>
            <img src={data.img} />
    <p className="description">{data.description}</p>
            <div className="prices">
    <p className="out" >${data.outPrice}</p>
                <p>${data.realPrice}</p>
            </div>
            <div className="color-codes">
                Color
                {colors}
            </div>
        </div>
    )
}

export default Card
