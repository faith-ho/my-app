import React from 'react'
import { ProductCard } from "../Styles/ProductCard.styled"

export default function Product( {name, description, price }) {
  return (
    <ProductCard>
        <body>
            <h2>Name of Product: {name}</h2> 
            <h4>Description: {description}</h4> 
            <h4><em>Price: ${price}</em></h4>
        </body>
    </ProductCard>
  )
}
