import React from 'react'
import Card from './assets/Card';
import './ItemsHolder.css';

function ItemsHolder(props) {
    //Mapping Card components with the result
    const component =props.Data.map(item =><Card key={item.id} data={item}  />)
    return (
        <div className="item-panel">
           {component}
        </div>
    )
}


export default ItemsHolder
