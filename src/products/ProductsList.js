import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = (props) => {
  return (
    <ul>
        {props.productsArr.map((item, index) =>{
         return   <ProductItem title={item.title} price={item.price} image={item.imageUrl} />
        })}
    </ul>
  )
  
}

export default ProductsList
