import React from 'react'
import { Product } from './Product'
import items from './items';
import './HomeScreen.css'



export const HomeScreen = () => {
    return (
        <div>
            <div className="row-center">
                {items.map(item => (
                       <Product key={item.brand} brand={item.brand} price={item.price} />
                ))}
            </div>
        </div>
    )
}
