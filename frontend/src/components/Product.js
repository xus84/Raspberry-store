import React from 'react';
import './Product.css';



export const Product = ({id,brand, price, quantity }) => {
    
    return (
        <div className="product">
          <span>{id}</span>
          <div className="brand">{brand}</div>
          <div>${price}</div>
          <span>{quantity}</span>
        </div>
    )
}
