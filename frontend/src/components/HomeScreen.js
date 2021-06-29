import React from 'react'
import { Product } from './Product'
import data from './data';
import './HomeScreen.css'



export const HomeScreen = () => {
    return (
        <div>
            <div className="row-center">
                {data.map(data => (
                       <Product key={data.brand} brand={data.brand} price={data.price} />
                ))}
            </div>
        </div>
    )
}
